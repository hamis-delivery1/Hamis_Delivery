document.getElementById("sendBtn").addEventListener("click", sendTawsila);

function sendTawsila() {
    let name = document.getElementById("clientName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let from = document.getElementById("from").value.trim();
    let to = document.getElementById("to").value.trim();
    let details = document.getElementById("details").value.trim();
    let whatsapp = document.getElementById("whatsappChoice").value;

    let vehicle = document.querySelector('input[name="vehicle"]:checked');

    if (!name || !phone || !from || !to || !details || !whatsapp) {
        alert("من فضلك كمل كل البيانات");
        return;
    }

    if (!vehicle) {
        alert("اختار وسيلة التوصيل");
        return;
    }

    let message =
        "• *طلب توصيلة جديد*%0A" +
        "--------------------%0A" +
        "• الاسم: " + name + "%0A" +
        "• رقم العميل: " + phone + "%0A" +
        "• الوسيلة: " + vehicle.value + "%0A" +
        "• من: " + from + "%0A" +
        "• إلى: " + to + "%0A" +
        "• التفاصيل: " + details;
    let url = "https://wa.me/" + whatsapp + "?text=" + message;
    window.open(url, "_blank");
}
