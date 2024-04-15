var tl = gsap.timeline({
    scrollTrigger: {
        trigger:"#main",
        start: "50% 50%",
        end: "200% 50%",
        scrub: true,
        pin: true,
        markers: true
    }
})

tl.to(".svg",{
    maskSize: "180%",
},'a')

tl.to(".img",{
    backgroundSize: "100%"   
},'a')

tl.to(".svg2",{
    maskSize: "180%",
},'b')

tl.to(".img2",{
    backgroundSize: "100%"   
},'b')