function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


let oldScrollTopPosition = 0;
let width = $(window).width()

if (width >= 780){
    window.onscroll = () => {
        const scrollTopPosition = document.documentElement.scrollTop;
        if (oldScrollTopPosition > scrollTopPosition){
            $('.header').removeClass('hide')
        }else{
            $('.header').addClass('hide')
        }
        oldScrollTopPosition = scrollTopPosition;
    }
}






let col = 0
$(window).on('scroll', function(e){
    let scroll = $(this).scrollTop()
    if (scroll >= 500){
        if (col == 0){
            col++
            $('.social__body').addClass('active')
        }else{

        }
    }
})
$('.social__open').on('click', function(){
    $('.social__body').addClass('active')
})

$('.close__social').on('click', function(e){
    $('.social__body').removeClass('active')
})

$('.main__body-cap-circle button').on('click', function(e){
    $(this).next('.main__body-cap-circle-info').toggleClass('active')
})





document.querySelectorAll(".popular__body-caption").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.popular__body-caption-bot');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.popular__body-caption-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.popular__body-caption').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.popular__body-caption-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.popular__body-caption').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})
document.querySelectorAll(".franchising__lists-main").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.franchising__lists-main-bot');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.franchising__lists-main-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.franchising__lists-main').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.franchising__lists-main-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.franchising__lists-main').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})
$(document).ready(function() {
    $('.station__bottom-block-item').on('mousemove', function(e) {
        var $childImg = $(this).find('.hover__img');
        $(this).children('img').addClass('active')
        $childImg.css({
            top: e.pageY - $(this).offset().top + -128.5,
            left: e.pageX - $(this).offset().left + -223
        });
    }).on('mouseout', function() {
        $(this).children('.hover__img').removeClass('active')
    });
    $('.franchising__bottom-block-item').on('mousemove', function(e) {
        var $childImg = $(this).find('.hover__img');
        $(this).children('img').addClass('active')
        $childImg.css({
            top: e.pageY - $(this).offset().top + -128.5,
            left: e.pageX - $(this).offset().left + -223
        });
    }).on('mouseout', function() {
        $(this).children('.hover__img').removeClass('active')
    });
});

$('.open__merch').on('click', function(e){
    $(this).next('.merch__body-block-slide-modal').addClass('active')
    setTimeout(() => {
        $(this).next('.merch__body-block-slide-modal').children('.merch__body-block-slide-modal-main').addClass('active')
    }, 500);
})
$('.close__merch').on('click', function(e){
    $('.merch__body-block-slide-modal-main').removeClass('active')
    $('.merch__modal-body').removeClass('active')
    setTimeout(() => {
    $('.merch__body-block-slide-modal').removeClass('active')
    $('.merch__modal').removeClass('active')
    }, 300);
})

$('.order__button').on('click', function(e){
    $('.merch__body-block-slide-modal-main').removeClass('active')
    setTimeout(() => {
        $('.merch__body-block-slide-modal').removeClass('active')
        $('.merch__modal').addClass('active')
        }, 300);
        setTimeout(() => {
            $('.merch__modal-body').addClass('active')
        }, 500);
})

