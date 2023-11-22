use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct LookingForProps {
    pub items: Vec<LookingForEntry>,
}

impl From<&crate::config::Config> for LookingForProps {
    fn from(value: &crate::config::Config) -> Self {
        Self {
            items: value
                .looking_for
                .iter()
                .map(|item| LookingForEntry {
                    title: item.title.clone().into(),
                    short: item.short.clone().into(),
                    long: item.long.clone().into(),
                })
                .collect(),
        }
    }
}

#[derive(Properties, PartialEq, Clone)]
pub struct LookingForEntry {
    pub title: AttrValue,
    pub short: AttrValue,
    pub long: AttrValue,
}

#[function_component]
pub fn LookingFor(props: &LookingForProps) -> Html {
    html! {
        <div class="looking-for">
            {props.items.iter().map(|item| html!{
                <div>
                    <h3>{&item.title}</h3>

                    <div class="print">
                        <crate::controls::Markdown content={&item.short}/>
                    </div>

                    <div class="noprint">
                        <crate::controls::Markdown content={&item.long}/>
                    </div>
                </div>
            }).collect::<Html>()}
        </div>
    }
}