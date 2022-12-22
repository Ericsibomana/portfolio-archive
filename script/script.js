var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
let error = 0;
let emailpattern = /[a-zA-Z0-9_.]{2,20}[@][a-zA-Z]{2,10}[.][a-zA-Z]{2,5}/;
let name = document.getElementById("fullname");
let subject = document.getElementById("subject");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
//declaration of error message
let error_name = document.getElementById("error_name");
function formvalidation(){
    if(name.value=="")
    {
    error_name.innerHTML = "Please enter your name";
    error=1;
    }
    if(subject.value=="")
    {
    error_subject.innerHTML = "Please enter your subject";
    error=1;
    }
    if(email.value=="")
    {
    error_email.innerHTML = "Please enter your email";
    error=1;
    }
    else if(!emailpattern.test(email.value))
    {
        error_email.innerHTML = "Invalid email address";
        error=1;
    }
    if(phone.value=="")
    {
    error_phone.innerHTML = "Please enter your phone number";
    error=1;
    }
    if(message.value=="")
    {
    error_message.innerHTML = "Please enter your message";
    error=1;
    }
    if(error==0)
    {
        alert("Message sent successfully");
    }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}