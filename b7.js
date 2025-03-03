let a=+prompt("Nhập số thứ nhất");
let b=+prompt("Nhập số thứ hai");
let c=+prompt("Nhập số thứ ba");
let max= (a>b && a>c) ? a :((b>a && b>c) ? b : c);
alert("số lớn nhất trong 3 số là "+max);
location.reload();