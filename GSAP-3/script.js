let initialPath = `M 10 100 Q 500 100 990 100`;
let FinalPath = `M 10 100 Q 500 100 990 100`;

let string = document.getElementById("string");

string.addEventListener("mousemove", function (dets) {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    // Now i have to move svg i.e. through gsap
    gsap.to("svg path", {
        attr: {
            d: initialPath,
        },
        duration: 0.3,
        ease: "power3.out",
        
    });
});
string.addEventListener("mouseleave", function (dets) {
    gsap.to("svg path", {
        attr: {
            d: FinalPath,
        },
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    });
});
