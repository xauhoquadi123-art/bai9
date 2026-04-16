class Apple {
    #khoiluong;

    constructor() {
        this.#khoiluong = 10
    }

    getWeight() {
        return this.#khoiluong;
    }

    decreaseWeight() {
        if (this.#khoiluong > 0) {
            return this.#khoiluong = this.#khoiluong - 1;
        }
    }

    isEmpty() {
        return this.#khoiluong === 0;
    }
}

class Human {
    #Name;
    #Gender;
    #Weight;

    constructor(ten, gioitinh, cannang) {
        this.#Name = ten;
        this.#Gender = gioitinh;
        this.#Weight = cannang;

    }

    getName() {
        return this.#Name;
    }

    getGender() {
        return this.#Gender;
    }

    getWeight() {
        return this.#Weight;
    }

    say(caunoi) {
        console.log(caunoi);
    }

    checkApple(quatao) {
        return quatao.isEmpty()
    }

    eat(quatao) {
        if (this.checkApple(quatao) === false) {
            quatao.decreaseWeight();
            this.#Weight = this.#Weight + 1;
        } else {
            console.log("Táo đã hết, không ăn được nữa");
        }
    }


}
let myApple = new Apple();
let adam = new Human("Adam","Nam",70);
let eva = new Human("Eva","Nữ",50);
while (myApple.isEmpty() === false) {
    adam.say("Adam: Cho anh chén trước nhá");
    adam.eat(myApple);
    console.log("cân nặng của Adam: "+ adam.getWeight());
    console.log("Khối lượng của quả táo còn: "+ myApple.getWeight());
    console.log("           ")
    if ( myApple.isEmpty() === true) {
        break;
    }eva.say("Eva: Tới em cắn một miếng rồi ");
    eva.eat(myApple);
    console.log("cân nặng của Eva: "+ eva.getWeight());
    console.log("Khối lượng của quả táo còn: "+ myApple.getWeight());
    console.log("           ")
}console.log("Quả táo đã hết: the and")