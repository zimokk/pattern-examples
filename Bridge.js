var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.getChannel = function () {
        return this.channel;
    };
    TV.prototype.getVolume = function () {
        return this.volume;
    };
    TV.prototype.isTurnedOn = function () {
        return this.status;
    };
    TV.prototype.setChannel = function (channelNumber) {
        this.channel = channelNumber;
    };
    TV.prototype.setVolume = function (volume) {
        this.volume = volume;
    };
    TV.prototype.turnOff = function () {
        this.status = false;
    };
    TV.prototype.turnOn = function () {
        this.status = true;
    };
    return TV;
}());
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.getChannel = function () {
        return this.channel;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.isTurnedOn = function () {
        return this.status;
    };
    Radio.prototype.setChannel = function (channelNumber) {
        this.channel = channelNumber;
    };
    Radio.prototype.setVolume = function (volume) {
        this.volume = volume;
    };
    Radio.prototype.turnOff = function () {
        this.status = false;
    };
    Radio.prototype.turnOn = function () {
        this.status = true;
    };
    return Radio;
}());
var Remote = /** @class */ (function () {
    function Remote(device) {
        this.device = device;
    }
    return Remote;
}());
var ExtendedRemote = /** @class */ (function (_super) {
    __extends(ExtendedRemote, _super);
    function ExtendedRemote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedRemote.prototype.mute = function () {
        this.device.setVolume(0);
    };
    ExtendedRemote.prototype.setFavouriteChannel = function () {
        // somehow chooose it
        var favouriteChannel = 5;
        this.device.setChannel(favouriteChannel);
    };
    return ExtendedRemote;
}(Remote));
