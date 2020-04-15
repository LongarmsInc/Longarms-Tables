var check = "hey";
var check = document.cookie;
if (check == "hey") {
  menu = '<a href="#" class="button">Sign Up</a>'+
         '<a href="#" class="button">Log In</a>';
} else {
  menu = '<div class="icon-bar">'+
            '<a class="active" href="#"><i class="fas fa-home"></i></a>'+
            '<a href="#"><i class="fas fa-search"></i></a>'+
            '<a href="#"><i class="fas fa-table"></i></a>'+
            '<a href="#"><i class="far fa-envelope"></i></a>'+
            '<a href="#"><i class="fas fa-user-circle"></i></a>'+
          '</div>';
}
document.getElementById("menuChoose").innerHTML = menu;
