
document.addEventListener("DOMContentLoaded", function(){

  var firstChoice = {
      a:["Aqua-berry", "Aqua-Shock", "Atomic"],
      b:["Berry", "Big Money", "Burly Boi", "Butterscotch", "Bobby"],
      c:["Kokayne", "Codeine", "Chubby", "Carlos", "Candycorned", "Candy Apple", "Candy Red", "Candy Blue" ],
      d:["Deion", "Dangleberry", "Dolce", "Dirt Dog", "Dirt"],
      e:["Earnest", "East Greece"],
      f:["Four Wheeler"],
      g:["Golden", "Gucci", "God", "Gary Payton"],
      h:["Husky"],
      i:["Inspector Gadget", "Iceberg"],
      j:["Jody", "MamaJama"],
      k:["Kokayne", "King Chip"],
      l:["Lemon" ],
      m:["Mercedez", "Mona Lisa", "Master", "Muscle Man"],
      n:["Neon", "Nostradamus"],
      o:["OshKosh"],
      p:["Prada", "Promethazine"],
      q:["Queen", "Swoll"],
      r:["Rap Game", "Rapunzel", "Ravishing Rick Rude", ],
      s:["Supersize", "Syrup Sippin", "Super Sonic", "Sexy", "Sugar Coated", "Sushi"],
      t:["Tsunami", "Toucan", "Tiger Bear" ],
      u:["Ungulant"],
      v:["Versatile", "Versace", "Venomous" ],
      w:["The White", "Wintergreen"],
      x:["Xanny"],
      y:["The Yoked", "The Yummy"],
      z:["Shaka Zulu"],
  };

  var secondChoice = {
      a:["Alien", "Assassin", "Ass Kicker"],
      b:["Bugle Boy", "Boyardee"],
      c:["Cheeto", "Candy Copper", "Caesar"],
      d:["Dolphin", "Digital", "Donald Glover", "Disco"],
      e:["Eddy Murphy", ],
      f:["Lord Fauntleroy"],
      g:["Givins", "Gargoyle"],
      h:["Husky", "Highroller", "Hurricane", "Hawaiian Punch" ],
      i:["Icon"],
      j:["Jetson Judy", ],
      k:["Krangle"],
      l:["Lord Fauntleroy"],
      m:["Mane", "Menace", "McGert", "Master"],
      n:["Navigator"],
      o:["Oprah", "Oz"],
      p:["Python", "Poppins", "Prince", "Puppy", "Porterhouse"],
      q:["Quickie"],
      r:["Raisin", "Redneck", "Reject", "Robber"],
      s:["Simpson", "Slim", "Sadie Hawkins", "Sanders"],
      t:["ThreeMoons", "Taxman"],
      u:["Uncle Ben"],
      v:["Valkyrie"],
      w:["Whirlwind"],
      x:["Xan Man"],
      y:["Youngling"],
      z:["Shaka Zulu"],
  };

  var submitButton = document.querySelector(".btn-style");
  var nameForm = document.querySelector("#nameForm");


    //-------------- BEGINNING OF FUNCTION -------------------------------------

  function pickAndShowName(e){
    e.preventDefault();
    var inputSection = document.querySelector(".initialInputs");
    var rapNameSpace = document.querySelector(".rapName");
    var firstName = document.querySelector(".firstName").value;
    var lastName = document.querySelector(".lastName").value;
    var newString = 0;
    var secondString = 0;
    // If the input section is hidden it means the user wants to type in
    // a fresh name and try again.
    if(inputSection.hidden) {
      inputSection.hidden = false;
      rapNameSpace.innerHTML = "";
      return;
    }

    //------------------------ First Name --------------------------------------

    for(var i=0; i<firstName.length; i++){
      newString += firstName[i].toLowerCase().charCodeAt();
    }
    var arrayPlace = newString % firstChoice[firstName[0].toLowerCase()].length;
    var firstNameVal = firstChoice[firstName[0].toLowerCase()][arrayPlace];

    console.log(firstNameVal)

    //------------------------ Last Name ---------------------------------------

    for(var i=0; i<lastName.length; i++){
      secondString += lastName[i].toLowerCase().charCodeAt();

    }
    var arrayPlace2 = secondString % secondChoice[lastName[0].toLowerCase()].length;
    var lastNameVal = secondChoice[lastName[0].toLowerCase()][arrayPlace2];

    console.log(lastNameVal)

    //--------------------------- Append to Page -------------------------------
    var rapNameSpace = document.querySelector(".rapName");
    rapNameSpace.innerHTML = "RiFF RaFF dubs thee: <br />" + firstNameVal + " " + lastNameVal;
    submitButton.value = "Try Another Name"
    var reset1 = document.querySelector(".firstName")
    var reset2 = document.querySelector(".lastName")
    reset1.value = "";
    reset2.value = "";
    //--------------------------- Hide Inputs ----------------------------------
    inputSection.hidden = true;
  };

  //------------------------------- END OF FUNCTION-----------------------------

  nameForm.addEventListener("keydown", function(e){
    if(event.which === 13) {
      pickAndShowName(e);
    }
  });

  submitButton.addEventListener("click", pickAndShowName);

});
