/* V9.2 — mobile navigation clarity: keep HOME Lightline controls unobscured
   while the main Hero is visible; show the mobile sticky booking shortcut
   after the visitor scrolls beyond the Hero. Desktop unchanged. */
(()=>{
 const hero=document.querySelector('.living-light-hero');
 if(!hero || !('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(([entry])=>{
   document.body.classList.toggle('v92-hero-visible', entry.isIntersecting);
 },{threshold:0.2});
 observer.observe(hero);
})();
