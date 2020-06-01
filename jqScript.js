$(document).ready(() => {
  var res = "";
  $("#btnclr").css("display", "none");

  //appending the number
  $.fn.appendnumber = (value) => {
    res = res + value;
    $("#form1").empty();
    $("#form1").append(res);
    $("#btndel").css("display", "block");
    $("#btnclr").css("display", "none");
  };

  //equals function
  $.fn.equals = () => {
    let finalresult;
    try {
      eval(res);
    } catch (err) {
      let correct = "";
      res === "" ? $("#form1").append("") : $("#form1").empty();
      $("#form1").append(res);
      $("#btndel").css("display", "none");
      $("#btnclr").css("display", "block");
      return;
    }
    finalresult = eval(res);
    res === "" ? $("#form1").append("") : $("#form1").empty();
    res = finalresult;
    $("#form1").append(finalresult);
    $("#btndel").css("display", "none");
    $("#btnclr").css("display", "block");
  };

  //Clear function
  $.fn.clear = () => {
    res = "";
    $("#form1").empty();
    $("#btndel").css("display", "block");
    $("#btnclr").css("display", "none");
  };

  //delete function
  $.fn.delete = () => {
    res = res.slice(0, res.length - 1);
    $("#form1").empty();
    $("#form1").append(res);
  };
});
