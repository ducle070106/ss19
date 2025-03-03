let a= +prompt("nhập vào giá trị a của ax²+bx+c=0");
let b= +prompt("nhập vào giá trị b của "+a+"x²+bx+c=0");
let c= +prompt("nhập vào giá trị c của "+a+"x²+"+b+"x+c=0");
let delta=b*b-4*a*c;
if(a==0||b==0){
        alert("phương trình không phải phương trình bậc 2");
}
if(delta<0){
        alert("phương trình vô nghiệm");
}else if(delta==0){
        alert("phương trình có nghiệm là x₁=x₂="+(-b/(2*a)).toFixed(0));
}else{
        alert("phương trình có nghiệm là x₁="+((-b+Math.sqrt(delta))/(2*a)).toFixed(0)+";x₂="+((-b-Math.sqrt(delta))/(2*a)).toFixed(0));
}
location.reload();