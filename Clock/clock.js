function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
        h = 12; //12 小時格式
    }
    if (h > 12) {
        h = h - 12; //12小時格式
        session = "PM";
    }
    /*if (h < 10) { //0-9，如果小於10，自動補0在前面
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }*/
    h = (h < 10) ? "0" + h : h; //0-9，如果小於10，自動補0在前面
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById("DigitalClock").innerHTML = h + ":" + m + ":" + s + " " + session;
    setTimeout(showTime, 1000); //設定時間每秒更新一次
}

showTime();