(function() {

  var list = document.getElementById('list');

  // Iterate over numbers

  for (var i = 1; i <= 100; i++) {

    var newNumber = document.createElement('li'); // Create element for output
    list.appendChild(newNumber); // Place element within list
    newNumber.innerText = i; // Change element inner text to loop output

    // If a multiple of 3 & 5...
    if (i % 3 === 0 && i % 5 === 0) {
      newNumber.innerText = "FizzBuzz";
      newNumber.className = "fizzbuzz";
    }
      // If only a multiple of 3...
     else if (i % 3 === 0) {
      newNumber.innerText = "Fizz";
      newNumber.className = "fizz";
    }
      // If only a multiple of 5...
     else if (i % 5 === 0) {
      newNumber.innerText = "Buzz";
      newNumber.className = "buzz";
    }
  };

})();
