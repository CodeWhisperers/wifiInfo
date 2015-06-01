cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.pylonproducts.wifiwizard/www/WifiWizard.js",
        "id": "com.pylonproducts.wifiwizard.DynamicUpdate",
        "clobbers": [
            "WifiWizard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.pylonproducts.wifiwizard": "0.2.8"
}
// BOTTOM OF METADATA
});