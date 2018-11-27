var CustomerDetails = /** @class */ (function () {
    function CustomerDetails(avatar) {
        this.avatar = avatar;
    }
    return CustomerDetails;
}());
var Customer = /** @class */ (function () {
    function Customer(name, salary, customerDetails) {
        this.name = name;
        this.salary = salary;
        this.details = customerDetails;
    }
    return Customer;
}());
/**
 * FlyWeightFactory
 */
var TypesFactory = /** @class */ (function () {
    function TypesFactory() {
        this.detailsCache = [];
    }
    // Computed at runtime
    TypesFactory.prototype.getClientDetails = function (isCreditable, avatar) {
        var existingDetails = this.detailsCache.find(function (existingDetails) {
            return existingDetails.avatar === avatar;
        });
        return existingDetails || this.createDetails(avatar);
    };
    TypesFactory.prototype.createDetails = function (avatar) {
        var customerDetails = new CustomerDetails(avatar);
        this.detailsCache.push(customerDetails);
        return customerDetails;
    };
    return TypesFactory;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.customersList = [];
        this.typesFactory = new TypesFactory();
    }
    ;
    Bank.prototype.addCustomer = function (name, age, salary, avatar) {
        var isCreditable = salary > 1500;
        var newCustomerDetails = this.typesFactory.getClientDetails(isCreditable, avatar);
        this.customersList.push(new Customer(name, salary, newCustomerDetails));
    };
    ;
    return Bank;
}());
