// function Person(name,mobile,dob){ ///constractor person
//     this.name = name;  
//     this.mobile=mobile;
//     this.birthday=new Date(dob);  
//     this.ageCalculate=()=>{
//         const diff = Date.now() - this.birthday.getTime();
//         const age = new Date(diff)
//         return age.getUTCFullYear()- 1970;
//     }
// }

// // simple

// class Car{
//     constructor(name,model,weight,color){
//         this.name = name;
//         this.model =model;
//         this.weight = weight;
//         this.color=color;
//     }
//     getFullName(){
//         return this.name+' '+this.model;
//     }
//     setName(newName){
//         return this.name= newName;
//     }
// }

// const bmw = new Car('BMW-101','Super car',780,'red')
// bmw.setName('Audi')

// const person1 = new Person("Zakir",'01718297506','1996-02-06');

// console.log(bmw.getFullName());

class Person{
    constructor(first_name,last_name, mobile, data_of_birth,yearly_income) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.mobile = mobile;
        this.birthday = new Date(data_of_birth);
        this.yearly_income = yearly_income;
    }
    getFullName = () => {
        return this.first_name+' '+this.last_name
    }

    getAge = () => {
        const diff = Date.now() - this.birthday.getTime();
        const age = new Date(diff);
        return age.getUTCFullYear() - 1970;
    }
    getTaxAmmount = () => {
        let taxamount = 0;
        if (this.yearly_income > 250000) {            
            taxamount = this.yearly_income * .25;
        } else if( this.yearly_income > 250000 && this.yearly_income<550000) {
            taxamount = this.yearly_income * .30;
        } else if (this.yearly_income > 750000) {
            taxamount = this.yearly_income * .35;
        } else {
            return taxamount = 0;
        }
        return taxamount;
    }
}

const khan = new Person('Zakir', 'Hossain', '01718297506', '1996-02-06', 7500000);

console.log(khan.getFullName(), khan.getAge(), khan.getTaxAmmount());