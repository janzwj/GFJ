// JScript 文件

function $(id)
{
return document.getElementById(id);
}

function SigmaRequest()
{
	var oThis = this;
	var value = null;
	var text = null;
	var xml = null;
	var xmlhttp=null;
	this.parameters = [];
	
	try 
	{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	}catch (e1) 
	{
		try 
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} 
		catch (e2) 
		{
			try
			{
				xmlhttp = new XMLHttpRequest();
			}
			catch(e3)
			{
			}
		}
	}
	
	if(xmlhttp==null){
		alert("cannot get a XMLHttpRequest");
	};
	
	this.getResponseHeader = function(name)
	{
		return xmlhttp.getResponseHeader(name);
	}
	
	this.isFF = function()
    {
		return (window.navigator.userAgent.indexOf("Firefox")>0);
	}
	
	this.onreadystatechange = function()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200 ||xmlhttp.status==0)
			{
				var r =   oThis.getText();
				if(r=="")
				   return;
				try{
					    value = r;
						oThis.onresult();
						

				}catch(e)
				{
					oThis.onresult();
				}
			}else
			{
				if (xmlhttp.status==404)
				{
					alert("URL: (" + oThis._url + ") doesn't exist!");
				}else
				{
					alert("Status is " + xmlhttp.status);
				}
			}
		}
	}
	
	this.open = function(_method,_url,_async)
	{
		oThis.clearParameters();
		oThis.async = _async;
		xml   = null;
		value = null;
		text  = null;
		oThis._url = _url;
		xmlhttp.open(_method,_url,_async);
		xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
		oThis.setParameter("_isAjaxRequest",'true');	
		if(_async==true)
			xmlhttp.onreadystatechange=oThis.onreadystatechange;
		
	}
	this.getXMLDoc = function()
	{
		if(xml==null)
			xml =  xmlhttp.responseXML;
		return xml;
	}
	this.setParameter = function(name,value) 
	{
		oThis.parameters.push({'name':name,'value':value});
	}

	this.clearParameters = function()
	{
		oThis.parameters = new Array();
	}
	var trimReg = null;
	this.trim = function(s){		
	    if(trimReg==undefined){
	        trimReg = /(^\s*)|(\s*$)/g;
	    }
	    return s.replace(trimReg, "");
	}

	this.getParametersStr = function(){
		var info = [];
		var pvalue = null;
		for(var i=0;i<oThis.parameters.length;i++){
			var p = oThis.parameters[i];
			if(p==null) continue;
			pvalue = encodeURIComponent(oThis.trim(""+p.value));
			info.push (p.name + "=" + pvalue);
		}
		var str = info.join("&");
		return str;
	}
	this.send = function(){
		var str =oThis.getParametersStr();
		xmlhttp.send(str);
		if(oThis.async==false){
			oThis.onreadystatechange();
		}
		oThis.clearParameters();
	}
	
	this.getValue = function(){
		if(value==null){
			try{
				var r = oThis.getText();
				value = r;
			}catch(e){
				//alert("exception throwed when eval:\n"+ text);
				value = null;
			}
		}
		return value;
	}
	
	this.getText = function(){
		if(text==null)
			text = xmlhttp.responseText;
		return text;
	}
	
	this.onresult = function()
	{
	}
	this.clear = function() 
	{
		value = null;
		text = null;
		xml = null;
		xmlhttp=null;	
	}
}



