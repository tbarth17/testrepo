var thug, ruffian, hooligan, yeti, batman, hit, enemy1, enemy2, enemy3, selectedEnemy, selectedHero;
$(function() {
  // thug = new Thug;
  // ruffian = new Ruffian;
  // hoodlum = new Hoodlum;
  // batman = new Batman;
  // yeti = new Yeti;

});

// var hit = Math.floor(Math.random()*5 + 1);

////Generate random enemy////

$('.generate').on('click', function() {
  var hit1 = Math.floor(Math.random()*10);
  if (hit1 <=5) {
    enemy1 = new Hoodlum;
  } else if (8.5>= hit1 && hit1 > 5) {
    enemy1 = new Ruffian;
  } else {
    enemy1 = new Thug;
  }

  var hit2 = Math.floor(Math.random()*10);
  if (hit2 <=5) {
    enemy2 = new Hoodlum;
  } else if (8.5>= hit2 && hit2 > 5) {
    enemy2 = new Ruffian;
  } else {
    enemy2 = new Thug;
  }

  var hit3 = Math.floor(Math.random()*10);
  if (hit3 <=5) {
    enemy3 = new Hoodlum;
  } else if (8.5>= hit3 && hit3 > 5) {
    enemy3 = new Ruffian;
  } else {
    enemy3 = new Thug;
  }

  console.log(enemy1);
  console.log(enemy2);
  console.log(enemy3);
});

////Select Hero////

$('.batman').on('click', function() {
  selectedHero = new Batman;
  console.log(selectedHero);
});

$('.yeti').on('click', function() {
  selectedHero = new Yeti;
  console.log(selectedHero);
});

$('.jackaloupe').on('click', function() {
  selectedHero = new Jackaloupe;
  console.log(selectedHero);
});

////Select Enemies////

$('.enemy1').on('click', function() {
  selectedEnemy = enemy1;
  console.log(selectedEnemy);
})

$('.enemy2').on('click', function() {
  selectedEnemy = enemy2;
  console.log(selectedEnemy);
})

$('.enemy3').on('click', function() {
  selectedEnemy = enemy3;
  console.log(selectedEnemy);
})

////Enemies random attack functions////

function randomThugAttack(hero){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    beat(hero);
  } else if (8.5>= attack && attack > 5) {
    club(hero);
  } else {
    bludgeon(hero);
  }

}

function randomRuffianAttack(hero){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    knife(hero);
  } else if (8.5>= attack && attack > 5) {
    pummel(hero);
  } else {
    cudgel(hero);
  }

}

function randomHooliganAttack(hero){
  var attack = Math.floor(Math.random()*10);
  if (attack <=5) {
    pocketKnife(hero);
  } else if (8.5>= attack && attack > 5) {
    baton(hero);
  } else {
    shank(hero);
  }

}

function enemy1RandomRetaliation() {
  if (enemy1 instanceof Thug) {
    randomThugAttack();
  } else if (enemy1 instanceof Ruffian){
    randomRuffianAttack();
  } else {
    randomHooliganAttack();
  }
}

function enemy2RandomRetaliation() {
  if (enemy2 instanceof Thug) {
    randomThugAttack();
  } else if (enemy2 instanceof Ruffian){
    randomRuffianAttack();
  } else {
    randomHooliganAttack();
  }
}

function enemy3RandomRetaliation() {
  if (enemy3 instanceof Thug) {
    randomThugAttack();
  } else if (enemy3 instanceof Ruffian){
    randomRuffianAttack();
  } else {
    randomHooliganAttack();
  }
}


////Batman////


  $('.punch').on ('click', function() {
    console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());
    console.log(selectedHero.name + ': ' + selectedHero.getHealth());
    punch(selectedEnemy);
console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());

    setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
    }, 500);
  });

$('.kick').on ('click', function() {
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  kick(selectedEnemy);
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
  }, 500);
});

$('.batarang').on ('click', function() {
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  batarang(selectedEnemy);
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
  }, 500);
});

/////Yeti////

$('.bash').on ('click', function() {
  console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  bash(selectedEnemy);
console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
  }, 500);
});

$('.smash').on ('click', function() {
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  smash(selectedEnemy);
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
}, 500);
});

$('.whallop').on ('click', function() {
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  whallop(selectedEnemy);
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
}, 500);
});

////Jackaloupe////
$('.stab').on ('click', function() {
  console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  stab(selectedEnemy);
console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
  }, 500);
});

$('.maul').on ('click', function() {
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  maul(selectedEnemy);
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
}, 500);
});

$('.flyingRabbitKick').on ('click', function() {
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());
  console.log(selectedHero.name + ': ' + selectedHero.getHealth());
  flyingRabbitKick(selectedEnemy);
  console.log(selectedEnemy.name + ': ' + selectedEnemy.getHealth());

  setTimeout(function() {
      selectedEnemy = enemy1;
      console.log('enemy1 ' + selectedEnemy.name);
      enemy1RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy2;
      console.log('enemy2 ' + selectedEnemy.name);
      enemy2RandomRetaliation();
      console.log(selectedHero.health);
      selectedEnemy = enemy3;
      console.log('enemy3 ' + selectedEnemy.name);
      enemy3RandomRetaliation();
      console.log(selectedHero.health);
}, 500);
});
