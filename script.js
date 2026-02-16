document.addEventListener("DOMContentLoaded", () => {

  // GSAP HERO ANIMATION
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline()
    .from(".hero h1",{y:-50,opacity:0,duration:1})
    .from(".hero p",{opacity:0,duration:0.8},"-=0.5")
    .from(".hero-image img",{opacity:0,duration:1},"-=0.8");

  // SECTION SCROLL ANIMATION
  gsap.utils.toArray("section").forEach(sec => {
    gsap.from(sec,{
      scrollTrigger: { trigger: sec, start:"top 80%" },
      y:60,
      opacity:0,
      duration:1
    });
  });

  // COLLAPSIBLE CARDS
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    const card = btn.closest('.card');
    const content = card.querySelector('.card-content');
    content.style.display = "none"; // start closed
    btn.textContent = "+";

    btn.addEventListener("click", () => {
      if(content.style.display === "block"){
        gsap.to(content, {height:0, opacity:0, duration:0.3, onComplete:()=>{
          content.style.display="none";
        }});
        btn.textContent = "+";
      } else {
        content.style.display = "block";
        gsap.fromTo(content, {height:0, opacity:0}, {height:"auto", opacity:1, duration:0.3});
        btn.textContent = "−";
      }
    });
  });

  // DARK / LIGHT MODE
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
  });

  // CARD HOVER
  document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mouseenter",()=> gsap.to(card,{scale:1.05,duration:0.3}));
    card.addEventListener("mouseleave",()=> gsap.to(card,{scale:1,duration:0.3}));
  });

});
