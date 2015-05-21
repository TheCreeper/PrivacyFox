# PrivacyFox
PrivacyFox tweaks various preferences in Firefox in order to enhance the privacy of users; it will also try to enforce these changes to maintain your privacy online.

## Affected Preferences

| Preference                           | Default | New   | Description |
|--------------------------------------|---------|-------|-------------|
| media.peerconnection.enabled         | true    | false |             |
| network.websocket.enabled            | true    | false |             |
| network.http.sendRefererHeader       | 2       | 0     |             |
| network.http.sendSecureXSiteReferrer | true    | false |             |
| network.dnsCacheEntries              | 400     | 100   |             |
| network.dnsCacheExpiration           | 60      | 60    |             |
| privacy.trackingprotection.enabled   | false   | true  |             |
| geo.enabled                          | true    | false |             |
| browser.safebrowsing.malware.enabled | true    | false |             |
| dom.event.clipboardevents.enabled    | true    | false |             |
| dom.event.contextmenu.enabled        | true    | false |             |
| geo.wifi.logging.enabled             | true    | false |             |
| browser.formfill.enable              | true    | false |             |
| browser.safebrowsing.enabled         | true    | false |             |
| browser.send_pings                   | true    | false |             |
| webgl.disabled                       | false   | true  |             |

## building the XPI
```
zip privacyfox.xpi bootstrap.js install.rdf
```
