var moment = require('moment');
var now = moment();

/*console.log(now.format());

console.log(now.format('X'));//seconds from 1970 jan 1st

console.log(now.format('x'));//milliseconds from 1970 jan 1st


console.log(now.valueOf()); //javascript time stamp*/

var timeStamp = 1498029538785;
var timeStampMoment = moment.utc(timeStamp);

console.log(timeStampMoment.local().format('h:mm a'));

/*now.subtract(1,'year');

console.log(now.format());
console.log(now.format("MMM Do YYYY,h:mm A"));//6:45 AM*/
