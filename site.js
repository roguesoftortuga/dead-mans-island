const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(toggle) toggle.addEventListener("click",()=>nav.classList.toggle("open"));
const current=(location.pathname.split("/").pop()||"index.html");
document.querySelectorAll(".nav-links a").forEach(a=>{
  if(a.getAttribute("href")===current) a.classList.add("active");
});
function copyAddress(){
  navigator.clipboard.writeText("153.67.3.147:7777").then(()=>{
    const b=document.querySelector(".copy-btn"), old=b.textContent;
    b.textContent="COPIED"; setTimeout(()=>b.textContent=old,1200);
  });
}
