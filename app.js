 let emailListner = document.querySelector("#inputEmail4");

 emailListner.addEventListener("keydown", ()=> {

   let emailTyping = emailListner.value;
   if(emailTyping.length > 0) {
      let mailTypingSvg = document.querySelector("#mail_typing");
      let defaultSvg = document.querySelector("#default");
      let passTyping = document.querySelector("#pass_typing");
   
      defaultSvg.style.display = "none";
      mailTypingSvg.style.display = "block";
      passTyping.style.display = "none";
   }
   else {
      console.log(emailTyping.length)
   }

 })


 let passListener = document.querySelector("#inputPassword4");

 passListener.addEventListener("keydown", ()=> {
   let passType = passListener.value;
   let mailTypingSvg = document.querySelector("#mail_typing");
   let passTyping = document.querySelector("#pass_typing");
   let defaultSvg = document.querySelector("#default");
   
   if(passType.length > 0) {
      mailTypingSvg.style.display = "none";
      defaultSvg.style.display = "none";
      passTyping.style.display = "block";
   }

 })
