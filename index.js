function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let defecto = document.getElementById("defecto");
  
    let textoCifrado = texto
      .replace(/e/gi, "res")
      .replace(/i/gi, "per")
      .replace(/a/gi, "vita")
      .replace(/o/gi, "inter")
      .replace(/u/gi, "magna");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito!";
      parrafo.textContent = "";
      defecto.src = "./img/encriptado.png";
    } else {
      defecto.src = "./img/defecto.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado!";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ups!", "Debes ingresar un texto para poder encriptarlo!", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let defecto = document.getElementById("defecto");
  
    let textoCifrado = texto
      .replace(/res/gi, "e")
      .replace(/per/gi, "i")
      .replace(/vita/gi, "a")
      .replace(/inter/gi, "o")
      .replace(/magna/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito!";
        parrafo.textContent = "";
        defecto.src = "./img/desencriptado.png";
      } else {
        defecto.src = "./img/defecto.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ups!", "Debes ingresar un texto para poder desencriptarlo!", "warning");
      }
  }