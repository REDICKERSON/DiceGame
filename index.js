


var randomNumber1 = myRandomNum();
var randomNumber2 = myRandomNum();
// myRandomNum();
function myRandomNum(){var randomNumber1 = Math.floor((Math.random()*6+1)); //generates a random number.
    return randomNumber1; 
}

document.querySelector("button").addEventListener("click", function () { //lets the player click a button instead of refreshing the page.
    var randomNumber1 = myRandomNum();
    var randomNumber2 = myRandomNum();
    
    document.querySelectorAll("img")[0].setAttribute("src", 'images/dice'+randomNumber1.toString()+'.png');
    document.querySelectorAll("img")[1].setAttribute("src", 'images/dice'+randomNumber2.toString()+'.png');

    if (randomNumber1 > randomNumber2) { //if player one wins
        document.querySelector("h1").innerHTML="๐Player 1 wins!";
    }
    else if (randomNumber1 == randomNumber2) { //if it's a draw
        document.querySelector("h1").innerHTML="๐Draw!๐";
    }
    else { //if player two wins
        document.querySelector("h1").innerHTML="Player 2 wins!๐";
    }
    //
});
