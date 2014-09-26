var thug, batman, hit;
$(function() {
  thug = new Thug;
  batman = new Batman;
  console.log(thug);
  console.log(batman);
});

// var hit = Math.floor(Math.random()*5 + 1);



function club(hero) {
  if (hit > 3) {
      console.log('Thug hit you with a club');
      return thug.clubAttack(hero);
    } else {
      console.log("Thug missed");
    }
}

$('.punch').on ('click', function() {
  hit = Math.floor(Math.random()*10);
  console.log('Thug: ' + thug.getHealth());
  console.log('Batman: ' + batman.getHealth());
  punch(thug);
  console.log('Thug: ' + thug.getHealth());

  setTimeout(function() {
    hit = Math.floor(Math.random()*10);
    console.log('Thug attacks back');
    console.log('Batman: ' + batman.getHealth());
    console.log('Thug: ' + thug.getHealth());
    club(batman);
    console.log('Batman: ' + batman.getHealth());
  }, 500);
});

$('.kick').on ('click', function() {
  hit = Math.floor(Math.random()*10);
  console.log('Thug: ' + thug.getHealth());
  console.log('Batman: ' + batman.getHealth());
  kick(thug);
  console.log('Thug: ' + thug.getHealth());

  setTimeout(function() {
    hit = Math.floor(Math.random()*10);
    console.log('Thug attacks back');
    console.log('Batman: ' + batman.getHealth());
    console.log('Thug: ' + thug.getHealth());
    club(batman);
    console.log('Batman: ' + batman.getHealth());
  }, 500);
});

$('.batarang').on ('click', function() {
  hit = Math.floor(Math.random()*10);
  console.log('Thug: ' + thug.getHealth());
  console.log('Batman: ' + batman.getHealth());
  batarang(thug);
  console.log('Thug: ' + thug.getHealth());

  setTimeout(function() {
    hit = Math.floor(Math.random()*10);
    console.log('Thug attacks back');
    console.log('Batman: ' + batman.getHealth());
    console.log('Thug: ' + thug.getHealth());
    club(batman);
    console.log('Batman: ' + batman.getHealth());
  }, 500);
});
