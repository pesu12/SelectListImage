/**
* Place your JS-code here.
*/
$(document).ready(function(){

  'use strict';

  //Declare variables.
  var mmi, text, log, selected, question,index, definedList, myList;


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

  //If fixed list is used
  definedList = true;


  //main part for making question
  function makeQuestion() {

    if (definedList) {
      //Straight list
      myList = [
        "img/halslev.jpg", "Hålslev","Tesked", "Hålslev",
        "img/Slickepott.jpg", "Slickepott", "Hålslev","Slickepott",
        "img/bleck.jpg", "Bleck", "Djupbleck","Bleck",
        "img/djupbleck.jpg", "Djupbleck", "Kantin","Djupbleck",
        "img/natsil.jpg", "Nätsil", "Hålslev","Nätsil",
        "img/skopa.jpg", "Skopa", "Sked","Skopa",
        "img/pasklamma.jpg", "Påsklämma", "Påsklämma","Bleck"
      ];

      //Get random question
      index = Pesu.random(0,(myList.length/4)-1)*4;

      //Copy list to question
      question = myList.slice();

    } else {

      var myList = [
        "img/halslev.jpg", "Hålslev","", "",
        "img/Slickepott.jpg", "Slickepott", "","",
        "img/bleck.jpg", "Bleck", "","",
        "img/djupbleck.jpg", "Djupbleck", "","",
        "img/natsil.jpg", "Nätsil", "","",
        "img/skopa.jpg", "Skopa", "","",
        "img/pasklamma.jpg", "Påsklämma", "",""
      ];

      //Get random question
      index = Pesu.random(0,(myList.length/4)-1)*4;

      //Add not correct opition in the first free position, the option is not already used.
      for (var j =2;j<27; j=j+4) {
        buildDynamicRow(j);
      }

      //Copy list to question
      question = myList.slice();

      function buildDynamicRow(index) {
        //Here we set correct answer
        var correctPos = (Pesu.random(0,1));
        myList[index+correctPos] = myList[index-1]

        //Here we set faulty answer
        for(var i =0; i<2; i++) {
          if(myList[index+i]==="") {
            myList[index+i] = myList[setFaultyAnswer(index)];
            break;
          }
        }
      }

      //Get faulty answer by fetching Correct answer on other row index
      function setFaultyAnswer(index) {
        var result =0;

        //Get result that is not the same as the index.
        do {
          result =Pesu.random(0,(myList.length/4)-1)*4+1;
        } while(result === index);

        return result;
      }
    }

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
  makeQuestion();

  //When new question is clicked on
  mmi['newquestion'].onclick = (function() {
    //use random position to decide question
    makeQuestion();
  });
});
