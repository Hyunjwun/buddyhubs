/* ========================= */
/* LOADING PAGE */
/* ========================= */

const enterBtn = document.getElementById("enterBtn");
const landing = document.getElementById("landing");
const mainPage = document.getElementById("mainPage");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

bgMusic.volume = 0.4;

bgMusic.play().catch(err => {
console.log("Autoplay blocked:", err);
});

landing.style.opacity = "0";

setTimeout(() => {

landing.style.display = "none";
mainPage.style.display = "block";

document.body.style.overflowY = "auto";

window.scrollTo({
top:0,
behavior:"smooth"
});

},500);

});

/* ========================= */
/* ADMIN TABS */
/* ========================= */

const adminData = {

1:{
name:"Marshall",
photo:"marshall.png",
desc:`
Bots: @CallMarshallBot
contact person:@Nierdy
`
},

2:{
name:"Misa",
photo:"misa.png",
desc:`
Bots: @DialMisaBot
contact person: @DevourHearst 
`
},

3:{
name:"Doris",
photo:"doris.png",
desc:`
Bots: @AimedFallsBot
Contact Person: @Voyrse
`
},

4:{
name:"Wirtze",
photo:"Wirtze.png",
desc:`
Bots: @WirthzeBot
Contact Person: @Trudgge
`
},

5:{
name:"Hilmy",
photo:"Hilmy.png",
desc:`
Bots: @KnoballBot
Contact Person: @gaichose
`
}

};

const tabs = document.querySelectorAll(".tab");

const adminPhoto = document.getElementById("adminPhoto");
const adminName = document.getElementById("adminName");
const adminDesc = document.getElementById("adminDesc");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(btn =>
btn.classList.remove("active")
);

tab.classList.add("active");

const data =
adminData[tab.dataset.admin];

adminPhoto.src = data.photo;
adminName.textContent = data.name;
adminDesc.textContent = data.desc;

});

});

/* ========================= */
/* RANDOM POLAROID TILT */
/* ========================= */

const polaroids =
document.querySelectorAll(".polaroid");

polaroids.forEach(polaroid => {

const random =
(Math.random()*10)-5;

polaroid.style.transform =
`rotate(${random}deg)`;

});

/* ========================= */
/* FLOATING STICKERS */
/* ========================= */

const stickers =
document.querySelectorAll(".sticker");

stickers.forEach((sticker,index)=>{

sticker.animate(

[
{
transform:"translateY(0px)"
},

{
transform:"translateY(-15px)"
},

{
transform:"translateY(0px)"
}

],

{
duration:4000 + index*500,
iterations:Infinity
}

);

});

/* ========================= */
/* CURSOR STARS */
/* ========================= */

document.addEventListener("mousemove",(e)=>{

if(window.innerWidth <= 768) return;

const star =
document.createElement("div");

star.innerHTML = "✦";

star.classList.add("cursor-star");

star.style.left = e.pageX + "px";
star.style.top = e.pageY + "px";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},700);

}); 
