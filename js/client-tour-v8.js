(()=>{
  'use strict';
  const rates = {A:{"1": 4500, "2": 3000, "3": 2900, "4": 2800, "5": 2700, "6": 2600, "7": 2500, "8": 2400, "9": 2300, "10": 2200},B:{"1": 5500, "2": 4000, "3": 3900, "4": 3800, "5": 3700, "6": 3600, "7": 3500, "8": 3400, "9": 3300, "10": 3200}};
  const form=document.getElementById('kp-tour-calculator');
  if(!form)return;
  const money=n=>'₱'+Math.round(n).toLocaleString('en-PH');
  const $=id=>document.getElementById(id);
  let latest='';
  function recalc(){
    const tour=form.querySelector('input[name="tour"]:checked')?.value||'A';
    const adults=Number($('v8-adults').value)||1;
    const children=Math.min(99,Math.max(0,Number($('v8-children').value)||0));
    const toddlers=Math.min(99,Math.max(0,Number($('v8-toddlers').value)||0));
    const early=$('v8-early-riser').checked;
    const rate=rates[tour][adults];
    const adultSubtotal=adults*rate;
    const childSubtotal=children*rate*.5;
    const total=adultSubtotal+childSubtotal;
    const date=$('v8-date').value;
    $('v8-summary-tour').textContent='Tour '+tour;
    $('v8-summary-adults').textContent=String(adults);
    $('v8-summary-rate').textContent=money(rate);
    $('v8-summary-adult-total').textContent=money(adultSubtotal);
    $('v8-summary-child-total').textContent=money(childSubtotal)+(children?' ('+children+' children)':'');
    $('v8-summary-early').textContent=early?'Requested — quote separately':'Not selected';
    $('v8-summary-total').textContent=money(total);
    latest=[
      'KINGFISHER PARK — TOUR INQUIRY (NOT A CONFIRMED BOOKING)',
      'Package: Tour '+tour,
      'Paying adults: '+adults,
      'Adult rate: '+money(rate)+' each',
      'Children ages 4–12: '+children+' at half the adult rate',
      'Children ages 3 and below: '+toddlers+' (free, no meals)',
      'Base tour estimate: '+money(total),
      'Early Riser requested: '+(early?'Yes; supplement not included':'No'),
      'Preferred date: '+(date||'To arrange'),
      'Meals included; transportation excluded.',
      'Please confirm schedule, group composition, final price, transport, payment and availability.'
    ].join('\n');
    // External Messenger does NOT automatically receive a pasted inquiry. User copies and pastes it manually.
  }
  form.addEventListener('input',recalc);
  form.addEventListener('change',recalc);
  function parseTourFromLink(){const params=new URLSearchParams(location.search);if(params.get('tour')==='B'){const el=form.querySelector('input[value="B"]');if(el)el.checked=true;}}
  parseTourFromLink();recalc();
  $('v8-copy-summary')?.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(latest);$('v8-copy-status').textContent='Inquiry summary copied. Open Messenger and paste it into your conversation with Kingfisher Park.';}
    catch(e){const el=$('v8-copy-status');el.textContent=latest;el.setAttribute('style','white-space:pre-line');}
  });
})();
