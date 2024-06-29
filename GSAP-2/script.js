// gsap.from("#page1 #box", {
//     scale: 0,
//     duration: 1.5,
//     delay: 0.5
// })
// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 1.5,
//     rotate:270,
//     borderRadius:"50%",
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2
//     },


// })

// When we used 'pin' in gsap always trigger the parent element
gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})

