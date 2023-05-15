use std::time::Duration;

use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct AdjectiveProps {
    #[prop_or_default]
    pub adjectives: Vec<AttrValue>,
}

pub struct Adjectives {
    delay_millis: u64,
    options: Vec<AttrValue>,

    index: usize,
    flipped: bool,

    first: AttrValue,
    second: AttrValue,
}

impl Component for Adjectives {
    type Message = ();
    type Properties = AdjectiveProps;

    fn create(ctx: &Context<Self>) -> Self {
        Self {
            index: 0,
            flipped: true,
            delay_millis: 2000,
            first: ctx.props().adjectives.first().unwrap_or(&"Engineer".into()).clone(),
            second: ctx.props().adjectives.first().unwrap_or(&"Leader".into()).clone(),
            options: ctx.props().adjectives.clone(),
        }
    }

    fn update(&mut self, ctx: &Context<Self>, _msg: Self::Message) -> bool {
        self.index = (self.index + 1) % self.options.len();
        let next = self.options[self.index].clone();

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
            <div class="adjectives">
                <span class={classes!(if self.flipped { None } else { Some("active") })}>{self.first.clone()}</span>
                <span class={classes!(if self.flipped { Some("active") } else { None })}>{self.second.clone()}</span>
            </div>
        }
    }

    fn rendered(&mut self, ctx: &Context<Self>, first_render: bool) {
        if first_render {
            ctx.link().send_message(());
        }
    }
}
