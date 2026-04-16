class Mobile {
    constructor() {
        this.pin = 100;
        this.dangbat = true;
        this.tinnhandangsoan = "";
        this.hopthuden = [];
        this.thudagui = [];
    }

    kiemtrabat() {
        if (this.dangbat === true) {
            console.log("Điện thoại đang bật")
            return true
        } else {
            alert("Điện thoại đang tắt")
            return false
        }
    }

    battatnguon(){
        if(this.dangbat === true) {
            if (confirm("bạn có muốn tắt máy không")){
                this.dangbat = false
                return false;
            }

        }else {
            this.dangbat = true
            return true
        }
    }

    kiemtrapin() {
        if (this.pin === 0) {
            alert("điện thoại sập nguồn vui lòng cắm sạc")
            this.dangbat = false;
        } else if (this.pin < 20) {
            alert("vui lòng cắm sạc");
        }
    }

    trupin() {
        if (this.dangbat === true && this.pin > 0) {
            this.pin = this.pin - 1
            this.kiemtrapin()
            return "pin đã được trừ đi 1"
        } else {
            this.dangbat = false;
            return "Hết pin vui lòng cắm sạc"
        }
    }

    sacpin(){
        if (this.pin<100){
            this.pin = this.pin + 1
            return "pin đang sạc"
        }else if(this.pin === 100){
            return "dung lượng pin tối đa ko cần sạc"
        }
    }

    soantinnhan(noiDung) {
        if (this.kiemtrabat()) {
            this.trupin()
            this.tinnhandangsoan = noiDung

        } else {
            return;
        }
    }

    guiTinNhan(bennhan) {
        if (this.tinnhandangsoan == "") {
            return;
        } else if (this.kiemtrabat()) {
            this.trupin()
            this.thudagui.push(this.tinnhandangsoan)
            bennhan.hopthuden.push(this.tinnhandangsoan)
            this.tinnhandangsoan = ""
        }
    }
    docTinNhan(){
        if (this.kiemtrabat()) {
            this.trupin()
            console.log(this.hopthuden)
        }
    }

}
let Nokia = new Mobile();
let Iphone = new Mobile();

function updateUI() {
    document.getElementById('nokia-power').innerText = "Nguồn: " + (Nokia.dangbat ? "Bật" : "Tắt");
    document.getElementById('nokia-battery').innerText = "Pin: " + Nokia.pin;
    document.getElementById('iphone-power').innerText = "Nguồn: " + (Iphone.dangbat ? "Bật" : "Tắt");
    document.getElementById('iphone-battery').innerText = "Pin: " + Iphone.pin;
}

function uiTogglePower(phoneStr) {
    let phone = (phoneStr === 'nokia') ? Nokia : Iphone;
    phone.battatnguon();
    updateUI();
    document.getElementById(phoneStr + '-screen').innerText = phone.dangbat ? "Màn hình chính" : "Màn hình tối đen";
}

function uiCharge(phoneStr) {
    let phone = (phoneStr === 'nokia') ? Nokia : Iphone;
    let msg = phone.sacpin();
    if(msg) alert(msg);
    updateUI();
}

function uiSendMsg(senderStr) {
    let sender = (senderStr === 'nokia') ? Nokia : Iphone;
    let receiver = (senderStr === 'nokia') ? Iphone : Nokia;
    let inputField = document.getElementById(senderStr + '-input');

    if (inputField.value === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }

    sender.soantinnhan(inputField.value);
    sender.guiTinNhan(receiver);
    inputField.value = ""; // Xóa trắng ô nhập sau khi gửi

    document.getElementById(senderStr + '-screen').innerHTML = "<i>Đã gửi tin nhắn thành công!</i>";
    updateUI();
}

function uiReadInbox(phoneStr) {
    let phone = (phoneStr === 'nokia') ? Nokia : Iphone;
    phone.docTinNhan(); // Vẫn gọi hàm gốc của bạn để trừ pin và in console

    // Lấy dữ liệu trực tiếp để in ra web
    let screen = document.getElementById(phoneStr + '-screen');
    if(phone.dangbat) {
        if(phone.hopthuden.length > 0) {
            screen.innerHTML = "<b>Hộp thư đến:</b><br>" + phone.hopthuden.map(msg => "- " + msg).join("<br>");
        } else {
            screen.innerHTML = "Hộp thư đến trống.";
        }
    }
    updateUI();
}

function uiReadSent(phoneStr) {
    let phone = (phoneStr === 'nokia') ? Nokia : Iphone;

    let screen = document.getElementById(phoneStr + '-screen');
    if(phone.kiemtrabat()) {
        phone.trupin(); // Trừ pin khi thao tác
        if(phone.thudagui.length > 0) {
            screen.innerHTML = "<b>Thư đã gửi:</b><br>" + phone.thudagui.map(msg => "- " + msg).join("<br>");
        } else {
            screen.innerHTML = "Chưa gửi tin nhắn nào.";
        }
    }
    updateUI();
}

// Cập nhật giao diện lần đầu khi load trang
updateUI();