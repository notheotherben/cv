use yew::prelude::*;

use crate::controls;

#[derive(Properties, PartialEq)]
pub struct HeaderProps {
    pub name: AttrValue,

    pub role: AttrValue,

    #[prop_or_default]
    pub adjectives: Vec<AttrValue>,
}

impl From<&crate::config::Config> for HeaderProps {
    fn from(value: &crate::config::Config) -> Self {
        Self {
            name: value.name.clone().into(),
            role: value.role.clone().into(),
            adjectives: value
                .adjectives
                .iter()
                .map(|x| x.clone().into())
                .collect::<Vec<AttrValue>>(),
        }
    }
}

#[function_component]
pub fn Header(props: &HeaderProps) -> Html {
    html! {
        <header>
            <hgroup>
                <h1>
                    {props.name.clone()}
                </h1>
                <span class="subtitle">
                    {"Curriculum Vitae"}
                </span>
            </hgroup>

            <div>
                {props.role.clone()}
                <controls::Adjectives adjectives={props.adjectives.clone()}/>
            </div>
        </header>
    }
}
