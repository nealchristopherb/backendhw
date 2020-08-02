var fs = require('fs');
var inquirer = require("inquirer");
const please = require('./greeting.js')
please ()
function userQuestions(){
    
}
   
inquirer
// Prompts user for a user name
  .prompt([
    {
      type: "input",
      message: "User Name:",
      name: "username"
    },
// Prompts user for a password    
    {
      type: "password",
      message: "Password:",
      name: "passwordEntry"
    },
// Prompts user to re-enter password to verify    
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "passwordConfirm"
    }
  ])
// Verify if passwordConfirm matches passwordEntry .  If not, prompt user to re-enter password.  
  .then(function(data) {
    if (data.passwordEntry !== data.passwordConfirm){ 
      console.log("Passwords do not match, Please verify your password");
    //   userQuestions ();
    }
    else{
// Adds username and password data to userPassword.txt      
      var fs = require("fs");
      fs.writeFile ("./userPassword.txt", data.username + " : " + data.passwordEntry, function(err) {
     
      if (err) {
         return console.log(err);
      }
      else {
          console.log("Success!");
      }
      });
}
})
function userQuestions(selfRate) {
inquirer.prompt([
    type "checkbox",
    message "How are you?",
    name "selfRate"
    choices 
      "Delighted", 
      "Good", 
      "Ok", 
      "Blah"
    ])}