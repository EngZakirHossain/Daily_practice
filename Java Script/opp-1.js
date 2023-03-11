function Person(name,mobile,dob){ ///constractor person
    this.name = name;  
    this.mobile=mobile;
    this.birthday=new Date(dob);  
    this.ageCalculate=()=>{
        const diff = Date.now() - this.birthday.getTime();
        const age = new Date(diff)
        return age.getUTCFullYear()- 1970;
    }
}

// simple

class Car{
    constructor(name,model,weight,color){
        this.name = name;
        this.model =model;
        this.weight = weight;
        this.color=color;
    }
    getFullName(){
        return this.name+' '+this.model;
    }
    setName(newName){
        return this.name= newName;
    }
}

const bmw = new Car('BMW-101','Super car',780,'red')
bmw.setName('Audi')

const person1 = new Person("Zakir",'01718297506','1996-02-06');

console.log(bmw.getFullName());