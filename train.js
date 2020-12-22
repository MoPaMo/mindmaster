var day, trainToday, s, text;

$(function () {
  function countDown(time, cback) {
    let i = 0;

    let timecircle = $("#timetaste");
    timecircle.attr({
      opacity: 0.75,
      fill: "#afb56b",
    });
    timecircle.animate({ r: 38 }, time * 1000);
    text = s.text(50, 50, "60");
    let inter = setInterval(function () {
      $("#icon text").html(time - Math.floor(i));
      i++;
      if (i > time) {
        clearInterval(inter);
        timecircle.animate({ r: 0 }, 1000);
        setTimeout(function () {
          text.remove(), timecircle.remove();
          cback();
        }, 1000);
      }
    }, 1000);
  }

  function training(iter) {
    loadTrain(trainToday[iter], function () {});
  }
  $("h1").click(function () {
    open("./", "_SELF");
  });
  function trainIter(iterator) {
    var transformer = Snap.selectAll("svg#icon g *:not(.notremove)");
    console.log(transformer);
    transformer.animate({ fill: "#000" }, 100);
    setTimeout(function () {
      transformer.animate({ opacity: 0 }, 1000);

      setTimeout(function () {
        transformer.remove();
      }, 1000);
    }, 100);
    if (iterator < trainToday.excersises.length) {
      let excs = gti(trainToday.excersises[iterator]);
      $("#trainname").html(excs.name)
        $("#traininfo").html(excs.info)
      let schnappp = Snap.parse(excs.svg)
      s.append(schnappp)
      $("#clicktostart").animate({bottom:"5rem"}, 100)
      $("body,html").click(function () {
        $("body,html").off("click");
      $("#clicktostart").animate({bottom:"-5rem"}, 100)

        if (excs.time != "confirm" && Number.isFinite(excs.time)) {
          //is time
          console.log(excs.name + " dauert " + excs.time);
          countDown(excs.time, function () {
            trainIter(iterator + 1);
          });
        } else {
          console.log(excs.name + " ist confirm");
        }
      });
    } else {
      console.log("debug 1");
      console.log(iterator < trainToday.excersises.length);
      console.log(trainToday.excersises);
    }
  }
  s = Snap("#icon");

  var bg = Snap.select("#bg-circ");
  bg.animate({ fill: "#B3876F" }, 1000);

  if (localStorage.mindStart == null) {
    localStorage.mindStart = moment().format("MM-DD-YYYY");
    day = Math.abs(
      moment(localStorage.mindStart, "MM-DD-YYYY").diff(moment(), "days")
    );
  } else {
    day = Math.abs(
      moment(localStorage.mindStart, "MM-DD-YYYY").diff(moment(), "days")
    );
  }

  console.log(
    "Tag: " + (1 * day + 1) + " von " + (1 * x.traindates.length + 1)
  );
  trainToday = x.traindates[day];
  console.log(trainToday.name);
  trainIter(0);
});
