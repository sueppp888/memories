/* ==================================
   OUR MEMORIES PREMIUM
   JAVASCRIPT PART 1
================================== */


/* ===========================
   OPEN MEMORIES / LOADER
=========================== */


const loader = document.getElementById("loader");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");


openBtn.addEventListener("click",()=>{


    loader.style.opacity="0";


    setTimeout(()=>{

        loader.style.display="none";

    },800);



    // mulai musik

    if(music){

        music.play().catch(()=>{

            console.log("Music menunggu izin browser");

        });

    }


});





/* ===========================
   MUSIC BUTTON
=========================== */


const musicBtn = document.getElementById("musicBtn");


if(musicBtn){


musicBtn.addEventListener("click",()=>{


    if(music.paused){


        music.play();


        musicBtn.innerHTML="⏸";


    }else{


        music.pause();


        musicBtn.innerHTML="▶";


    }


});


}






/* ===========================
   LIGHTBOX FOTO
=========================== */


const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");



photos.forEach((img)=>{


    img.addEventListener("click",()=>{


        lightbox.style.display="flex";


        lightboxImg.src=img.src;


    });


});



if(closeLightbox){


closeLightbox.addEventListener("click",()=>{


    lightbox.style.display="none";


});


}



lightbox.addEventListener("click",(e)=>{


    if(e.target===lightbox){


        lightbox.style.display="none";


    }


});






/* ===========================
   BACK TO TOP
=========================== */


const topBtn=document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY>400){


        topBtn.style.display="block";


    }else{


        topBtn.style.display="none";


    }


});



if(topBtn){


topBtn.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});


}
/* ==================================
   OUR MEMORIES PREMIUM
   JAVASCRIPT PART 2
================================== */


/* ===========================
   SCROLL ANIMATION
=========================== */


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{


    threshold:0.15


});



sections.forEach(section=>{


    observer.observe(section);


});






/* ===========================
   FLOATING HEARTS
=========================== */


function createHeart(){


    const heart=document.createElement("div");


    heart.className="floating-heart";


    heart.innerHTML="❤";


    heart.style.left=
    Math.random()*100+"%";


    heart.style.fontSize=
    (15+Math.random()*25)+"px";


    heart.style.animationDuration=
    (4+Math.random()*5)+"s";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },7000);


}



setInterval(createHeart,800);






/* ===========================
   MOUSE GLOW EFFECT
=========================== */


const glow=document.createElement("div");


glow.style.position="fixed";

glow.style.width="40px";

glow.style.height="40px";

glow.style.borderRadius="50%";

glow.style.background=
"rgba(56,189,248,.5)";

glow.style.filter="blur(20px)";

glow.style.pointerEvents="none";

glow.style.zIndex="99999";


document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{


    glow.style.left=
    e.clientX-20+"px";


    glow.style.top=
    e.clientY-20+"px";


});







/* ===========================
   IMAGE 3D EFFECT
=========================== */


const photoCards=document.querySelectorAll(".photo");


photoCards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


    const rect=
    card.getBoundingClientRect();


    const x=
    e.clientX-rect.left;


    const y=
    e.clientY-rect.top;



    const rotateX=
    (rect.height/2-y)/15;


    const rotateY=
    (x-rect.width/2)/15;



    card.style.transform=

    `perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)`;


});



card.addEventListener("mouseleave",()=>{


    card.style.transform=
    "rotateX(0) rotateY(0) scale(1)";


});


});






/* ===========================
   SMOOTH NAVIGATION
=========================== */


document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",(e)=>{


    e.preventDefault();


    const target=
    document.querySelector(
    link.getAttribute("href")
    );


    target.scrollIntoView({

        behavior:"smooth"

    });


});


});






/* ===========================
   CONSOLE MESSAGE
=========================== */


console.log(
"%c❤ Our Memories Premium Loaded ❤",
"color:#38bdf8;font-size:18px;font-weight:bold;"
);
/* ==================================
   OUR MEMORIES PREMIUM
   JAVASCRIPT PART 3
================================== */


/* ===========================
   TYPEWRITER EFFECT
=========================== */


const letterText =
document.querySelector(".letter-box");


