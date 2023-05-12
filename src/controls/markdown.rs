use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct MarkdownProps {
    pub content: AttrValue,
}

#[function_component]
pub fn Markdown(props: &MarkdownProps) -> Html {
    Html::from_html_unchecked(markdown::to_html(props.content.as_str()).into())
}
