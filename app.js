(function(){
 const s=window.SITE_CONFIG||{};
 function setText(){document.querySelectorAll('[data-field]').forEach(el=>{const k=el.dataset.field;el.textContent=s[k]||'미등록';});}
 function renderShared(){
  document.querySelectorAll('[data-brand]').forEach(el=>el.textContent=s.brandName||s.companyName||'회사명');
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  document.querySelectorAll('[data-email-link]').forEach(el=>{if(s.supportEmail){el.href='mailto:'+s.supportEmail;el.textContent=s.supportEmail;}else{el.removeAttribute('href');el.textContent='지원 이메일 미등록';el.classList.add('status');}});
  document.querySelectorAll('[data-phone-link]').forEach(el=>{if(s.supportPhone){el.href='tel:'+s.supportPhone.replace(/[^+0-9]/g,'');el.textContent=s.supportPhone;}else{el.removeAttribute('href');el.textContent='전화번호 미등록';el.classList.add('status');}});
 }
 function readiness(){
  const bad=!s.supportEmail||!s.privacyEffectiveDate||['privacyCollected','privacyPurpose','privacyRetention','privacyThirdParties'].some(k=>(s[k]||'').includes('[확인 필요]'));
  document.querySelectorAll('[data-setup-warning]').forEach(el=>{el.hidden=!bad;});
 }
 setText();renderShared();readiness();
})();
