use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct MedamaProps {
    pub server: AttrValue,
}

#[function_component]
pub fn Medama(props: &MedamaProps) -> Html {
    gloo::utils::document()
        .head()
        .map(|head| {
            create_portal(html! {
                <script defer=true src={format!("https://{}/script.js", props.server)} />
            }, head.into(),
        )
    })
    .unwrap_or_else(|| html! {})
}