const {classes : Cc, interfaces : Ci, utils : Cu} = Components;
Cu.import('resource://gre/modules/Services.jsm');

var privacyPrefs =
    [
      // WebRTC can leak a users IP address from behind a VPN or proxy.
      {pref : "media.peerconnection.enabled", set : false, type : "bool"},

      // Websockets can cause some dns requests to not be send over the active
      // proxy.
      {pref : "network.websocket.enabled", set : false, type : "bool"},

      // Tells the server which page the user came from.
      {pref : "network.http.sendRefererHeader", set : 0, type : "int"},

      // Tells the server which https page the user came from.
      {
	pref : "network.http.sendSecureXSiteReferrer",
	set : false,
	type : "bool"
      },

      // Number of cached DNS entries. Lower number = More requests but less
      // data stored.
      {pref : "network.dnsCacheEntries", set : 100, type : "int"},

      // This is Mozilla’s new built in tracking protection.
      {pref : "privacy.trackingprotection.enabled", set : true, type : "bool"},

      // Disable that websites can get notifications if you copy, paste, or cut
      // something from a web page, and it lets them know which part of the page
      // had been selected.
      {pref : "dom.event.clipboardevents.enabled", set : false, type : "bool"},

      // Disables website control over rightclick context menu.
      {pref : "dom.event.contextmenu.enabled", set : false, type : "bool"},

      // Disables geolocation.
      {pref : "geo.enabled", set : false, type : "bool"},

      // Disables firefox logging geolocation requests.
      {pref : "geo.wifi.logging.enabled", set : false, type : "bool"},

      // Disables saving of formdata.
      {pref : "browser.formfill.enable", set : false, type : "bool"},

      // Disable Google Safe Browsing and phishing protection. Security risk,
      // but privacy improvement.
      {pref : "browser.safebrowsing.enabled", set : false, type : "bool"},

      // Disable Google Safe Browsing malware checks. Security risk, but privacy
      // improvement.
      {
	pref : "browser.safebrowsing.malware.enabled",
	set : false,
	type : "bool"
      },

      // Allows websites to track users clicks.
      {pref : "browser.send_pings", set : false, type : "bool"},

      // Disables caching on hardrive.
      {pref : "browser.cache.disk.enable", set : false, type : "bool"},

      // Disables caching on hardrive for ssl connections.
      {pref : "browser.cache.disk_cache_ssl", set : false, type : "bool"},

      // Disables the offline disk cache.
      {pref : "browser.cache.offline.enable", set : false, type : "bool"},

      // WebGL is a potential security risk.
      {pref : "webgl.disabled", set : false, type : "bool"}
];

function startup(data, reason) { setPrivacyPrefs(); }

function shutdown(data, reason) { resetPrivacyPrefs(); }

function install(data, reason) { setPrivacyPrefs(); }

function uninstall(data, reason) { resetPrivacyPrefs(); }

function setPrivacyPrefs()
{
	for (i = 0; i < privacyPrefs.length; i++) {

		switch (privacyPrefs[i]["type"]) {

			case "int":
				Services.prefs.setIntPref(
				    privacyPrefs[i]["pref"],
				    privacyPrefs[i]["set"]);
				break;
			case "bool":
				Services.prefs.setBoolPref(
				    privacyPrefs[i]["pref"],
				    privacyPrefs[i]["set"]);
				break;
			case "char":
				Services.prefs.setCharPref(
				    privacyPrefs[i]["pref"],
				    privacyPrefs[i]["set"]);
				break;
			default:
				break;
		}
	}
}

function resetPrivacyPrefs()
{
	for (i = 0; i < privacyPrefs.length; i++) {

		Services.prefs.clearUserPref(privacyPrefs[i]["pref"]);
	}
}
