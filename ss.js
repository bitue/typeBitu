var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, listOfCustomers, nameList) {
        if (listOfCustomers === void 0) { listOfCustomers = []; }
        if (nameList === void 0) { nameList = []; }
        this.name = name;
        this.listOfCustomers = listOfCustomers;
        this.nameList = nameList;
        this.name = name;
        this.nameList = nameList;
        // this.listOfCustomers = ['boom >>']
    }
    Department.prototype.addCustomer = function (customer) {
        this.listOfCustomers.push(customer);
    };
    Department.prototype.printCustomerList = function () {
        console.log(this.listOfCustomers);
    };
    Department.prototype.wellCome = function () {
        console.log('wellcome ' + this.name);
    };
    Department.prototype.addName = function (name) {
        this.nameList.push(name);
    };
    Object.defineProperty(Department.prototype, "printNameList", {
        get: function () {
            return this.nameList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "addNameList", {
        set: function (e) {
            if (!e) {
                throw new Error(' pls add valid name');
            }
            this.addName(e);
        },
        enumerable: false,
        configurable: true
    });
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(name, message, nameList) {
        var _this = _super.call(this, name, nameList) || this;
        _this.message = message;
        return _this;
    }
    ItDepartment.prototype.printLove = function () {
        console.log(this.message);
    };
    ItDepartment.prototype.setName = function (nam) {
        console.log(nam);
        this.nameList.push(nam);
    };
    return ItDepartment;
}(Department));
;
var me = new ItDepartment('ash', 'i love you', []);
me.addCustomer('ashikkkkk');
me.setName('bitttttuuuuuu');
me.addCustomer('aslam');
me.addName('bitu');
console.log(me);
console.log(me.printNameList, ' from get method');
console.log(me.printCustomerList());
