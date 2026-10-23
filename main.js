// Free audit form: posts to Web3Forms; otherwise falls back to email.
(function(){
  var f=document.getElementById('auditForm'),m=document.getElementById('formMsg');
  if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f),act=f.getAttribute('action')||'';
    var mail=function(){
      var body='Business: '+d.get('business')+'\nEmail: '+d.get('email')+'\nProfile: '+(d.get('profile')||'');
      location.href='mailto:edgevvstudio@gmail.com?subject='+encodeURIComponent('Free audit request')+'&body='+encodeURIComponent(body);
      m.textContent='Opening your email app to send the request…';
    };
    if(act.indexOf('https://')!==0){mail();return;}
    m.textContent='Sending…';
    fetch(act,{method:'POST',body:d,headers:{Accept:'application/json'}})
      .then(function(r){if(!r.ok)throw 0;f.reset();m.textContent="Got it! We'll send your free audit the same business day.";})
      .catch(mail);
  });
})();
