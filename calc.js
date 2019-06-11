function showstr(){
var str=document.getElementById("rawData").value;

	str = str.toUpperCase();
	
	var space=new Boolean("false");
	
	if(document.getElementById("space").checked){
		str = str.replace(/\s*/g,"");
		space = true;
	}else{
		//alert(isHaveSpace(str).toString());	
		space = false;
		
	}
	if(isHexString(str)==false){
		document.getElementById("status").innerHTML = "有非十六进制字符";
	}else if(str.length%2!=0){
		document.getElementById("status").innerHTML = "字节数为奇数";
	}else{
		var str_arr = new Array();
		document.getElementById("LEN").value=str.length/2;
		document.getElementById("rawDataAddSpace").value="";
		
			if(space == false){
					document.getElementById("lbl_1").innerHTML="添加空格"
					for(var i=0;i<str.length/2;i++){
					str_arr[i]=str.slice(i*2,i*2+2);
					document.getElementById("rawDataAddSpace").value+=str_arr[i]+" ";
				}
			}else{
				document.getElementById("lbl_1").innerHTML="去除空格"
				for(var i=0;i<str.length/2;i++){
				str_arr[i]=str.slice(i*2,i*2+2);
				document.getElementById("rawDataAddSpace").value+=str_arr[i];
			}
		}
		
		
		calc_XOR(str_arr);
		calc_SUN(str_arr);
	}
	
}

function calc_XOR(arr){
	var x=0;
	for(var i=0;i<arr.length;i++){
		x ^= parseInt(arr[i],16);
	}
	document.getElementById("XOR").value=x.toString(16).toUpperCase();
}

function calc_SUN(arr){
	var x=0;
	for(var i=0;i<arr.length;i++){
		x += parseInt(arr[i],16);
	}
	document.getElementById("SUN").value=x.toString(16).toUpperCase();
}

function isHaveSpace(str){
	var is=new Boolean("false");
	if(str.indexOf(" ")== -1){
		is=false;
	}else{
		is=true;
	}
	return is;
}

function isHexString(str){
	var is = new Boolean("false");
	for(var i = 0;i<str.length;i++){
		var c=str.charAt(i);
		if(c >='0' && c <= '9'){
	
		}else if(c >= 'A' && c <= 'F'){
			
		}else{
			is = false;
			return is;
		}		
	}
	is = true;
	return is;
}
