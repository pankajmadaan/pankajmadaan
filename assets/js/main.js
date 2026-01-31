// Mobile nav toggle + theme toggle
(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-menu');
  if(navToggle && navList){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
      // for small screens make column
      if(window.innerWidth < 700 && !expanded){
        navList.style.flexDirection = 'column';
      } else if(window.innerWidth < 700){
        navList.style.flexDirection = 'column';
      } else {
        navList.style.flexDirection = 'row';
      }
    });
  }

  // Theme toggle + persist
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('site-theme');
  if(saved){ root.setAttribute('data-theme', saved); }
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next === 'light' ? '' : next);
      localStorage.setItem('site-theme', next === 'light' ? '' : next);
    });
  }

  // mark active nav link
  const links = document.querySelectorAll('.nav-list a');
  links.forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href')) || (location.pathname === '/' && a.getAttribute('href').includes('index'))){
      a.classList.add('active');
    }
  });
  
  // Contact form: AJAX submit to Formsubmit.co with inline on-page success/error message
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // create or get message element
      let msgEl = document.getElementById('formMessage');
      if(!msgEl){
        msgEl = document.createElement('div');
        msgEl.id = 'formMessage';
        msgEl.className = 'small-muted';
        contactForm.parentNode.appendChild(msgEl);
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if(submitBtn) submitBtn.disabled = true;
      msgEl.style.color = '';
      msgEl.textContent = 'Sending...';

      try{
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if(res.ok){
          msgEl.style.color = 'green';
          msgEl.textContent = 'Message sent — thank you! I will reply shortly.';
          contactForm.reset();
        } else {
          // non-OK response
          msgEl.style.color = 'crimson';
          msgEl.innerHTML = 'Sorry — the message could not be sent. Please email <a href="mailto:pmadaan766@gmail.com">pmadaan766@gmail.com</a> directly.';
        }
      } catch(err){
        // network/CORS error
        msgEl.style.color = 'crimson';
        msgEl.innerHTML = 'Unable to send the message from this page. Please email <a href="mailto:pmadaan766@gmail.com">pmadaan766@gmail.com</a>.';
      } finally{
        if(submitBtn) submitBtn.disabled = false;
      }
    });
  }
  
})();
