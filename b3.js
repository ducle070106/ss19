let tyGia = 23000; 

let loaiDoi = prompt("Nhap loai chuyen doi :");


switch (loaiDoi) {
    case "1":
        let vnd = prompt("nhập tiền vnd:");
        let usd = vnd / tyGia;
        alert("VND-->USD: " + vnd + " -> " + usd + " USD");
        break;

    case "2":
        let usdInput = prompt("nhập tiền usd:");
        let vndOutput = usdInput * tyGia;
        alert("USD-->VND: " + usdInput + " -> " + vndOutput + " VND");
        break;

    default:
        alert("Lựa chọn không đúng");
}
