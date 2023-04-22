
let encriptarBtn=document.getElementById("encriptar");
let desencriptarBtn=document.getElementById("desencriptar");
let mostrarTexto__mensaje=document.getElementById("mostrarTexto__mensaje")
let mensajeEncriptado=document.getElementById("mostrarTexto__mensaje-encriptado")
let mostrarTexto__span=document.getElementById("mostrarTexto__span")
let mostrarTexto__encriptado=document.getElementById("mostrarTexto__encriptado")
let icon_copy=document.getElementById("icon_copy")

encriptarBtn.addEventListener("click",()=>{
  
  let texto = document.getElementById("encriptador__text").value.toLowerCase()      
  let textocifrado=texto.replace(/e/gi, "enter")
                         .replace(/i/gi, "imes")
                         .replace(/a/gi, "ai")
                         .replace(/o/gi, "ober")
                         .replace(/u/gi, "ufat");
                   
                         mostrarTexto__encriptado.textContent=textocifrado;
                        

                         if( mostrarTexto__encriptado.textContent !== ""){
                                mostrarTexto__encriptado.classList.remove("ocultar")
                                icon_copy.classList.remove("ocultar")
                                mostrarTexto__mensaje.classList.add("ocultar")
                                mostrarTexto__span.classList.add("ocultar")
                                mensajeEncriptado.classList.remove("ocultar")
                              
                        }else if( mostrarTexto__encriptado.textContent == ""){
                                mostrarTexto__encriptado.classList.add("ocultar")
                                icon_copy.classList.add("ocultar")
                                mensajeEncriptado.classList.add("ocultar")
                                mostrarTexto__span.classList.remove("ocultar")
                                mostrarTexto__mensaje.classList.remove("ocultar")
                        }
});

desencriptarBtn.addEventListener("click",()=>{
  let texto = document.getElementById("encriptador__text").value.toLowerCase()
           
  let textocifrado=texto.replace(/enter/gi, "e")
                         .replace(/imes/gi, "i")
                         .replace(/ai/gi, "a")
                         .replace(/ober/gi, "o")
                         .replace(/ufat/gi, "u");
 
                         mostrarTexto__encriptado.textContent=textocifrado;
                       

});
const copiar=()=> {
        let mostrarTexto__span2=document.getElementById("mostrarTexto__span2")
        let copyText = document.getElementById("mostrarTexto__encriptado");
        copyText.select();
        document.execCommand("copy");
        console.log("copiado")
        mostrarTexto__span2.classList.remove("ocultar")
        setTimeout(()=>{
                mostrarTexto__span2.classList.add("ocultar")
        },2000)
      }
      
      document.getElementById("icon_copy").addEventListener("click", copiar);