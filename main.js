/**
* Place your JS-code here.
*/
$(document).ready(function(){

  'use strict';

  //Declare variables.
  var mmi, text, out, log, selected, question,index, definedList, listRows, myList;


  //Get data from html
  log = document.getElementById('log');
  text = document.getElementById('text');
  mmi = document.getElementById('inoutput');
  selected = document.getElementById('select');

  //Main text
  text.innerHTML = '<b>Välj Bild </b></br';
  text.className = 'black';

  //Question array, picture, correct answer, answer 1, answer 2
  question = [];

  definedList = false;


  if (definedList) {
    //Straight list
    myList = [
      "img/halslev.jpg", "Hålslev","Tesked", "Hålslev",
      "img/Slickepott.jpg", "Slickepott", "Hålslev","Slickepott",
      "img/bleck.jpg", "Bleck", "Djupbleck","Bleck",
      "img/djupbleck.jpg", "Djupbleck", "Kastrull","Djupbleck",
      "img/natsil.jpg", "Nätslev", "Hålslev","Nätslev",
      "img/skopa.jpg", "Skopa", "Sked","Skopa",
      "img/pasklamma.jpg", "Påsklämma", "Påsklämma","Bleck"
    ];

  listRows = myList.length/4;

  console.log(listRows);

    //Copy list to question
    question = myList.slice();

  }
  
  else {
    //Build up dynamic list
    console.log("Dynamic list created");

    //Use pictures and correct answer as a base

    var myList = [
      "img/halslev.jpg", "Hålslev","", "",
      "img/Slickepott.jpg", "Slickepott", "",""
    ];i

    listRows = myList.length/4;
  
    console.log(listRows);

    console.log(myList);


    //Add not correct opition in the first free position, the option is not already used.
    var index= 2;

    //Add correct option in a position
    var correctPos = (Pesu.random(0,1));
    myList[2+correctPos] = "Hålslev";


    for(var i =0; i<2; i++) {
      if(myList[index+i]==="") {
            myList[index+i] = "Slickepott";
	    break;
      }		
    }

    index = 6;
    correctPos = (Pesu.random(0,1));
    myList[6+correctPos] = "Slickepott";

    
    for(var i =0; i<2; i++) {
       if(myList[index+i]==="") {
	   myList[index+i] = "Hålslev";
	   break;
	}
    }


    console.log(myList);
 //Copy list to question
    question = myList.slice();

  }


  //main part for making question
  function makeQuestion(index) {

    //Picure to be displayed
    var myPhoto = {}
    myPhoto.HTMLelement = document.getElementById('photo');
    document.getElementById("photo").src = question[index];

    //Options to be displayed
    var x = document.getElementById("selection");

    //Remove all previous options
    for (var i =1; i>-1; i--) {
      x.remove(i);
    }

    //Add Option for the question
    var option = document.createElement("option");
    option.text = question[index + 2];
    x.add(option);

    var option = document.createElement("option");
    option.text = question[index + 3];
    x.add(option);

    //When row is clicked on
    mmi['roll'].onclick = (function() {
      log.innerText = "Svar: FEL"

      if (mmi['selection'].value === question[index + 1]) {
        log.innerText = "Svar: Rätt"
      }
    });

  }

  //First question , use random position to decide question
  makeQuestion(Pesu.random(0,listRows-1)*4);

  //When new question is clicked on
  mmi['newquestion'].onclick = (function() {
    //use random position to decide question
    makeQuestion(Pesu.random(0,listRows-1)*4);
  });
});
