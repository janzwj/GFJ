var nub = new Array(1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75, 75, 73, 69, 63, 55, 45, 36, 28, 21, 15, 10, 6, 3, 1);
var nub1 = new Array(1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75);
var mode = new Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], //全包
					 [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27], //单
					 [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26], //双
					 [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], //大
					 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], //小
					 [10, 11, 12, 13, 14, 15, 16, 17], //中
					 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], //边
					 [15, 17, 19, 21, 23, 25, 27], //大单
					 [1, 3, 5, 7, 9, 11, 13], //小单
					 [14, 16, 18, 20, 22, 24, 26], //大双
					 [0, 2, 4, 6, 8, 10, 12], //小双
					 [18, 19, 20, 21, 22, 23, 24, 25, 26, 27], //大边
					 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //小边
					 [1, 3, 5, 7, 9, 19, 21, 23, 25, 27], //单边
					 [0, 2, 4, 6, 8, 18, 20, 22, 24, 26], //双边
					 [0, 10, 20], //0尾
					 [1, 11, 21], //1尾
					 [2, 12, 22], //2尾
					 [3, 13, 23], //3尾
					 [4, 14, 24], //4尾
					 [0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24], //小尾
					 [5, 15, 25], //5尾
					 [6, 16, 26], //6尾
					 [7, 17, 27], //7尾
					 [8, 18], //8尾
					 [9, 19], //9尾
					 [5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 25, 26, 27], //大尾
					 [0, 3, 6, 9, 12, 15, 18, 21, 24, 27], //3余0
					 [1, 4, 7, 10, 13, 16, 19, 22, 25], //3余1
					 [2, 5, 8, 11, 14, 17, 20, 23, 26], //3余2
					 [0, 4, 8, 12, 16, 20, 24], //4余0
					 [1, 5, 9, 13, 17, 21, 25], //4余1
					 [2, 6, 10, 14, 18, 22, 26], //4余2
					 [3, 7, 11, 15, 19, 23, 27], //4余3
					 [0, 5, 10, 15, 20, 25], //5余0
					 [1, 6, 11, 16, 21, 26], //5余1
					 [2, 7, 12, 17, 22, 27], //5余2
					 [3, 8, 13, 18, 23], //5余3
					 [4, 9, 14, 19, 24]//5余4
					 );

var maxnum = 100000000; //最大投注金额
$(document).ready(function () {
    GetRTime(TSeconds, Issue);
    //点击投注模式
    $(".img_bt1").click(function () {
        var i = $(this).attr("attr");
        clear();
        $(this).css("background-image", "url(../images/img_bt2.gif)");
        setValue(i);
        getAllpceggs();
    }).hover(
  function () {
      $(this).css("color", "#FF6600");
  },
  function () {
      $(this).css("color", "#515151"); //鼠标移过后样式
  }
);
    //点击每个栏目倍数
    $("#panel").find("input[name='Add']").click(function () {
        var peilv = $(this).val();
        var txt = $(this).parent().prev("td").children("input");
        if (!txt.attr("readonly")) {
            var txt_value = txt.val().replace(/,/gi, "");
            if (!txt_value) { return; }
            var new_value = Math.floor(txt_value * peilv);
            txt.val(ver(new_value + ""));
            getAllpceggs();
        }
    })

    //点击checkbox,反向选择
    $("input[name='checkboxd']").each(function (i) {
        $(this).click(function () {
            if ($(this).attr("checked")) {
                $(this).parent().next("td").children("input").val(nub1[i]);
            } else { $(this).parent().next("td").children("input").val(""); }
            getAllpceggs()
        })
    })
    //点击号码
    $("#panel td img").each(function (i) {
        $(this).click(function () {
            var dom = $(this).parent().next("td").next("td").next("td").children("input");
            if (!dom.attr("disabled")) {
                if (!dom.attr("checked")) {
                    dom.parent().next("td").children("input").val(nub1[i]); //改了
                    dom.attr("checked", true);
                } else {
                    dom.parent().next("td").children("input").val("");
                    dom.attr("checked", false);
                }
                getAllpceggs()
            }
        })
    }).css("cursor", "pointer");

    //点击反选按钮
    $(".touzhu2").eq(0).click(function () { ani_select(); })
    //点击清除按钮
    $(".touzhu2").eq(1).click(function () { clear(); })
    //刷新赔率
    $(".touzhu1").eq(0).click(function () { refreshd(Periods); })
    //上期投注
    $(".touzhu1").eq(1).click(function () { personmode(BeforePeriods); })
    //点击整体的倍数
    $("#border_out1_l").find("span").click(function () {
        var peilv = $(this).text().replace("倍", "");
        setAllvalue(peilv);
        getAllpceggs();
    }).hover(
  function () {
      $(this).css("color", "#FF6600");
  },
  function () {
      $(this).css("color", "#8d5000"); //鼠标移过后样式
  }
);

    //输入投注数据
    $("#panel").find("input[name='SMONEY']").keyup(function () {
        var regex = /^[1-9]\d{0,}$/;
        var val = $(this).val();
        if (!regex.test(val)) {
            val = val.replace(/\D/g, '');
            $(this).val(val);
        }
        if (!regex.test(val)) {
            $(this).val(val.substring(1));
            getAllpceggs();
        } else {
            $(this).parent().prev("td").children("input").attr("checked", true);
            getAllpceggs();
        }
    }).blur(function () {
        $(this).val(ver($(this).val()));
    }).focus(function () {
        if ($(this).val().indexOf(",") > -1) {
            domvalue = $(this).val().replace(/,/gi, "");
            $(this).val(domvalue);
        }
        try {
            var obj = event.srcElement;
            var txt = obj.createTextRange();
            txt.moveStart('character', obj.value.length);
            txt.collapse(true);
            txt.select();
        } catch (e) {
        }
    });
});


