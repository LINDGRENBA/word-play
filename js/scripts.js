$(document).ready(function() {
  $(".sentence").submit(function(event) {
    event.preventDefault();
    let newArray = [];

    //collect the user's sentence from the form
    let userInput = $("#initial-sentence").val();

    //use the split method to place each word into an array
    let words = userInput.split(' ');
    
    //loop through array and get any word with 3+ characters
    words.forEach(function(word) {
      if(word.length >= 3) {
        //create a new array with these words
        newArray.push(word);
      };
    });

    //reverse the order of the new array that is composed of the 3+ char words
    //join the new, backwards array back into a string and display to the user
    let backwardsArray = newArray.reverse();
    $(".output").text(backwardsArray.join(' ') + '.');

    $(".sentence").hide();
    $(".new-sentence").show();

  });
});