document.addEventListener("DOMContentLoaded", () => {
  // Registro
  const formRegistro = document.getElementById("formRegistro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", async (e) => {
      e.preventDefault();
      const datos = {
        nombre: formRegistro.nombre.value,
        apellido: formRegistro.apellido.value,
        email: formRegistro.email.value,
        password: formRegistro.password.value,
      };
      const res = await fetch("/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (res.ok) {
        alert("Registro exitoso");
        window.location.href = "/login.html";
      } else {
        const error = await res.text();
        alert("Error: " + error);
      }
    });
  }

  // Login
  const formLogin = document.getElementById("formLogin");
  if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      const datos = {
        email: formLogin.email.value,
        password: formLogin.password.value,
      };
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (res.ok) {
        window.location.href = "/perfil.html";
      } else {
        const error = await res.text();
        alert("Error: " + error);
      }
    });
  }

  // Perfil
  const perfilNombre = document.getElementById("perfilNombre");
  if (perfilNombre) {
    fetch("/perfil")
      .then((res) => res.json())
      .then((usuario) => {
        perfilNombre.textContent = `Hola, ${usuario.nombre} ${usuario.apellido}`;
        document.getElementById("perfilEmail").textContent = usuario.email;
        if (usuario.intereses)
          document.getElementById("perfilIntereses").textContent = usuario.intereses;
        if (usuario.antecedentes)
          document.getElementById("perfilAntecedentes").textContent = usuario.antecedentes;
      })
      .catch((err) => {
        alert("Tenés que iniciar sesión");
        window.location.href = "login.html";
      });
  }
});