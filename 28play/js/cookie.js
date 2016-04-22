//COOKIES.js

String.prototype.trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
/*JS读取COOKIE--BY GAINOVER*/
function readcookie(cname)
{

	var dc=document.cookie;
	dc=unescape(dc);
	dcarr=dc.split("\;");
	requestcookie="";
	for(ci=0;ci<dcarr.length;ci++)
	{
		eval("dcarr"+ci+"=dcarr["+ci+"]")
		eval("dcarr"+ci+"=dcarr"+ci+".split('=');")
		if(eval("dcarr"+ci+"[0]").trim()==cname)
		{
			requestcookie=eval("dcarr"+ci+"[1]");
			return requestcookie
		}
	}
	if(requestcookie==""){return "no-cookies"}
}

/*写入COOKIES-BY GAINOVER*/
function writecookie(cookiename,cookievalue)
{
	setcookie(cookiename, cookievalue);
}
function writeCookieWithDays(name,value,days) {
   var exp  = new Date();   
   exp.setTime(exp.getTime() + 1000*86400*days);
   var newcookie=name+"="+escape(value)+ "; domain=.pceggs.com"+ "; path=/;expires=" + exp.toGMTString();   
   document.cookie = newcookie;

}
function writeCookieWithHours(name,value,hours) {
   var exp  = new Date();   
   exp.setTime(exp.getTime() + 1000*3600*hours);
   var newcookie=name+"="+escape(value)+ "; domain=.pceggs.com"+ "; path=/;expires=" + exp.toGMTString();   
   document.cookie = newcookie;

}

function setcookie(name,value){    
   var exp  = new Date();   
   exp.setTime(exp.getTime() + 1000*86400*365);
   var newcookie=name+"="+escape(value)+ "; domain=.pceggs.com"+ "; path=/;expires=" + exp.toGMTString();   
   document.cookie = newcookie;
 } 
//base64.js

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(

    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,

    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,

    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,

    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,

    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,

    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,

    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,

    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

//编码的方法

function base64encode(str) {

    var out, i, len;

    var c1, c2, c3;

    len = str.length;

    i = 0;

    out = "";

    while(i < len) {

    c1 = str.charCodeAt(i++) & 0xff;

    if(i == len)

    {

        out += base64EncodeChars.charAt(c1 >> 2);

        out += base64EncodeChars.charAt((c1 & 0x3) << 4);

        out += "==";

        break;

    }

    c2 = str.charCodeAt(i++);

    if(i == len)

    {

        out += base64EncodeChars.charAt(c1 >> 2);

        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));

        out += base64EncodeChars.charAt((c2 & 0xF) << 2);

        out += "=";

        break;

    }

    c3 = str.charCodeAt(i++);

    out += base64EncodeChars.charAt(c1 >> 2);

    out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));

    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));

    out += base64EncodeChars.charAt(c3 & 0x3F);

    }

    return out;

}

//解码的方法

function base64decode(str) {
    var c1, c2, c3, c4;

    var i, len, out;

    len = str.length;

    i = 0;

    out = "";

    while(i < len) {

    /* c1 */

    do {

        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];

    } while(i < len && c1 == -1);

    if(c1 == -1)

        break;

    /* c2 */

    do {

        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];

    } while(i < len && c2 == -1);

    if(c2 == -1)

        break;

    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

    /* c3 */

    do {

        c3 = str.charCodeAt(i++) & 0xff;

        if(c3 == 61)

        return out;

        c3 = base64DecodeChars[c3];

    } while(i < len && c3 == -1);

    if(c3 == -1)

        break;

    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

    /* c4 */

    do {

        c4 = str.charCodeAt(i++) & 0xff;

        if(c4 == 61)

        return out;

        c4 = base64DecodeChars[c4];

    } while(i < len && c4 == -1);

    if(c4 == -1)

        break;

    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);

    }

    return out;

} 