class Department {
    
    constructor (public name : string, private listOfCustomers : string [] =[], protected nameList : string[] =[] ) {
        this.name = name;
        this.nameList = nameList;
        // this.listOfCustomers = ['boom >>']
    }
    addCustomer (customer : string) {
        this.listOfCustomers.push(customer) 
      
    }
    printCustomerList () {
        console.log(this.listOfCustomers)
    }
    wellCome () {
        console.log('wellcome ' + this.name )
    }
    addName (name : string) {
        this.nameList.push(name)
    }

    get printNameList () {
        return this.nameList
    }

    set addNameList (e: string) {
        if (! e){
            throw new Error (' pls add valid name')
        }
        this.addName(e)

    }
}

class ItDepartment extends Department {
    message : string ; 
    constructor (name : string , message : string, nameList : string []) {
        super (name, nameList)
        this.message = message
    }

    printLove () {
        console.log(this.message)
    }
    setName (nam : string) {
        console.log(nam);
        this.nameList.push(nam)

    }
    
};

const me = new ItDepartment('ash', 'i love you', []);



me.addCustomer('ashikkkkk');
me.setName('bitttttuuuuuu')
me.addCustomer('aslam');
me.addName('bitu')
console.log(me);
console.log(me.printNameList, ' from get method')
console.log(me.printCustomerList())