//标准投注模式设定方法
function setValue(num) {
    for (var i = 0; i < mode[num].length; i++) {
        var id_num = mode[num][i];
        var id_name = "#txt" + mode[num][i];
        if (!$(id_name).attr("readonly")) {
            $(id_name).val(nub[id_num]);
            $(id_name).parent().prev("td").children("input").attr("checked", true);
        }
    }
}
//清除方法
function clear() {
    $(".img_bt1").css("background-image", "url(../images/img_bt1.gif)");
    $("#panel").find("input[name='SMONEY']").each(function () {
        if (!$(this).attr("readonly")) {
            $(this).val("");
        } 
    });
    $("#panel").find("input[name='checkboxd']").attr("checked", false);
    $("#totalvalue").text("0");
}
//数字加千分符号
function ver(n) {
    re = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g
    return n.replace(re, "$1,")
}

//设置所有赔率
function setAllvalue(peilv) {
    $("#panel").find("input[name='SMONEY']").each(function () {
        if (!$(this).attr("readonly")) {
            var txt_value = $.trim($(this).val()).replace(/,/gi, "");
            if (txt_value && !isNaN(txt_value)) {
                var new_value = Math.floor(txt_value * peilv);
                $(this).val(ver(new_value + ""));
            } 
        } 
    });
}
//反选		  
function ani_select() {
    $("input[name='checkboxd']").each(function (i) {
        if (!$(this).attr("disabled")) {
            if (!$(this).attr("checked")) {
                $(this).parent().next("td").children("input").val(nub1[i]);
                $(this).attr("checked", true);
            } else {
                $(this).parent().next("td").children("input").val("");
                $(this).attr("checked", false);
            }
        }
    }
									  )
    getAllpceggs();
}

//自定义模式 
function personmode(id) {
    $.ajax({
        type: "get",
        url: "pg28mode.aspx?mode=" + id,
        error: function () {
            //	alert("操作错误");
            //showmessage("10","操作错误！",LastIssue);

        },
        success: function (data, textStatus) {
            //  showvalue(data.split(","));
            UserMode(data.split(","));
        }
    });
}

//刷新赔率 
function refreshd(id) {
    $.ajax({
        type: "get",
        url: "pg28mode.aspx?refresh=" + id,
        error: function () {
            //	alert("操作错误");
            //showmessage("10","操作错误！",LastIssue);
        },
        success: function (data, textStatus) {
            setpeilv("", data.split(",")); //当前赔率
        }
    });
}

//页面载入时执行
function showvalue(arr, flag) {
    if (StrTimeOut == "-1") {
        showmessage("3", "该期已经截止投注！", LastIssue);
        //$("#div_ad").css("display","");
        return false;
    }
    else if (IsGetEggs == "1") {
        //$("#div_ad").css("display",""); 

        showmessage("8", "目前您的账户上金蛋少于5000，是否需要免费获取金蛋？", LastIssue);

    }
    // clear();
    $.each(arr, function (i) {
        if (this != "") {
            if ($("#txt" + i).attr("readonly")) {
                return;
            }
            if (flag) {
                $("#txt" + i).parent().prev("td").children("input").attr("disabled", true);
                $("#txt" + i).attr("readonly", true).attr("disabled", true);
            } else {
                $("#txt" + i).parent().prev("td").children("input").attr("checked", true);
            }
            $("#txt" + i).val(ver(this));
        }
    }
);
    getAllpceggs();
}

