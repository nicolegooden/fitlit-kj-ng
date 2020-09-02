# FlashCards Starter Kit: Turing FE Module 2
### Nicole Gooden
### Kathryn Jackson

## Abstract

This project requires creating an activity tracker user interface using given data. This application presents the logged data on a dashboard, allowing users to view their activity, sleep, and hydration data. Users can also see their achievements and how their performance compares to that of their friends.

Test driven development was used to drive the implementation of our code, ensuring that the data presented for each day is accurate.

**The learning goals include:**
* Follow the specification below to make a working application
* Implement ES6 classes that communicate to each other as needed
* Write modular, reusable code that follows SRP (Single Responsibility Principle)
* Implement a robust testing suite using TDD
* Use object and array prototype methods to perform data manipulation
* Display information on the page while maintaining ability to test class properties and methods
* Create a data dashboard that is easy to use and displays information in a clear way


## Preview of Working Application

![](https://media2.giphy.com/media/YqKtbYLe8KYWgOPf6B/giphy.gif)


## Installation Instructions

1. In your terminal, [choose the directory](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101#:~:text=To%20change%20this%20current%20working,%24%20cd%20..) that you would like to store the game in.

2. Clone down this repo.
```
git clone git@github.com:kathrynljackson/flashcards-starter.git
```

3. Once you have cloned the repo, change into the newly installed `flashcards-starter` directory and install the library dependencies. Run:
```
npm install
```

4. While in the `flashcards-starter` directory, start the game in your terminal by running:

```
node index.js
```


## Gameplay
You should see something like this in your terminal:

![Screen Shot 2020-08-20 at 3 34 07 PM](https://user-images.githubusercontent.com/65988644/90831556-39a7eb80-e301-11ea-9ec7-4e7c4fde1910.png)

**Flashcards** is a game that tests your knowledge of the concepts covered in Turing FE Module 2. The game is started by running `node index.js`.

1. Use the **up and down arrows on your keyboard** to select the answer to each question.

2. Use the **return key on your keyboard** to choose the correct answer once your choice has been highlighted.

3. After each answer, you will be notified as to whether or not you chose the correct answer.

![Screen Shot 2020-08-20 at 3 55 36 PM](https://user-images.githubusercontent.com/65988644/90831579-49273480-e301-11ea-87c2-7f97d57cd786.png)

![Screen Shot 2020-08-20 at 3 55 55 PM](https://user-images.githubusercontent.com/65988644/90831606-580de700-e301-11ea-8026-5000821b5dc7.png)

4. Use the **return key on your keyboard** to move on to the next question.

5. At the end of the round, you will be shown your overall score.

![Screen Shot 2020-08-20 at 3 57 59 PM](https://user-images.githubusercontent.com/65988644/90831527-2c8afc80-e301-11ea-99e0-1711c9a016fc.png)

6. Unhappy with your score? No worries! Use **CTRL + C** to exit the game. Run `node index.js` in your terminal to begin the game again.


## Our GitHub Accounts
@nicolegooden
@kathrynljackson

# FitLit Starter Kit

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Setup

1. Within your group, decide on one person to have the project repository (repo) on their GitHub account. Then, that person should fork this repo - on the top right corner of this page, click the **Fork** button.
1. Both memebers of the group should clone down the _forked_ repo. Since you don't want to name your project "activity-tracker-starter", you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
1. Run `open src/index.html` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
1. Make sure both members of your team are collaborators on the forked repo.

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran `npm install`, then the tooling you need to start testing is already installed (`mocha` and `chai`).

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit, but that's ok - the linter is still running successfully.

Your linter will look only at the JavaScript files you have within the `src` and the `test` directories.

## Data Model

**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```
