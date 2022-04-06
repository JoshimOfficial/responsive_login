let emailListner = document.querySelector("#inputEmail4");
let passListener = document.querySelector("#inputPassword4");
let loginBtn = document.querySelector(".login");

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        loginBtn.click()
    }
})

emailListner.addEventListener("keydown", () => {

    let emailTyping = emailListner.value;
    if (emailTyping.length >= 0) {
        let mailTypingSvg = document.querySelector("#mail_typing");
        let defaultSvg = document.querySelector("#default");
        let passTyping = document.querySelector("#pass_typing");

        defaultSvg.style.display = "none";
        mailTypingSvg.style.display = "block";
        passTyping.style.display = "none";
        mailTypingSvg.style.transition = "1s";
    } else {
        console.log(emailTyping.length)
    }

    if(emailTyping.length > 0) {
       emailListner.style.borderColor = "black"
       let emailText = document.querySelector(".emailText");

       emailText.style.color = "black";
      
    }



})

passListener.addEventListener("keydown", () => {
    let passType = passListener.value;
    let mailTypingSvg = document.querySelector("#mail_typing");
    let passTyping = document.querySelector("#pass_typing");
    let defaultSvg = document.querySelector("#default");

    if (passType.length >= 0) {
        mailTypingSvg.style.display = "none";
        defaultSvg.style.display = "none";
        passTyping.style.display = "block";

    }

    if (passType.length > 0) {
      passListener.style.borderColor = "black";

      let passText = document.querySelector(".passText");
      passText.style.color = "black"
    }
})


// Form Validation

loginBtn.addEventListener("click", () => {
    let passValue = passListener.value
    if (passValue.length < 1) {

        let passSec = document.querySelector(".passSec");
        let passText = document.querySelector(".passText");

        passSec.classList.add("animate__shakeX")
        passListener.style.borderColor = "red"
        passText.style.color = "red"
        setTimeout(function() {
            passSec.classList.remove("animate__shakeX")
        }, 1000)
    }

    let emailValue = emailListner.value
    if (emailValue.length < 1) {

        let emailSec = document.querySelector(".emailSec");
        let emailText = document.querySelector(".emailText");

        emailSec.classList.add("animate__shakeX")
        emailListner.style.borderColor = "red";
        emailText.style.color = "red";
        setTimeout(function() {
            emailSec.classList.remove("animate__shakeX")
        }, 1000)
    }

    // Login Success: used obfuscator for username and pass security.


     if (emailValue == "admin" && passValue == 123) {

         let modal = document.querySelector(".loginSuccessModal");
         let modalContent = document.querySelector(".loginSuccess");

         modal.style.display = "block";
         modalContent.style.opacity = "1";
         modalContent.style.zIndex = "0"
         modalContent.classList.add("animate__zoomInLeft");
         modalContent.classList.remove("animate__zoomOutRight")

         let skipTheModal = document.querySelector(".skipCard");
         skipTheModal.addEventListener("click", () => {
             
             modalContent.style.opacity = "0"
             modalContent.classList.remove("animate__zoomInLeft");
             modalContent.classList.add("animate__zoomOutRight")
             setTimeout(function() {
                modal.style.display = "none";
             },500)
         })

     } else {

      function warningHeader() {
   
         let warning = document.querySelector(".emailPassNotMatched");
         let warningSvg = document.querySelector(".warning");


         warningSvg.style.display = "inline"
         warning.classList.remove("animate__bounceOutUp")
         warning.classList.add("animate__bounceInDown");
         warning.style.opacity = "1"
      
         setTimeout(function(){
          warning.classList.remove("animate__bounceInDown");
          warning.classList.add("animate__bounceOutUp")
         },2500)
      }
      
      warningHeader()

      function emailWarning() {
         let emailSec = document.querySelector(".emailSec");
         let emailText = document.querySelector(".emailText");
   
         emailSec.classList.add("animate__shakeX")
         emailListner.style.borderColor = "red";
         emailText.style.color = "red";
         setTimeout(function() {
             emailSec.classList.remove("animate__shakeX")
         }, 1000)
      }
      emailWarning()



function passWarning() {
   let passSec = document.querySelector(".passSec");
   let passText = document.querySelector(".passText");

   passSec.classList.add("animate__shakeX")
   passListener.style.borderColor = "red"
   passText.style.color = "red"
   setTimeout(function() {
       passSec.classList.remove("animate__shakeX")
   }, 1000)
}
passWarning()


}

})



let getEmailPass = document.querySelector(".forgot_pass");

getEmailPass.addEventListener("click", ()=>{
    let recPassSec = document.querySelector(".recPass");

    recPassSec.style.border = "1px solid red";
    recPassSec.classList.add("animate__tada")

    setTimeout(function() {
        recPassSec.classList.remove("animate__tada")
    },1500)
})
