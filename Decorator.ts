interface DataSourceInterface {
    writeData(data): void;
    readData(): string;
}

//Pipe

class DataSource implements DataSourceInterface{
    private container: string;// file, database, etc.
    constructor(storedData: string){
        this.container = storedData;
    }
    readData(): string {
        console.log('Read from file');
        return this.container;
    }
    writeData(data): void {
        console.log('Write to file');
        this.container += data;
    }
}

class DataSourceDecorator implements DataSourceInterface{
    wrappee: DataSourceInterface;
    constructor(dataSource: DataSourceInterface){
        this.wrappee = dataSource;
    }

    readData(): string {
        console.log('Read data');
        return this.wrappee.readData();
    }

    writeData(data): void {
        console.log('Write data');
        this.wrappee.writeData(data);
    }
}

class EncryptionDecorator extends DataSourceDecorator{
    readData(): string {
        console.log('Decrypt data');
        let data = this.wrappee.readData();
        return data.substr(0, data.length-1);
    }
    writeData(data): void {
        console.log('Encrypt data');
        this.wrappee.writeData(data+'1')
    }
}
class CompressionDecorator extends DataSourceDecorator{
    readData(): string {
        console.log('Decompress data');
        return this.wrappee.readData();
    }
    writeData(data): void {
        console.log('Compress data');
        this.wrappee.writeData(data)
    }
}

let compressDataStorage = new CompressionDecorator(new DataSourceDecorator(new DataSource("1")));
let encryptCompressDataStorage = new EncryptionDecorator((new CompressionDecorator(new DataSourceDecorator(new DataSource("1")))));


compressDataStorage.writeData("data");
encryptCompressDataStorage.writeData("data");
