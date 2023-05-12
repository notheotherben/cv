use yew::prelude::*;

#[derive(Properties, PartialEq)]
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
