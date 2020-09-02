////// query selectors //////

let greeting = document.querySelector('.greeting');
let stepGoalComparison = document.querySelector('.step-goal-comparison');
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
let activityTodayData = document.querySelector('.activity-today-data');
let activityComparison = document.querySelector('.you-vs-others-data');
let activityLatestWeekData = document.querySelector('.activity-latest-week-data');
let activityAchievementsData = document.querySelector('.activity-achievements-data');

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
  showActivityData();
});

dateInput.addEventListener('change', showHydrationData);
dateInput.addEventListener('change', showSleepData);
dateInput.addEventListener('change', showActivityData);
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
  activityLatestWeekData.innerText = '';
  showActivityData();
}

function showSleepData() {
  let sleepRepository = new SleepRepository(sleepData);
  let userHoursSlept = sleepRepository.getHoursOrQualityByDate(userID, getDate(), 'hoursSlept');
  let userSleepQuality = sleepRepository.getHoursOrQualityByDate(userID, getDate(), 'sleepQuality');
  sleepTodayData.innerText = `Hours Slept: ${userHoursSlept} \n Sleep Quality: ${userSleepQuality}`;
  let sleepLatestWeek = sleepRepository.findWeeklySleepData(getDate(), userID);
  sleepLatestWeek.forEach(day => {
    sleepLatestWeekData.innerText += `\n${day.date}: \n Hours Slept: ${day.hoursSlept} \n Quality: ${day.sleepQuality}\n`
  });
  let averageHours = sleepRepository.calculateAverageHoursOrQuality(userID, 'hoursSlept');
  let averageQuality = sleepRepository.calculateAverageHoursOrQuality(userID, 'sleepQuality');
  sleepAchievementsData.innerText = `Average Hours Slept Nightly: ${averageHours} \n Average Sleep Quality: ${averageQuality}`;
  let bestSleepQuality = sleepRepository.findUserWithBestDataByDate(getDate(), 'sleepQuality');
  sleepDiyData.innerText = `On ${getDate()}, user ${bestSleepQuality} had the best sleep quality.`
};

function showActivityData() {
  let activityRepository = new ActivityRepository(activityData, userData);
  let activeMinutesToday = `${activityRepository.getDataByDate(userID, getDate(), 'minutesActive')}`;
  let milesWalkedToday = `${activityRepository.getUserMiles(userID, getDate())}`;
  let stepsToday = `${activityRepository.getDataByDate(userID, getDate(), 'numSteps')}`;
  let flightsToday = `${activityRepository.getDataByDate(userID, getDate(), 'flightsOfStairs')}`;
  let allSteps = `${activityRepository.calculateAverageDataByDate(getDate(), 'numSteps')}`;
  let allMinutes = `${activityRepository.calculateAverageDataByDate(getDate(), 'minutesActive')}`;
  let allFlights = `${activityRepository.calculateAverageDataByDate(getDate(), 'flightsOfStairs')}`;
  activityTodayData.innerText = `Minutes Active: ${activeMinutesToday}\n Miles Walked: ${milesWalkedToday}\n Steps: ${stepsToday}\n`;
  activityComparison.innerText = `\nYou Today:\n Minutes Active: ${activeMinutesToday}\n Steps: ${stepsToday}\n Flights Climbed: ${flightsToday}\n \n All Users Today:\n Minutes Active: ${allMinutes}\n Steps: ${allSteps}\n Flights Climbed: ${allFlights}`;
  activityRepository.findWeeklyActivityData(getDate(), userID).forEach(dataPoint => {
    activityLatestWeekData.innerText += `\n${dataPoint.date}: \n Steps: ${dataPoint.numSteps} \n Flights Climbed: ${dataPoint.flightsOfStairs} \n Minutes Active: ${dataPoint.minutesActive}\n`;
  })
  let mostMinutesActive = activityRepository.findRecord(userID, 'minutesActive');
  activityAchievementsData.innerText = `Congrats! Your all-time record for active minutes for any day is: ${mostMinutesActive}`;
};
