function retourAcceuil() {
  window.location.href = "index.html"; 
}
function voirCV() {
  window.location.href = "cv.html";
}
function changerTheme() {
  document.body.classList.toggle("alt-theme");
}
function telechargerPDF() {
  const bouton = document.getElementById("btn");
  bouton.style.display = "none";
  const element = document.getElementById("convertirEnPDF");
  html2pdf().from(element).save("Aïssatou_Coulibaly_CV.pdf");
  bouton.style.display = "visible";
}
