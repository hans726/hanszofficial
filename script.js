(function(){
  emailjs.init('YOUR_USER_ID'); // Ganti dengan User ID kamu
})();

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event){
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.gmail.value.trim();
  const gender = form.gender.value;

  if(!name || !email || !gender){
    alert('Mohon isi semua bidang dengan benar.');
    return;
  }

  const templateParams = {
    from_name: name,
    email: email,
    gender: gender,
    to_email: 'muhammadsubhan2701@gmail.com'
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
  .then(function(response) {
    alert('Terima kasih! Data Anda telah dikirim.');
    form.reset();
  }, function(error) {
    alert('Maaf, terjadi kesalahan saat mengirim data. Silakan coba lagi.');
  });
});