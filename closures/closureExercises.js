var nonsense = function (string) {
  var blab = function() {
    alert(string);
  };

  setTimeout(blab(), 2000);
  return blab;
}

var blabLater = nonsense("hello");
var blabAgainLater = nonsense("world");

console.log(blabLater);
console.log(blabAgainLater);

var lastNameTrier = function(firstName) {
  var innerFunction = function() {

  };
};

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');

firstNameFarmer('Jane');
firstNameFarmer('Lynne');

var lastNameTrier = function(firstName) {
  var inner = function(lastName) {
    console.log(firstName + " " + lastName);
  };
  return inner;
};

var firstNameKatrina = lastNameTrier('Katrina');
firstNameKatrina('Uychaco');
firstNameKatrina('Smith');

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.');
farmLoveStory.addWords('It was a friendly face.');

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');
storyOfMyLife.addWords('I ate ice cream.');
storyOfMyLife.erase();

var storyWriter = function() {
  var story = '';
  return {
    addWords: function(str) {
      story += str + ' ';
      return story.trim();
    },
    erase: function() {
      story = '';
    }
  };
};
