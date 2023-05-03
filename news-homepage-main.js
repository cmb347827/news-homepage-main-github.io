'use strict'; 

const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Lighter Transparent Gray': 'hsl(11,2%,95%,0.5)',
	'Soft orange': 'hsl(35, 77%, 62%)',
};

$(window).resize(function(){
	location.reload();
});

$(window).on('load',function(){
	  let width = $(window).width();
	  function openMenu(){
		  if(width < 1440){
				  //console.log('open');
				  //menu is collapsed. Hide the hamburger icon
				  $('.open-menu').css('visibility','hidden').hide();
				  // and show/position etc the close menu icon 
			      $('.collapse-menu').css({'visibility':'visible','width':'340px','height':'340px','position':'absolute',
				      'left':'58%','top':'52px','z-index':'1000'}).show();
				  //make the background behind the to open menu transparent.
			      $('html').css('opacity','0.5');
				  //open (drop down) and position etc the menu.
			      $('.ui-menu').css({'display':'block','position':'absolute','width':'180px',
				     'height':'50vh','border':'1px solid black','margin-top':'50px','text-align':'left','left':'51%','top':'45px','z-index':'999',
					  }).menu({
					  menus: 'nav'
				  });
				  //the menu item (links)
				  $('.ui-menu-item').css({'position':'relative','top':'80px','font-weight':'600'});
				  $('.ui-menu-item a').css({'text-decoration':'none','opacity':'1'});
				  $('.ui-menu-item').hover(function(){
					  //console.log('hover');
					  $(this).css('background-color',colors["Soft orange"]);
				  });
				  $('.ui-menu-item').mouseleave(function(){
					  //console.log('mouseleave');
					  $(this).css('background-color',colors["White"]);
				  });
			 
		  } else if(width > 1440){
			      //in desktop hide the dropped down men.
			      $('.ui-menu').css('display','none').menu('collapse');
	      } else {
			  //should not be here error.
		  }
	  }
	  
	  function closeMenu(){
		  //close menu is clicked
		  //console.log('close');
		  //hide the close menu icon
		  $('.collapse-menu').css('visibility','hidden').hide();
		  //remove the background opacity.
		  $('html').css('opacity','1');
		  //display the hamburger icon again.
	      $('.open-menu').css({'visibility':'visible','position':'relative','right':'0'}).show();
		  //close the menu.
		  $('.ui-menu').css('display','none').menu('collapse');
	  }
	  //the hamburger icon is tabbed to with keyboard
	  document.querySelector('.open-menu').addEventListener('focus',function(event){
		  //console.log('focus hamburger');
		  if (event.key === "Enter"){
			  openMenu();
		  }
	  });
	  //the escape key is pressed with keyboard
	  document.addEventListener('keydown',function(event){
		  if (event.key === "Escape"){
			  closeMenu();
		  }
	  });
	  //the hamburger icon is clicked with the mouse
	  $('.open-menu').click(function(){
		  event.preventDefault();
		  //can really only be < 1440 as .open-menu is otherwise set to display:none.
		  openMenu();
	  });
	  //the close icon is clicked with the mouse.
	  $('.collapse-menu').click(function(){
		  event.preventDefault();
		  closeMenu();
	  });
});
