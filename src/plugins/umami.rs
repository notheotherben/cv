use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct UmamiProps {
    pub server: AttrValue,
    pub website_id: AttrValue,
}

#[function_component]
pub fn Umami(props: &UmamiProps) -> Html {
    gloo::utils::document()
        .head()
        .map(|head| {
            create_portal(html! {
                <script defer=true src={format!("https://{}/script.js", props.server)} data-website-id={props.website_id.clone()} />
            }, head.into(),
        )
    })
    .unwrap_or_else(|| html! {})
}