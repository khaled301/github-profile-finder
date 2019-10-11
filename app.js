/*
// Init Github
const github = new Github;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        // Show profile
      }
    })
  } else {
    // Clear profile
    
  }
}); 
*/

//Search Input
const searchUser = document.getElementById('searchUser');

// INIT Github
const github = new Github;

// INIT UI
const ui = new UI;

//Search inputlistener 
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== '') {
    //Make Http Call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //Show Alert
          ui.showAlert('Sorry profile is not found', 'alert alert-danger');
        }
        else {
          //Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });

  }
  else {
    //Clear Profile
    ui.clearProfile();
  }
});