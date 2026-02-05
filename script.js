gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION TIMELINE
gsap.timeline()
  .from(".hero h1",{y:-50,opacity:0,duration:1})
  .from(".hero h2",{y:40,opacity:0,duration:0.8},"-=0.4")
  .from(".hero p",{y:30,opacity:0,duration:0.8},"-=0.3")
  .from(".hero-services li",{y:20,opacity:0,stagger:0.15,duration:0.6},"-=0.3")
  .from(".hero .btn",{scale:0.8,opacity:0,stagger:0.2,duration:0.6},"-=0.2")
  .from(".hero-img",{scale:0.85,opacity:0,duration:1},"-=1");
// SECTION PARALLAX
gsap.utils.toArray("section").forEach(sec=>{
  gsap.from(sec,{scrollTrigger:{trigger:sec,start:"top 80%"},y:60,opacity:0,duration:1});
});

// MODAL LOGIC
let currentIndex = 0;
const projects = Array.from(document.querySelectorAll(".project-card"));
const modal = document.getElementById("modal");
const modalIframe = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const downloadBtn = document.getElementById("downloadBtn");

function showModal(index, direction = 1){
  const project = projects[index];
  const img = project.dataset.img;

  gsap.to([modalIframe, modalTitle, modalDesc, downloadBtn], {x:-100*direction, opacity:0, duration:0.3, onComplete:()=>{
    modalTitle.innerText = project.dataset.title;
    modalDesc.innerText = project.dataset.desc;

    if(img.endsWith(".pdf")){
      modalIframe.src = img;
      modalIframe.style.display = "block";
      downloadBtn.href = img;
      downloadBtn.style.display = "inline-block";
    } else {
      modalIframe.src = img;
      modalIframe.style.display = "block";
      downloadBtn.style.display = "none";
    }

    gsap.fromTo([modalIframe, modalTitle, modalDesc, downloadBtn], {x:100*direction, opacity:0}, {x:0, opacity:1, duration:0.5, ease:"power2.out"});
  }});

  modal.style.display = "flex";
  currentIndex = index;
}

// Open modal on click
projects.forEach((proj,index)=>proj.addEventListener("click",()=>showModal(index)));

// Close modal
document.getElementById("close").onclick = ()=> modal.style.display="none";

// Next / Prev
document.getElementById("prev").onclick = ()=> showModal((currentIndex-1+projects.length)%projects.length, -1);
document.getElementById("next").onclick = ()=> showModal((currentIndex+1)%projects.length, 1);

// Click outside modal
modal.addEventListener("click",(e)=>{if(e.target===modal) modal.style.display="none";});

// EMAIL FORM
function sendEmail(e){
  e.preventDefault();
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let message=document.getElementById("message").value;
  let mailto=`mailto:your@email.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;
  window.location.href=mailto;
}

// CARD HOVER
document.querySelectorAll(".card, .project-card").forEach(card=>{
  card.addEventListener("mouseenter",()=> gsap.to(card,{scale:1.05,duration:0.3}));
  card.addEventListener("mouseleave",()=> gsap.to(card,{scale:1,duration:0.3}));
});
