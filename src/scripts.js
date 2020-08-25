////// query selectors //////

let greeting = document.querySelector('.greeting');
let stepGoalComparison = document.querySelector('.you-vs-others-data');

let userRepository = new UserRepository(userData);

///// event listeners /////

window.addEventListener('load', compareStepGoals);

///// event handlers /////

function welcomeUser() {
  let newRandomUser = getRandomUser();
  let user = new User(newRandomUser);
  let userFirstName = user.getFirstName();
  greeting.innerText = `Welcome, ${userFirstName}!`;
  return user;
};

function getRandomUser() {
  let randomUserID = Math.floor(Math.random() * userRepository.allUserData.length);
  let randomUser = userRepository.getUserData(randomUserID);
  return randomUser;
};

function compareStepGoals() {
  let userForStepGoals = welcomeUser();
  let averageStepGoal = userRepository.calculateAverageSteps();
  let userStepGoal = userForStepGoals.dailyStepGoal;
  stepGoalComparison.innerText = `Your step goal: ${userStepGoal}\n Average User\'s Step Goal: ${averageStepGoal}`;
};
