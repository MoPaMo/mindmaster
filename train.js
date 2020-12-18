var day, trainToday;

$(function () {
  function countDown(time, cback) {
    let i = 0;
    let inter = setInterval(function () {
      $(".time").html(time - Math.floor(i));
      i++;
      if (i > time) {
        clearInterval(inter);
        cback();
      }
    }, 100);
  }
  function loadTrain(){
    Snap.parse("svg/")
  }
  function training(iter) {
    loadTrain(trainToday[iter],
      function(){

      })
  }
  $("h1").click(function () {
    open("./", "_SELF");
  });
  var s = Snap("#icon");
  var text = s.text(50, 50, "60");
  var transformer = Snap.selectAll("svg g *:not(#bg-circ)");
  console.log(transformer);
  transformer.animate({ fill: "#000" }, 1000);
  var bg = Snap.select("#bg-circ");
  bg.animate({ fill: "#B3876F" }, 1000);

  transformer.animate({ opacity: 0 }, 1000);
  if (localStorage.mindStart === null) {
    localStorage.mindStart = moment().format("MM-DD-YYYY");
  }
  day = Math.abs(
    moment(localStorage.mindStart, "MM-DD-YYYY").diff(moment(), "days")
  );

  console.log(
    "Tag: " + (1 * day + 1) + " von " + (1 * x.traindates.length + 1)
  );
  trainToday = x.traindates[day];
  console.log(trainToday.name);
});
