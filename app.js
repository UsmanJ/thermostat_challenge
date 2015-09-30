$("#btnUp").click(function() {
  up($("span:first"));
});

$("#btnDown").click(function() {
  down($("span:first"));
});

$("#btnReset").click(function() {
  reset($("span:first"));
});

function up(j) {
  var n = parseInt(j.text());
  j.text(n + 1);
}

function down(j) {
  var n = parseInt(j.text());
  j.text(n - 1);
}

function reset(j) {
  var n = parseInt(j.text(20));
}
