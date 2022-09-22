$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName);
      let coolPic = '<img width="500" height="550" src="' + generateCoolPic(userName) + '"></img>'  

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
      $("#coolPicOutput").html(coolPic);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts += "<h4>" + nameLength(userName) + "</h4>";
  coolFacts += "<h4> " + nameStart(userName) + "</h4>";
  coolFacts += "<h4> " + nameEnd(userName) + "</h4>";
  coolFacts += "<h4>" + reverseName(userName) + "</h4>";
  coolFacts += "<h4>" + nameSlice(userName) + "</h4>";
  coolFacts += "<h4>" + upperCase(userName) + "</h4>";
  coolFacts += "<h4>" + lowerCase(userName) + "</h4>";
  coolFacts += "<h4>" + swapCase(userName) + "</h4>";
  coolFacts += "<h4>" + spiritAnimal(userName) + "</h4>";

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "The first letter of your name is " + name[0]
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "The last letter of your name is " + name[lastIndex]
}

function reverseName(name) {
  
  let arrName = name.split(""); 

  revName = arrName.reverse("");

  joinArray = revName.join("");

  return "Your name reversed is " + joinArray
     
}

function nameSlice(name) {
  let newName = name.slice(1);
  return "Without the first letter your name is " + newName
}

function upperCase(name) {
  let upperName = name.toUpperCase();
  return "Your name in all upper case letters is " + upperName
}

function lowerCase(name) {
  let lowerName = name.toLowerCase();
  return "Your name in all lower case letters is " + lowerName
}

function swapCase(name) {
  return name.split('').map((c,i) => 
      i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
  ).join('');   
}

function spiritAnimal(name) {
  if (name.length <= 4) {
    return "your spirit animal is a hamster!"
  } else if (name.length >= 5 && name.length <= 7) {
    return "Your spirit animal is a dog!"
  } else {
    return "Your spirit animal is a cat!"
  }
}

function generateCoolPic(name) {
  if (name.length <= 4) {
    return "./img/funnyHamster.jpg"
  } else if (name.length >= 5 && name.length <= 7) {
    return "./img/pupper.jpg"
  } else {
    return "./img/derpyKitty.jpg"
  }
}
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}