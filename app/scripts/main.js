var thug, batman, hit;
$(function() {
  thug = new Thug;
  batman = new Batman;
  console.log(thug);
  console.log(batman);
});

// var hit = Math.floor(Math.random()*5 + 1);

function batarang(enemy) {
  if (hit > 3) {
      return batman.batarangAttack(enemy) ;
    } else {
      console.log("you missed");
    }
}

function club(hero) {
  if (hit > 3) {
      return thug.clubAttack(hero) ;
    } else {
      console.log("you missed");
    }
}

$('.attack').on ('click', function() {
  hit = Math.floor(Math.random()*10);
  console.log(thug.getHealth());
  console.log(batman.getHealth());
  console.log(batarang(thug));
  console.log(thug.getHealth());
});

$('.thugAttack').on ('click', function() {
  hit = Math.floor(Math.random()*10);
  console.log(batman.getHealth());
  console.log(thug.getHealth());
  console.log(club(batman));
  console.log(batman.getHealth());
});
