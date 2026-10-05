const form = document.getElementById("formLogin");
const mensagem = document.getElementById("mensagem");
 
// API fictícia
const usuarios = [
    {
        email: "usuario@email.com",
        senha: "123456"
    },
    {
        email: "admin@email.com",
        senha: "admin123"
    }
];
 
form.addEventListener("submit", function(event) {
 
    event.preventDefault();
 
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
 
    mensagem.textContent = "Validando...";
 
    setTimeout(() => {
 
        const usuarioEncontrado = usuarios.find(usuario =>
            usuario.email === email &&
            usuario.senha === senha
        );
 
        if (usuarioEncontrado) {
            mensagem.textContent = "Login realizado com sucesso!";
        } else {
            mensagem.textContent = "E-mail ou senha incorretos.";
        }
 
    }, 800);
});
 