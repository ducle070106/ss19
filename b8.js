let month= +prompt("mời nhập vào tháng trong năm");
if(Number.isInteger(month)&&month>0&&month<=12){
    switch (month) {
        case 1:case 2:case 3:
            alert("mùa xuân");
            break;
        case 4:case 5:case 6:
            alert("mùa hè");
            break;
        case 8:case 7:case 9:
            alert("mùa thu");
            break;
        case 10:case 11:case 12:
            alert("mùa đông");
            break;
    }
}else{
    alert("giá trị không hợp lệ")
}
location.reload();