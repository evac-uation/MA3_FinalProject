window.onload = function() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var imageOnClick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; 
        captionText.innerHTML = this.alt;  
      };

      document.getElementById("myImg1").onclick = imageOnClick;
      document.getElementById("myImg2").onclick = imageOnClick;
      document.getElementById("myImg3").onclick = imageOnClick;
      document.getElementById("myImg4").onclick = imageOnClick;
      document.getElementById("myImg5").onclick = imageOnClick;

    var span = document.getElementsByClassName("close")[0];
  

    span.onclick = function() {
      modal.style.display = "none";
    };
  

    modal.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  
    modal.addEventListener("touchstart", function(event) {
      if (event.target === modal) {
        modal.style.display = "none"; 
      }
    });
  };