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
let hydrationDataToday = document.querySelector('.hydration-today-data');
let hydrationDataLatestWeek = document.querySelector('.hydration-latest-week-data')
let dateInput = document.querySelector('.date-input');

let userRepository = new UserRepository(userData);
let user = createUser();
let userID = user.id;
let today = '2019/09/22'
//determineToday();

///// event listeners /////

window.addEventListener('load', function actOnLoad() {
  createUser();
  welcomeUser();
  showUserCardData();
  compareStepGoals();
});

dateInput.addEventListener('keyup', determineToday)

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

function showHydrationData() {
  let hydrationRepository = new HydrationRepository(hydrationData);
  //let ouncesToday = hydrationRepository.getUserOuncesByDate(userID, );
  //hydrationDataToday.innerText =
  //hydrationDataLatestWeek.innerText =
};

function determineToday() {
  if (dateInput.value.length === 10 && dateInput.value.indexOf('/') === 4) {
    today = dateInput.value;
    return today;
  } else {
    let allDates = hydrationData.map(dataPoint => {
      return dataPoint.date
    })
    let mostRecentDay = allDates.length - 1;
    today = mostRecentDay;
    return today;
  }
};
