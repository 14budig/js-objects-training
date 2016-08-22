/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

birthdayReminder = function(birthdayList){
  var today = new Date();
  today.setHours(0,0,0,0);
  var reminders = [];
  for(var i = 0; i < birthdayList.length; i++){
    var birthdayString = birthdayList[i].dob;
    var birthdayParams = birthdayString.split("/");
    var birthday = new Date(birthdayParams[2],birthdayParams[0] - 1,birthdayParams[1]);
    birthday.setFullYear(today.getFullYear());
    var daysUntilBirthDay;
    if(birthday >= today){
      birthday.setFullYear(today.getFullYear());
      daysUntilBirthDay = birthday - today;
    }
    else{
      birthday.setFullYear(today.getFullYear()+1);
      daysUntilBirthDay = birthday - today;
    }
    daysUntilBirthDay = daysUntilBirthDay/1000/60/60/24;
    var listItem = {};
    listItem.name = birthdayList[i].name;
    listItem.days = daysUntilBirthDay;
    reminders.push(listItem);
  }
  
  reminders.sort(function(a,b){
    return a.days - b.days;
  });

  for(var j = 0; j < reminders.length; j++){
    console.log(reminders[j].name + "'s borthday is in " + reminders[j].days + " days.");
  }
}
birthdayReminder([
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
]);

//=> [
//      "Jack's birthday is in 75 days",
//      "Jill's birthday is in 305 days"
//    ]
