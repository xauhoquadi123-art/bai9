class Dongvat {
    constructor(name, volume, speed) {
        this.name = name;
        this.volume = volume;
        this.speed = speed;
    }
    say(){}
}
class Rat extends Dongvat {
    constructor(name, volume, speed, isAlive) {
        super(name, volume, speed);
        this.isAlive = isAlive;
    }
   say(){
       alert("chít chít");
   }
}
class Cat extends Dongvat {
    say() {
       alert("meo meo")
    }catchMouse(conchuot){
        if (conchuot.speed<this.speed){
            alert("bắt được rồi chuột rồi")

        }else {
            alert("đố anh bắt đc em")
        }

    }
    eatMouse(conchuot){
        if (conchuot.isAlive === true){
            this.volume = this.volume+conchuot.volume
            alert("mèo ăn chuột cân năng của mèo là " + this.volume)
            conchuot.isAlive = false
        }
    }

}
let jerry = new Rat("Jerry",1, 25, true);
jerry.say();
let tom = new Cat("Tom", 3, 40)
tom.say();
tom.catchMouse(jerry)
tom.eatMouse(jerry)
