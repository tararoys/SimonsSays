$(document).ready(function(){
  $("#get_color").on("click", function(){
    colors = { 0: "red",
    1: "blue",
    2: "green"
  }
  
  random_color = colors[Math.floor( Math.random() * 3 )]
  random_cell = Math.floor( Math.random() * 7 )
  
  $($("#color_me").children()[random_cell]).css("background", random_color)

  $.ajax({
    type: "POST",
    url: "/color",
    data: { color: random_color, cell: random_cell }
  })

  .done(function( msg ) {
    console.log("json! Yay!");
  });

})
});