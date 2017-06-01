/*jslint
        browser
*/
/*global
        atob, BluetoothUUID, Event, uk, window
*/
var uk = {};
if (!uk.co) {
    uk.co = {};
}
if (!uk.co.greenparksoftware) {
    uk.co.greenparksoftware = {};
}
uk.co.greenparksoftware.wbutils = {
    canonicaliseFilter: function (filter) {
        "use strict";
        // implemented as far as possible as per
        // https://webbluetoothcg.github.io/web-bluetooth/#bluetoothlescanfilterinit-canonicalizing
        var services = filter.services;
        var name = filter.name;
        var namePrefix = filter.namePrefix;

        var canonicalizedFilter = {};

        if (services === undefined && name === undefined && namePrefix === undefined) {
            throw new TypeError("Filter has no usable properties");
        }
        if (services !== undefined) {
            if (!services) {
                throw new TypeError('Filter has empty services');
            }
            var cservs = services.map(BluetoothUUID.getService);
            canonicalizedFilter.services = cservs;
        }

        return canonicalizedFilter;

    }
};
