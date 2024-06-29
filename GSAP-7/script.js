function section1Animation() {
    var tl = gsap.timeline();

    // Nav Animation
    tl.from("nav h1, #part2 a ", {
        y: -35,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.15
    })

    // Center animation
    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.6
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part1 a", {
        opacity: 0,
        duration: 0.5
    })

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.5")

    // section1Bottom
    tl.from(".section1Bottom img", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15
    })
}

section1Animation();

function section2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 100%",
            end: "top 0%",
            scrub: 2,

        }
    })

    tl2.from(".services", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })

    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "line1")

    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "line1")
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "line2")

    tl2.from(".elem.line2.right", {
        x: 200,
        opacity: 0,
        duration: 1
    }, "line2")
}

section2Animation();

function section3Animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            // markers: true,
            start: "top 75%",
            end: "top 0%",
            scrub: 2,

        }
    })

    tl3.from(".things h2", {
        x: -200,
        opacity: 0,
        duration: 0.5
    })
    tl3.from(".things p", {
        x: -200,
        opacity: 0,
        duration: 0.5
    })
    tl3.from(".things a", {
        opacity: 0,
        duration: 0.5
    })
    tl3.from(".things-img img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.5")

    tl3.from(".section3-services", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    }, "-=0.3")

    tl3.from(".footer p, .footer h4", {
        y: -40,
        // delay:0.5,
        duration: 1,
        stagger: 0.3,
        opacity: 0

    })
}

section3Animation();