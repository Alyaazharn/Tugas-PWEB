const menu = document.querySelector(".hamburger")
const sidemenu = document.querySelector(".sidemenu")
const close = document.querySelector(".close")



menu.addEventListener("click", () => {
    sidemenu.classList.toggle("active")
})


close.addEventListener("click", () => {
    sidemenu.classList.remove("active")
})

$(document).ready(function () {
    $(".contact-form").on("submit", function (e) {
      e.preventDefault(); // Mencegah form submit default

      let isValid = true;
      let firstName = $(".first-name").val().trim();
      let lastName = $(".last-name").val().trim();
      let email = $(".email").val().trim();
      let pesan = $(".pesan").val().trim();

      // Reset error styles
      $(".contact-form input, .contact-form textarea").css("border", "1px solid #ccc");

      // Validasi First Name
      if (firstName === "") {
        $(".first-name").css("border", "1px solid red");
        isValid = false;
      }

      // Validasi Last Name
      if (lastName === "") {
        $(".last-name").css("border", "1px solid red");
        isValid = false;
      }

      // Validasi Email
      let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        $(".email").css("border", "1px solid red");
        isValid = false;
      }

      // Validasi Pesan
      if (pesan === "") {
        $(".pesan").css("border", "1px solid red");
        isValid = false;
      } else if (wordCount > 10) {
        $(".pesan").css("border", "1px solid red");
        alert("Pesan tidak boleh lebih dari 10 kata.");
        isValid = false;
      }

      if (isValid) {
        alert("Form berhasil dikirim!");
        // Di sini kamu bisa kirim data via AJAX atau reset form
        // this.submit(); jika ingin submit normal
      } else {
        alert("Harap isi semua field dengan benar.");
      }
    });
  });