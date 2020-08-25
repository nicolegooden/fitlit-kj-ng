const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

const hydrationData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 69
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 91
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numOunces": 99
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numOunces": 28
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 61
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 70
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 40
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 91
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 76
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numOunces": 85
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 71
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numOunces": 51
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 27
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numOunces": 41
  }
]

describe('Hydration', () => {

  let hydration;
  let userID;
  let specificUserDate;

  beforeEach(() => {
    userID = hydrationData[0].userID;
    hydration = new Hydration(userID);
    specificUserDate = hydrationData[0].date;
  });

  it.skip('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it.skip('should be an instance of Hydration', () => {

    expect(hydration).to.be.an.instanceOf(Hydration)
  });

  it.skip('should take in userID as an argument', () => {

    expect(hydration.userID).to.equal(1);
  });

  it.skip('should calculate the average fluid ounces consumed per day for all time', () => {
    hydration.calculateAverageOunces();

    expect(hydration.calculateAverageOunces()).to.equal(64)
    //454 divided by 7 = 64.85
    //use Math.floor
  });

  it.skip('should identify a specific date', () => {
    hydration.getUserOuncesByDate(specificUserDate);

    expect(specificUserDate).to.equal("2019/06/15");
  });

  it.skip('should determine how many fluid ounces they consumed for a specific day', () => {
    hydration.getUserOuncesByDate(specificUserDate);

    expect(hydration.getUserOuncesByDate(specificUserDate)).to.equal(37);
  });

  it.skip('should determine how many fluid ounces of water are consumed each day over the course of a week', () => {

    hydration.findOuncesForWeek();

    expect(hydration.today).to.equal("2019/06/21");
    expect(hydration.lastSevenDays).to.deep.equal(["2019/06/21", "2019/06/20", "2019/06/19", "2019/06/18", "2019/06/17", "2019/06/16", "2019/06/15"]);
    expect(hydration.lastSevenDays.length).to.equal(7);
    expect(hydration.findOuncesForWeek()).to.deep.equal([50, 50, 91, 61, 96, 69, 37]);
    expect(hydration.findOuncesForWeek().length).to.equal(7);
  });
});
