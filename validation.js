// Menunggu hingga DOM sepenuhnya dimuat
$(document).ready(function () {
    const form = $('#registrationForm'); // Mendapatkan elemen form
    const submitBtn = $('#submitBtn'); // Mendapatkan tombol submit

// Fungsi Validasi
function isValidName(name) {
return name.length >= 3; // Nama valid jika memiliki minimal 3 karakter
}
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pola regex untuk validasi email
    return emailPattern.test(email); // Periksa apakah email sesuai pola
}
function isValidPassword(password) {
return password.length >= 8; // Password valid jika memiliki minimal 8 karakter
}
function isPasswordMatch(password, confirmPassword) {
    return password === confirmPassword; // Cocokkan password dan konfirmasi password
}
function isValidBirthDate(date) {
    const birthDate = new Date(date); // Konversi tanggal lahir menjadi objek Date
    return birthDate.getFullYear() <= 2006; // Valid jika tahun lahir 2006 atau sebelumnya
}

function isValidPhone(phone) {
    const phonePattern = /^\+62\d{9,12}$/; // Pola regex untuk nomor telepon Indonesia
    return phonePattern.test(phone); // Periksa apakah nomor telepon sesuai pola
}

// Fungsi untuk menampilkan pesan kesalahan
function showError(message) {
    Swal.fire({
        icon: 'error', // Tampilkan ikon error
        title: 'Oops...', // Judul pesan
        ext: message, // Isi pesan
    });
}

// Menangkap event submit form
form.on('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form secara default

// Ambil nilai dari setiap input
    const namaLengkap = $('#nama_lengkap').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const konfirmasiPassword = $('#konfirmasi_password').val();
    const tanggalLahir = $('#tanggal_lahir').val();
    const noTelp = $('#no_telp').val();
    const jenisKelamin = $('input[name="jenis_kelamin"]:checked').val();

// Validasi setiap field
if (!isValidName(namaLengkap)) {
    showError('Nama lengkap minimal 3 karakter.');
    return;
}
if (!isValidEmail(email)) {
    showError('Format email tidak valid.');
    return;
}
if (!isValidPassword(password)) {
    showError('Password minimal 8 karakter.');
    return;
}
if (!isPasswordMatch(password, konfirmasiPassword)) {
    showError('Konfirmasi password tidak cocok.');
    return;
}
if (!isValidBirthDate(tanggalLahir)) {
    showError('Tahun lahir harus sebelum atau sama dengan 2006.');
    return;
}
if (!isValidPhone(noTelp)) {
    showError('Format nomor telepon tidak valid. Contoh: +628123456789.');
    return;
}
if (!jenisKelamin) {
    showError('Harap pilih jenis kelamin.');
    return;
}

// Jika semua valid, tampilkan pesan sukses
Swal.fire({
    title: 'Sukses',
    text: 'Form berhasil dikirim!',
    icon: 'success',
    confirmButtonText: 'Lihat Bukti'
}).then(() => {
    window.location.href = 'buktiDaftar.html'; // Arahkan ke halaman bukti pendaftaran
});

// Reset form setelah submit
form[0].reset();
});
});

