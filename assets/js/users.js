// Pegar a foto do usuário e colocar no circulo 

document.getElementById('profile-upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      document.getElementById('profile-pic').src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Fazer a transição entre as telas 

