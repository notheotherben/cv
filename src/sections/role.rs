use crate::controls;
use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct RoleProps {
    pub organization: AttrValue,
    pub role: AttrValue,
    pub location: AttrValue,

    pub start_date: AttrValue,
    #[prop_or_default]
    pub end_date: Option<AttrValue>,

    pub tldr: AttrValue,
    pub description: AttrValue,
    pub impact: Vec<AttrValue>,
}

impl From<&crate::config::RoleConfig> for RoleProps {
    fn from(value: &crate::config::RoleConfig) -> Self {
        Self {
            organization: value.organization.clone().into(),
            role: value.role.clone().into(),
            location: value.location.clone().into(),
            start_date: value.start_date.clone().into(),
            end_date: value.end_date.clone().map(|x| x.into()),
            tldr: value.description.short.clone().into(),
            description: value.description.long.clone().into(),
            impact: value
                .impact
                .iter()
                .map(|x| x.clone().into())
                .collect::<Vec<AttrValue>>(),
        }
    }
}

#[function_component]
pub fn Role(props: &RoleProps) -> Html {
    html! {
        <article class="role">
            <div class="role-summary">
                <hgroup>
                    <h3>{props.organization.clone()}</h3>
                    <p class="subtitle">{format!("{} to {}", props.start_date, props.end_date.clone().unwrap_or("present".into()))}</p>
                </hgroup>

                <address>
                    <strong>{&props.role}</strong>
                    <br/>
                    {&props.location}
                </address>

                <controls::Tldr content={&props.tldr}/>
            </div>

            <div class="role-details">
                <div class="role-description">
                    <h4>{if props.end_date.is_some() { format!("What I did at {}", props.organization) } else { format!("What I do at {}", props.organization) }}</h4>
                    <controls::Markdown content={&props.description}/>
                </div>

                <div class="role-impact">
                    <h4>{"Notable impact"}</h4>
                    <ul>
                        {
                            props.impact.iter().map(|impact| {
                                html! {
                                    <li>
                                        <controls::Markdown content={impact.clone()}/>
                                    </li>
                                }
                            }).collect::<Html>()
                        }
                    </ul>
                </div>
            </div>


        </article>
    }
}
