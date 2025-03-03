let input=prompt("mời nhập vào");
if(input.length===1&&((input>='a'&&input<='z')||(input>='A'&&input<='Z'))){
    alert("ký tự "+input+" là chữ cái");
}else{
    alert("không phải chữ cái");
}
location.reload();