// js link check
$( document ).ready(function() {
    console.log("app.js linked.");


//click to scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//add future projects here
var projectData = [
  {
	"projectThumbnail": "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg",
	"projectName" : "Project 1",
	"projectLink" : "http://www.bbc.com"
  },
  {
	"projectThumbnail" : "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg",
	"projectName" : "Project 2",
	"projectLink" : "http://www.bbc.com",
  },
  {
  "projectThumbnail" : "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg",
  "projectName" : "Project 3",
  "projectLink" : "http://www.bbc.com",
  }
]

//fills gallery with project thumbnails and their links
  $("div.row.gallery-container").empty();
  for (var i = 0; i < projectData.length; i++) {
    $("div.row.gallery-container").append(`<div class="hovereffect col-sm-4 col-xs-6"><img class="img-responsive" src="${projectData[i].projectThumbnail}" />
                    <div class="overlay">
                        <h2>
                        <a href="${projectData[i].projectLink}">${projectData[i].projectName}</a>
                        </h2>
                    </div>
                  </div>
                  `)
                }




}); //end document.ready check
