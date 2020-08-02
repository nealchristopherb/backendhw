
var inquirer = require("inquirer");
var fs = require('fs');
console.log("Please answer a few questions:")
inquirer.prompt ([  
    {
    type: "input",
    name: "name",
    message: "What is your name?"])
},
  {
    type: "checkbox",
    message: "How are you?",
    name: "selfRate"
    choices:[ 
      "Delighted", 
      "Good", 
      "Ok", 
      "Blah"
    ]
    },
)
  
.then(function(data) {

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(./resultFile.txt, data.name + " : " + data.selfRate), function(err) {

    if (err), {
      return console.log(err);
    }

    console.log("Success!");

  });
}