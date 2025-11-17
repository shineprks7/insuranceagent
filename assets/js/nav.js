const mobilemenu_button = document.querySelector('.mobile-hamburger-button')


mobilemenu_button.addEventListener('click', function( event ){


  const thibutton = event.currentTarget;


   const mobilemenu_button = document.querySelector('.mobile-menu-wrapper')


  const hasShowmenu =  mobilemenu_button.classList.contains('showmenu');

   
   if(hasShowmenu)
   {
      mobilemenu_button.classList.remove('showmenu');

      thibutton.classList.remove('showmenu');

   }
   else
   {
        mobilemenu_button.classList.add('showmenu');
      thibutton.classList.add('showmenu');

   }


});