use yew::prelude::*;

mod config;
mod controls;
mod plugins;
mod sections;

use config::Config;

#[function_component]
fn App() -> Html {
    let config = Config::default();

    html! {
        <>
            if let Some(google_analytics) = config.tracking.google_analytics.as_ref() {
                <plugins::GoogleAnalytics tracking_id={google_analytics.clone()}/>
            }

            if let Some(sentry) = config.tracking.sentry.as_ref() {
                <plugins::Sentry dsn_key={sentry.clone()}/>
            }

            <sections::Header ..sections::HeaderProps::from(&config)/>

            <main>
                <sections::Intro ..sections::IntroProps::from(&config)/>

                {
                    config.roles.iter().map(|role| {
                        html!{
                            <sections::Role ..sections::RoleProps::from(role)/>
                        }
                    }).collect::<Html>()
                }
            </main>

            <footer>
                <controls::Quote author="USAF SR-71 Base - Kadena, Japan" quote="As I fly through the valley of the shadow of death, I shall fear no evil. For I am at 80,000 feet and climbing."/>
            </footer>
        </>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
