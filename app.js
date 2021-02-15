var persons1 = {
    name: "Sir",
    sayHello: function(){
        console.log("Hello! My name is " + this.name)
    }
}
var persons2 = {
    name: "Chris",
    sayHello: function(){
        console.log("Hello! My name is " + this.name)
    }
}
var persons3 = {
    name: "Bradley",
    sayHello: function(){
        console.log("Hello! My name is " + this.name)
    }
}
var persons4 = {
    name: "Eric",
    sayHello: function(){
        console.log("Hello! My name is " + this.name)
    }
}
var persons5 = {
    name: "Tamra",
    sayHello: function(){
        console.log("Hello! My name is " + this.name)
    }
}

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
    this.sayHello = function() {
        console.log("Hey! My name is " + this.name + ". I am " + this.age + " years old and live in " + this.city + ".")
      }
  }
  


/////////////////////////////////////////




class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello(){
        console.log("Hey! My name is " + this.name + ". I am " + this.age + " years old and live in " + this.city + ".")
    }
}

var person1 = new Person("Sir", "Mobile", 24);
var person2 = new Person("Chris", "Bham", 23);
var person3 = new Person("Bradley", "New Orleans", 34);
var person4 = new Person("Eric", "Dallas", 18);
var person5 = new Person("Tamra", "Philly", 12);

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();



/////////////////////////////////////////




class Vehicle {
    constructor(manufacturer, wheels, type) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.type = type
    }
    aboutVehicle(){
        console.log("Hey! This vehicle is from " + this.manufacturer + ". It has " + this.wheels + " wheels and is a " + this.type + ".")
    }
}
class Truck extends Vehicle{
    constructor(wheels, doors, bed) {
        super()
        this.wheels = wheels;
        this.doors = doors;
        this.bed = (bed) ? "true" : "false";
    }
    aboutVehicle(){
        console.log("Hey! This vehicle is from " + this.manufacturer + ". It has " + this.wheels + " wheels and is a " + this.type + "." + "This has " + this.doors + " doors and a bed.")
    }
}
class Sedan extends Vehicle{
    constructor(wheels, size, mpg) {
        super()
        this.wheels = wheels;
        this.size = size;
        this.mpg = mpg
    }
    aboutVehicle(){
        console.log("Hey! This vehicle is from " + this.manufacturer + ". It has " + this.wheels + " wheels and is a " + this.size + " " + this.type + " with an mpg of " + this.mpg + ".")
    }
}
class Motorcyle extends Vehicle{
    constructor(wheels, hbars, nodoors) {
        super()
        this.wheels = wheels;
        this.hbars = hbars;
        this.nodoors = nodoors
    }
    aboutVehicle(){
        console.log("Hey! This vehicle is from " + this.manufacturer + ". It has " + this.wheels + " wheels and is a " + this.type + ". It has" + this.wheels + "tires and no steering wheel.")
    }
}

var vehicle1 = new Sedan("Nissan", 4, "Sedan", "Small", 42);

vehicle1.aboutVehicle();
