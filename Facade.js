var USER = {
    name: "Ihar",
    passH: "pass1"
};
var ApplicationFacade = /** @class */ (function () {
    function ApplicationFacade() {
        this.hashMaker = new HashMaker();
        this.database = new Database();
        this.tokenCreator = new TokenCreator();
        this.validator = new Validator();
    }
    ApplicationFacade.prototype.authorize = function (name, password) {
        try {
            this.validator.validateUser(name, password);
            var passwordHash = this.hashMaker.getHash(password);
            var storedPasswordHash = this.database.getUserPasswordHash(name);
            if (passwordHash === storedPasswordHash) {
                this.token = this.tokenCreator.getToken(name);
                return 'Congrats! Success';
            }
            else {
                return 'Wrong password/name';
            }
        }
        catch (e) {
            return 'Error, reason: ' + e.message;
        }
    };
    return ApplicationFacade;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.getUserPasswordHash = function (userName) {
        if (USER.name === userName) {
            return USER.passH;
        }
        else {
            throw new Error("User not found");
        }
    };
    return Database;
}());
var HashMaker = /** @class */ (function () {
    function HashMaker() {
    }
    HashMaker.prototype.getHash = function (stringToHash) {
        return stringToHash + 1;
    };
    return HashMaker;
}());
var TokenCreator = /** @class */ (function () {
    function TokenCreator() {
    }
    TokenCreator.prototype.getToken = function (user) {
        return {
            user: user,
            time: new Date()
        };
    };
    return TokenCreator;
}());
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.validateUser = function (name, password) {
        if (!this.isNameValid(name) || !this.isPasswordValid(password)) {
            throw new Error("No name/password provided");
        }
    };
    Validator.prototype.isNameValid = function (name) {
        return !!name;
    };
    Validator.prototype.isPasswordValid = function (password) {
        return !!password;
    };
    return Validator;
}());
///////////////////////////////////////
var FacebookService = /** @class */ (function () {
    function FacebookService() {
    }
    FacebookService.prototype.getUserDetails = function () {
        // return userDetails;
    };
    return FacebookService;
}());
var LinkedInService = /** @class */ (function () {
    function LinkedInService() {
    }
    LinkedInService.prototype.getWorkProfile = function () {
        // return workProfileDetails;
    };
    return LinkedInService;
}());
var SocialNetworkFacade = /** @class */ (function () {
    function SocialNetworkFacade() {
    }
    SocialNetworkFacade.prototype.getProfile = function () {
        var facebookProfile = this.facebookService.getUserDetails();
        var linkedInProfile = this.linkedInService.getWorkProfile();
        return {
            name: facebookProfile.name,
            company: linkedInProfile.company
        };
    };
    ;
    return SocialNetworkFacade;
}());
