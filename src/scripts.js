////// query selectors //////

let greeting = document.querySelector('.greeting');
let stepGoalComparison = document.querySelector('.you-vs-others-data');


let userRepository = new UserRepository(userData);
let user = createUser();

///// event listeners /////

window.addEventListener('load', compareStepGoals);
window.addEventListener('load', createUser);
window.addEventListener('load', welcomeUser);

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

}
