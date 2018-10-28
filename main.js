var tl = new TimelineMax();

tl.from('#stand', 0.5, { scaleY: 0, transformOrigin: 'bottom', ease: Power2.easeOut })
    .from('#standBack', 0.4, { scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut })
    .from('#monitorBottom', 0.5, { scaleX: 0, transformOrigin: 'center', ease: Bounce.easeOut })
    .from('#monitor', 0.7, { opacity: 0 })
    .from('#orangeBox', 0.3, { scale: 0 })
    .staggerFrom('#group1 > path', 0.2, { scaleX: 0 }, -0.1);

var tl2 = new TimelineMax();

tl2.from('#background', 0.5, { opacity: 0 })
    .from('#table', 0.5, { scaleX: 0, transformOrigin: 'center', ease: Power2.easeOut })
    .from('#tableMini', 0.5, { scaleX: 0, transformOrigin: 'center', ease: Power2.easeOut })
    .from('#minimalStand', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Power1.easeOut })
    .from('#stand2', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Power1.easeOut })
    .from('#monitoBottom2', 0.4, { scaleX: 0, transformOrigin: 'center', ease: Power1.easeOut })
    .from('#monitorCirle', 0.5, { opacity: 0 })
    .from('#borderMonitor', 0.4, { scaleY: 0, transformOrigin: 'center', ease: Power2.easeOut })
    .from('#monitor2', 0.4, { scaleY: 0, transformOrigin: 'center', ease: Power2.easeOut })
    .from('#lampStand', 0.4, { scaleX: 0, transformOrigin: 'center', ease: Bounce.easeOut })
    .from('#lampButton', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Bounce.easeOut })
    .from('#bodyLamp', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Power3.easeOut })
    .from('#orangLampElement', 0.3, { opacity: 0 })
    .from('#orangLampElementWhite', 0.3, { opacity: 0 })
    .from('#lamp', 0.5, { scale: 0 })
    .from('#lastElementLamp', 0.3, { opacity: 0 })
    .from('#shadowLamp', 0.3, { opacity: 0 })
    .from('#bulb', 0.5, { scale: 0 })
    .from('#light', 0.3, { scale: 0 })
    .from('#light2', 0.01, { opacity: 0 });

var tl3 = new TimelineMax();
tl3.from('#redBook', 0.4, { scaleX: 0, transformOrigin: 'right', ease: Bounce.easeOut, delay: 4 })
    .from('#greenBook', 0.4, { scaleX: 0, transformOrigin: 'left', ease: Bounce.easeOut })
    .from('#orangeBook', 0.4, { scaleX: 0, transformOrigin: 'left', ease: Bounce.easeOut })
    .from('#cupPreStand', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Bounce.easeOut })
    .from('#cupStand', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Bounce.easeOut })
    .from('#cup', 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: Bounce.easeOut })
    .from('#lastElementCup', 0.1, { opacity: 0 })
    .from('#shadowCup', 0.1, { opacity: 0 })
    .from('#tea', 0.5, { opacity: 0, x: -100 })
    .from('#shadowTea', 0.2, { opacity: 0 })
    .from('#teaElement', 0.4, { scaleX: 0, transformOrigin: 'left', ease: Bounce.easeOut })
    .from('#teaLine', 0.4, { scaleY: 0, transformOrigin: 'top', ease: Power1.easeOut })
    .from('#teaLineElement', 0.2, { opacity: 0 })
    .from('#shadowTeaLineElement', 0.2, { opacity: 0 })