if (width >= 780){
    $(document).ready(function(){
        $(document).mousemove(function(e){
        $('.reviews__wrap').each(function(){
            var pos = $(this).offset()
            var elem_left = pos.left;
            var elem_top = pos.top;
            var Xinner = e.pageX - elem_left;
            var Yinner = e.pageY - elem_top;
            $(this).css({
                transform: `translate(${-Xinner/25}px , ${-Yinner/25}px)`,
            });
        })
        $('.pink__bubble').each(function(){
            var pos = $(this).offset()
            var elem_left = pos.left;
            var elem_top = pos.top;
            var Xinner = e.pageX - elem_left;
            var Yinner = e.pageY - elem_top;
            $(this).css({
                transform: `translate(${Xinner/15}px , ${Yinner/15}px)`,
            });
        })
        $('.green__bubble').each(function(){
            var pos = $(this).offset()
            var elem_left = pos.left;
            var elem_top = pos.top;
            var Xinner = e.pageX - elem_left;
            var Yinner = e.pageY - elem_top;
            $(this).css({
                transform: `translate(${-Xinner/15}px , ${-Yinner/15}px)`,
            });
        })
        $('.about__body-bubble-low').each(function(){
            var pos = $(this).offset()
            var elem_left = pos.left;
            var elem_top = pos.top;
            var Xinner = e.pageX - elem_left;
            var Yinner = e.pageY - elem_top;
            $(this).css({
                transform: `translate(${Xinner/15}px , ${Yinner/15}px)`,
            });
        })
        $('.about__body-bubble-medium').each(function(){
            var pos = $(this).offset()
            var elem_left = pos.left;
            var elem_top = pos.top;
            var Xinner = e.pageX - elem_left;
            var Yinner = e.pageY - elem_top;
            $(this).css({
                transform: `translate(${-Xinner/30}px , ${-Yinner/30}px)`,
            });
        })
        var pos = $('.about__body-bubble-low').offset();
        var posTwo = $('.about__body-bubble-sobig').offset();
        var elem_left = pos.left;
        var elem_top = pos.top;
        var elem_leftTwo = posTwo.left;
        var elem_topTwo = posTwo.top;
        var Xinner = e.pageX - elem_left;
        var Yinner = e.pageY - elem_top;
        var XinnerTWo = e.pageX - elem_leftTwo;
        var YinnerTwo = e.pageY - elem_topTwo;
        $('.about__body-bubble-sobig').css({
            transform: `translate(${Xinner/50}px , ${-Yinner/50}px)`,
        });
        $('.about__body-bubble-big').css({
            transform: `translate(${-XinnerTWo/50}px , ${YinnerTwo/50}px)`,
        });
        });
    });
}


SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 45,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 100,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})

$('.burger').on('click', function(e){
    $('.header').toggleClass('active')
    $(this).toggleClass('active')
    $('body').toggleClass('hidden')
})
// Animation


$(window).on('load', function(){
    $('.catalog__body-nav-text .all').text(`${$('.catalog__item').length}`)
})
if (width >= 780){
    const controller = new ScrollMagic.Controller();
    if (document.querySelector('.catalog')){
        const sections = document.querySelectorAll('.catalog__body-item');
        const paginationDots = document.querySelectorAll('.catalog__body-nav-dot');
        const paginationNum = document.querySelector('.catalog__body-nav-text span');
        const parentSection  = document.querySelector('.catalog');
        const timeline = gsap.timeline();
        sections.forEach((section, index) => {
            timeline.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
            });
        });
        
        new ScrollMagic.Scene({
            triggerElement: parentSection,
            triggerHook: 'onLeave',
            duration: "300%" 
            })
            .setPin(parentSection)
            .setTween(timeline)
            .addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: parentSection,
            triggerHook: 'onLeave',
            duration: "300%"
        })
            .on("progress", (event) => {
            const progress = event.progress;
            const activeIndex = Math.floor(progress * sections.length);
        
            paginationDots.forEach(dot => dot.classList.remove('active'));
            if (paginationDots[activeIndex]) {
                paginationDots[activeIndex].classList.add('active');
                $('.catalog__body-nav-text span').text(`${activeIndex + 1}`)
            }
            })
            .addTo(controller);
    }
    
    
        const timelineLine = new TimelineMax();
    
    // Добавляем анимации в timeline
    timelineLine
      .to('.one__line', { x: '-35.3%', duration: 2 }, 0) // Анимация для первого элемента
      .to('.two__line', { x: '35.3%', duration: 2 }, 0); // Анимация для второго элемента (начинается одновременно с первой)
    
    // Создаем сцену ScrollMagic
    const scene = new ScrollMagic.Scene({
      triggerElement: '.station', // Элемент, который будет триггером
      duration: 2000,             // Длина сцены в пикселях
      triggerHook: 'onLeave'           // Точка срабатывания (0.5 - середина экрана)
    })
    .setPin('.station')
    .setTween(timelineLine)           // Привязываем временную шкалу к сцене
    .addTo(controller);
    
    
    const timelineLineFran = new TimelineMax();
    
    timelineLineFran
      .to('.fran__one', { x: '-194.5%', duration: 2 }, 0) // Анимация для первого элемента
      .to('.fran__two', { x: '5.5%', duration: 2 }, 0); // Анимация для второго элемента (начинается одновременно с первой)
    
    // Создаем сцену ScrollMagic
    const sceneFran = new ScrollMagic.Scene({
      triggerElement: '.franchising__soft', // Элемент, который будет триггером
      duration: 1000,             // Длина сцены в пикселях
      triggerHook: 'onEnter'           // Точка срабатывания (0.5 - середина экрана)
    })
    .setTween(timelineLineFran)           // Привязываем временную шкалу к сцене
    .addTo(controller);
}