//自定义投注模式
function UserMode(arr, flag) {
    if (StrTimeOut == "-1") {
        showmessage("3", "该期已经截止投注！", LastIssue);
        return false;
        // $("#div_ad").css("display","");
        return;
    }
    clear();
    $.each(arr, function (i) {
        if (this != "") {
            if ($("#txt" + i).attr("readonly")) {
                return;
            }
            if (flag) {
                $("#txt" + i).parent().prev("td").children("input").attr("disabled", true);
                $("#txt" + i).attr("readonly", true).attr("disabled", true);
            } else {
                $("#txt" + i).parent().prev("td").children("input").attr("checked", true);
            }
            $("#txt" + i).val(ver(this));
        }
    });
    getAllpceggs();
}


var first = 0;
//取总的投注金蛋
function getAllpceggs() {
    var total = 0;
    $("#panel").find("input[name='SMONEY']").each(function () {
        if (!$(this).attr("readonly")) {
            var txt_value = $.trim($(this).val()).replace(/,/gi, "");
            if (txt_value && !isNaN(txt_value)) {
                total += parseInt(txt_value);
            }
        }
    }
															   )

    $("#totalvalue").text(ver(total + ""));



    if (readcookie("handflag") == "1") {
        if ($("#totalvalue").text() != 0 && first == 0) {
            first = 1;
            // $("#help_show1").css("display",""); 
            // $("#help_show").css("display","none"); 
        }
    }
    //if(total>maxnum){
    //alert("对不起，总投注金额不能超过投注上限！");}
    // if(total>mypceggs){
    //alert("您的余额不足！");}
}
function setpeilv(a_cis, a_cis1) {
    if (a_cis != "") {
        $.each(a_cis, function (i) {
            var v = this + "";
            //		$("#txt"+i).parent().prev("td").prev("td").text(v);	//上期赔率
            $("#txt" + i).parent().prev("td").prev("td").prev("td").text(v); //上期赔率
        })
    }
    if (a_cis1 != "") {
        $.each(a_cis1, function (i) {
            var v = this + "";
            //		$("#txt"+i).parent().prev("td").prev("td").prev("td").text(v);	//当前赔率
            $("#txt" + i).parent().prev("td").prev("td").text(v); //当前赔率
        })

    }
}
//确认投注	
function comform() {


    t = $("#totalvalue").text().replace(/,/gi, "");
    t = parseInt(t);
    var str = [];
    if (t > maxnum) {
        //	alert("对不起，总投注金额不能超过投注上限！");
        //$("#div_ad").css("display","");
        showmessage("11", "对不起，总投注金额不能超过投注上限！", LastIssue);


        return false;
    } else if (t == 0) {
        //       alert("请先投注！");
        //  $("#div_ad").css("display","");
        showmessage("13", "请先投注！", LastIssue);
        return false;
    } else if (t > mypceggs) {
        //alert("您的余额不足！");
        showmessage("12", "您的金蛋不足！", LastIssue);
        return false;

    } else {
        var str = [];
        for (var i = 0; i < 28; i++) {
            var txt_value = $.trim($("#txt" + i).val()).replace(/,/gi, "");
            str.push(txt_value);
        }
        $("#ALLSMONEY").val(str.join(","));
        //$("#div_ad").css("display","");
        showmessage("9", "确认你投注？将扣除你<span id='postgoldeggs' style='color :Red;font-weight:bold'></span>个金蛋！<br/><input type='hidden' name='isdb' id='isdb' value='1'  style='margin-right:2px' />", LastIssue);
        t = ver(String(t)); //将数字转字符串后千分位 
        $("#postgoldeggs").html(t);
        $("#SMONEYSUM").val(t);
        document.getElementById("div_ad").style.top = (document.documentElement.scrollTop + document.body.scrollTop + (document.documentElement.clientHeight - document.getElementById("div_ad").offsetHeight) / 2) + "px";
        document.getElementById("div_ad").style.left = (document.documentElement.scrollLeft + (document.documentElement.clientWidth - document.getElementById("div_ad").offsetWidth) / 2) + "px";
    }
}

//倒计时

