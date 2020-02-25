//стол
class Table {
    #name;
    #height;
    #length;
    #material1;
    #material2;
    #shape;
    #price;
    constructor(name, height, length, material1, material2, shape, price) {
        this.#name = name;
        this.#height = height;
        this.#length = length;
        this.#material1 = material1;
        this.#material2 = material2;
        this.#shape = shape;
        this.#price = price;
    }
    get getName() {
        return this.#name;
    }
    get getHeight() {
        return this.#height;
    }
    get getLength() {
        return this.#length;
    }
    get getMaterial1() {
        return this.#material1;
    }
    get getMaterial2() {
        return this.#material2;
    }
    get getShape() {
        return this.#shape;
    }
    get getPrice() {
        return this.#price;
    }
    set setPrice(price) {
        if (!isNaN(price) && price > 0) {
            this.#price = price;
            return this.#price;
        } else {
            console.log("Enter correct data");
        }

    }
}
let table = new Table("sads", 65465, 87498, "weqwe", 7879, 587, -9687);
console.log(table);



//обувь

class Shoes {
    #name;
    #size;
    #material;
    #price;
    constructor(name, size, material, price) {
        this.#name = name;
        this.#size = size;
        this.#material = material;
        this.#price = price;
    }
    get getName(){
        return this.#name;
    }
    get getSize(){
        return this.#size;
    }
    get getMaterial(){
        return this.#material;
    }
    get getPrice(){
        return this.#price;
    }
    set setSize(size){
        if(size > 16 && size < 50){
            this.#size = size;
        }else{
            console.log("Enter correct data");
        }

    }
}
let shoes = new Shoes("sqdw", 34, "sadqww", 4646);
console.log(shoes);



//сотрудник

class Coworker {
    #name;
    #lastName;
    #dOb;
    #educ;
    #sex;
    #hiringDate;
    #nationality;
    #speciality;
    constructor(name, lastName, dOb, educ, sex, hiringDate, nationality, speciality) {
        this.#name = name;
        this.#lastName = lastName;
        this.#dOb = dOb;
        this.#educ = educ;
        this.#sex = sex;
        this.#hiringDate = hiringDate;
        this.#nationality = nationality;
        this.#speciality = speciality;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get getName(){
        return this.#name;
    }
    get experience(){
        let a = 2020 - this.#hiringDate;
        return a;
    }
    get age(){
        let b = 2020 - this.#dOb;
        return b;
    }
}
let coworker = new Coworker("Ted", "Kaczynski", 1942, "PhD", "male", 2003, "american", "technical leader");
console.log(coworker);


