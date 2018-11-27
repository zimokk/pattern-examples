var CelsiusSensor = /** @class */ (function () {
    function CelsiusSensor() {
        this.scaleType = 'C';
    }
    CelsiusSensor.prototype.getScaleType = function () {
        return this.scaleType;
    };
    CelsiusSensor.prototype.getTemperature = function () {
        /*
        * Очень
        * Много
        * Кода
        * */
        return 26;
    };
    return CelsiusSensor;
}());
var Adapter = /** @class */ (function () {
    function Adapter(providedSensor) {
        this.specificSensor = providedSensor;
    }
    Adapter.prototype.getTemperatureC = function () {
        switch (this.specificSensor.getScaleType()) {
            case 'C': return this.specificSensor.getTemperature();
            case 'F': return (this.specificSensor.getTemperature() - 32) / 1.8;
            case 'K': return this.specificSensor.getTemperature() - 273.15;
        }
    };
    Adapter.prototype.getTemperatureF = function () {
        switch (this.specificSensor.getScaleType()) {
            case 'C': return this.specificSensor.getTemperature() * 1.8 + 32;
            case 'F': return this.specificSensor.getTemperature();
            case 'K': return this.specificSensor.getTemperature() * 1.8 - 459.67;
        }
    };
    Adapter.prototype.getTemperatureK = function () {
        switch (this.specificSensor.getScaleType()) {
            case 'C': return this.specificSensor.getTemperature() + 273.15;
            case 'F': return (this.specificSensor.getTemperature() + 459.67) / 1.8;
            case 'K': return this.specificSensor.getTemperature();
        }
    };
    return Adapter;
}());
