var galToLiters =  function(gallons) {
  return gallons * 3.7854;
}


$(document).ready(function() {
  $("form#gallonsForm").submit(function(event) {
    event.preventDefault();
    var y = ($("#gallons").val());
    var result = galToLiters(y);
    $("#output").text(result);
    alert("ho");



  });
});
