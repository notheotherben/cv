use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct SentryProps {
    pub dsn_key: AttrValue,
}

#[function_component]
pub fn Sentry(props: &SentryProps) -> Html {
    gloo::utils::document()
        .head()
        .map(|head| {
            let init_script = format!(r#"
                window.SENTRY_RELEASE = {{
                    id: "{}"
                }}
            "#, env!("VERGEN_GIT_DESCRIBE"));
            create_portal(
                html! {
                    <>
                        <script>
                            {init_script}
                        </script>
                        <script async=true src={format!("https://js.sentry-cdn.com/{}.min.js", props.dsn_key)} crossorigin="anonymous" />
                    </>
                },
                head.into(),
            )
        })
        .unwrap_or_else(|| html! {})
}