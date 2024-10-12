const sidemenu=document.querySelector("#sidemenu");
 function openmenu(){
    sidemenu.style.transform='translatex(-16rem)'
 }
 function closemenu(){
    sidemenu.style.transform='translatex(16rem)'
 }
   // mode
   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    function toggleTheme(){
      document.documentElement.classList.toggle('dark');
      if(document.documentElement.classList.contains('dark')){
         localStorage.theme='dark';
      }
      else{
         localStorage.theme='light';
      }
    }