const DISCORD_URL = "#"; // Replace # with your Discord invite.
["discordNav","discordHero","discordCard","discordBottom"].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.href=DISCORD_URL;
});
function copyText(id){
  navigator.clipboard.writeText(document.getElementById(id).innerText).then(()=>{
    const b=document.querySelector(".server-name button");
    const old=b.innerText;b.innerText="COPIED";
    setTimeout(()=>b.innerText=old,1200);
  });
}