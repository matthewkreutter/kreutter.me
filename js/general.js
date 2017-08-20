var which = 1;
function clearAll() {
  $(".about-me").fadeOut();
  $(".work-industry").fadeOut();
  $(".work-education").fadeOut();
  $(".personal-projects").fadeOut();
}
function fadeInAboutMe(){
  $(".about-me").fadeIn();
}
function fadeInWorkIndustry(){
  $(".work-industry").fadeIn();
}
function fadeInWorkEducation(){
  $(".work-education").fadeIn();
}
function fadeInPersonalProjects(){
  $(".personal-projects").fadeIn();
}
$(document).ready(function ()
{
  $("#animate-lone-commando").hover(
    function () {
      $(this).attr("src", "assets/lone-commando.gif");
    },
    function () {
      $(this).attr("src", "assets/lone-commando-still.png");
    }
  );
  $("#animate-dot-eat-dot").hover(
    function () {
      $(this).attr("src", "assets/dot-eat-dot.gif");
    },
    function () {
      $(this).attr("src", "assets/dot-eat-dot-still.png");
    }
  );
  $("#about-me").click(
    function() {
      if(which != 1) {
        clearAll();
        setTimeout(function(){fadeInAboutMe()}, 400);
        which = 1;
      }
  });
  $("#work-industry").click(
    function() {
      if(which != 2) {
        clearAll();
        setTimeout(function(){fadeInWorkIndustry()}, 400);
        which = 2;
      }
  });
  $("#work-education").click(
    function() {
      if(which != 3) {
        clearAll();
        setTimeout(function(){fadeInWorkEducation()}, 400);
        which = 3;
      }
  });
  $("#personal-projects").click(
    function() {
      if(which != 4) {
        clearAll();
        setTimeout(function(){fadeInPersonalProjects()}, 400);
        which = 4;
      }
  });
});
