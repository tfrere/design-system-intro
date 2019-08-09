
var impress = impress().init();
var startTime = moment(new Date());
var isFullScreen = false;
var smallPartIndex = 0;
var currentStepIndex = 0;
var totalStepIndex = $(".step").length;

var toRoman = function(num) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (num%decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result + ".";
}

var increaseCounter = function(index) {
  if ()
  // $(".step-count").addClass("step-count--forward");
  window.setTimeout(function() {
    console.log(index);
  }, 250);
  // $(".step-count .step-count__future").text(toRoman(index + 1));

}

var hasBegun = false;
var rootElement = document.getElementById( "impress" );
rootElement.addEventListener( "impress:stepenter", function(event) {
  var currentStep = event.target;
  var index = currentStep.id.replace( /^\D+/g, '');
  currentStepIndex++;

  if(!hasBegun && index != 1) {
    hasBegun = true;
    $(".step-count").addClass("step-count--visible");
  }

  console.log("part", currentStep.part);

  window.setTimeout(function(){
    if (currentStep.id && currentStep.part)
      $(".step-count .step-count__past, .step-count .step-count__present").text(toRoman(currentStep.part));
  }, 500);

  stepAction();
  console.log( "Entered the Step Element '" + currentStep.id + "'", currentStep );
});


// DRAW TITLE
var tl = new TimelineMax();
var shapes = $("#designsystem path");
var logo = $("#designsystem");
tl.stop();
tl.from(shapes, 0, {drawSVG:0});
tl.to(logo, 1, {className: '+=full'});
tl.staggerFromTo(shapes, 10, {drawSVG:"0%"}, {drawSVG:"100%"}, 0.70);
// tl.staggerFromTo(shapes, 3, {drawSVG:"100%"}, {drawSVG:"0%"}, 0.10);
// tl.staggerFromTo(shapes, 3, {drawSVG:"0%"}, {drawSVG:"100%"}, 0.10);
// tl.staggerFromTo(shapes, 3, {drawSVG:"100%"}, {drawSVG:"0%"}, 0.10);

tl.play();

// CONFETTIS
const confetti = new ConfettiCannon();

if ("ontouchstart" in document.documentElement) {
  document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
}

$(document).ready(function(){
  $("#fullscreen").click(function(){
    toggleFullScreen();
  });

  $(".count-to-0-1").change(function() {
    console.log(1);
    $(".count-to-0-1").counter({
      autoStart: true,
      duration: 2500,
      countFrom: 0,
      countTo: 4,
      runOnce: false,
      placeholder: "0",
      easing: "easeOutExpo",
      numberFormatter: function(number) {
        return numberWithSpaces( number );
      }
    });
  });

  // $(".count-to-0-0").counter({
  //   autoStart: true,
  //   duration: 2500,
  //   countFrom: 0,
  //   countTo: 50,
  //   runOnce: true,
  //   placeholder: "0",
  //   easing: "easeOutExpo",
  //   numberFormatter: function(number) {
  //     return "~" + numberWithSpaces( number );
  //   }
  // });
  //
  // $(".count-to-0-2").counter({
  //   autoStart: true,
  //   duration: 2500,
  //   countFrom: 0,
  //   countTo: 4,
  //   runOnce: true,
  //   placeholder: "0",
  //   easing: "easeOutExpo",
  //   numberFormatter: function(number) {
  //     return numberWithSpaces( number );
  //   }
  // });
  // $(".count-to-0-3").counter({
  //   autoStart: true,
  //   duration: 2500,
  //   countFrom: 0,
  //   countTo: 1,
  //   runOnce: true,
  //   placeholder: "0",
  //   easing: "easeOutExpo",
  //   numberFormatter: function(number) {
  //     return numberWithSpaces(number);
  //   }
  // });
  // $(".count-to-0-4").counter({
  //   autoStart: true,
  //   duration: 2500,
  //   countFrom: 0,
  //   countTo: 1,
  //   runOnce: true,
  //   placeholder: "~0M",
  //   easing: "easeOutExpo",
  //   numberFormatter: function(number) {
  //     return "~" + numberWithSpaces(number) + "M";
  //   }
  // });

});

var numberWithSpaces = function(x) {
  return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

var stepAction = function() {
  window.setTimeout(function() {

    if($("#step-23.active:not(.future)").length) {
      console.log(1);
      confetti.addConfettiParticles(50, 40, 5000, 0, 0);
      confetti.addConfettiParticles(50, 90, 5000, $(window).width(), 0);
      confetti.addConfettiParticles(50, 240, 5000, $(window).width(), $(window).height());
      confetti.addConfettiParticles(50, 300, 5000, 0, $(window).height());
    }

  }, 1500);
}


$("body").keydown(function (event) {
  keyReport(event);
});

function keyReport(event) {
  if (event.which == 10 || event.which == 13) {
    event.preventDefault();
  }
  switch (event.which) {
    case 0:
    console.log("event.which not sure");
    break;
    case 32:
    console.log(" Spacebar");
    break;
    case 13:
    console.log(" Enter");
    break;
    case 27:
    console.log(" Escape");
    break;
    case 35:
    console.log(" End");
    break;
    case 36:
    console.log(" Home");
    break;
    case 37:
    console.log(" Left");
    break;
    case 38:
    console.log(" Up");
    return false;
    break;
    case 39:
    console.log(" Right");
    break;
    case 40:
    console.log(" Down");
    return false;
    break;
  }
}
