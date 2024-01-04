window.addEventListener("beforeunload", function (event) {
  // Clear data or perform cleanup before the page unloads (user clicks a link or navigates away)
  clearData();
});
function generateLink() {
  //   var countryCode = document.getElementById("countryCode").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  // Remove leading '0' from phone number
  if (phoneNumber.startsWith("0")) {
    phoneNumber = phoneNumber.substr(1); // Remove the first character ('0')
    // alert(phoneNumber);
  } else if (phoneNumber.startsWith("+62")) {
    phoneNumber = phoneNumber.substr(3); // Remove the first character ('0')
    // alert(phoneNumber);
  }
  // Remove spaces and hyphens from the phone number
  phoneNumber = phoneNumber.replace(/\s/g, "").replace(/-/g, "");
  phoneNumber = phoneNumber.replace(/\s/g, "");

  //   var fullNumber = countryCode + phoneNumber;
  var whatsappLink = "https://wa.me/62" + phoneNumber;
  var alert = document.getElementById("alert");
  alert.style.display = "block";
  var linkElement = document.getElementById("whatsappLink");
  linkElement.href = whatsappLink;
  linkElement.innerHTML = "Go to this link";
  localStorage.setItem("phoneNumber", phoneNumber);
}

function clearData() {
  // Bersihkan atau hapus data yang disimpan setelah pengguna kembali
  localStorage.removeItem("phoneNumber");
}
// });
