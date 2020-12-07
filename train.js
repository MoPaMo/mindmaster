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

  var s = Snap("#icon");
  var transformer = Snap.selectAll("svg *:not(.bg-circle)");
  transformer.animate({ fill: "#fff" }, 1000);
  var bg = Snap.select("#bg-circ");
  bg.animate({ fill: "#B3876F" }, 1000);
  var text = s.text(50, 50, "60");
})
