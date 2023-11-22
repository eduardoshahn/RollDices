import $ from 'jquery';

var count = 8;
var rollToIndex = function (index) {
  var cubes = $(".cube");

  for (var i = 0; i < cubes.length; i++) {
    var $cube = $(cubes[i]);
    var value = index >= 0 ? index : parseInt(Math.random() * count) + 1;

    var preffix = "index-";

    $cube.toggleClass("bis");
    $cube[0].className = $cube[0].className.replace(
      new RegExp("(^|\\s)" + preffix + "\\S+", "g"),
      ""
    );
    $cube.addClass(preffix + value);
  }
};

export default rollToIndex;