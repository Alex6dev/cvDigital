const postIt= document.querySelectorAll(".post-it")
const projetOpenclass=document.querySelectorAll(".projetOpenclass")
const experience=document.querySelectorAll(".experience")
gsap.registerPlugin(ScrollTrigger)
console.log("toto")

const gsapPostIt=(index)=>{
    gsap.to(postIt[index],{
        scrollTrigger:{
            trigger:postIt[index],
            start:"top center",
            markers:true,
        },
        x:0 ,
        opacity:1,
        duration:1,
    })
}
for (let index = 0; index < postIt.length; index++) {
    gsapPostIt(index)
}


const gsapProjetOpenclass=(index)=>{
    gsap.to(projetOpenclass[index],{
        scrollTrigger:{
            trigger:projetOpenclass[index],
            start:"top center",
            markers:true,
        },
        x:0 ,
        opacity:1,
        duration:1,
    })

}

for (let index = 0; index < projetOpenclass.length; index++) {
    gsapProjetOpenclass(index)
}
const gsapExperience=(index)=>{
    gsap.to(experience[index],{
        scrollTrigger:{
            trigger:experience[index],
            start:"top center",
            markers:true,
        },
        x:0 ,
        opacity:1,
        duration:1,
    })

}

for (let index = 0; index < experience.length; index++) {
    gsapExperience(index)
}