use yew::function_component;

use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct PictureProps {
    pub url: AttrValue,
    pub alt_text: AttrValue,

    #[prop_or_default]
    pub width: Option<usize>,
    #[prop_or_default]
    pub height: Option<usize>,

    #[prop_or_default]
    pub sources: Vec<PictureSource>,
}

#[derive(PartialEq)]
pub struct PictureSource {
    pub src_set: AttrValue,
    pub mime_type: AttrValue,
}

#[function_component]
pub fn Picture(props: &PictureProps) -> Html {
    html! {
        <picture>
            {
                props.sources.iter().map(|src| {
                    html! {
                        <source srcset={src.src_set.clone()} _type={src.mime_type.clone()}/>
                    }
                }).collect::<Html>()
            }

            <img
                src={props.url.clone()}
                alt={props.alt_text.clone()}
                width={props.width.map(|w| w.to_string()).unwrap_or_default()}
                height={props.height.map(|h| h.to_string()).unwrap_or_default()}/>
        </picture>
    }
}
