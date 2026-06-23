
const menu=document.querySelector('.menu');document.querySelector('.hamb')?.addEventListener('click',()=>menu.classList.toggle('open'));
const cookie=document.querySelector('.cookie');if(cookie&&!localStorage.getItem('fv_cookie_ok')) cookie.classList.add('show');
document.querySelector('[data-cookie-ok]')?.addEventListener('click',()=>{localStorage.setItem('fv_cookie_ok','1');cookie.classList.remove('show')});
