

class CustomerDetails {
    public avatar: string; //blob

    constructor(avatar: string) {
        this.avatar = avatar;
    }
}

class Customer {
    constructor(name: any, salary: any, customerDetails: CustomerDetails) {
        this.name = name;
        this.salary = salary;
        this.details = customerDetails;
    }

    name: string;
    salary: number;
    details: CustomerDetails;
}

/**
 * FlyWeightFactory
 */
class TypesFactory {
    private detailsCache: CustomerDetails[] = [];

    // Computed at runtime
    public getClientDetails(isCreditable: boolean, avatar: string) {
        let existingDetails = this.detailsCache.find((existingDetails) => {
            return existingDetails.avatar === avatar;
        });
        return existingDetails || this.createDetails(avatar);
    }

    private createDetails(avatar: string) {
        let customerDetails = new CustomerDetails(avatar);
        this.detailsCache.push(customerDetails);
        return customerDetails;
    }
}

class Bank {
    customersList: Customer[] = [];
    typesFactory: TypesFactory;

    constructor() {
        this.typesFactory = new TypesFactory();
    };

    public addCustomer(name, age, salary, avatar) {
        let isCreditable = salary > 1500;
        let newCustomerDetails = this.typesFactory.getClientDetails(isCreditable, avatar);
        this.customersList.push(new Customer(name, salary, newCustomerDetails));
    };
}