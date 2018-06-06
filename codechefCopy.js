var copyToClipboard = function(str)
{
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
var copy_str="";
var req = document.getElementsByTagName("pre")[0];
var copy = document.getElementById('copy');
if(req!=undefined && copy==undefined)
{
  if(req.childElementCount==1)
  {   var child=(req.children)[0];
      copy_str=child.innerHTML;
  }
  else
  {
      var temp_str=req.innerHTML;
      var idx=0;
      while(temp_str[idx]!='>')
        idx++;
      idx++;
      while(temp_str[idx]!='>')
        idx++;
      idx+=2;
      while(temp_str[idx]!='<')
      {
        copy_str+=temp_str[idx];
        idx++;
      }
  }
  req.innerHTML="<button class='button blue right' onclick='copyToClipboard(copy_str)' id='copy'>Copy</button>"+req.innerHTML;
}
