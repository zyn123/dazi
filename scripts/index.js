window.onload=function(){
var da=document.getElementById('da');
for(var i=0;i<55;i++){
		xiao=document.createElement('div');
		xiao.setAttribute('class','xiao');
		da.appendChild(xiao);
		//取随机的大小写字母
		if(Math.random()<0.5){xiao.innerHTML=String.fromCharCode(Math.floor(Math.random()*26)+65);}
		else{xiao.innerHTML=String.fromCharCode(Math.floor(Math.random()*26)+97);}
}
// //按键盘消除第一个相同的字母
// document.onkeydown=function(e){
// 	var xiao=document.getElementsByClassName('xiao');
//        if(String.fromCharCode(e.keyCode)==xiao[0].innerHTML&&e.shiftKey==true||String.fromCharCode(e.keyCode+32)==xiao[0].innerHTML&&e.shiftKey==false){
            
//             //删除第一个
//             da.removeChild(xiao[0]);
//        }
//        //删除了最后一个元素后 刷新
//        if(da.firstChild==null){
//        	 location.reload();   
//        }
// }
//按相同的变色
var kaishi=document.getElementById('kaishi');
kaishi.onclick=function(){
  kaishi.style.display='none';
  var jishiqi=document.getElementById('jishiqi');
  jishiqi.style.display='block';
var i=0;
// var kaiguan=false;
var bian=['url(./imgs/555.png)','url(./imgs/12.png)','url(./imgs/13.png)','url(./imgs/14.png)','url(./imgs/15.png)','url(./imgs/16.png)','url(./imgs/17.png)','url(./imgs/18.png)'];
document.onkeydown=function(e){
	var xiao=document.getElementsByClassName('xiao');
       if(String.fromCharCode(e.keyCode)==xiao[i].innerHTML&&e.shiftKey==true||String.fromCharCode(e.keyCode+32)==xiao[i].innerHTML&&e.shiftKey==false){
        // xiao[i].style.background='url(./11.png)';
        xiao[i].style.color='#fff';
        xiao[i].style.background=bian[Math.floor(Math.random()*8)];
        console.log(bian)
        // xiao[i].style.boxShadow ='5px 5px 10px pink inset'; 
        i++;
        // kaiguan=true;
       }
       if(da.lastChild.style.background=='black'){
       	 // location.reload();
       	 clearInterval(time);   
       }
}
//计算打字的时间
 var ji=0;
  var time=setInterval(function(){  
    if(kaishi){
      ji++;
      jishiqi.innerHTML=ji;
    }
  },1000)
}







};