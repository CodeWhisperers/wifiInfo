# Wifi scanner
Cordova Wifi scanner

> **Prerequisite:** Install NodeJs, Cordova, Phonegap.

```bash
cordova create wifiinfo com.example.wifiinfo "WifiInfo"
cd wifiinfo
cordova platform add android
cordova plugin add https://github.com/parsonsmatt/WifiWizard.git
cordova build android
```

Add the following to **index.html**
```html
<script type="text/javascript" src="WifiWizard.js"></script>
```

Add the following to **js/index.js**

###Helpers
```javascript
function addHelpers()
{
    if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (message) {
            navigator.notification.alert(
                message,    // message
                null,       // callback
                "Workshop", // title
                'OK'        // buttonName
            );
        };
    }
}
```

###Scan
```javascript
function scanWifi() {
    alert('start scan');
    try{
        WifiWizard.getScanResults(
            function(list){ //alert(list);
                var result = '';
                for(var n in list) {
                    result += list[n].SSID + ' ( ' + list[n].BSSID + ' ) ' + list[n].level + "\n";
                }
                alert(result);
            },
            function(e){
                alert(e)
            }
        );

    } catch (err) {
        alert(err.message);
    }
}
```
Hook
```javascript
onDeviceReady: function() {
        app.receivedEvent('deviceready');

        addHelpers();

        scanWifi();
```

