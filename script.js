document.getElementById("orderBtn").addEventListener("click", sendOrder);

function sendOrder() {
    let order = document.getElementById("order").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let area  = document.getElementById("area").value;
    let name = document.getElementById("clientName").value.trim();
    let address = document.getElementById("address").value.trim();
    let whatsapp = document.getElementById("whatsappChoice").value;


    if (!name || !order || !phone || !area || !address || !whatsapp) {
    alert("من فضلك كمل كل البيانات");
    return;
}


    let message =
        "• طلب جديد من هاميس%0A" +
        "--------------------%0A" +
        "• الاسم: " + name + "%0A" +
        "• الطلب: " + order + "%0A" +
        "• رقم العميل: " + phone + "%0A" +
        "• المنطقة: " + area + "%0A" +
        "• العنوان: " + address;


    let whatsappNumber = whatsapp; // ← حط رقمك هنا
    let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(url, "_blank");
}
