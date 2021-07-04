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

    document.getElementById("message_Erreur").style.color='red';
    
    if(!document.myForm.nom.focus()){

        if(validerAllLettersInput(myForm.nom)==false){

            document.getElementById("message_Erreur").innerHTML+='Oups!Votre nom ou adresse courriel n\'est pas valide';
            document.myForm.nom.value="";
            document.myForm.nom.focus();
            document.getElementById("colorOnFocus").style.borderBottomColor="black";
        }
        else{
            document.getElementById("message_Erreur").innerHTML="";
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
                           
                        document.getElementById("message").style.color='red';
                        if(!document.myForm.txtarea.focus()){

                            if(validerAllLettersInput(myForm.txtarea)==false){
                    
                                document.getElementById("message").innerHTML+='Oups!Votre message n\'est pas valide';
                                document.myForm.txtarea.value="";
                                document.myForm.txtarea.focus();
                                document.getElementById("colorOnFocus").style.borderBottomColor="black";
                            }
                            else{
                                document.getElementById("message").innerHTML="";
                               
                            }
                        }
                        // else{
                        //     document.myForm.txtarea.focus();
                        //     document.getElementById("message_Erreur").innerHTML=" ";
                        // }
                       }
                      


                   // message erreur input email adress
      function displayErrorEmailInput(){
        document.getElementById("erreur_Mail").style.color='red';
        if(!document.myForm.email.focus()){
          
          if(ValidateEmail(myForm.email)==false){

            document.getElementById("erreur_Mail").innerHTML+='Oups!Votre  adresse courriel n\'est pas valide';
            document.myForm.email.value="";
            
           
            document.getElementById("erreur_Mail").style.borderBottomColor="black";
          }
          else{
            document.getElementById("erreur_Mail").innerHTML="";
            document.myForm.txtarea.focus();
        }
        }
        
        

    }
    //   }
                 // fonction submit
                 
                 function readySubmit(){
                     
                    if(document.myForm.nom.value=="" && document.myForm.email.value=="" && document.myForm.txtarea.value==""){

                        alert("Oups! Tous les champs doivent être remplis avant dénvoyer votre formulaire!");
                    }
                   
                    else if(confirm("Etes vous prêt à envoyer votre message?")){

                       document.forms.myForm.submit();
                    }
                    else{
                        return false;
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


                 // Swipe image on mousehover


                 function swapPic() {
                    let pic =document.getElementById("image");
                    pic.src = "carldolce.png";
                     }
                    