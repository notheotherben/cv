use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct GoogleAnalyticsProps {
    pub tracking_id: AttrValue,
}

#[function_component]
pub fn GoogleAnalytics(props: &GoogleAnalyticsProps) -> Html {
    gloo::utils::document()
        .head()
        .map(|head| {
            let script = format!(r#"
                window.dataLayer = window.dataLayer || [];
                function gtag(){{dataLayer.push(arguments);}}
                gtag('js', new Date());
    
                gtag('config', '{}');
            "#, props.tracking_id);

            create_portal(
                html! {
                    <>
                        <script async=true src={format!("https://www.googletagmanager.com/gtag/js?id={}", props.tracking_id)}/>
                        <script>
                            {script}
                        </script>
                    </>
                },
                head.into(),
            )
        })
        .unwrap_or_else(|| html! {})
}