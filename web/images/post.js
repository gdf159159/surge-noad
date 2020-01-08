var count = 1;
var menushow = '';
var picpath = imgpath+"/post/smile/";

var header = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
//script.src = 'data/lang/zh_cn.js';
//header.appendChild(script);
function r2aeadS(){
}

document.write("<style>.face{ height:23px;padding:7px 0 0 8px;text-align:left;background:#E0F0F9 url("+imgpath+"/"+stylepath+"/th1.png);}.face div{ width:56px;height:18px;text-align:center;padding:5px 0 0;cursor:pointer;}.face div.lian{ background:#ffffff url("+imgpath+"/"+stylepath+"/tag.jpg) no-repeat;cursor:auto;}</style>");
if(window.ActiveXObject){
	document.documentElement.addBehavior("#default#userdata");
}
for(id in faces[defaultface]){
	imgid=faces[defaultface][id];
	menushow += '<img src="' + imgpath + '/post/smile/' + face[imgid] + '" onclick="javascript:addsmile('+imgid+');" style="cursor:pointer;margin:3px;" />';
	count++;
	if(count>fc_shownum)break;
}
document.getElementById("menu_show").innerHTML = menushow;

function showDefault(){
	if(!IsElement('buttons')){
		initFace();
	}
	click_open('menu_face','td_face','2');
	showFace(1,defaultface);
}

function initFace(){
	var menu_face = document.getElementById("menu_face");
	menu_face.className = 'menu';
	
	var b = document.createElement("div");
	b.id = "buttons";
	b.className = 'face';
	b.style.width = '300px';
	b.unselectable= "on";

	var s = document.createElement("div"); //±Ì«È≤„
	s.id = "showface";
	s.style.background = "#fff";
	s.style.overflowY = "auto";
	s.style.width  = '308px';
	s.style.height = '200px';
	s.unselectable = "on";

	var c=document.createElement("div");
	c.style.cssText="clear:both";

	menu_face.appendChild(b);
	menu_face.appendChild(c);
	menu_face.appendChild(s);

	var num=1;
	var buttonMenu='<div style="float:right;margin-right:3px;width:auto;" onclick="closep();" title="close"><img src='+imgpath+'/close.gif></div>';
	for(f in facedb){
		buttonMenu += '<div style="float:left" unselectable="on" onclick="showFace('+num+',\''+f+'\');">'+facedb[f]+'</div>';
		num++;
	}
	b.innerHTML=buttonMenu;
}

function showFace(id,path){
	var buttons = document.getElementById("buttons");
	var faceButton = buttons.getElementsByTagName("div");
	for(var i=1;i<faceButton.length;i++){
		if(i==id){
			faceButton[i].className = "lian";
		}else{
			faceButton[i].className = "";
		}
	}
	var showface = document.getElementById("showface");

	showface.innerHTML = "<div id=\"loading\" style=\"padding:20px;width:80%;text-align:center\">Loading...........</div>";
	for(i in faces[path]){
		var sid = faces[path][i];
		var pic = document.createElement("img");
		pic.style.margin = "3px";
		pic.style.cursor = 'pointer';
		pic.id = sid;
		pic.onclick = function(){addsmile(this.id);};
		pic.src = picpath+face[sid];
		showface.appendChild(pic);
	}
	document.getElementById("loading").style.display="none";
}
function strlen(str){
	var len = 0;
	var c_len = charset == 'utf-8' ? 3 : 2;
	for(var i=0;i<str.length;i++){
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? c_len : 1;
	}
	return len;
}
function quickpost(event){
	if((event.ctrlKey && event.keyCode == 13) || (event.altKey && event.keyCode == 83)){
		document.FORM.Submit.click();
	}
}
function saveData(key,value){
	if(!value) return;
    if(window.ActiveXObject){
		document.documentElement.load(key);
		document.documentElement.setAttribute("value", value);
		document.documentElement.save(key);
		return document.documentElement.getAttribute("value");
    } else if(window.sessionStorage){
		sessionStorage.setItem(key,value);
    }
}
function loadData(key){
    if(window.ActiveXObject){
		document.documentElement.load(key);
		var msg = document.documentElement.getAttribute("value");
    } else if(window.sessionStorage){
		var msg = sessionStorage.getItem(key).value;
    } else {
		alert(I18N['loaddata_error']);
		return false;
	}
	if(!msg){
		alert(I18N['loaddata_msg_none']);
		return false;
	} else if(typeof WYSIWYD == 'undefined' && document.FORM.atc_content.value != '' || typeof WYSIWYD == 'function' && editor.getHTML() != ''){
		if(!confirm(I18N['loaddata_confirm'])){
			return false;
		}
	}
	if(typeof WYSIWYD == 'function' && editor._editMode == 'wysiwyg'){
		editor._doc.body.innerHTML = codetohtml(msg);
	} else {
		document.FORM.atc_content.value = msg;
	}
}
window.onunload = function(){
	saveData('msg',document.FORM.atc_content.value);
}