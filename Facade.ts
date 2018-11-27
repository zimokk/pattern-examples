const USER = {
    name: "Ihar",
    passH: "pass1"
};

class ApplicationFacade { //Facade
    private hashMaker: HashMaker;
    private database: Database;
    private tokenCreator: TokenCreator;
    private validator: Validator;
    private token: any;

    constructor() {
        this.hashMaker = new HashMaker();
        this.database = new Database();
        this.tokenCreator = new TokenCreator();
        this.validator = new Validator()
    }

    authorize(name: string, password: string): string {
        try {
            this.validator.validateUser(name, password);
            let passwordHash = this.hashMaker.getHash(password);
            let storedPasswordHash = this.database.getUserPasswordHash(name);
            if (passwordHash === storedPasswordHash) {
                this.token = this.tokenCreator.getToken(name);
                return 'Congrats! Success';
            } else {
                return 'Wrong password/name';
            }
        } catch (e) {
            return 'Error, reason: ' + e.message;
        }
    }
}

class Database {
    public getUserPasswordHash(userName: string): string {
        if (USER.name === userName) {
            return USER.passH;
        } else {
            throw new Error("User not found")
        }
    }
}

class HashMaker {
    public getHash(stringToHash: string): string {
        return stringToHash + 1;
    }
}

class TokenCreator {
    public getToken(user: string) {
        return {
            user,
            time: new Date()
        }
    }
}

class Validator {
    public validateUser(name: string, password: string) {
        if (!this.isNameValid(name) || !this.isPasswordValid(password)) {
            throw new Error("No name/password provided")
        }
    }

    private isNameValid(name: string): boolean {
        return !!name;
    }

    private isPasswordValid(password: string): boolean {
        return !!password;
    }
}

///////////////////////////////////////










class FacebookService {
    getUserDetails() {
        // return userDetails;
    }
}

class LinkedInService {
    getWorkProfile() {
        // return workProfileDetails;
    }
}

class SocialNetworkFacade {
    private facebookService: FacebookService;
    private linkedInService: LinkedInService;

    getProfile() {
        const facebookProfile = this.facebookService.getUserDetails();
        const linkedInProfile = this.linkedInService.getWorkProfile();
        return {
            name: facebookProfile.name,
            company: linkedInProfile.company
        };
    };
}