var logoutContainer=document.querySelector('header .logout-btn')
var esclogout=document.querySelector('header .logout .esc')
  
// show homepage log out option
function homelogout(){
  logoutContainer.classList.toggle('active'); 
  esclogout.classList.toggle('active');   
}

// hide homepage log out (click outside)
function closehomelogout(){
  logoutContainer.classList.toggle('active'); 
  esclogout.classList.toggle('active');
}


// current active page status
var allheadnav=document.querySelectorAll('header .nav li a');

  allheadnav.forEach(element => {
    element.addEventListener('click', ()=>{
      resetHeadNav();
      element.classList.add('active')   
    })    
  });

//reset all status
  function resetHeadNav(element){
    allheadnav.forEach(element => {        
    element.classList.remove('active');
  })
  } 
  
