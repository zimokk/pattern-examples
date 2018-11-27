

interface Sensor {
    getCelsiusTemperature(): number;
}

class CelsiusSensor implements Sensor {
    public getCelsiusTemperature(): number {
        return 26;
    }
}

interface CustomerSensor {
    getTemperature(): number;
}

class Adapter extends CelsiusSensor implements CustomerSensor {
    getTemperature(): number {
        return toFarengeiht(this.getCelsiusTemperature());
    }
}