if(letterText){


const paragraphs =
letterText.querySelectorAll("p");


paragraphs.forEach((p)=>{


const text=p.innerHTML;


p.innerHTML="";


let index=0;



function typing(){


if(index < text.length){


p.innerHTML += text.charAt(index);


index++;


setTimeout(typing,30);


}


}



const typeObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


typing();


typeObserver.disconnect();


}


});


});



typeObserver.observe(p);



});


}






/* ===========================
   SAKURA / FLOWER EFFECT
=========================== */


function createFlower(){


const flower=document.createElement("div");


flower.innerHTML="🌸";


flower.style.position="fixed";

flower.style.top="-40px";

flower.style.left=
Math.random()*100+"%";


flower.style.fontSize=
(15+Math.random()*20)+"px";


flower.style.zIndex="5";


flower.style.pointerEvents="none";


flower.style.animation=
"flowerFall 8s linear forwards";



document.body.appendChild(flower);



setTimeout(()=>{


flower.remove();


},8000);


}


setInterval(createFlower,1000);






/* ===========================
   CLICK HEART EFFECT
=========================== */


document.addEventListener("click",(e)=>{


const heart=document.createElement("div");


heart.innerHTML="❤";


heart.style.position="fixed";


heart.style.left=
e.clientX+"px";


heart.style.top=
e.clientY+"px";


heart.style.color="#fb7185";


heart.style.fontSize="25px";


heart.style.pointerEvents="none";


heart.style.zIndex="99999";


document.body.appendChild(heart);



let y=e.clientY;

let opacity=1;



function move(){


y-=2;


opacity-=0.02;


heart.style.top=y+"px";


heart.style.opacity=opacity;



if(opacity>0){


requestAnimationFrame(move);


}else{


heart.remove();


}



}



move();



});






/* ===========================
   PAGE LOAD EFFECT
=========================== */


window.addEventListener("load",()=>{


document.body.style.opacity="0";


setTimeout(()=>{


document.body.style.transition="1.5s";


document.body.style.opacity="1";


},300);


});






/* ===========================
   DISABLE IMAGE DRAG
=========================== */


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener("dragstart",
(e)=>{


e.preventDefault();


});


});






/* ===========================
   EXTRA CSS ANIMATION
=========================== */


const style =
document.createElement("style");


style.innerHTML=`


@keyframes flowerFall{


0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}


100%{

transform:
translateY(110vh)
rotate(360deg);

opacity:0;

}


}


`;



document.head.appendChild(style);






console.log(
"%c✨ ALL MEMORIES EFFECT READY ✨",
"color:#f472b6;font-size:18px;font-weight:bold;"
);
/* ==================================
   OUR MEMORIES PREMIUM
   JAVASCRIPT PART 4
   FINAL TOUCH
================================== */


/* ===========================
   PHOTO LAZY LOAD
=========================== */


document.querySelectorAll("img").forEach(img=>{


    img.loading="lazy";


});





/* ===========================
   AUTO YEAR FOOTER
=========================== */


const year =
document.querySelector(".copyright");


if(year){


year.innerHTML =
year.innerHTML.replace(
"2026",
new Date().getFullYear()
);


}




/* ===========================
   RANDOM SPARKLE EFFECT
=========================== */


function sparkle(){


const star=document.createElement("div");


star.innerHTML="✦";


star.style.position="fixed";

star.style.left=
Math.random()*window.innerWidth+"px";


star.style.top=
Math.random()*window.innerHeight+"px";


star.style.color="#ffffff";


star.style.fontSize=
(10+Math.random()*15)+"px";


star.style.opacity="0.8";


star.style.pointerEvents="none";


star.style.zIndex="2";


star.style.animation=
"sparkle 2s ease forwards";



document.body.appendChild(star);



setTimeout(()=>{


star.remove();


},2000);



}



setInterval(sparkle,500);






/* ===========================
   PREVENT RIGHT CLICK FOTO
=========================== */


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener("contextmenu",
(e)=>{


e.preventDefault();


});


});






/* ===========================
   PERFORMANCE OPTIMIZATION
=========================== */


let ticking=false;


window.addEventListener("scroll",()=>{


if(!ticking){


window.requestAnimationFrame(()=>{


ticking=false;


});


ticking=true;


}


});






/* ===========================
   FINAL MESSAGE
=========================== */


console.log(
"%c💎 Our Memories Premium v1.0 Ready 💎",
"color:#38bdf8;font-size:20px;font-weight:bold;"
);