function bai1() {
    for (let i = 1; i <= 100; i++) {
        console.log("Đang đếm:" + i);
        if (i === 99) {
            alert("Đã hoàn thành");
        }
    }
}
function bai2() {
    let nhapvao = +prompt("nhập nhiệt độ vào đây");
    while (nhapvao>100||nhapvao<20){
        if (nhapvao>100){
            alert("Yêu cầu giảm nhiệt độ");
            nhapvao=+prompt("yêu cầu nhập lại");
        }else if (nhapvao<20){
            alert("yêu cầu tăng nhiệt độ");
            nhapvao=+prompt("yêu cầu nhập lại");
        }
    }

}