document.addEventListener("DOMContentLoaded", function () {
  
  const viewSampleButton = document.getElementById("viewSampleButton");

  
  viewSampleButton.addEventListener("click", function () {
  
    const leftImage = document.querySelector(".left-image");

    
    const enlargedImage = document.createElement("img");
    enlargedImage.src = leftImage.src; 
    enlargedImage.alt = "Enlarged Image"; 

    
    enlargedImage.style.width = "80%"; 
    enlargedImage.style.maxWidth = "800px";
    enlargedImage.style.display = "block";
    enlargedImage.style.margin = "auto";

  
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.appendChild(enlargedImage);


    document.body.appendChild(modal);

    
    enlargedImage.addEventListener("click", function () {
      document.body.removeChild(modal); 
    });
    const closeButton = document.createElement("div");
    closeButton.innerHTML = "&#10006;"; 
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.color = "#fff"; 
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "24px";
    modal.appendChild(closeButton);

    
    closeButton.addEventListener("click", function () {
      document.body.removeChild(modal); 
    });
    
  });
  const createFormButton = document.getElementById("createFormButton");
  createFormButton.addEventListener("click", function () {
    window.open("create_form.html");
  });
});