function GetRTime(ctime, Isue) {
    var nS = ctime;
    var Issue = Isue;

    if (nS > 0) {
        //alert(document.getElementById('check_reload').checked);
        //alert(nS);
        nS = nS - 1
        document.getElementById("RemainTitle").innerHTML = "<span  style='color: #FF0000;font-size: 14px;'>距离第<span style='font-size:12px'>" + Issue + "</span>期停止竞猜还有<span style='font-size:12px'>" + nS + "</span>秒</span>";
    }
    else {
        document.getElementById("RemainTitle").innerHTML = "<span class='form_game'>第<span style='font-size:12px'>" + Issue + "</span>期正在开奖中！</span>";

    }
    setTimeout("GetRTime(" + nS + "," + Issue + ")", 1000);
}

//是否按现模式自动投注
function ischecked() {
    var isdb = document.getElementById("isdb")//子层
    var isdb_p = ""; //父层


    if (isdb.checked == true) {
        document.getElementById("isdb_p").value = "1";
    } else {
        document.getElementById("isdb_p").value = "0";
    }

}

//取消投注
function rm() {
    document.getElementById("isdb_p").value = "0";
    document.getElementById("div_ad").style.display = 'none';
    document.getElementById("parent_div").style.display = 'none';
}

//确认投注
function datapost() {


    //chgsubmit();
    $("input[name='SMONEY']").attr("disabled", false);

    var form1 = document.getElementById("form1"); //父层
    form1.submit();
}

//滚动
function sc1() {
    document.getElementById("div_ad").style.top = (document.documentElement.scrollTop + document.body.scrollTop + (document.documentElement.clientHeight - document.getElementById("div_ad").offsetHeight) / 2) + "px";
    document.getElementById("div_ad").style.left = (document.documentElement.scrollLeft + (document.documentElement.clientWidth - document.getElementById("div_ad").offsetWidth) / 2) + "px";
}
function scall() {
    sc1();
}

window.onscroll = sc1;

//投注后信息返回
function showmessage(flag, msg, NLid) {

    ////弹出浮层
    $("#div_ad").css("display", "");
    sc1();
    switch (flag) {
        case "0":
            if (readcookie("handflag") == "1") {
                setcookie("handflag", "2");
            }
            window.location.href = "pgl.aspx";
            break;
        case "1": //投注失败
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a href="pgl.aspx" style="width:72px;height:22px;background:url(/img/pg28/popup_btn3.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;
        case "2": //投注金蛋少于现有金蛋
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a onclick="return rm();" style="width:72px;height:22px;background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;
        case "3": //已截至投注
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="float:left; "><a href="pg28Insert.aspx?LID=' + NLid + '" style="width:90px;height:22px; background:url(/img/pg28/popup_btn1.png) no-repeat;display:block;cursor:pointer;"> </a></div> <div style="float:right;"><a href="pgl.aspx" style="width:72px;height:22px;background:url(/img/pg28/popup_btn3.png) no-repeat;display:block;cursor:pointer;"> </a></div> ');
            break;
        case "4": //重复投注
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a href="pgl.aspx" style="width:72px;height:22px;background:url(/img/pg28/popup_btn3.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;
        case "5": //总投注金额超过上限
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a onclick="return rm();" style="width:72px;height:22px;background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;
        case "6": //系统异常（数据库返回）
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a href="pgl.aspx" style="width:72px;height:22px;background:url(/img/pg28/popup_btn3.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;
        case "7": //系统异常（程序）
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a href="pgl.aspx" style="width:72px;height:22px;background:url(/img/pg28/popup_btn3.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;

        case "8": //金蛋少于5000
            //$("#help_show").css("display","none");
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">金蛋少于5000</span><a onclick="return rm();"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="float:left; "><a href="javascript:getgoldeggs()" style="width:72px;height:22px;background:url(/img/pg28/popup_btn4.png) no-repeat;display:block;cursor:pointer;"> </a></div> <div style="float:right;"><a onclick="return rm();"  style="width:72px;height:22px;background:url(/img/pg28/popup_btn2.png) no-repeat;display:block;cursor:pointer;"> </a></div> ');
            break;

        case "9": //确认投注
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">确认投注</span><a href="#" onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="float:left; "><a onclick="return datapost()"  style="width:72px;height:22px; background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer;"></a></div> <div style="float:right;"><a onclick="return rm();"  style="width:72px;height:22px; background:url(/img/pg28/popup_btn2.png) no-repeat;display:block;cursor:pointer;"></a></div> ');
            break;

        case "10": //系统异常（投注模式pg28mode.aspx）
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注失败</span><a href="pgl.aspx"  class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a href="pgl.aspx" style="width:72px;height:22px;background:url(/img/pg28/popup_btn3.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;

        case "11": //投注金额超过上限
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注金额超过上限</span><a onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a onclick="return rm();" style="width:72px;height:22px;background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;

        case "12": //金蛋投余额不足
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">您的金蛋不足！</span><a onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a onclick="return rm();" style="width:72px;height:22px;background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;

        case "13": //没有投注
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">请先投注！</span><a onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a onclick="return rm();" style="width:72px;height:22px;background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            break;

        case "14": //投注邀请分享浮层
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">投注成功</span><a onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><ul><li><a href="javascript:void(0)" onclick="postToXL()"><img src="img/fc_img/fxdxl.gif" border="0"></a></li><li><a href="javascript:void(0)" onclick="postToWb()"><img src="img/fc_img/fxdtx.gif" border="0"></a></li><li><a href="javascript:void(0)" onclick="return rm();"><img src="img/fc_img/zbfx.gif" border="0"></a></li></ul></div>');
            break;
        case "15": //暂停投注
            rm();
            $("#stopsubtip").html(msg);
            $("#stoptip").css("display", "");
            $("#savetip").css("display", "none");
            return;
            break;
        case "16": //验证码错误
            $(".content1").html(msg);
            $(".titleclose").html('<span class="title">提示</span><a onclick="return rm();" class="close"><span>X</span></a>');
            $(".btnpane").html('<div style="text-align:center;"><a onclick="return rm();" style="width:72px;height:22px;background:url(/img/pg28/popup_btn.png) no-repeat;display:block;cursor:pointer; margin:0 auto"> </a></div>');
            return;
            break;
    }


    //弹出笼罩层
    var bodyheight = document.getElementById('bb_body').clientHeight;
    var parent_div = document.getElementById("parent_div");
    parent_div.style.display = 'block';
    parent_div.style.height = parseInt(bodyheight) + 'px';

}

