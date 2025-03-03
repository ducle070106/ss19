let num=+prompt("mời nhập vào số nguyên");
if(Number.isInteger(num)){
    if(num%3===0&&num%5===0){
        alert(num+" chia hết cho cả 3 và 5");
    }else if(num%3===0){
        alert(num+" chia hết cho 3");
    }else if(num%5===0){
        alert(num+" chia hết cho 5");
    }else{
        alert(num+" không chia hết cho cả 3 và 5");
    }
}else{
    alert("không phải số nguyên");
}
location.reload();