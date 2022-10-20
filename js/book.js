const bookpage=document.querySelector('section#book-appointment');
const myAptpage=document.querySelector('section#my-appointments');
const myprofilepage=document.querySelector('section#my-profile');
const bookNav=document.querySelector('.booknav');
const myaptNav=document.querySelector('.myaptnav');

function showAptpage(){
    bookpage.style.display="none";
    myAptpage.style.display="flex";
    myprofilepage.style.display="none";
    myaptNav.classList.add('active');
    bookNav.classList.remove('active');
}

function showBookpage(){
    
    myAptpage.style.display="none";
    bookpage.style.display="flex";  
    myprofilepage.style.display="none";
    bookNav.classList.add('active');
    myaptNav.classList.remove('active');
}

function showProfile(){

    myAptpage.style.display="none";
    bookpage.style.display="none";  
    myprofilepage.style.display="flex";
    bookNav.classList.remove('active');
    myaptNav.classList.remove('active');
   

}


const nextdoctorBtn=document.querySelector('#book-appointment .nextDoctor');
const nextschedBtn=document.querySelector('#book-appointment .nextschedule');
const nextconfirmBtn=document.querySelector('#book-appointment .nextconfirm');

const allbooksection=document.querySelectorAll('#book-appointment form section');

const bookprogresO=document.querySelectorAll('#book-appointment .progress-bar .circles .circle');
const bookprogressbar=document.querySelector('#book-appointment .progress-bar .bar .line');


function showbookServices(){
    allbooksection[0].style.display="flex";
    allbooksection[1].style.display="none";
    allbooksection[2].style.display="none";
    allbooksection[3].style.display="none";
    bookprogresO[1].classList.remove('active');
    bookprogresO[2].classList.remove('active');
    bookprogresO[3].classList.remove('active');
    bookprogressbar.style.width="0%";
    
}

function showbookDoctors(){
    allbooksection[0].style.display="none";
    allbooksection[1].style.display="flex";
    allbooksection[2].style.display="none";
    allbooksection[3].style.display="none";
    bookprogresO[1].classList.add('active');
    bookprogresO[2].classList.remove('active');
    bookprogresO[3].classList.remove('active');
    bookprogressbar.style.width="33%";

}

function showbookSchedule(){
    allbooksection[0].style.display="none";
    allbooksection[1].style.display="none";
    allbooksection[2].style.display="flex";
    allbooksection[3].style.display="none";
    bookprogresO[2].classList.add('active');
    bookprogresO[3].classList.remove('active');
    bookprogressbar.style.width="66%";
}
function showbookConfirmation(){
    allbooksection[0].style.display="none";
    allbooksection[1].style.display="none";
    allbooksection[2].style.display="none";
    allbooksection[3].style.display="flex";
    bookprogresO[3].classList.add('active');
    bookprogressbar.style.width="99%";
}


console.log(bookprogresO)