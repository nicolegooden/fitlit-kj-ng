const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository');

const userData = [
  {
    "id": 7,
    "name": "Breanne Fay",
    "address": "834 Retta Knoll, Stantonland MA 71627-4121",
    "email": "Dashawn28@gmail.com",
    "strideLength": 2.9,
    "dailyStepGoal": 8000,
    "friends": [
      12,
      27,
      22,
      30
    ]
  },
  {
    "id": 8,
    "name": "Laney Abshire",
    "address": "86416 Koch Inlet, North Kaciefurt MA 80635",
    "email": "Janice_Nitzsche2@yahoo.com",
    "strideLength": 2.8,
    "dailyStepGoal": 2000,
    "friends": [
      11,
      41,
      23,
      49
    ]
  },
  {
    "id": 9,
    "name": "Myron Schmitt",
    "address": "85251 Martina Fields, West Aletha MD 00163-5315",
    "email": "Gerard_Langosh22@hotmail.com",
    "strideLength": 3.8,
    "dailyStepGoal": 6000,
    "friends": [
      16,
      26,
      17
    ]
  }
];

const activityData = [
  {
    "userID": 7,
    "date": "2019/06/15",
    "numSteps": 2634,
    "minutesActive": 107,
    "flightsOfStairs": 5
  },
  {
    "userID": 8,
    "date": "2019/06/15",
    "numSteps": 10333,
    "minutesActive": 114,
    "flightsOfStairs": 31
  },
  {
    "userID": 9,
    "date": "2019/06/15",
    "numSteps": 6389,
    "minutesActive": 41,
    "flightsOfStairs": 33
  },
  {
    "userID": 7,
    "date": "2019/06/16",
    "numSteps": 4312,
    "minutesActive": 40,
    "flightsOfStairs": 38
  },
  {
    "userID": 8,
    "date": "2019/06/16",
    "numSteps": 4217,
    "minutesActive": 23,
    "flightsOfStairs": 15
  },
  {
    "userID": 9,
    "date": "2019/06/16",
    "numSteps": 4180,
    "minutesActive": 49,
    "flightsOfStairs": 28
  },
  {
    "userID": 7,
    "date": "2019/06/17",
    "numSteps": 2978,
    "minutesActive": 152,
    "flightsOfStairs": 18
  },
  {
    "userID": 8,
    "date": "2019/06/17",
    "numSteps": 6233,
    "minutesActive": 48,
    "flightsOfStairs": 19
  },
  {
    "userID": 9,
    "date": "2019/06/17",
    "numSteps": 7881,
    "minutesActive": 39,
    "flightsOfStairs": 4
  },
  {
    "userID": 7,
    "date": "2019/06/18",
    "numSteps": 10559,
    "minutesActive": 200,
    "flightsOfStairs": 32
  },
  {
    "userID": 8,
    "date": "2019/06/18",
    "numSteps": 7658,
    "minutesActive": 166,
    "flightsOfStairs": 39
  },
  {
    "userID": 9,
    "date": "2019/06/18",
    "numSteps": 12726,
    "minutesActive": 188,
    "flightsOfStairs": 39
  },
  {
    "userID": 7,
    "date": "2019/06/19",
    "numSteps": 5016,
    "minutesActive": 183,
    "flightsOfStairs": 41
  },
  {
    "userID": 8,
    "date": "2019/06/19",
    "numSteps": 9775,
    "minutesActive": 259,
    "flightsOfStairs": 38
  },
  {
    "userID": 9,
    "date": "2019/06/19",
    "numSteps": 5402,
    "minutesActive": 187,
    "flightsOfStairs": 33
  },
  {
    "userID": 7,
    "date": "2019/06/20",
    "numSteps": 13795,
    "minutesActive": 286,
    "flightsOfStairs": 31
  },
  {
    "userID": 8,
    "date": "2019/06/20",
    "numSteps": 5680,
    "minutesActive": 137,
    "flightsOfStairs": 2
  },
  {
    "userID": 9,
    "date": "2019/06/20",
    "numSteps": 14764,
    "minutesActive": 125,
    "flightsOfStairs": 30
  },
  {
    "userID": 7,
    "date": "2019/06/21",
    "numSteps": 13155,
    "minutesActive": 179,
    "flightsOfStairs": 46
  },
  {
    "userID": 8,
    "date": "2019/06/21",
    "numSteps": 14267,
    "minutesActive": 84,
    "flightsOfStairs": 10
  },
  {
    "userID": 9,
    "date": "2019/06/21",
    "numSteps": 9846,
    "minutesActive": 281,
    "flightsOfStairs": 14
  },
  {
    "userID": 7,
    "date": "2019/06/22",
    "numSteps": 13572,
    "minutesActive": 280,
    "flightsOfStairs": 32
  },
  {
    "userID": 8,
    "date": "2019/06/22",
    "numSteps": 6894,
    "minutesActive": 116,
    "flightsOfStairs": 18
  },
  {
    "userID": 9,
    "date": "2019/06/22",
    "numSteps": 3182,
    "minutesActive": 222,
    "flightsOfStairs": 15
  },
  {
    "userID": 7,
    "date": "2019/06/23",
    "numSteps": 10190,
    "minutesActive": 79,
    "flightsOfStairs": 8
  },
  {
    "userID": 8,
    "date": "2019/06/23",
    "numSteps": 3337,
    "minutesActive": 60,
    "flightsOfStairs": 25
  },
  {
    "userID": 9,
    "date": "2019/06/23",
    "numSteps": 6678,
    "minutesActive": 136,
    "flightsOfStairs": 19
  },
  {
    "userID": 7,
    "date": "2019/06/24",
    "numSteps": 10222,
    "minutesActive": 24,
    "flightsOfStairs": 10
  },
  {
    "userID": 8,
    "date": "2019/06/24",
    "numSteps": 8190,
    "minutesActive": 180,
    "flightsOfStairs": 30
  },
  {
    "userID": 9,
    "date": "2019/06/24",
    "numSteps": 14910,
    "minutesActive": 126,
    "flightsOfStairs": 3
  }
];

