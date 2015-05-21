# PrivacyFox
PrivacyFox tweaks various preferences in Firefox in order to enhance the privacy of users; it will also try to enforce these changes to maintain your privacy online.

## Affected Preferences

| Preference                           | Default | New   | Description |
|--------------------------------------|---------|-------|-------------|
| media.peerconnection.enabled         | true    | false | WebRTC can leak a users IP address from behind a VPN or proxy. [source](https://github.com/diafygi/webrtc-ips) |
| network.websocket.enabled            | true    | false | Websockets can cause some dns requests to not be send over the active proxy. [source](https://blog.torproject.org/blog/firefox-security-bug-proxy-bypass-current-tbbs) |
| network.http.sendRefererHeader       | 2       | 0     | Tells the server which page the user came from. |
| network.http.sendSecureXSiteReferrer | true    | false | Tells the server which https page the user came from. |
| network.dnsCacheEntries              | 400     | 100   | Number of cached DNS entries (lower number=more requests but less data stored). |
| network.dnsCacheExpiration           | 60      | 60    | The time in which dns cached entries are expired. |
| privacy.trackingprotection.enabled   | false   | true  | This is Mozilla’s new built in tracking protection. |
| dom.event.clipboardevents.enabled    | true    | false | Websites can get notifications if you copy, paste, or cut something from a web page, and it lets them know which part of the page had been selected. |
| dom.event.contextmenu.enabled        | true    | false | Disables website control over rightclick context menu. |
| geo.enabled                          | true    | false | Disables geolocation. |
| geo.wifi.logging.enabled             | true    | false | Disables logging geolocation requests. |
| browser.formfill.enable              | true    | false | Disables saving of formdata. |
| browser.safebrowsing.enabled         | true    | false | Disable Google Safe Browsing and phishing protection. Security risk, but privacy improvement. |
| browser.safebrowsing.malware.enabled | true    | false | Disable Google Safe Browsing malware checks. Security risk, but privacy improvement. |
| browser.send_pings                   | true    | false | Allows websites to track users clicks. |
| webgl.disabled                       | false   | true  | WebGL is a potential security risk. [source](http://security.stackexchange.com/questions/13799/is-webgl-a-security-concern) |

## building the XPI
```
zip privacyfox.xpi bootstrap.js install.rdf
```
