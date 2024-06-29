function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1TextContent = h1.textContent

    var splittedText = h1TextContent.split("");
    var halfValue = splittedText.length / 2

    var clutter = ""

    splittedText.forEach(function (elem, idx) {
        if (idx <= halfValue) {
            clutter += `<span class="a">${elem}</span>`
        }
        else {
            clutter += `<span class="b">${elem}</span>`

        }
    })

    h1.innerHTML = clutter
}

breakTheText();

gsap.from("h1 .a", {
    y: 80,
    delay: 0.5,
    duration: 0.6,
    stagger: 0.15,
    opacity: 0,
    color:"green"
})

gsap.from("h1 .b", {
    y: 80,
    delay: 0.5,
    duration: 0.6,
    stagger: -0.15,
    opacity: 0,
    color:"blue"
})