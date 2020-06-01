document.getElementById("btnclr").style.display="none";
var a=document.getElementById("form1").innerHTML;
var add="";
var init=0;
var next=0;
var sub="";
var op="";
  function one()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn1").value;
     a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function two()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn2").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function three()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn3").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function four()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn4").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function five()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn5").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function six()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn6").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function seven()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn7").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function eight()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn8").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function nine()
  {
    document.getElementById("btnclr").style.display="none";
    document.getElementById("btndel").style.display="block";
    var res=document.getElementById("btn9").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }
  function zero()
  {
    var res=document.getElementById("btnzero").value;
    a=a+res;  
    document.getElementById("form1").innerHTML=a;
  }



   /*modulus  behaviour */
   function percent()
   {
     var res=document.getElementById("btnper").value;
     a=a+res;
     document.getElementById("form1").innerHTML=a;   
   }


     /*division behaviour */
  function divides()
  {
    var res=document.getElementById("ebtndivide").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }

   /*multiplication behaviour */
   function mul()
   {
     var res=document.getElementById("ebtnmul").value;
     a=a+res;
     document.getElementById("form1").innerHTML=a;  
   }
    /*minus behaviour */
  function minus()
  {
    var res=document.getElementById("ebtnminus").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
  }

  /*Delete behaviour */
function Delete()
{
  var res=a.slice(0,a.length-1);
  a=" ";
  a=res;
  document.getElementById("form1").innerHTML=res;  
}

/*plus behaviour */
function plus()
{
  var res=document.getElementById("btnplus").value;
    a=a+res;
    document.getElementById("form1").innerHTML=a;
}

/*clear behaviour*/
function clears()
{
  document.getElementById("form1").innerHTML=" ";
  a=" ";
}
var res=" ";
function equals()
{
  document.getElementById("btnclr").style.display="block";
  document.getElementById("btndel").style.display="none";
  res=document.getElementById("form1").innerHTML;
  document.getElementById("form1").innerHTML=eval(res);

}
