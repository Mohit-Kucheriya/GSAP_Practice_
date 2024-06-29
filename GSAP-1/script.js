// gsap.from -> initial to final
// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     backgroundColor:"white",
//     borderRadius:"10%",
//     rotate:360,
//     repeat:-1, // Repeat the animation indefinitely
//     yoyo:true // This property enables the yoyo effect, making the animation reverse on every repeat.
// })

// // gsap.from -> final to initial
// gsap.from("#box2", {
//     x:1000,
//     // y: 50,
//     duration: 2,
//     delay: 1
// })

// gsap.from("h1",{
//     y:30,
//     duration:1,
//     // delay:1,
//     stagger:0.5,
//     opacity:0
// })

// Timeline

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    duration:1,
    delay:0.5,
    opacity:0
})
tl.from("#part2 h4",{
    y:-20,
    duration:1,
    stagger:0.2,
    opacity:0
})
tl.from("h1",{
    x:30,
    duration:1,
    // stagger:0.2,
    opacity:0
})