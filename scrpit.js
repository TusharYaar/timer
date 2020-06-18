function startime()
{ var t = num.value;
  var i=0;
  document.getElementById('but').style.display='none';
  document.getElementById('but1').style.display='inline';
mycount = setInterval(function () {
i++;
document.getElementById('left').innerHTML = t-i;
if (t-i<=0)
{stoptime();}
}, 1000);}
function stoptime()
{   document.getElementById('but1').style.display='none';
    document.getElementById('but').style.display='inline';
    document.getElementById('stop').style.display='block';
  clearInterval(mycount);
}
