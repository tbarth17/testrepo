// function Hero() {
//   this.health = 200;
// }
//
// Hero.prototype.getHealth = function () {
//   return this.health ;
// };

/////////THUG////////

    function Thug() {
      this.name = 'Thug';
      this.health = 400;
    }

Thug.prototype.getHealth = function () {
  return this.health ;
};

Thug.prototype.getName = function () {
  return this.name;
};

Thug.prototype.beatAttack = function (hero) {
  hero.health = (hero.health - (Math.floor(Math.random()*15) + 30));
};

Thug.prototype.clubAttack = function(hero) {
  hero.health = (hero.health - (Math.floor(Math.random()*25) + 50));
};

Thug.prototype.bludgeonAttack = function(hero) {
  hero.health = (hero.health - (Math.floor(Math.random()*35) + 70));
};

var thug = new Thug()

function beat(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      console.log('Thug gave you a beatdown!');
      return thug.beatAttack(hero);
    } else {
      console.log("Thug missed");
    }
};

function club(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      console.log('Thug hit you with a club');
      return thug.clubAttack(hero);
    } else {
      console.log("Thug missed");
    }
};

function bludgeon(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      console.log('Thug gave you a bludgeoning!');
      return thug.bludgeonAttack(hero);
    } else {
      console.log("Thug missed");
    }
};

/////////Ruffian////////

    function Ruffian() {
      this.name = 'Ruffian';
      this.health = 300;
    }

Ruffian.prototype.getHealth = function () {
return this.health ;
};

Ruffian.prototype.getName = function () {
return this.name;
};

Ruffian.prototype.knifeAttack = function (hero) {
hero.health = (hero.health - (Math.floor(Math.random()*15) + 25));
};

Ruffian.prototype.pummelAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*20) + 40));
};

Ruffian.prototype.cudgelAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*25) + 60));
};

function knife(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      console.log('Ruffian knifed you!');
      return ruffian.knifeAttack(hero);
    } else {
      console.log("Ruffian missed");
    }
};

function pummel(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      console.log('Ruffian pummeled you!');
      return ruffian.pummelAttack(hero);
    } else {
      console.log("Ruffian missed");
    }
};

function pummel(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      console.log('Ruffian cudgeled you!');
      return ruffian.cudgelAttack(hero);
    } else {
      console.log("Ruffian missed");
    }
};

/////////Hoodlum////////

function Hoodlum() {
  this.name = 'Hoodlum';
  this.health = 200;
}

Hoodlum.prototype.getHealth = function () {
return this.health ;
};

Hoodlum.prototype.getName = function () {
return this.name;
};

Hoodlum.prototype.pocketKnifeAttack = function (hero) {
hero.health = (hero.health - (Math.floor(Math.random()*10) + 15));
};

Hoodlum.prototype.batonAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*20) + 25));
};

Hoodlum.prototype.shankAttack = function(hero) {
hero.health = (hero.health - (Math.floor(Math.random()*30) + 70));
};

function pocketKnife(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      console.log('Hoodlum pocketknifed you!');
      return hoodlum.pocketKnifeAttack(hero);
    } else {
      console.log("Hoodlum missed");
    }
};

function baton(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 4) {
      console.log('Hoodlum hit you with a baton!');
      return hoodlum.batonAttack(hero);
    } else {
      console.log("Hoodlum missed");
    }
};

function shank(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 5) {
      console.log('Hoodlum shanked you!');
      return hoodlum.shankAttack(hero);
    } else {
      console.log("Hoodlum missed");
    }
};
