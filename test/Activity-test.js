const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository');

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