if (document.querySelector('.merch__slider-modal')){
    console.log(1)
    $('.merch__slider-modal').each(function(e) {
        let splider = new Splide(this, {
            type : 'loop',
            pagination: false,
            arrows: false
        })
        var bar    = splider.root.querySelector( '.my-slider-progress-bar' );
        splider.on( 'mounted move', function () {
            var end  = splider.Components.Controller.getEnd() + 1;
            var rate = Math.min( ( splider.index + 1 ) / end, 1 );
            bar.style.width = String( 100 * rate ) + '%';
        } );
        splider.mount();
    })
}
    

    //Lines Mob
    if (document.querySelector('.lines')){
        console.log(1)
        var splideLine = new Splide( '.lines', {
            type : 'loop',
            pagination: false,
            perMove: 1,
            arrows: false
        } );
        var barLine    = splideLine.root.querySelector( '.my-slider-progress-bar' );
        splideLine.on( 'mounted move', function () {
                var end  = splideLine.Components.Controller.getEnd() + 1;
                var rate = Math.min( ( splideLine.index + 1 ) / end, 1 );
                barLine.style.width = String( 100 * rate ) + '%';
            } );
        splideLine.mount();
    }
    


    // Station Mob
    if (document.querySelector('.station__splide')){
        console.log(1)
        var splideStation = new Splide( '.station__splide', {
            type : 'loop',
            pagination: false,
            perMove: 1,
            arrows: false
        } );
        var barStation    = splideStation.root.querySelector( '.my-slider-progress-bar' );
        splideStation.on( 'mounted move', function () {
                var end  = splideStation.Components.Controller.getEnd() + 1;
                var rate = Math.min( ( splideStation.index + 1 ) / end, 1 );
                barStation.style.width = String( 100 * rate ) + '%';
            } );
        splideStation.mount();
    }
    

    // Francising MObile
    if (document.querySelector('.fran__slider')){
        console.log(1)
        var splideFran = new Splide( '.fran__slider', {
            pagination: false,
            type : 'loop',
            perMove: 1,
            arrows: false
        } );
        var barFran    = splideFran.root.querySelector( '.my-slider-progress-bar' );
        splideFran.on( 'mounted move', function () {
                var end  = splideFran.Components.Controller.getEnd() + 1;
                var rate = Math.min( ( splideFran.index + 1 ) / end, 1 );
                barFran.style.width = String( 100 * rate ) + '%';
            } );
        splideFran.mount();
    }
    

    //Catalog
    if (document.querySelector('.catalog__slider')){
        console.log(1)
        var splideCatalog = new Splide( '.catalog__slider', {
            perPage: 1,
            perMove: 1,
            type : 'loop',
            pagination: false
        } );
        $(window).on('load', function(e){
            $('.catalog__slider-nav .all').text(`${splideCatalog.length}`)
        })
        splideCatalog.on('move', function(newIndex){
            $('.catalog__slider-nav span').text(`${newIndex + 1}`)
        })
        splideCatalog.mount();
    }
    

    

    //Other Desk

    var splide = new Splide( '.merch__slider-main', {
        perPage: 1,
        type : 'loop',
        pagination: false
    } );
    
    splide.mount();

    var splide = new Splide( '.merch__slider-soft', {
        perPage: 1,
        type : 'loop',
        pagination: false
    } );
    
    splide.mount();