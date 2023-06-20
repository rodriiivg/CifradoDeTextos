function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let defecto = document.getElementById("defecto");
  
    let textoCifrado = texto
      .replace(/e/gi, "xp")
      .replace(/i/gi, "ew")
      .replace(/a/gi, "kp")
      .replace(/o/gi, "ñl")
      .replace(/u/gi, "ñsl");
  
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
      .replace(/xp/gi, "e")
      .replace(/ew/gi, "i")
      .replace(/kp/gi, "a")
      .replace(/ñl/gi, "o")
      .replace(/ñsl/gi, "u");
    
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
