
//
// User preferences (aka. bullshit removal)
// * Extensions: HTTPS Everywhere, Decentraleyes, Privacy Badger, uBlock Origin, uMatrix, Bitwarden
//

//
// Personal tweaks (general browser settings)
//

// I want a browser please.
user_pref("extensions.pocket.enabled", false);

// Fuck DRM.
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// I know how to use a browser. Thank you.
user_pref("browser.onboarding.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);

//
// Performance tweaks
//

// Enable GPU rendering
// * https://hacks.mozilla.org/2017/11/entering-the-quantum-era-how-firefox-got-fast-again-and-where-its-going-to-get-faster/
// * https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// * https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/
user_pref("gfx.webrender.all", true);


//
// Security tweaks
//

// Enable FIDO U2F
user_pref("security.webauth.u2f", true);

// Protect from character spoofing
// * https://en.wikipedia.org/wiki/IDN_homograph_attack
user_pref("network.IDN_show_punycode", true);


//
// Privacy tweaks
//

// Start browser in private browsing mode
user_pref("browser.privatebrowsing.autostart", true);

// Enable tracking protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.privacy.trackingprotection.menu", "always");

// Disable the internal DNS resolver
// * https://wiki.mozilla.org/Trusted_Recursive_Resolver
// * https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
// * https://daniel.haxx.se/blog/2018/06/03/inside-firefoxs-doh-engine/
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddress", "1.1.1.1"); // Browser won't ask native resolver for the initial DNS record
user_pref("network.trr.mode", 5); // 0 (default, off?), 2 (fail to native), 3 (never native), 5 (off)

// Block cookies (to some extent)
// * https://developer.mozilla.org/en-US/docs/Mozilla/Cookies_Preferences
user_pref("network.cookie.cookieBehavior", 1); // 0 (default, all cookies), 1 (block third), 2 (block all)
user_pref("network.cookie.lifetimePolicy", 2); // 0 (default, origin decides), 2 (until session ends)

// Disable prefetching
// * https://en.wikipedia.org/wiki/Link_prefetching
// * https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
// * https://www.w3.org/TR/preload/
// * https://www.w3.org/TR/resource-hints/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);

// Disable referer header
// * https://wiki.mozilla.org/Security/Referrer
user_pref("network.http.sendRefererHeader", 0); // 0 (never), 2 (default, send on all)

user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.resistFingerprinting", true);

// Disable beaconing
// * https://www.w3.org/TR/beacon/
user_pref("beacon.enabled", false);

// Disable sending pings with the ping attribute
// * https://www.w3.org/TR/html53/links.html#hyperlink-auditing
user_pref("browser.send_pings", false);

// Disable open connections connections
user_pref("network.websocket.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);

// Prevent sites from messing with the context menu
dom.event.contextmenu.enabled false

// Prevent sites from messing with copy paste
dom.event.clipboardevents.enabled false

// Prevent sites from reading battery status
user_pref("dom.battery.enabled", false);

// Disable browser storage
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.storage.enabled", false);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.enable", false);

// Prevent accessibility services from accessing the browser
user_pref("accessibility.force_disabled", 1);

// Disable location
user_pref("geo.enabled", false);

// Disable browser sync

webgl.disabled
pdfjs.disabled
signon.rememberSignons;false
clipboard.plainTextOnly

// Disable site reading installed plugins
plugins.enumerable_names ''

user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.malware.enabled", false);

user_pref("extensions.CanvasBlocker@kkapsner.de.whiteList", "");
user_pref("extensions.autoDisableScopes", 14);
user_pref("media.navigator.enabled", false);

user_pref("media.video_stats.enabled", false);
