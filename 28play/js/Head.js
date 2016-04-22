   
// JScript File
function ShowWords()
{
    var str_url="";
	if(userid=="")
	{
	  userid=0;
	}
	str_url=str_url.replace("[pcuid]",userid);
	document.write("<span style='color:#3f3f3f;'>【喜讯】</span><a href =" + str_url + " target='_blank' >全新试玩排名，棋牌日榜来袭，狂送百亿金币，等你来战！</a> ");
	//document.write("&nbsp;<a href =''>【活动】春暖花开，我们一起种树啦！</a> ");
}

function ShowWords_new()
{
	var str_url="";
	if(userid=="")
	{
	  userid=0;
	}
	str_url=str_url.replace("[pcuid]",userid);
                  document.write("<span style='color:#3f3f3f;'>【喜讯】</span><a href ='' target='_blank' >全新试玩排名，棋牌日榜来袭，狂送百亿金币，等你来战！</a> ");//document.write("&nbsp;<a href =''>【活动】春暖花开，我们一起种树啦！</a> ");
}
