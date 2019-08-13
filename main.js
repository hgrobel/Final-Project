var tip = $('.tipselection');
var button = $('.button');

button.on("click", calculateTip);

function calculateTip() {
  var price = $('.price').val();
  var message = $('.emptybox');
  var thirty = $('#30');
  var twentyFive = $('#25');
  var fifteen = $('#15');
  var five = $('#5');

  if(thirty) {
    var finalTip = price * 0.3;
    var numOfPeople = $('.people').val();
    var total = finalTip / numOfPeople;
    message.text($(total));

  } else if(twentyFive) {
    var price = $('.price').val();
    var message = $('.emptybox');
    var finalTip = price * 0.25;
    var numOfPeople = $('.people').val();
    var total = finalTip / numOfPeople;
    message.text($(total));

  } else if(fifteen) {
    var price = $('.price').val();
    var message = $('.emptybox');
    var finalTip = price * 0.15;
    var numOfPeople = $('.people').val();
    var total = finalTip / numOfPeople;
    message.text($(total));

  } else if(five) {
    var price = $('.price').val();
    var message = $('.emptybox');
    var finalTip = price * 0.05;
    var numOfPeople = $('.people').val();
    var total = finalTip / numOfPeople;
    message.text($(total));
  }
console.log(message.text(total))
}
