
function $id(id){
return document.getElementById(id);
}
function ShowMsg(){
document.writeln("<div id=\"msgdiv\" style=\"position:absolute;display:none;\"></div>");
document.writeln("<div id=\"overdiv\" style=\"position:absolute;display:none;\"></div>");


this.ok_callback=function(){};
this.cancel_callback=function(){};
this.msgobjname=""
this.show=function(msgcontent,widthx,heightx,flag){
  var tempobj1=$id("msgdiv");
  var tempobj2=$id("overdiv");
  var msgobj=this.msgobjname;
    tempobj2.style.filter="alpha(opacity=20)";
    tempobj2.style.opacity = 20 / 100;
    tempobj2.style.backgroundColor = "rgb(200,200,200)";
    tempobj2.style.display = '';
    tempobj2.style.zIndex= 1000;
    ht1=document.body.clientHeight;
    ht2=window.screen.height;
    if(ht1<ht2)
    {
    tempobj2.style.height=ht2+"px";
    }else
    tempobj2.style.height= document.body.clientHeight+"px";
    tempobj2.style.width= document.body.clientWidth+"px";
    tempobj1.style.left=(document.documentElement.clientWidth-widthx)/2+"px";
    var tp=0;
    tp = (document.documentElement.clientHeight - heightx) / 2 + document.documentElement.scrollTop + document.body.scrollTop;
   
        if(tp<0){
        tp=10;
        }
    tempobj1.style.top= tp+"px";

    //tempobj1.style.display= '';
    tempobj1.style.width=widthx+"px";
    tempobj1.style.height=heightx+"px";
    tempobj1.style.zIndex= 2000;
    tempobj2.style.left=0+"px";
    tempobj2.style.top=0+"px";
    var OutStr="" ;
    if(msgcontent.indexOf("newtask")>0){
    OutStr=OutStr+"<iframe width=\""+(widthx-1)+"\"  height=\""+(heightx-25)+"\" frameborder=\"0\"  scrolling=\"no\"  src=\""+msgcontent+"\"  allowtransparency=\"true\" style=\"background-color:transparent\"  name=\"frm2\" id=\"frm2\"></iframe>";
} else {
    
        OutStr=OutStr+"<iframe width=\""+(widthx-1)+"\"  height=\""+(heightx-25)+"\" frameborder=\"0\"  scrolling=\"no\"  src=\""+msgcontent+"\"   allowtransparency=\"true\"  style=\"background-color:transparent\"  name=\"frm2\" id=\"frm2\"></iframe>";
    
    }
    tempobj1.innerHTML=OutStr;
  $("#msgdiv").fadeIn(300);

  }
 

  this.ok = function()
  {
  $id('msgdiv').style.display='none';
  $id('overdiv').style.display='none';
  this.ok_callback();
  }
  this.cancel=function(){
  $id('msgdiv').style.display='none';
  $id('overdiv').style.display='none';

  }
}
var ShowMsgo=new ShowMsg();

ShowMsgo.msgobjname="ShowMsgo";
