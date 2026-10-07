const scaleUpArray = document.querySelectorAll(".scaleUp")
const slideUpArray = document.querySelectorAll(".slideUp")
const slideLeftArray = document.querySelectorAll(".slideLeft")
const slideRightArray = document.querySelectorAll(".slideRight")
const banniereArray = document.querySelectorAll(".banniere")
const rotateCircleArray = document.querySelectorAll(".rotatePrice")



gsap.to(".fadeUp", { opacity: 1, y: 0, stagger: 0.2 })

scaleUpArray.forEach((el) => {
    gsap.to(el, {
        scale: 1, stagger: 0.1, scrollTrigger: {
            trigger: el
        }
    })
})

gsap.to(".scrub", {scrollTrigger:{
    trigger:".scrub",
    scrub:true
}})

rotateCircleArray.forEach((el) => {
    gsap.to(el, {
        rotate: -12, scale:1,  stagger: 0.1, scrollTrigger: {
            trigger: el
        }
    })
})
banniereArray.forEach((el) => {
    gsap.to(el, {
        width: 0, duration: 2, stagger: 0.1, scrollTrigger: {
            trigger: el
        }
    })
})


gsap.to(".slideUp", {
    y: 0, stagger: 0.2, scrollTrigger: {
        trigger: ".slideUp"
    }
})

slideLeftArray.forEach((el) => {
    gsap.to(el, {
        x: 0, stagger: 0.2, opacity: 1, scrollTrigger: {
            trigger: el
        }
    })
})

slideRightArray.forEach((el) => {

    gsap.to(el, {
        x: 0, stagger: 0.2, opacity: 1, scrollTrigger: {
            trigger: el
        }
    })
})
