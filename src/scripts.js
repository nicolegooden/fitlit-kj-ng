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
let dateControl = document.querySelector('input[type="date"]');
let sleepTodayData = document.querySelector('.sleep-today-data');
let sleepLatestWeekData = document.querySelector('.sleep-latest-week-data');
let sleepAchievementsData = document.querySelector('.sleep-achievements-data');
let sleepDiyData = document.querySelector('.sleep-DIY-data');

let userRepository = new UserRepository(userData);
let user = createUser();
let userID = user.id;

///// event listeners /////

window.addEventListener('load', function actOnLoad() {
  createUser();
  welcomeUser();
  showUserCardData();
  compareStepGoals();
  getDate();
  showHydrationData();
  showSleepData();
});

dateInput.addEventListener('change', showHydrationData);
dateInput.addEventListener('change', showSleepData);
dateInput.addEventListener('change', resetWidgetData);


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
  let ouncesToday = hydrationRepository.getUserOuncesByDate(userID, getDate());
  hydrationDataToday.innerText = `${ouncesToday} ounces consumed`;
  let ouncesLatestWeek = hydrationRepository.organizeOuncesForWeek(userID, getDate());
  ouncesLatestWeek.forEach(day => {
    hydrationDataLatestWeek.innerText += `${day.date}: ${day.ounces} oz.\n`;
  })
};

function getDate() {
  const regex = /-/gi;
  let myDate = dateControl.value.replace(regex, '/');
  return myDate;
};

function resetWidgetData() {
  hydrationDataLatestWeek.innerText = '';
  showHydrationData();
  sleepLatestWeekData.innerText = '';
  showSleepData();
}

function showSleepData() {
  let sleepRepository = new SleepRepository(sleepData);
  let userHoursSlept = sleepRepository.getHoursOrQualityByDate(userID, getDate(), 'hoursSlept');
  let userSleepQuality = sleepRepository.getHoursOrQualityByDate(userID, getDate(), 'sleepQuality');
  sleepTodayData.innerText = `Hours Slept: ${userHoursSlept} \n Sleep Quality: ${userSleepQuality}`;
  let sleepLatestWeek = sleepRepository.findWeeklySleepData(getDate(), userID);
  sleepLatestWeek.forEach(day => {
    sleepLatestWeekData.innerText += `${day.date}: \n Hours Slept: ${day.hoursSlept} \n Quality: ${day.sleepQuality}\n`
  });
  let averageHours = sleepRepository.calculateAverageHoursOrQuality(userID, 'hoursSlept');
  let averageQuality = sleepRepository.calculateAverageHoursOrQuality(userID, 'sleepQuality');
  sleepAchievementsData.innerText = `Average Hours Slept Nightly: ${averageHours} \n Average Sleep Quality: ${averageQuality}`;
  let bestSleepQuality = sleepRepository.findUserWithBestDataByDate(getDate(), 'sleepQuality');
  sleepDiyData.innerText = `On ${getDate()}, user ${bestSleepQuality} had the best sleep quality.`
};
