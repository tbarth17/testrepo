// function Character(){
//   this.health = 200;
// }
//
// Character.prototype.getHealth = function() {
// 	return this.health;
// };


// Batman

function Batman() {
	this.name = "Batman";
	this.health = 1500;
}

Batman.prototype.getHealth = function () {
  return this.health ;
};

Batman.prototype.getName = function () {
  return this.name;
};

Batman.prototype.batarangAttack = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*30) + 60));
};

Batman.prototype.punchAttack = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*50) + 100));
};

Batman.prototype.kickAttack = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*70) + 140));
};

function batarang(enemy) {
  hit = Math.floor(Math.random()*10);
  if (hit >= 3) {
      console.log('Batman hit with the batarang');
      return batman.batarangAttack(enemy) ;
    } else {
      console.log("Batman missed");
    }
};

function punch(enemy) {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      console.log('Batman punched');
      return batman.punchAttack(enemy) ;
    } else {
      console.log("Batman missed");
    }
};

function kick(enemy) {
  hit = Math.floor(Math.random()*10);
  if (hit >= 5) {
      console.log('Batman kicked');
      return batman.batarangAttack(enemy) ;
    } else {
      console.log("Batman missed");
    }
}

// Yeti

function Yeti() {
	this.name = "Yeti";
	this.health = 2000;
}

Yeti.prototype.getHealth = function () {
  return this.health ;
};

Yeti.prototype.getName = function () {
  return this.name;
};

Yeti.prototype.bashAttack = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*20) + 40));
};

Yeti.prototype.smashAttack = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*40) + 80));
};

Yeti.prototype.pummelAttack = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*60) + 120));
};

function bash(enemy) {
  hit = Math.floor(Math.random()*10);
  if (hit >= 3) {
      console.log('Yeti bashed!');
      return yeti.bashAttack(enemy) ;
    } else {
      console.log("Yeti missed!");
    }
};

function smash(enemy) {
  hit = Math.floor(Math.random()*10);
  if (hit >= 4) {
      console.log('Yeti smashed!');
      return yeti.smashAttack(enemy) ;
    } else {
      console.log("Yeti missed!");
    }
};

function pummel(enemy) {
  if (hit >= 5) {
      console.log('Yeti pummeled!');
      return batman.batarangAttack(enemy) ;
    } else {
      console.log("Yeti missed!");
    }
}

// Jackaloupe

function Jackaloupe() {
	this.name = "Jackaloupe";
	this.health = 1000;
}

Jackaloupe.prototype.getHealth = function () {
  return this.health ;
};

Jackaloupe.prototype.getName = function () {
  return this.name;
};

Jackaloupe.prototype.stabAttack = function (enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*50) + 90));
};

Jackaloupe.prototype.maulAttack = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*70) + 140));
};

Jackaloupe.prototype.flyingRabbitKickAttack = function(enemy) {
  enemy.health = (enemy.health - (Math.floor(Math.random()*90) + 190));
};
