var thug, ruffian, hooligan, yeti, batman, hit, enemy1, enemy2, enemy3, selectedEnemy;
$(function() {
  thug = new Thug;
  ruffian = new Ruffian;
  hoodlum = new Hoodlum;
  batman = new Batman;
  yeti = new Yeti;

});

// var hit = Math.floor(Math.random()*5 + 1);



function club(hero) {
  hit = Math.floor(Math.random()*10);
  if (hit > 3) {
      console.log('Thug hit you with a club');
      return thug.clubAttack(hero);
    } else {
      console.log("Thug missed");
    }
}

$('.generate').on('click', function() {
  hit1 = Math.floor(Math.random()*10);
  if (hit1 <=5) {
    enemy1 = new Hoodlum;
  } else if (8>= hit > 5) {
    enemy1 = new Ruffian;
  } else {
    enemy1 = new Thug;
  }

  hit2 = Math.floor(Math.random()*10);
  if (hit2 <=5) {
    enemy2 = new Hoodlum;
  } else if (8>= hit > 5) {
    enemy2 = new Ruffian;
  } else {
    enemy2 = new Thug;
  }

  hit3 = Math.floor(Math.random()*10);
  if (hit3 <=5) {
    enemy3 = new Hoodlum;
  } else if (8>= hit > 5) {
    enemy3 = new Ruffian;
  } else {
    enemy3 = new Thug;
  }

  console.log(enemy1);
  console.log(enemy2);
  console.log(enemy3);
});

////Enemies////

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


////Batman////


  $('.punch').on ('click', function() {
    console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());
    console.log('Batman: ' + batman.getHealth());
    punch(selectedEnemy);
console.log(selectedEnemy.name + ': ' +  selectedEnemy.getHealth());

    setTimeout(function() {
      console.log('Thug attacks back');
      console.log('Batman: ' + batman.getHealth());
      console.log('Thug: ' + thug.getHealth());
      club(batman);
      console.log('Batman: ' + batman.getHealth());
    }, 500);
  });

$('.kick').on ('click', function() {
  console.log('Thug: ' + thug.getHealth());
  console.log('Batman: ' + batman.getHealth());
  kick(thug);
  console.log('Thug: ' + thug.getHealth());

  setTimeout(function() {
    console.log('Thug attacks back');
    console.log('Batman: ' + batman.getHealth());
    console.log('Thug: ' + thug.getHealth());
    club(batman);
    console.log('Batman: ' + batman.getHealth());
  }, 500);
});

$('.batarang').on ('click', function() {
  console.log('Thug: ' + thug.getHealth());
  console.log('Batman: ' + batman.getHealth());
  batarang(thug);
  console.log('Thug: ' + thug.getHealth());

  setTimeout(function() {
    console.log('Thug attacks back');
    console.log('Batman: ' + batman.getHealth());
    console.log('Thug: ' + thug.getHealth());
    club(batman);
    console.log('Batman: ' + batman.getHealth());
  }, 500);
});

/////Yeti////
//
// $('.bash').on ('click', function() {
//   hit = Math.floor(Math.random()*10);
//   console.log('Thug: ' + thug.getHealth());
//   console.log('Batman: ' + batman.getHealth());
//   batarang(thug);
//   console.log('Thug: ' + thug.getHealth());
//
//   setTimeout(function() {
//     hit = Math.floor(Math.random()*10);
//     console.log('Thug attacks back');
//     console.log('Batman: ' + batman.getHealth());
//     console.log('Thug: ' + thug.getHealth());
//     club(batman);
//     console.log('Batman: ' + batman.getHealth());
//   }, 500);
// });
