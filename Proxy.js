var DataStorage = /** @class */ (function () {
    function DataStorage() {
    }
    DataStorage.prototype.getData = function (fieldKey) {
        return this.infoMap[fieldKey];
    };
    DataStorage.prototype.setData = function (fieldKey, fieldValue) {
        this.infoMap.set(fieldKey, fieldValue);
    };
    return DataStorage;
}());
var DataStoreProxy = /** @class */ (function () {
    function DataStoreProxy(dataStorage) {
        this.adminsFields = ['password', 'username'];
        this.dataStorage = dataStorage;
    }
    DataStoreProxy.prototype.getData = function (fieldKey) {
        return this.dataStorage.getData(fieldKey);
    };
    DataStoreProxy.prototype.setData = function (fieldKey, fieldValue, userRole) {
        if (this.isAccessAllowed(fieldKey, userRole)) {
            this.dataStorage.setData(fieldKey, fieldValue);
        }
        else {
            throw new Error("Access denied");
        }
    };
    DataStoreProxy.prototype.isAccessAllowed = function (fieldKey, userRole) {
        var fieldKeyIndex = this.adminsFields.indexOf(fieldKey);
        return (fieldKeyIndex != -1 && userRole == 'admin') || fieldKeyIndex == -1;
    };
    return DataStoreProxy;
}());
//////////////////////////////////////////
var personalData = {};
var pesonalDataValidator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        // Стандартное сохранение значения
        obj[prop] = value;
    }
};
var dataProxy = new Proxy(personalData, pesonalDataValidator);
dataProxy.age = 100;
console.log(dataProxy.age); // 100
dataProxy.age = 'young'; // Вызовет исключение
