


gsap.registerPlugin(Draggable, ScrollTrigger);


var tl = new TimelineMax({
    paused: true
}).to("#rydersock", .5, {
    y: 130,
    ease: Linear.easeNone
}, 0).to("#ryderpockin", .5, {
    y: 110,
    opacity: 0,
    ease: Linear.easeNone
}, 0).to("#ryderdrag", .5, {
    y: 120,
    ease: Linear.easeNone
}, 0)


var rydercuping = new TimelineMax({
    paused: true
}).to(".sweet-container .drink", 1, {
    backgroundPositionY: '0px',
    ease: SteppedEase.config(20),
}, 0)

let widthDevise = $(window).width()

let globalProgress = 0;

function updateProgress(progress) {
  globalProgress = progress;
  tl.progress(globalProgress);
  rydercuping.progress(globalProgress);
}
const $draggable = Draggable.create("#ryderfakedrag", {
    type: "rotation",
    trigger: "#ryderdrag",
    throwProps: true,
    bounds: {
      minX: 0,
      maxX: 90,
    },
    onDrag: function () {
      const progress = Math.abs(this.rotation / 90);
      updateProgress(progress);
    },
    onDragStart: function () {
      // Логика при начале перетаскивания
    },
    onDragEnd: function () {
      if (this.rotation >= 90) {
          innerWrapShow()
      }
    },
  });

if (widthDevise > 780){
    $("#ryderdrag").on("mousemove", function (e) {

        var offsetX = e.offsetX - $(this).width() / 2;
        var offsetY = e.offsetY - $(this).height() / 2;
    
        TweenMax.to($("#ryderdrag .circle"), .4, {
            x: offsetX,
            y: offsetY,
            onComplete: function() {}
        });
    
        TweenMax.to($("#rydersock .sock"), .1, {
            rotation: offsetX * 0.1,
            onComplete: function() {}
        });
    
    }).on("mouseleave", function () {
        TweenMax.to($("#ryderdrag .circle"), .4, {
            x: 0,
            y: 0,
            onComplete: function() {}
        });
    
        TweenMax.to($("#rydersock .sock"), .1, {
            rotation: 0,
            onComplete: function() {}
        });
    })

    function innerWrapShow() {
        $(window).unbind("mousewheel");
        $(".ryder-outWrap").addClass("is-change");
        let _off = $(".ryder-outWrap").innerHeight()
        setTimeout(() => {
            $.scrollTo( $(".ryder-outWrap"), {
                duration: 1000,
                offset: {top: _off},
                interrupt: true,
            });
            TweenMax.to('.popular', .5, {
                transform: "translate(0%, 0%)",
                onStart: function() {},
                onComplete: function() {},
            });
        }, 1000);
        $(".taste-one, .taste-two, .taste-three, #ryderdrag").fadeOut(500);
    }

// Создаем Draggable




}else{
    ScrollTrigger.create({
        trigger: ".ryder-outWrap",
        start: "top top",
        end: "bottom center",
        scrub: true,
        onUpdate: function (self) {
            const progress = self.progress;
            rydercuping.progress(progress);
            tl.progress(progress);
        },
    });
}















