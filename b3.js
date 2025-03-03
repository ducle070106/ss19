let input=prompt("mời nhập vào \"VND-->USD: <giá trị số tự nhiên>\"(VND và USD có thể đảo vị trí");
let check=true;
if(input.includes("VND-->USD")){
    let money= +input.split(":")[1].trim();
    if(money<0||isNaN(money)){
        check=false;
    }else{
        check=1
    }
}else if(input.includes("USD-->VND")){
    let money= +input.split(":")[1].trim();
    if(money<0||isNaN(money)){
        check=false;
    }else{
        check=2
    }
}else{
    check=false;
}
if(check){
    if(check===1){
        money=(money/23000)+" USD"
    }else{
        money=(money*23000)+" VND"
    }
    alert(money);
}else{
    alert("không hợp lệ");
}
location.reload();