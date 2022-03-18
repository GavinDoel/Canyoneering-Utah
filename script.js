var timesClickedNorth = 0;
function northClick() {
  timesClickedNorth += 1;
  var clicked = document.getElementById("northInfo");
  var clickedRobb = document.getElementById("robbInfo");
  var clickedEsc =                         document.getElementById("escInfo");
  if (timesClickedNorth%2 == 1 && timesClickedRobb == 0 && timesClickedEsc == 0) {
    clicked.style.display = "block";
  }
  else if (timesClickedNorth == timesClickedRobb){
      clickedRobb.style.display = "none";
      clicked.style.display = "block";
  }
  else if (timesClickedNorth == timesClickedEsc){
      clickedEsc.style.display = "none";
      clicked.style.display = "block";
  }
  else {
    clicked.style.display = "none";
    timesClickedNorth = 0;
  }
};

var timesClickedRobb = 0;
function robbClick() {
    var clicked = document.getElementById("northInfo");
    var clickedRobb = document.getElementById("robbInfo");
    var clickedEsc =                         document.getElementById("escInfo");
    timesClickedRobb += 1;
    if (timesClickedRobb%2 == 1 && timesClickedNorth == 0 && timesClickedEsc == 0) {
        clickedRobb.style.display = "block";
    }
    else if (timesClickedNorth == timesClickedRobb){
      clicked.style.display = "none";
      clickedRobb.style.display = "block";
    }
    else if (timesClickedEsc == timesClickedRobb){
      clickedEsc.style.display = "none";
      clickedRobb.style.display = "block";
    }
    else {
        clickedRobb.style.display = "none";
        timesClickedRobb = 0;
    }
};

var timesClickedEsc = 0;
function escClick() {
    var clicked = document.getElementById("northInfo");
    var clickedRobb = document.getElementById("robbInfo");
    var clickedEsc =                         document.getElementById("escInfo");
    timesClickedEsc += 1;
    if (timesClickedEsc%2 == 1 && timesClickedRobb == 0 && timesClickedNorth == 0) {
        clickedEsc.style.display = "block";
    }
    else if (timesClickedEsc == timesClickedRobb){
      clickedRobb.style.display = "none";
      clickedEsc.style.display = "block";
      timesClickedEsc = 0;
    }
    else if (timesClickedEsc == timesClickedNorth){
      clickedNorth.style.display = "none";
      clickedEsc.style.display = "block";
      timesClickedEsc = 0;
    }
    else {
        clickedEsc.style.display = "none";
        timesClickedEsc = 0;
    }
    
}

function contactClick() {
    var clickedContact = document.getElementById("contact");
    clickedContact.style.display = "block";
}