describe('Activity Repository', () => {

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', () => {
    let activityRepository = new ActivityRepository();

    expect(activityRepository).to.be.an.instanceOf(ActivityRepository);
  });

  it('should take all users\'s activity data as the first argument', () => {
    let activityRepository = new ActivityRepository(activityData);

    expect(activityRepository.activityData).to.deep.equal(activityData);
  });

  it('should take all user\'s general data as a second argument', () => {
    let activityRepository = new ActivityRepository(activityData, userData);

    expect(activityRepository.userData).to.deep.equal(userData);
  })

  it('should be able to find all of a user\'s activity data based on ID', () => {
    let activityRepository = new ActivityRepository(activityData);

    activityRepository.getUserActivityData(8);

    let userActivityData = activityData.filter(dataPoint => {
      return dataPoint.userID === 8;
    });

    expect(activityRepository.getUserActivityData(8)).to.deep.equal(userActivityData);
  });

  it('should be able to find all of a user\'s general data based on ID', () => {
    let activityRepository = new ActivityRepository(activityData, userData);

    let userGeneralData = userData.find(dataPoint => {
      return dataPoint.id === 9;
    });

    expect(activityRepository.getGeneralUserData(9)).to.deep.equal(userGeneralData);
  });

  it('should return the miles a user has walked based on their number of steps on a specific day', () => {
    let activityRepository = new ActivityRepository(activityData, userData);

    expect(activityRepository.getUserMiles(8, '2019/06/22')).to.equal(3.7);
  });

  it('should determine how many minutes a user was active for a given day', () => {
    let activityRepository = new ActivityRepository(activityData);

    expect(activityRepository.getDataByDate(8, '2019/06/22', 'minutesActive')).to.equal(116);
  });

  it('should calculate how many minutes active they averaged for a given week', () => {
    let activityRepository = new ActivityRepository(activityData);

    expect(activityRepository.calculateAverageMinutesPerWeek(8, '2019/06/23')).to.equal(124);
  });

  it('should determine whether or not the user reached their step goal that day', () => {
    let activityRepository = new ActivityRepository(activityData, userData);

    expect(activityRepository.verifyStepAchievement(9, "2019/06/23")).to.be.true;
    expect(activityRepository.verifyStepAchievement(7, "2019/06/19")).to.be.false;
  });

  it('should determine all the days where they exceeded their step goal', () => {
    let activityRepository = new ActivityRepository(activityData, userData);

    let achievementDays = [
      '2019/06/15',
      '2019/06/17',
      '2019/06/18',
      '2019/06/20',
      '2019/06/21',
      '2019/06/23',
      '2019/06/24'
    ];

    expect(activityRepository.verifyStepAchievementDays(9)).to.deep.equal(achievementDays);
  });

  it('should determine a user\'s all-time stair climbing record', () => {
    let activityRepository = new ActivityRepository(activityData);

    expect(activityRepository.findRecord(7, 'flightsOfStairs')).to.equal(46);
  });

  function calculateAverages(date, property) {
    let validDates = activityData.filter(dataPoint => {
      return dataPoint.date === date;
    })
    let propertySum = validDates.reduce((sum, dataPoint)=> {
      sum += dataPoint[property];
      return sum;
    },0)
    return Math.floor(propertySum / validDates.length);
  };

  it('should calculate the average stairs climbed, steps taken, and minutes active for a given day', () => {
    let activityRepository = new ActivityRepository(activityData);

    expect(activityRepository.calculateAverageDataByDate('2019/06/15', 'numSteps')).to.equal(calculateAverages('2019/06/15', 'numSteps'));
    expect(activityRepository.calculateAverageDataByDate('2019/06/15', 'minutesActive')).to.equal(calculateAverages('2019/06/15', 'minutesActive'));
    expect(activityRepository.calculateAverageDataByDate('2019/06/15', 'flightsOfStairs')).to.equal(calculateAverages('2019/06/15', 'flightsOfStairs'));
    //steps: 6452
    //minutes: 87.33333
    //stairs: 23
  });

  it('should determine a user\'s all time record for minutes active', () => {
    let activityRepository = new ActivityRepository(activityData);

    expect(activityRepository.findRecord(7, 'minutesActive')).to.equal(286);
  });
});
