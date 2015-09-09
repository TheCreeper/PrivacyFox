```
 _____      _                         ______
|  __ \    (_)                       |  ____|
| |__) | __ ___   ____ _  ___ _   _  | |__ _____  __
|  ___/ '__| \ \ / / _` |/ __| | | | |  __/ _ \ \/ /
| |   | |  | |\ V / (_| | (__| |_| | | | | (_) >  <
|_|   |_|  |_| \_/ \__,_|\___|\__, | |_|  \___/_/\_\
                               __/ |
                              |___/
```
PrivacyFox tweaks various preferences in Firefox in order to enhance the privacy
of users; it will also try to enforce these changes to maintain your privacy
online.

## Affected Preferences

<table>
	<thead>
		<tr>
			<th>Preference</th>
			<th>Default</th>
			<th>New</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>media.peerconnection.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>WebRTC can leak a users IP address from behind a VPN or proxy.</td>
		</tr>
		<tr>
			<td>network.websocket.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Websockets can cause some dns requests to not be send over the active proxy.</td>
		</tr>
		<tr>
			<td>network.http.sendRefererHeader</td>
			<td>2</td>
			<td>0</td>
			<td>Tells the server which page the user came from.</td>
		</tr>
		<tr>
			<td>network.http.sendSecureXSiteReferrer</td>
			<td>true</td>
			<td>false</td>
			<td>Tells the server which https page the user came from.</td>
		</tr>
		<tr>
			<td>network.dnsCacheEntries</td>
			<td>400</td>
			<td>100</td>
			<td>Number of cached DNS entries (lower number=more requests but less data stored).</td>
		</tr>
		<tr>
			<td>privacy.trackingprotection.enabled</td>
			<td>false</td>
			<td>true</td>
			<td>This is Mozilla’s new built in tracking protection.</td>
		</tr>
		<tr>
			<td>dom.event.clipboardevents.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Websites can get notifications if you copy, paste, or cut something from a web page, and it lets them know which part of the page had been selected.</td>
		</tr>
		<tr>
			<td>dom.event.contextmenu.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Disables website control over rightclick context menu.</td>
		</tr>
		<tr>
			<td>geo.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Disables geolocation.</td>
		</tr>
		<tr>
			<td>geo.wifi.logging.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Disables logging geolocation requests.</td>
		</tr>
		<tr>
			<td>browser.formfill.enable</td>
			<td>true</td>
			<td>false</td>
			<td>Disables saving of formdata.</td>
		</tr>
		<tr>
			<td>browser.safebrowsing.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Disable Google Safe Browsing and phishing protection. Security risk, but privacy improvement.</td>
		</tr>
		<tr>
			<td>browser.safebrowsing.malware.enabled</td>
			<td>true</td>
			<td>false</td>
			<td>Disable Google Safe Browsing malware checks. Security risk, but privacy improvement.</td>
		</tr>
		<tr>
			<td>browser.send_pings</td>
			<td>true</td>
			<td>false</td>
			<td>Allows websites to track users clicks.</td>
		</tr>
		<tr>
			<td>browser.cache.disk.enable</td>
			<td>true</td>
			<td>false</td>
			<td>Disables caching on hardrive.</td>
		</tr>
		<tr>
			<td>browser.cache.disk_cache_ssl</td>
			<td>true</td>
			<td>false</td>
			<td>Disables caching for ssl connections.</td>
		</tr>
		<tr>
			<td>browser.cache.offline.enable</td>
			<td>true</td>
			<td>false</td>
			<td>Disables the offline disk cache.</td>
		</tr>
		<tr>
			<td>webgl.disabled</td>
			<td>false</td>
			<td>true</td>
			<td>WebGL is a potential security risk.</td>
		</tr>
	</tbody>
</table>

## References

[STUN IP Address requests for WebRTC](https://github.com/diafygi/webrtc-ips)

[Firefox security bug (proxy-bypass) in current TBBs](https://blog.torproject.org/blog/firefox-security-bug-proxy-bypass-current-tbbs)

[Tracking Protection in Firefox](https://support.mozilla.org/en-US/kb/tracking-protection-firefox)

[Quantifying the effects of Firefox's Tracking Protection](https://blog.mozilla.org/nnethercote/2014/11/12/quantifying-the-effects-of-firefoxs-tracking-protection/)

[Is WebGL a security concern?](https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern)

[DNS Prefetching and Its Privacy Implications](https://www.usenix.org/legacy/event/leet10/tech/full_papers/Krishnan.pdf)