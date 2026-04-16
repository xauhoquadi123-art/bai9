let luotcuaX = true
let theand = false
let mang2chieu = [];
let san = document.getElementById("mydiv")
for (let i = 0; i < 20; i++) {
    mang2chieu[i] = []
    for (let j = 0; j < 20; j++) {
        mang2chieu[i][j] = "";
        let hinhvuong = document.createElement("div")
        hinhvuong.style.position = "absolute";
        hinhvuong.style.width = "40px";
        hinhvuong.style.height = "40px";
        hinhvuong.style.top = (i * 40) + "px";
        hinhvuong.style.left = (j * 40) + "px";
        hinhvuong.style.border = "1px solid black";
        hinhvuong.style.textAlign = "center";
        hinhvuong.style.lineHeight = "40px";
        hinhvuong.style.fontSize = "20px";
        san.appendChild(hinhvuong);
        hinhvuong.onclick = function () {
            if (theand === true) {
                return;
            }
            if (this.innerHTML !== "") {
                return;
            }
            if (luotcuaX === true) {
                this.innerHTML = "X";
                mang2chieu[i][j] = "X";
                luotcuaX = false;
            } else {
                this.innerHTML = "O";
                mang2chieu[i][j] = "O";
                luotcuaX = true;
            }
            kiemTraThang(i, j, mang2chieu[i][j]);

        }
    }
}

function kiemTraThang(dong, cot, giaTri) {
    let dem = 1
    let cotTrai = cot - 1
    while (cotTrai >= 0 && mang2chieu[dong][cotTrai] === giaTri) {
        dem++;
        cotTrai--;
    }
    let cotPhai = cot + 1;
    while (cotPhai < 20 && mang2chieu[dong][cotPhai] === giaTri) {
        dem++;
        cotPhai++;
    }
    if (dem >= 5) {
        alert("Chiến thắng")
        theand = true
        return;
    }
    dem = 1
    let dongTren = dong - 1;
    while (dongTren >= 0 && mang2chieu[dongTren][cot] === giaTri) {
        dem++;
        dongTren--;
    }
    let dongDuoi = dong + 1;
    while (dongDuoi < 20 && mang2chieu[dongDuoi][cot] === giaTri) {
        dem++;
        dongDuoi++
    }
    if (dem >= 5) {
        alert(giaTri + " Chiến thắng");
        theand = true
        return;
    }
    dem = 1;
    let d1 = dong - 1;
    let c1 = cot - 1;
    while (d1 >= 0 && c1 >= 0 && mang2chieu[d1][c1] === giaTri) {
        dem++;
        d1--;
        c1--;
    }
    let d2 = dong + 1;
    let c2 = cot + 1;
    while (d2 < 20 && c2 < 20 && mang2chieu[d2][c2] === giaTri) {
        dem++;
        d2++;
        c2++;
    }

    if (dem >= 5) {
        alert(giaTri + " Chiến thắng!");
        theand = true
        return;
    }
    dem = 1;
    let d3 = dong - 1;
    let c3 = cot + 1;
    while (d3 >= 0 && c3 < 20 && mang2chieu[d3][c3] === giaTri) {
        dem++;
        d3--;
        c3++;
    }
    let d4 = dong + 1;
    let c4 = cot - 1;
    while (d4 < 20 && c4 >= 0 && mang2chieu[d4][c4] === giaTri) {
        dem++;
        d4++;
        c4--;
    }
    if (dem >= 5) {
        alert(giaTri + " Chiến thắng!");
        theand = true
        return;
    }

}function clickvao(){
    theand = false;
    luotcuaX = true;
    for (let i = 0; i < 20; i++) {
        mang2chieu[i] = []
        for (let j = 0; j < 20; j++) {
            mang2chieu[i][j] = "";
        }
        let xoa = san.getElementsByTagName("div")
        for (let h = 0; h < xoa.length; h++) {
            xoa[h].innerHTML = "";
        }
    }
}
