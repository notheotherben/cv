use crate::controls;
use std::collections::HashMap;

use yew::prelude::*;

#[function_component]
pub fn Intro(props: &IntroProps) -> Html {
    html! {
        <div class="intro">
            <Details ..props.clone()/>
            <Introduction ..props.clone()/>
        </div>
    }
}

#[derive(Properties, PartialEq, Clone)]
pub struct IntroProps {
    pub short_bio: AttrValue,
    pub long_bio: AttrValue,

    pub avatar_alt_text: AttrValue,

    #[prop_or_default]
    pub extra_info: HashMap<AttrValue, AttrValue>,

    #[prop_or_default]
    pub social_links: Vec<IntroSocialLink>,
}

impl From<&crate::config::Config> for IntroProps {
    fn from(value: &crate::config::Config) -> Self {
        Self {
            short_bio: value.biography.short.clone().into(),
            long_bio: value.biography.long.clone().into(),

            avatar_alt_text: value.avatar.alt_text.clone().into(),

            extra_info: value
                .details
                .iter()
                .map(|(key, val)| (key.clone().into(), val.clone().into()))
                .collect::<HashMap<AttrValue, AttrValue>>(),
            social_links: value.contact.iter().map(|link| link.into()).collect(),
        }
    }
}

#[derive(PartialEq, Clone)]
pub struct IntroSocialLink {
    pub kind: AttrValue,
    pub url: AttrValue,
    pub text: AttrValue,
}

impl From<&crate::config::ContactConfig> for IntroSocialLink {
    fn from(value: &crate::config::ContactConfig) -> Self {
        Self {
            kind: value.kind.clone().into(),
            text: value.text.clone().into(),
            url: value.url.clone().into(),
        }
    }
}

#[function_component]
pub fn Details(props: &IntroProps) -> Html {
    html! {
        <div class="intro-details">
            <controls::Picture url="/assets/avatar.jpg" alt_text={&props.avatar_alt_text} sources={vec![
                controls::PictureSource { src_set: "/assets/avatar.webp".into(), mime_type: "image/webp".into() }
            ]} width={200} height={200} />

            <h2>{"Benjamin Pannell"}</h2>

            <controls::Markdown content={&props.short_bio}/>

            <dl>
                {
                    props.extra_info.iter().map(|(key, val)| {
                        html! {
                            <>
                                <dt>{key}</dt>
                                <dd>{val}</dd>
                            </>
                        }
                    }).collect::<Html>()
                }
            </dl>

            <address>
                <p>
                    <strong>{"Contact Me"}</strong>
                    {
                        props.social_links.iter().filter(|link| link.kind == "text").map(|link| {
                            html! {
                                <>
                                    <br/>
                                    <a href={&link.url} target="_blank" rel="noreferrer" data-kind={&link.kind}>
                                        {&link.text}
                                    </a>
                                </>
                            }
                        }).collect::<Html>()
                    }
                </p>

                {
                    props.social_links.iter().filter(|link| link.kind != "text").map(|link| {
                        html! {
                            <a href={link.url.clone()} target="_blank" rel="noreferrer" alt={&link.text} data-kind={&link.kind}>
                                <i class={format!("icon-{}", link.kind)}/>
                            </a>
                        }
                    }).collect::<Html>()
                }
            </address>
        </div>
    }
}

#[function_component]
pub fn Introduction(props: &IntroProps) -> Html {
    html! {
        <div class="intro-introduction">
            <hgroup>
                <h2>{"Introduction"}</h2>
                <p class="subtitle">{"A quick showcase of who I am and what I do."}</p>
            </hgroup>

            <controls::Markdown content={&props.long_bio}/>
        </div>
    }
}
