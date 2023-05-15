use std::time::Duration;

use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct QuoteProps {
    pub quote: AttrValue,
    pub author: AttrValue,
}

#[function_component]
pub fn Quote(props: &QuoteProps) -> Html {
    html! {
        <figure class="quote">
            <blockquote>
                {props.quote.clone()}
            </blockquote>
            <figcaption>
                {props.author.clone()}
            </figcaption>
        </figure>
    }
}

#[derive(Properties, PartialEq, Clone)]
pub struct QuotesProps {
    pub quotes: Vec<QuoteProps>,
    #[prop_or(10000)]
    pub delay: u64,
}

impl From<&crate::Config> for QuotesProps {
    fn from(value: &crate::Config) -> Self {
        Self {
            delay: 10000,
            quotes: value
                .quotes
                .iter()
                .map(|quote| QuoteProps {
                    quote: quote.quote.clone().into(),
                    author: quote.author.clone().into(),
                }).collect(),
        }
    }
}

pub struct Quotes {
    quotes: Vec<QuoteProps>,
    delay_millis: u64,

    index: usize,
    flipped: bool,

    first: QuoteProps,
    second: QuoteProps,
}

impl Component for Quotes {
    type Message = ();

    type Properties = QuotesProps;

    fn create(ctx: &Context<Self>) -> Self {
        let default_quote = QuoteProps {
            author: "Nelson Mandela".into(),
            quote: "Education is the most powerful weapon which you can use to change the world.".into(),
        };

        Self {
            index: 0,
            delay_millis: ctx.props().delay,
            flipped: true,
            quotes: ctx.props().quotes.clone(),
            first: ctx.props().quotes.first().unwrap_or(&default_quote).clone(),
            second: ctx.props().quotes.first().unwrap_or(&default_quote).clone(),
        }
    }

    fn update(&mut self, ctx: &Context<Self>, _msg: Self::Message) -> bool {
        self.index = (self.index + 1) % self.quotes.len();
        let next = self.quotes[self.index].clone();

        if self.flipped {
            self.flipped = false;
            self.first = next;
        } else {
            self.flipped = true;
            self.second = next
        }

        let delay_millis = self.delay_millis;

        ctx.link().send_future(async move {
            gloo::timers::future::sleep(Duration::from_millis(delay_millis)).await;
        });

        true
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div class="quotes">
                <div class={classes!(if self.flipped { None } else { Some("active") })}>
                    <Quote  quote={self.first.quote.clone()} author={self.first.author.clone()} />
                </div>
                <div class={classes!(if self.flipped { Some("active") } else { None })}>
                    <Quote quote={self.second.quote.clone()} author={self.second.author.clone()} />
                </div>
            </div>
        }
    }

    fn rendered(&mut self, ctx: &Context<Self>, first_render: bool) {
        if first_render {
            ctx.link().send_message(());
        }
    }
}