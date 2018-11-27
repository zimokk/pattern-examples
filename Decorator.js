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
var DataSource = /** @class */ (function () {
    function DataSource(storedData) {
        this.container = storedData;
    }
    DataSource.prototype.readData = function () {
        console.log('Read from file');
        return this.container;
    };
    DataSource.prototype.writeData = function (data) {
        console.log('Write to file');
        this.container += data;
    };
    return DataSource;
}());
var DataSourceDecorator = /** @class */ (function () {
    function DataSourceDecorator(dataSource) {
        this.wrappee = dataSource;
    }
    DataSourceDecorator.prototype.readData = function () {
        console.log('Read data');
        return this.wrappee.readData();
    };
    DataSourceDecorator.prototype.writeData = function (data) {
        console.log('Write data');
        this.wrappee.writeData(data);
    };
    return DataSourceDecorator;
}());
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EncryptionDecorator.prototype.readData = function () {
        console.log('Decrypt data');
        var data = this.wrappee.readData();
        return data.substr(0, data.length - 1);
    };
    EncryptionDecorator.prototype.writeData = function (data) {
        console.log('Encrypt data');
        this.wrappee.writeData(data + '1');
    };
    return EncryptionDecorator;
}(DataSourceDecorator));
var ComppressionDecorator = /** @class */ (function (_super) {
    __extends(ComppressionDecorator, _super);
    function ComppressionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComppressionDecorator.prototype.readData = function () {
        console.log('Decompress data');
        return this.wrappee.readData();
    };
    ComppressionDecorator.prototype.writeData = function (data) {
        console.log('Compress data');
        this.wrappee.writeData(data);
    };
    return ComppressionDecorator;
}(DataSourceDecorator));
