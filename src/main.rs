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

            if let Some(medama) = config.tracking.medama.as_ref() {
                <plugins::Medama server={medama.clone()}/>
            }

            if let Some(sentry) = config.tracking.sentry.as_ref() {
                <plugins::Sentry dsn_key={sentry.clone()}/>
            }

            <sections::Header ..sections::HeaderProps::from(&config)/>

            <main>
                <sections::Intro ..sections::IntroProps::from(&config)/>

                <h2 class="section-header">{"I'm looking for..."}</h2>

                <sections::LookingFor ..sections::LookingForProps::from(&config)/>

                <div class="roles">
                    <h2 class="section-header">{"I've worked at..."}</h2>

                    {
                        config.roles.iter().map(|role| {
                            html!{
                                <sections::Role ..sections::RoleProps::from(role)/>
                            }
                        }).collect::<Html>()
                    }
                </div>
            </main>

            <footer>
                <controls::Quotes ..controls::QuotesProps::from(&config)/>
            </footer>
        </>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