//投注后信息返回
function showmessage1(issue) {
    rm();
    ////弹出浮层
    $("#div_ad1").css("display", "");
    sc11();

    $(".content2").html('<div class="content_zc">第<span  style="color :Red;">' + issue + '</span>期投注成功！<br>&nbsp;&nbsp;&nbsp;&nbsp;举手之劳，分享幸运28到微博，<a href="/new_invite/inviteindex.aspx" class="a3" style="color:#515151;">获<span  style="color :Red;">百万</span>邀请奖励和<span  style="color :Red;">50%</span>高额提成</a>。</div>');
    $(".titleclose").html('<span class="title">投注成功</span><a onclick="return rm1();" class="close"><span>X</span></a>');
    $(".btnpane_fx").html('<ul><li><a href="javascript:void(0)" onclick="postToXL();return rm1();"><img src="/img/fxdxl.gif" border="0"></a></li><li><a href="javascript:void(0)" onclick="postToWb();return rm1();"><img src="/img/fxdtx.gif" border="0"></a></li><li><a href="javascript:void(0)" onclick="return rm1();"><img src="/img/zbfx.gif" border="0"></a></li></ul>');



    //弹出笼罩层
    var bodyheight = document.getElementById('bb_body').clientHeight;
    var parent_div = document.getElementById("parent_div");
    parent_div.style.display = 'block';
    parent_div.style.height = parseInt(bodyheight) + 'px';

}

function sc11() {
    document.getElementById("div_ad1").style.top = (document.documentElement.scrollTop + document.body.scrollTop + (document.documentElement.clientHeight - document.getElementById("div_ad1").offsetHeight) / 2) + "px";
    document.getElementById("div_ad1").style.left = (document.documentElement.scrollLeft + (document.documentElement.clientWidth - document.getElementById("div_ad1").offsetWidth) / 2) + "px";
}
//取消投注
function rm1() {
    document.getElementById("isdb_p").value = "0";
    document.getElementById("div_ad1").style.display = 'none';
    document.getElementById("parent_div").style.display = 'none';
    window.location.href = "pgl.aspx";
}

function getgoldeggs() {
    //$("#help_show").css("display","none");
    ShowMsgo.show("/adcomate/pggetgoldeggsnew.aspx", 503, 518);
    document.getElementById("div_ad").style.display = 'none';
    document.getElementById("parent_div").style.display = 'none';


}
function closelinqu() {
    ShowMsgo.cancel();
    window.location.reload(true);
}