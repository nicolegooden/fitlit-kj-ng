const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');

const sleepData = [
  {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  },
  {
    "userID": 5,
    "date": "2019/06/15",
    "hoursSlept": 4.1,
    "sleepQuality": 3.6
  },
  {
    "userID": 6,
    "date": "2019/06/15",
    "hoursSlept": 9.6,
    "sleepQuality": 2.9
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 8.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 5,
    "date": "2019/06/16",
    "hoursSlept": 7.4,
    "sleepQuality": 2.4
  },
  {
    "userID": 6,
    "date": "2019/06/16",
    "hoursSlept": 5.3,
    "sleepQuality": 4.3
  },
  {
   "userID": 4,
   "date": "2019/06/17",
   "hoursSlept": 5.7,
   "sleepQuality": 1.1
 },
 {
   "userID": 5,
   "date": "2019/06/17",
   "hoursSlept": 10.5,
   "sleepQuality": 3.7
 },
 {
   "userID": 6,
   "date": "2019/06/17",
   "hoursSlept": 9.7,
   "sleepQuality": 1.4
 },
 {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 5.9,
    "sleepQuality": 2.5
  },
  {
    "userID": 5,
    "date": "2019/06/18",
    "hoursSlept": 5.2,
    "sleepQuality": 4.1
  },
  {
    "userID": 6,
    "date": "2019/06/18",
    "hoursSlept": 5.5,
    "sleepQuality": 4
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 5.2,
    "sleepQuality": 2.3
  },
  {
    "userID": 5,
    "date": "2019/06/19",
    "hoursSlept": 4.8,
    "sleepQuality": 3.4
  },
  {
    "userID": 6,
    "date": "2019/06/19",
    "hoursSlept": 9.3,
    "sleepQuality": 2
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 8.3,
    "sleepQuality": 1.9
  },
  {
    "userID": 5,
    "date": "2019/06/20",
    "hoursSlept": 10.1,
    "sleepQuality": 3.5
  },
  {
    "userID": 6,
    "date": "2019/06/20",
    "hoursSlept": 8.9,
    "sleepQuality": 1.8
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 10.6,
    "sleepQuality": 2.7
  },
  {
    "userID": 5,
    "date": "2019/06/21",
    "hoursSlept": 9.6,
    "sleepQuality": 4.1
  },
  {
    "userID": 6,
    "date": "2019/06/21",
    "hoursSlept": 5.6,
    "sleepQuality": 3.2
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 7.7,
    "sleepQuality": 1.5
  },
  {
    "userID": 5,
    "date": "2019/06/22",
    "hoursSlept": 8.1,
    "sleepQuality": 1.3
  },
  {
    "userID": 6,
    "date": "2019/06/22",
    "hoursSlept": 9.3,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "hoursSlept": 9.9,
    "sleepQuality": 2.6
  },
  {
    "userID": 5,
    "date": "2019/06/23",
    "hoursSlept": 5.1,
    "sleepQuality": 1.6
  },
  {
    "userID": 6,
    "date": "2019/06/23",
    "hoursSlept": 8.5,
    "sleepQuality": 4.2
  }
];

describe('Sleep Repository', () => {

  it.skip('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it.skip('should be an instance of SleepRepository', () => {
    let sleepRepository = new SleepRepository();

    expect(sleepRepository).to.be.an.instanceOf(SleepRepository);
  });

  it.skip('should take all users\'s sleep data as an argument', () => {
    let sleepRepository = new SleepRepository(sleepData);

    expect(sleepRepository.sleepData).to.deep.equal(sleepData);
  });

  it.skip('should be able to find all of a user\'s data based on ID', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.getUserSleepData(5);

    let userData = sleepData.filter(dataPoint => {
      return dataPoint.userID === 5;
    });

    expect(sleepRepository.getUserSleepData(5)).to.deep.equal(userData);
  });

  it.skip('should calculate the average hours slept per day for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.calculateAverageDailySleep(5);

    expect(sleepRepository.calculateAverageDailySleep(5)).to.equal(7);
  });

  it.skip('should calculate the average sleep quality per day over all time, for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.calculateAverageSleepQuality(5);

    expect(sleepRepository.calculateAverageSleepQuality(5)).to.equal(3);
  });

  it.skip('should determine hours slept for a specific day, for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.getHoursSleptByDate(5, '2019/06/17');

    expect(sleepRepository.getHoursSleptByDate(5, '2019/06/17')).to.equal(10.5);
  });

  it.skip('should determine sleep quality for a specific day, for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.getUserSleepQualityByDate(5, '2019/06/16');

    expect(sleepRepository.getUserSleepQualityByDate(5, '2019/06/16')).to.equal(2.4);
  });

  it.skip('should determine hours slept per day over a week', () => {
    let sleepRepository = new SleepRepository(sleepData);

    const hoursByDate = [
      {date: '2019/06/17', hoursSlept: 10.5},
      {date: '2019/06/18', hoursSlept: 5.2},
      {date: '2019/06/19', hoursSlept: 4.8},
      {date: '2019/06/20', hoursSlept: 10.1},
      {date: '2019/06/21', hoursSlept: 9.6},
      {date: '2019/06/22', hoursSlept: 8.1},
      {date: '2019/06/23', hoursSlept: 5.1}
    ];

    sleepRepository.getHoursSleptPerWeek(5, '2019/06/23');

    expect(sleepRepository.getHoursSleptPerWeek(5, '2019/06/23')).to.deep.equal(hoursByDate);
  });

  it.skip('should determine sleep quality per day over a week', () => {
    let sleepRepository = new SleepRepository(sleepData);

    const qualityByDate = [
      {date: '2019/06/16', sleepQuality: 2.4},
      {date: '2019/06/17', sleepQuality: 3.7},
      {date: '2019/06/18', sleepQuality: 4.1},
      {date: '2019/06/19', sleepQuality: 3.4},
      {date: '2019/06/20', sleepQuality: 3.5},
      {date: '2019/06/21', sleepQuality: 4.1},
      {date: '2019/06/22', sleepQuality: 1.3}
    ];

    sleepRepository.getSleepQualityPerWeek(5, '2019/06/22');

    expect(sleepRepository.getSleepQualityPerWeek(5, '2019/06/22')).to.deep.equal(qualityByDate);
  });

  it.skip('should calculate the average sleep quality across all users', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.calculateAverageQualityForAll();

    //3 - user 5
    //2 - user 4
    //3 - user 6
    // average = 2.667

    expect(sleepRepository.calculateAverageQualityForAll()).to.equal(2);
    //may be a little off after rounding the averages to nearest tenth
  });

  it.skip('should find all users who average a sleep quality greater than 3 for a given week', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.findUsersWithGoodQuality('2019/06/21');

    expect(sleepRepository.findUsersWithGoodQuality('2019/06/21')).to.deep.equal([5, 6]);
  });

  it.skip('should identify the user (or users if tied) who slept the most on a specific day', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.identifyUserWithMostSleep('2019/06/19');
    // need a conditional?

    expect(sleepRepository.identifyUserWithMostSleep('2019/06/19')).to.equal(6);
  });

  it.skip('should determine the day that the user got the best sleep quality over the course of a week', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.findDateWithBestUserSleep(4, '2019/06/23');

    expect(sleepRepository.findDateWithBestUserSleep(4, '2019/06/23')).to.equal('2019/06/21');
  });
});
