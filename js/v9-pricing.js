(()=>{
  'use strict';
  const form=document.getElementById('kp-v9-calculator'); if(!form) return;
  const rates={A:{1:4500,2:3000,3:2900,4:2800,5:2700,6:2600,7:2500,8:2400,9:2300,10:2200},B:{1:5500,2:4000,3:3900,4:3800,5:3700,6:3600,7:3500,8:3400,9:3300,10:3200}};
  const el=id=>document.getElementById(id), fmt=n=>'₱'+Math.round(n).toLocaleString('en-PH');
  let summary='';
  const positive=(id,min=0)=>{let v=Number(el(id).value); if(!Number.isSafeInteger(v)||v<min||v>250) return null;return v;};
  function render(){
    const pack=form.querySelector('input[name="package"]:checked')?.value||'A';
    const adults=positive('v9-adults',1), kids=positive('v9-children'), young=positive('v9-toddlers');
    const early=el('v9-early').checked, date=el('v9-date').value;
    const payment=form.querySelector('input[name=payment-illustration]:checked')?.value||'deposit';
    const quote=adults===null||kids===null||young===null;
    const r=quote?null:rates[pack][Math.min(adults,10)]; const adultsTotal=quote?null:adults*r;
    const kidsTotal=quote?null:kids*r*0.5;const total=quote?null:adultsTotal+kidsTotal;
    el('v9-package-name').textContent='Tour '+pack;
    el('v9-adult-rate').textContent=quote?'Check guest counts':fmt(r)+(adults>10?' (10+ tier)':'');
    el('v9-adult-subtotal').textContent=quote?'—':fmt(adultsTotal);
    el('v9-child-subtotal').textContent=quote?'—':fmt(kidsTotal);
    el('v9-free-count').textContent=young===null?'Check entry':String(young)+' free, no meal';
    el('v9-early-status').textContent=early?'Requested · on-site':'Not requested';
    el('v9-total').textContent=quote?'Check guest counts':fmt(total);
    el('v9-deposit-preview').textContent=quote?'Enter valid guest counts to calculate the proposed payment.':(payment==='deposit'?'Proposed 30% deposit: '+fmt(total*.3)+' payable now · Balance upon arrival: '+fmt(total*.7):'Proposed 100% upfront: '+fmt(total)+' payable now · Balance: ₱0')+' · SUBJECT TO APPROVAL · NO LIVE PAYMENT';
    summary=[
      'KINGFISHER PARK — UNCONFIRMED TOUR INQUIRY',
      'Tour: '+pack,
      'Paying adults: '+(adults??'Invalid entry'),
      'Children 4–12 (half rate, meal included): '+(kids??'Invalid entry'),
      'Children 3 and below (free, no meal): '+(young??'Invalid entry'),
      'Base estimate: '+(quote?'Check guest counts':fmt(total)),
      'Per-adult tier: '+(quote?'N/A':(adults>10?'10+ tier '+fmt(r):fmt(r))),
      'Proposed payment option: '+(payment==='deposit'?'30% deposit '+(quote?'N/A':fmt(total*.3)):'100% upfront '+(quote?'N/A':fmt(total))),
      'Early Riser enquiry: '+(early?'YES — OPTIONAL, PAY AT PARK (excluded)':'No'),
      'Preferred date: '+(date||'To coordinate'),
      'Transport excluded; meals included in Tour A/B.',
      'Deposit percentage is only a proposal; no online payment or reservation has been made.'
    ].join('\n');
  }
  form.addEventListener('input',render);form.addEventListener('change',render);
  try{const p=new URLSearchParams(location.search);if(p.get('tour')==='B'){const v=form.querySelector('input[value="B"]');if(v)v.checked=true;}}catch(e){}
  el('v9-copy').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(summary);el('v9-copy-status').textContent='Inquiry copied. Open the park\'s Facebook/Messenger page and paste your details.';}
    catch(e){el('v9-copy-status').textContent=summary;el('v9-copy-status').style.whiteSpace='pre-line';}
  });
  render();
})();