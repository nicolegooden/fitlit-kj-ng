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

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    let sleepRepository = new SleepRepository();

    expect(sleepRepository).to.be.an.instanceOf(SleepRepository);
  });

  it('should take all users\'s sleep data as an argument', () => {
    let sleepRepository = new SleepRepository(sleepData);

    expect(sleepRepository.sleepData).to.deep.equal(sleepData);
  });

  it('should be able to find all of a user\'s data based on ID', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.getUserSleepData(5);

    let userData = sleepData.filter(dataPoint => {
      return dataPoint.userID === 5;
    });

    expect(sleepRepository.getUserSleepData(5)).to.deep.equal(userData);
  });

  it('should calculate the average hours slept per day for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.calculateAverageHoursOrQuality(5, 'hoursSlept');

    expect(sleepRepository.calculateAverageHoursOrQuality(5, 'hoursSlept')).to.equal(7.2);
  });

  it('should calculate the average sleep quality per day over all time, for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.calculateAverageHoursOrQuality(5, 'sleepQuality');

    expect(sleepRepository.calculateAverageHoursOrQuality(5, 'sleepQuality')).to.equal(3.1);
  });

  it('should determine hours slept for a specific day, for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.getHoursOrQualityByDate(5, '2019/06/17', 'hoursSlept');

    expect(sleepRepository.getHoursOrQualityByDate(5, '2019/06/17', 'hoursSlept')).to.equal(10.5);
  });

  it('should determine sleep quality for a specific day, for a single user', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.getHoursOrQualityByDate(5, '2019/06/16', 'sleepQuality');

    expect(sleepRepository.getHoursOrQualityByDate(5, '2019/06/16', 'sleepQuality')).to.equal(2.4);
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

    sleepRepository.getHoursOrQualityPerWeek('2019/06/23', 5, 'hoursSlept');

    expect(sleepRepository.getHoursOrQualityPerWeek('2019/06/23', 5, 'hoursSlept')).to.deep.equal(hoursByDate);
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

    sleepRepository.getHoursOrQualityPerWeek('2019/06/22', 5, 'sleepQuality');

    expect(sleepRepository.getHoursOrQualityPerWeek('2019/06/22', 5, 'sleepQuality')).to.deep.equal(qualityByDate);
  });

  it('should calculate the average sleep quality across all users', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.calculateAverageQualityForAll();

    expect(sleepRepository.calculateAverageQualityForAll()).to.equal(2.9);
    //may be a little off after rounding the averages to nearest tenth
  });

  it('should find all users who average a sleep quality greater than 3 for a given week', () => {
    let sleepRepository = new SleepRepository(sleepData);

    sleepRepository.findUsersWithGoodQuality('2019/06/22');

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
