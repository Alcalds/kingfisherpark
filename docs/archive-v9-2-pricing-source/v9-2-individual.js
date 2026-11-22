/* Kingfisher Park V9.2 — individual-activity estimate ONLY.
 * The individual rates below have been confirmed by the user for V9.2.
 * This script does not reserve sessions, collect money or issue booking references.
 */
(()=>{
  'use strict';
  const form=document.getElementById('v92-individual-form');
  if(!form)return;
  const prices={kayak:600,boardwalk:400,night:600};
  const names={kayak:'Mangrove Kayak',boardwalk:'Firefly Boardwalk',night:'Fireflies + Night Kayak'};
  const amount=document.getElementById('v92-individual-total');
  const detail=document.getElementById('v92-individual-detail');
  const status=document.getElementById('v92-individual-status');
  const pesos=n=>'₱'+Math.round(n).toLocaleString('en-PH');
  let inquiry='';
  function render(){
    const picks=[...form.querySelectorAll('[name="individual"]:checked')].map(e=>e.value);
    const raw=Number(document.getElementById('v92-individual-pax').value);
    const valid=Number.isSafeInteger(raw)&&raw>=1&&raw<=50;
    const guests=valid?raw:null;
    const total=valid&&picks.length?picks.reduce((n,k)=>n+prices[k],0)*guests:null;
    amount.textContent=total===null?'—':pesos(total);
    detail.textContent=!picks.length?'Choose at least one experience.':!valid?'Enter 1–50 paying participants.':`${picks.length} selected ${picks.length===1?'activity':'activities'} · ${guests} paying ${guests===1?'participant':'participants'} · separate schedules subject to staff confirmation.`;
    inquiry=['KINGFISHER PARK — INDIVIDUAL EXPERIENCE INQUIRY (UNCONFIRMED)',
      'Activities: '+(picks.length?picks.map(k=>names[k]).join(' + '):'None selected'),
      'Paying participants: '+(guests??'Invalid entry'),
      'Confirmed per-person prices: '+(picks.map(k=>names[k]+' '+pesos(prices[k])).join('; ')||'None'),
      'Estimated amount: '+(total===null?'Needs valid choices':pesos(total)),
      'Preferred date: '+(document.getElementById('v92-individual-date').value||'To coordinate'),
      'Individual-activity child rates not supplied. Confirm with staff before booking.\nMultiple activities need compatible session times.\nThis inquiry does not reserve a session or process payment.'].join('\n');
    document.getElementById('v92-individual-copy').disabled=total===null;
    status.textContent='';
  }
  form.addEventListener('input',render);
  form.addEventListener('change',render);
  document.getElementById('v92-individual-copy').addEventListener('click',async()=>{
    try{
      await navigator.clipboard.writeText(inquiry);
      status.textContent='Inquiry copied. Paste it into a message to the official Kingfisher Park Facebook page.';
    }catch(_){
      status.textContent='Copy the inquiry details below and send them to the park:\n'+inquiry;
      status.style.whiteSpace='pre-line';
    }
  });
  render();
})();
