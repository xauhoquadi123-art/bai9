function bai1() {
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for (let i = 0; i < a.length; i++) {
        document.write('"row' + i + '"<br>')
        for (let j = 0; j < a[i].length; j++) {
            document.writeln('"' + a[i][j] + '"<br>')
        }
    }

}
function bai2() {
    let mang = ['c', 's', 'c', '2', '6', '1'];
    let daonguoc = "";
    for (let i = mang.length - 1; i >= 0; i--) {
        daonguoc += mang[i];
    }
    document.write("Chuỗi đã được dảo ngược là: " + '"' + daonguoc + '"' + '<br>')
}
function bai3() {
    let mangdauvaoo = ['a', '5', 'b', '9', '-', '0', '6', 'd', 'LF', '7'];
    let luutru = 0;
    for (let i = 0; i < mangdauvaoo.length; i++) {
        if (mangdauvaoo[i] >= 0 && mangdauvaoo[i] < 200) {
            console.log(mangdauvaoo[i]);
            luutru = luutru + 1
        }
        console.log("lưu trữ" + luutru)
    }
    document.write("số trong mảng từ 0-9 là: " + luutru + "<br>")
}
function bai4() {
    let chuoi = "chung khánh thắng sang huy"
    let nho = 0;
    let dieukien = true;
    for (let i = 0; i < chuoi.length; i++) {
        let kytu = chuoi[i];
        if (kytu === " ") {
            dieukien = true;
        } else {
            if (dieukien == true) {
                nho = nho + 1
                dieukien = false;
            }
        }
    }
    document.write("số từ trong chuỗi là:" + nho + "<br>")
}
function bai5() {
    let chuoi1 = prompt("nhập vào chuỗi một");
    let chuoi2 = prompt("nhập vào chuỗi hai");
    let giongnhau=true;
    if(chuoi1!=chuoi2){
        giongnhau=false;
        alert("không giống nhau")
    }else {
        for (let i = 0; i < chuoi1.length; i++) {
            if( chuoi1[i]===chuoi2[i]){
                alert(" giống nhau")
                break;

            }}
    }console.log("giống nhau"+giongnhau);

}
function bai6() {
    let tonghop=['h', 'o', 'c', '-', 'c', 'o', 'd', 'e', '-', 'v', 'u', 'i'];
    let tonghopmoi=[];
        for (let i = 0; i < tonghop.length; i++) {
            if (tonghop[i]==='-'){
                tonghop[i]='_'
                tonghopmoi.push(tonghop[i]);
            }console.log("tổng hợp"+tonghop)
        }document.write("ký tự được thay thế là: "+tonghop)
    }
