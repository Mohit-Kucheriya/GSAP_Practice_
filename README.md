# GSAP (GreenSock Animation Platform) Guide

This guide covers the basics of using GSAP for web animations, including `gsap.to`, `gsap.from`, timelines, ScrollTrigger, scrub, markers, ScrollTrigger options, controlling timelines, and various related animations.

## Table of Contents

1. [Introduction to GSAP](#introduction-to-gsap)
2. [Getting Started](#getting-started)
3. [Basic GSAP Animations](#basic-gsap-animations)
4. [`gsap.to` Method](#gsapto-method)
5. [`gsap.from` Method](#gsapfrom-method)
6. [Timelines](#timelines)
7. [ScrollTrigger Plugin](#scrolltrigger-plugin)
8. [ScrollTrigger Options](#scrolltrigger-options)
9. [Controlling Timelines](#controlling-timelines)


## Introduction to GSAP

GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations. It provides a simple API for animating DOM elements, SVGs, and more.

## Getting Started

To get started with GSAP, include it in your project. You can either download it from the [GSAP website](https://greensock.com/gsap/) or use a CDN.

```html
<!-- Include GSAP via CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>

Basic GSAP Animations
A basic GSAP animation can be created using the gsap.to method, which animates an element from its current state to the specified state.

gsap.to(".element", { duration: 1, x: 100, opacity: 0.5 });

gsap.to Method
The gsap.to method animates an element from its current state to a new state.
gsap.to(".element", { duration: 1, x: 100, y: 50, opacity: 1 });

Parameters
Target: The element(s) to be animated.
Vars: An object containing the properties to animate and their end values.

gsap.from Method
The gsap.from method animates an element from a specified state to its current state.
gsap.from(".element", { duration: 1, x: -100, y: -50, opacity: 0 });
Parameters
Target: The element(s) to be animated.
Vars: An object containing the properties to animate and their starting values.

Timelines
Timelines allow you to create complex animations by sequencing multiple tweens. You can control the timing and order of animations easily.
const tl = gsap.timeline();
tl.to(".element1", { duration: 1, x: 100 })
  .from(".element2", { duration: 1, y: -100 })
  .to(".element3", { duration: 1, opacity: 0.5 });

Controlling Timelines
Play: tl.play();
Pause: tl.pause();
Resume: tl.resume();
Reverse: tl.reverse();

ScrollTrigger Plugin
The ScrollTrigger plugin allows you to trigger animations based on the scroll position. It makes it easy to create scroll-based animations.
gsap.registerPlugin(ScrollTrigger);

gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element", // start the animation when ".element" enters the viewport
    start: "top 75%", // animation starts when top of the element is 75% from the top of the viewport
    end: "top 25%", // animation ends when top of the element is 25% from the top of the viewport
    scrub: true, // makes the animation progress smoothly with the scrollbar
    markers: true // shows start and end markers in the viewport
  },
  duration: 1,
  x: 100,
  opacity: 1
});

Scrub
The scrub property in ScrollTrigger makes the animation progress smoothly in sync with the scrollbar. Setting it to true will link the animation's progress directly to the scrollbar.
scrollTrigger: {
  trigger: ".element",
  scrub: true
}

Markers
The markers property in ScrollTrigger shows visual indicators for the start and end points of the trigger. This is useful for debugging.
scrollTrigger: {
  trigger: ".element",
  markers: true
}

ScrollTrigger Options
trigger: The element that triggers the animation.
start: The point at which the animation should start.
end: The point at which the animation should end.
scrub: Synchronizes the animation progress with the scrollbar.
markers: Displays start and end markers.

Controlling Timelines
Timelines in GSAP can be controlled programmatically using various methods:

Play: Starts or resumes the timeline.
tl.play();

Pause: Pauses the timeline.
tl.pause();

Resume: Resumes the timeline from where it was paused.
tl.resume();

Reverse: Reverses the timeline.
tl.reverse();

