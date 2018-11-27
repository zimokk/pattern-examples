interface Device{
    isTurnedOn(): boolean;
    setVolume(volume: number): void;
    getType(): string;
    setChannel(channel: number): void;
}


class TV implements Device {
    private channel: number;
    private volume: number;
    private status: boolean;
    getType(): string {
        return 'TV';
    }
    isTurnedOn(): boolean {
        return this.status;
    }
    setChannel(channelNumber: number): void {
        this.channel = channelNumber;
    }
    setVolume(volume: number): void {
        this.volume = volume;
    }
}

class OldTV implements Device {
    private channel: number;
    private volume: number;
    private status: boolean;
    getType(): string {
        return 'OldTV';
    }
    isTurnedOn(): boolean {
        return this.status;
    }
    setChannel(channelNumber: number): void {
        this.channel = channelNumber;
    }
    setVolume(volume: number): void {
        this.volume = volume;
    }
}


class Remote {
    device: Device;
    constructor(device: Device){
        this.device = device;
    }
    setVolume(vol: number){
        this.device.setVolume(vol);
    }
    //etc.
}

class Resolver {
    oldTv: OldTV;
    modernTv: TV;
    constructor(){
        this.oldTv = new OldTV();
        this.modernTv = new TV();
    }
    getDevice(clientID: number): Device{
        return clientID > 1000 ? this.modernTv : this.oldTv;
    }//return old/new device
}


let resolver = new Resolver();
let client1 = new Remote(resolver.getDevice(1055));
let client2 = new Remote(resolver.getDevice(77));


console.log(client1.device.getType());
console.log(client2.device.getType());

client1.setVolume(9);
client2.setVolume(9);

