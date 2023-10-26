use rust_embed::RustEmbed;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(RustEmbed)]
#[folder = "src"]
#[include = "config.yml"]
struct ConfigFile;

#[derive(Clone, Deserialize, Serialize)]
pub struct Config {
    pub name: String,
    pub role: String,

    pub tracking: TrackingConfig,

    pub adjectives: Vec<String>,

    #[serde(default)]
    pub quotes: Vec<QuoteConfig>,

    pub details: HashMap<String, String>,
    pub avatar: AvatarConfig,

    pub contact: Vec<ContactConfig>,

    pub biography: DescriptionConfig,
    pub roles: Vec<RoleConfig>,

    #[serde(rename = "looking-for")]
    pub looking_for: Vec<DescriptionConfig>,
}

impl Default for Config {
    fn default() -> Self {
        let file = ConfigFile::get("config.yml").unwrap();
        serde_yaml::from_slice(&file.data).unwrap()
    }
}

#[derive(Clone, Deserialize, Serialize)]
pub struct TrackingConfig {
    #[serde(rename = "google-analytics")]
    pub google_analytics: Option<String>,
    pub sentry: Option<String>,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct AvatarConfig {
    #[serde(rename = "alt-text")]
    pub alt_text: String,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct ContactConfig {
    pub kind: String,
    pub url: String,
    pub text: String,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct DescriptionConfig {
    pub short: String,
    pub long: String,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct RoleConfig {
    pub organization: String,
    pub role: String,
    pub location: String,
    #[serde(rename = "start-date")]
    pub start_date: String,
    #[serde(default, rename = "end-date")]
    pub end_date: Option<String>,
    #[serde(default, rename="hide-printed")]
    pub hide_printed: Option<bool>,
    pub description: DescriptionConfig,
    #[serde(default)]
    pub impact: Vec<String>,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct QuoteConfig {
    pub quote: String,
    pub author: String,
}