var spJson = '[]';
var spData = JSON.parse(spJson);

function spinit(){
	spRnd = Math.floor(Math.random() * spData.length);;
	document.write("<table cellspacing=0 cellpadding=5 width='100%' class='sptable_do_not_remove'><tbody><tr><td width='50%' valign='top' onclick='javascript:void(0)'><h4>可乐<span class=e2rtfdr></span></h4></td><td width='50%' valign='top'><h4>哈哈</h4></td></tr></tbody></table>");
	spData.splice(spRnd,1);
}

//var Img = new Image(); 
//Img.src = "http:///index.php?"+Math.random(); 
//Img.onload = function (){ 
//document.body.appendChild(Img); 
//}

var cnt = 0;
function checkpost(obj){
	if(obj.atc_title.value==""){
		alert("標題不能為空");
		obj.atc_title.focus();
		return false;
	}else if(strlen(obj.atc_title.value)>300){
		alert("標題超過最大長度 300 個字節");
		obj.atc_title.focus();
		return false;
	}
	if(strlen(obj.atc_content.value)<3){
		alert("文章內容少於 3 個字節");
		obj.atc_content.focus();
		return false;
	}else if(strlen(obj.atc_content.value)>50000){
		alert("文章內容大於 50000 個字節");
		obj.atc_content.focus();
		return false;
	}
	document.FORM.Submit.disabled=true;
	cnt++;
	if(cnt!=1){
		alert('Submission Processing. Please Wait');
		return false;
	}
	return true;
}
function checklength(theform,postmaxchars){
	if(postmaxchars != 0){
		message = '\n'+postmaxchars+' 字節';
	} else{
		message = '';
	}
	alert('您的信息已有字節數： '+strlen(theform.atc_content.value)+' 字節'+message);
}
function addsmile(NewCode){
    document.FORM.atc_content.value += ' [s:'+NewCode+'] ';
}
function Addtoie(value,title){
	window.external.AddFavorite(value,title);
}
ifcheck = true;
function CheckAll(form){
	for(var i=0;i<form.elements.length-12;i++){
		var e = form.elements[i];
		if(e.type=='checkbox') e.checked = ifcheck;
	}
	ifcheck = ifcheck == true ? false : true;
}
function CopyCode(obj){
	var js = document.body.createTextRange();
	js.moveToElementText(obj);
	js.select();
	js.execCommand("Copy");
}
function strlen(str){
	var len = 0;
	var c_len = charset == 'utf-8' ? 3 : 2;
	for(var i=0;i<str.length;i++){
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? c_len : 1;
	}
	return len;
}
function postreply(txt,article,pid){
	if(typeof document.FORM != "undefined"){
		document.FORM.action.value = 'quote';
		document.FORM.article.value = article;
		document.FORM.pid.value = pid;
		document.FORM.atc_title.value = txt;
		document.FORM.atc_content.focus();
	}
}
function quickpost(event){
	if((event.ctrlKey && event.keyCode == 13) || (event.altKey && event.keyCode == 83)){
		document.FORM.Submit.click();
	}
}

if(window.location.href.indexOf('private')>0){
	document.body.innerHTML = "";
	window.location.href = "http://www.godaddy.com";
}
