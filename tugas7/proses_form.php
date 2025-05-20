<?php
// Konfigurasi database
$host = "localhost";      // Ganti sesuai konfigurasi
$user = "root";           // Ganti sesuai konfigurasi
$pass = "";               // Ganti sesuai konfigurasi
$db   = "kontak_db";      // Ganti sesuai nama database

// Koneksi ke database
$conn = new mysqli($host, $user, $pass, $db);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$first_name = $_POST['first_name'];
$last_name  = $_POST['last_name'];
$email      = $_POST['email'];
$pesan      = $_POST['pesan'];

// Simpan ke database
$sql = "INSERT INTO kontak (first_name, last_name, email, pesan)
        VALUES ('$first_name', '$last_name', '$email', '$pesan')";

if ($conn->query($sql) === TRUE) {
    echo "Pesan berhasil dikirim.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
