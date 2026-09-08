const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(toggle) toggle.addEventListener("click",()=>nav.classList.toggle("open"));
const page=(location.pathname.split("/").pop()||"index.html");
document.querySelectorAll(".nav-links a").forEach(a=>{
  const href=a.getAttribute("href");
  if(href===page || (page==="" && href==="index.html")) a.classList.add("active");
});
