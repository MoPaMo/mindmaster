$(function () {
  function setCircle(perc) {
    if (perc <= 100) {
      $("#a2").attr("r", 10 + (perc / 100) * 35);
    } else {
      throw perc + " is bigger than 100";
    }
  }
  function countDown(time, cback) {
    let i = 0;
    let inter = setInterval(function () {
      $("#a2").attr("r", 10 + (i / time) * 35);
      i += 0.1;
      0;
      $(".time").html(time - Math.floor(i));
      if (i > time){ clearInterval(inter);
    cback()
    }
    }, 100);
  }
  countDown(20, function(){
      console.log("Geschafft")
  });
});
