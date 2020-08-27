////// query selectors //////

let greeting = document.querySelector('.greeting');
let stepGoalComparison = document.querySelector('.you-vs-others-data');
let userCardID = document.querySelector('.user-card-id');
let userCardName = document.querySelector('.user-card-name');
let userCardAddress = document.querySelector('.user-card-address');
let userCardEmail = document.querySelector('.user-card-email');
let userCardStrideLength = document.querySelector('.user-card-stride-length');
let userCardDailyStepGoal = document.querySelector('.user-card-daily-step-goal');
let userCardFriends = document.querySelector('.user-card-friends');


let userRepository = new UserRepository(userData);
let user = createUser();

///// event listeners /////

window.addEventListener('load', function actOnLoad() {
  createUser();
  welcomeUser();
  showUserCardData();
  compareStepGoals();
});

///// event handlers /////

function welcomeUser() {
  let userFirstName = user.getFirstName();
  greeting.innerText = `Welcome, ${userFirstName}!`;
  return user;
};

function getRandomID() {
  let randomUserID = Math.floor(Math.random() * userRepository.allUserData.length);
  let randomUser = userRepository.getUserData(randomUserID);
  return randomUser;
};

function compareStepGoals() {
  let averageStepGoal = userRepository.calculateAverageSteps();
  let userStepGoal = user.dailyStepGoal;
  stepGoalComparison.innerText = `Your step goal: ${userStepGoal}\n Average User\'s Step Goal: ${averageStepGoal}`;
};

function createUser() {
  let newRandomUser = getRandomID();
  let user = new User(newRandomUser);
  return user;
};

function showUserCardData() {
  userCardID.innerText = `${user.id}`;
  userCardName.innerText = `${user.name}`;
  userCardAddress.innerText = `${user.address}`;
  userCardEmail.innerText = `${user.email}`;
  userCardStrideLength.innerText = `${user.strideLength}`;
  userCardDailyStepGoal.innerText = `${user.dailyStepGoal}`;
  userCardFriends.innerText = `${user.friends}`;
};
