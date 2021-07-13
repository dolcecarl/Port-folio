const button_scroll = document.querySelector('.button_scroll_To_Top');
window.addEventListener('scroll', () => {

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {

        button_scroll.style.display = 'block';
    }
    else {
        button_scroll.style.display = 'none';
    }
})
button_scroll.addEventListener('click', () => {

    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

/*Display Hamburger menu*/

function displayMenuOnMediaScreenMode() {
    let myDiv = document.getElementById("Container_Menu");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
}


/********DARK MODE METHODE*************/
function turnToDark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
/* display on scroll*/

// windows.addEventListener('scroll', reveal)

// function reval() {

//     let reveals = document.querySelectorAll('.reveal');

//     for (let i = 0; i < reveals.length; i++) {
//         let windowsheight = windows.innerHeight;
//         let revealTop = reveals[i].getBoundingClientRect.top;
//         let revealPoint = 150;

//         if (revealTop < windowsheight - revealPoint) {
//             reveals[i].classList.add('active');
//         }
//         else {
//             reveals[i].classList.remove('active')
//         }
//     }
// }


/********HIDE NAV BAR*************/



/*window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("Container_Menu").style.top = "0";
    } else {
        document.getElementById("Container_Menu").style.top = "-70px";
    }
}*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("Container_Menu").style.top = "0";
    } else {
        document.getElementById("Container_Menu").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}


             // Form validation nom utilisateur

function displayErreurInput() {

    document.querySelector("#message_Erreur").style.color='red';
    
    if(!document.myForm.nom.focus()){

        if(validerAllLettersInput(myForm.nom)==false){

            document.querySelector("#message_Erreur").innerHTML+='Oups!Votre nom  n\'est pas valide';
            document.myForm.nom.value="";
            document.myForm.nom.focus();
            document.querySelector(".colorOnFocus").style.borderBottomColor="black";
        }
        else{
            document.querySelector("#message_Erreur").innerHTML="";
            document.myForm.email.focus();
        }
    }
    // else{
    //     document.myForm.nom.focus();
    //     document.getElementById("message_Erreur").innerHTML=" ";
    // }
    
}


                       // fonction Valider message erreur textarea

                       function validateMessage(){
                           
                        document.querySelector("#message").style.color='red';
                        if(!document.myForm.txtarea.focus()){

                            if(lettersandSpacesOnly(myForm.txtarea)==false ){
                    
                                document.querySelector("#message").innerHTML+='Oups!Votre message n\'est pas valide';
                                document.myForm.txtarea.value="";
                                document.myForm.txtarea.focus();
                                document.querySelector(".colorOnFocus").style.borderBottomColor="black";
                            }
                            else{
                                document.querySelector("#message").innerHTML="";
                               
                            }
                        }
                        // else{
                        //     document.myForm.txtarea.focus();
                        //     document.getElementById("message_Erreur").innerHTML=" ";
                        // }
                       }
                      


                   // message erreur input email adress
      function displayErrorEmailInput(){
        document.querySelector("#erreur_Mail").style.color='red';
        if(!document.myForm.email.focus()){
          
          if(ValidateEmail(myForm.email)==false){

            document.querySelector("#erreur_Mail").innerHTML+='Oups!Votre  adresse courriel n\'est pas valide';
            document.myForm.email.value="";
            
           
            document.querySelector("#erreur_Mail").style.borderBottomColor="black";
          }
          else{
            document.querySelector("#erreur_Mail").innerHTML="";
            document.myForm.txtarea.focus();
        }
        }
        
        

    }
    //   }
                 // fonction submit
                 
                 function readySubmit(){
                    document.querySelector("#message").style.color='red';
                     document.querySelector("#message").innerHTML="";
                    if(document.myForm.nom.value=="" && document.myForm.email.value=="" && document.myForm.txtarea.value==""){

                        
                       return document.querySelector("#message").innerHTML+="Oups!"+" "+" "+ "Tous les champs doivent être remplis avant d\'envoyer votre formulaire!";;
                    }
                   
                    else {
                       

                       let result=confirm(document.myForm.nom.value.toUpperCase()+","+" "+" "+"êtes vous prêt à envoyer votre message?");
                       if(result){
                        document.forms.myForm.submit();
                       }
                       else{
                        return false;
                    }
                    }
                    
                 }

                 // fonction change color input on focus

                 function changeColorInput(){

                    document.querySelector(".colorOnFocus").style.borderBottomColor="blue";
                    
                 }


                      // validate mailadress
                      function ValidateEmail(input) {

                        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      
                        if (input.value.match(validRegex)) {
                      
                          
                          return true;
                      
                        } else {
                      
                     
                          return false;
                      
                        }
                      
                      }

                    



                            // Validate alphabetic Characters

                            function validerAllLettersInput(textField ){ 
                                 if( textField.value.length != 0 ||textField.value.length==" "){
                                 for (let i = 0; i < textField.value.length;i++){
                                 let ch= textField.value.charAt(i);
                                /* alert(ch); Using alert to see what characters
                                are coming in
                                */
                                if((ch < "A" || ch > "Z") && (ch< "a" || ch >"z")){ 
                                return false;
                                } 
                                }
                                }
                                else {
                                     return true; 
                                    }
                                    } 

                            // foncion alphanumeric and space 

                            function lettersandSpacesOnly(input){
                                let regexs = /[^a-z ]*$/gmi;
                               if(input.value = input.value.replace(regexs, "")){

                                return true;
                               } 
                               else{
                                   return false;
                               }
                              }
                            
                 // Swipe image on mousehover


                 function swapPic() {
                    let pic =document.getElementById("image");
                    pic.src = "carldolce.png";
                     }
                    

                     //Fonction redirecct web page

                     function goToMianPage(){


                        location.replace("https//dolce-tech.com");
                     }