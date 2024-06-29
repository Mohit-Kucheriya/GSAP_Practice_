var main = document.getElementById("main");
var cursor = document.getElementById("cursor");
var imageDiv = document.getElementById("imageDiv");

// Cursor move,enter,leave
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: Power3,
    });
});
main.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
        opacity: 1,
        ease: Power3,
    });
});

main.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
        opacity: 0,
        ease: Power3,
    });
});

imageDiv.addEventListener("mouseenter", function () {
    // Cursor
    cursor.innerHTML = `View More`;
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: "#d3d3d382",
    });

    // Image
    gsap.to("#imageDiv img", {
        filter: "grayscale(1)",
        duration: 1.2,
    });
});
imageDiv.addEventListener("mouseleave", function () {
    // Cursor
    cursor.innerHTML = ``;
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
    });

    // Image
    gsap.to("#imageDiv img", {
        filter: "grayscale(0)",
        duration: 1.2,
    });
});
