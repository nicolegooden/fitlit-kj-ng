////// query selectors //////

let greeting = document.querySelector('.greeting');

///// event listeners /////

window.addEventListener('load', welcomeUser);

///// event handlers /////

function welcomeUser() {
  let newRandomUser = getRandomUser();
  let user = new User(newRandomUser);
  let userFirstName = user.getFirstName();
  greeting.innerText = `Welcome, ${userFirstName}!`;
};

function getRandomUser() {
  let userRepository = new UserRepository(userData);
  let randomUserID = Math.floor(Math.random() * userRepository.allUserData.length);
  let randomUser = userRepository.getUserData(randomUserID);
  return randomUser;
};
