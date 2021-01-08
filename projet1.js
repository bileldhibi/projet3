var arabic=document.getElementById("arabic");
let francais=document.getElementById("francais");
var h2=document.querySelector("#h2");
var contact=document.getElementById("contact");
var am=document.getElementById("am");
var about=document.getElementById("about");
var wel=document.getElementById("wel");

arabic.addEventListener("click",()=>{
       langage("arabic");
        localStorage.setItem("lang","arabic");
});
francais.addEventListener("click",()=>{
    langage("francais");
    localStorage.setItem("lang","francais");
});
onload=()=>{
    langage(localStorage.getItem("lang"));
};
function langage(lang){
 if(lang==="arabic"){
        h2.innerHTML="بلال ذيبي";
        contact.innerHTML="اتصل بنا";
        wel.innerHTML="مرحبا بكم في موقعي ";
        am.innerHTML="أنا مدرس إعلامي";
        about.innerHTML="معلومات عنا";
 }
   else if(lang==="francais"){
   h2.innerHTML="Bilel Dhibi";
   wel.innerHTML="Bienvenue sur mon site";
   contact.innerHTML="Nous contacter";
          am.innerHTML="Je suis un enseignant informatif";
        about.innerHTML="à propos de nous";
      }
}