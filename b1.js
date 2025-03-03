let month= +prompt("mời nhập tháng từ 1 đến 12");
if(Number.isInteger(month)&&month>0&&month<=12){
    switch (month) {
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
            alert("tháng "+month+" có 31 ngày");
            break;
        case 4:case 6:case 9:case 11:
            alert("tháng "+month+" có 30 ngày");
            break;
        case 2:
            alert("tháng có 28 hoặc 29");
    }
}else{
    alert("có vẻ giá trị không hợp lệ");
}
location.reload();