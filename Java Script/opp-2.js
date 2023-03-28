class Car{
  constructor(brand){
    this.brand = brand;
  }

  getInfo=()=>{
    return 'This Car Brand Name Is' + ' ' + this.brand;
  }
}

class CarModel extends Car{
  constructor(brand , model) {
    super(brand);
    this.model = model;
  }
  printInfo = () => {
    console.log(this.getInfo() + ' and Its model number is ' + this.model);
  }

  static getFullModelName = () => {
    return 'This is a Static Method';
  }
}

const mazda = new CarModel('mazda', 'Rx8');
const BMW = new CarModel('BMW', 'R1000M');
const lancer = new CarModel('lancer', 'Lx800');

mazda.printInfo();
BMW.printInfo();
lancer.printInfo();
console.log(CarModel.getFullModelName());