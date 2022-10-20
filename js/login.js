const loginoverlay=document.getElementById('loginform')
const loginnav=document.querySelector('header .log .login')
const loginesc=document.querySelector('#loginform .esc')



function showloginoverlay(){
  loginoverlay.classList.add('active');
  document.title="Carlos Clinic | Login"
}

function closeloginoverlay(){
  loginoverlay.classList.remove('active');
}



loginesc.addEventListener('click',()=>{
  closeloginoverlay();
  document.title="Carlos Clinic"
})




const navlogin=document.querySelector('#loginform .choices .navlogin');
const navsignup=document.querySelector('#loginform .choices .navsignup');
const formcontainer=document.querySelector('#loginform .form-container');
const loginform=document.querySelector('.form-container .login')
const signupform=document.querySelector('.form-container .signup')

    navlogin.addEventListener('click',()=>{
        formcontainer.classList.remove('active');
        navlogin.classList.add('active');
        navsignup.classList.remove('active');
        document.title="Carlos Clinic | Login ";
        signupform.reset();
        
    })

    
    navsignup.addEventListener('click',()=>{
        navlogin.classList.remove('active');
        navsignup.classList.add('active');
        formcontainer.classList.add('active');
        document.title="Carlos Clinic | Signup ";
        loginform.reset();
    })


//redirect to login/ signup page
    window.addEventListener("load",function(){
        if(window.location.hash=="#signupform"){
            showloginoverlay();
            navsignup.click();
        }else if(window.location.hash=="#loginform"){
            showloginoverlay();
            navlogin.click();
        }
    })
    




//Show Password
const showpass=document.querySelectorAll('.showpass');
const passwordInput=document.querySelectorAll('.allpassInput');
    
    showpass.forEach(function (button){
        button.addEventListener("click", () => {
            var passinput= button.previousElementSibling;
            changepassType(passinput);
            if(button.classList.contains('bx-show')){
                button.classList.replace('bx-show','bx-hide');
            }else if(button.classList.contains('bx-hide')){
                button.classList.replace('bx-hide','bx-show');
            }  
    });
    });
 
    function changepassType (element){   
            if ( element.type === "password") {
                element.type = "text"
            } else {
                element.type = "password"
            }
    }
    
    
//sign up admin code
const signasAdmin=document.querySelector('.signup .usertype #option-3')
const signasDoctor=document.querySelector('.signup .usertype #option-2')
const signasPatient=document.querySelector('.signup .usertype #option-1')
const admincode=document.querySelector(' .signup .admin-code')
const usertype =document.querySelectorAll('.signup .usertype input')


usertype.forEach(function(element){
element.addEventListener('click',()=>{ 
    var input= document.querySelector('.admin-code #admin-code')
    var submitbtn=document.querySelector('.signup button[type="submit"]')
    if(signasAdmin.checked) {
        admincode.style.display='flex'
       input.setAttribute('required', '');
        submitbtn.innerHTML="Signup as Admin"

    }else if(signasDoctor.checked) {
        submitbtn.innerHTML="Signup as Doctor"
        admincode.style.display='none'
       input.removeAttribute('required');
       
    }else if(signasPatient.checked){
        submitbtn.innerHTML="Signup as Patient"       
        admincode.style.display='none'
        input.removeAttribute('required');    
    }
})  
})

