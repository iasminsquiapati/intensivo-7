async function carregarUsuarios() {
 
    const container = document.getElementById("usuarios");
 
    container.innerHTML = "<p>Carregando usuários...</p>";
 
    try {
 
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
 
        const usuarios = await resposta.json();
 
        container.innerHTML = "";
 
        usuarios.forEach(usuario => {
 
            container.innerHTML += `
                <div class="usuario">
                    <h2>${usuario.name}</h2>
                    <p><strong>Usuário:</strong> ${usuario.username}</p>
                    <p><strong>E-mail:</strong> ${usuario.email}</p>
                    <p><strong>Cidade:</strong> ${usuario.address.city}</p>
                    <p><strong>Empresa:</strong> ${usuario.company.name}</p>
                </div>
            `;
 
        });
 
    } catch (erro) {
 
        container.innerHTML =
            "<p>Não foi possível carregar os usuários.</p>";
 
        console.error(erro);
    }
}
 
carregarUsuarios();
 