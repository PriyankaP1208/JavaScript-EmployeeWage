class EmployeePayrollData {
   
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name()
    {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!';
    }

    get id() {
        return this._id;
    }

    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Invalid id!';
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid salary!';
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp('^[MF]{1}$');
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw 'Invalid gender!';
    }
    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let date = new Date();
        if(date < startDate)
            this._startDate = startDate;
        else throw 'Invalid date!';
    }
    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary + " Gender = " + this.gender + " Start Date : " + empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "jhon";
    console.log(employeePayrollData.toString);
}catch(e)
{
    console.error(e);
}
let newEmpPayrollData = new EmployeePayrollData(1, "Terisa", 30000, "F", new Date());
console.log(newEmpPayrollData.toString());


try {
    let newEmpPayrollData1 = new EmployeePayrollData(0, "Raju", 60000, "F", new Date());
    console.log(newEmpPayrollData1.toString());
}catch(e)
{
    console.error(e);
}

try {
    let newEmpPayrollData2 = new EmployeePayrollData(2, "Monu", 0, "K", new Date());
    console.log(newEmpPayrollData2.toString());
}catch(e)
{
    console.error(e);
}

