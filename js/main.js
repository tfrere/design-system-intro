
      var impress = impress().init();
      var startTime = moment(new Date());
      var isFullScreen = false;
      var smallPartIndex = 0;
      const confetti = new ConfettiCannon();

      if ("ontouchstart" in document.documentElement) {
        document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
      }

      var toggleFullScreen = function() {
        var el = document.documentElement;
        isFullScreen = !isFullScreen;
        if(isFullScreen) {
          if (el.requestFullscreen)
            el.requestFullscreen();
          else if (el.mozRequestFullScreen)
            el.mozRequestFullScreen();
          else if (el.webkitRequestFullScreen)
            el.webkitRequestFullScreen();
          else if (el.msRequestFullscreen)
            el.msRequestFullscreen();
        }
        else {
          if (document.exitFullscreen)
            document.exitFullscreen();
          else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
          else if (document.webkitCancelFullScreen)
            document.webkitCancelFullScreen();
          else if (document.msExitFullscreen)
            document.msExitFullscreen();
        }
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

          if($("#step-20.active")) {
            // confetti.addConfettiParticles(50, 40, 5000, 0, 0);
            // confetti.addConfettiParticles(50, 90, 5000, $(window).width(), 0);
            // confetti.addConfettiParticles(50, 240, 5000, $(window).width(), $(window).height());
            // confetti.addConfettiParticles(50, 300, 5000, 0, $(window).height());
          }

        }, 3500);
      }

      $(".sunburst").addClass("-hidden");

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
          stepAction();
          break;
          case 38:
          stepAction();
          console.log(" Up");
          //confetti.addConfettiParticles(10, 40, 1000, 500, 380);

          return false;
          break;
          case 39:
          console.log(" Right");
          stepAction();
          break;
          case 40:
          console.log(" Down");
          stepAction();
          return false;
          break;
        }
      }
