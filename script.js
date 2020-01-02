// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = 'portfolio';

var text = ['Writer', 'Data Journalist', 'Data Analyst', 'Tech Reporter', 'Product Manager', 'Online Marketer', 'Content Specialist']
  var pos = {x: 0, y:0};
  $(document).mousemove(function(event) {
    var randomItem = text[Math.floor(Math.random() * text.length)];
    var div = $("#message");
    if (event.pageX > pos.x+30 || event.pageY > pos.y+30 || event.pageY < pos.y -30 || event.pageX < pos.x-30) {
      pos.x = event.pageX;
      pos.y = event.pageY;
      div.stop().animate({
        "opacity": "1"
      }, 1, function() {
        $(this).text(randomItem);
        $(this).stop().animate({
          "opacity": "1"
        }, 1);
      });
    }
  });

