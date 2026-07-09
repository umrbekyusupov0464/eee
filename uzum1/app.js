 document.getElementById("loginBtn").onclick = function() {
    document.getElementById("loginModal").style.display = "block";
};

document.getElementById("closeModal").onclick = function() {
    document.getElementById("loginModal").style.display = "none";
};

document.getElementById("loginSubmit").onclick = function() {
    var phone = document.getElementById("phone").value;}

    if (phone) {
        alert("Siz muvaffaqiyatli kirishingiz mumkin: " + phone)};