async function buscarPosts() {
    const resultado = document.getElementById("resultado");
 
    resultado.innerHTML = "<p>Carregando...</p>";
 
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
 
        const posts = await resposta.json();
 
        resultado.innerHTML = "";
 
        posts.slice(0, 10).forEach(post => {
            resultado.innerHTML += `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            `;
        });
 
    } catch (erro) {
        resultado.innerHTML = "<p>Erro ao buscar os dados.</p>";
        console.error(erro);
    }
}
 