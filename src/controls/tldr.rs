use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct TldrProps {
    pub content: AttrValue,
}

#[function_component]
pub fn Tldr(props: &TldrProps) -> Html {
    html! {
        <div class="tldr">
            <crate::controls::Markdown content={props.content.clone()}/>
        </div>
    }
}
