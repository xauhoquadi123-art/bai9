function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left); }
        this.moveLeft = function (){
            this.left -= this.speed;
            console.log('ok: ' + this.left);
        }
        this.moveDown = function(){
            this.top += this.speed;
            console.log('ok: ' + this.top);
        }
        this.moveUp = function(){
            this.top-= this.speed;
            console.log('ok: ' + this.top);
        }


}

var hero = new Hero('soc.png', 20, 30, 200, 100);

function start(){
    var maxWidth = window.innerWidth - hero.size;
    var maxHeight = window.innerHeight - hero.size;
    if(hero.left < maxWidth && hero.top <= 20){
        hero.moveRight();
    }else if (hero.left >= maxWidth && hero.top <maxHeight){
        hero.moveDown();
    }else if (hero.top >= maxHeight && hero.left > 30){
        hero.moveLeft();
    }else {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}
start();