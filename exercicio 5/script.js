function buscarClima() {
 
    const clima = document.getElementById("clima");
 
    clima.innerHTML = "<p>Obtendo sua localização...</p>";
 
    if (!navigator.geolocation) {
        clima.innerHTML =
            "<p>Seu navegador não suporta geolocalização.</p>";
        return;
    }
 
    navigator.geolocation.getCurrentPosition(
        obterPrevisao,
        erroLocalizacao
    );
}
 
async function obterPrevisao(posicao) {
 
    const latitude = posicao.coords.latitude;
    const longitude = posicao.coords.longitude;
 
    const clima = document.getElementById("clima");
 
    clima.innerHTML = "<p>Buscando previsão...</p>";
 
    try {
 
        const resposta = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
        );
 
        const dados = await resposta.json();
 
        clima.innerHTML = `
            <div class="card">
                <h2>Clima atual</h2>
 
                <p>
                    <strong>Temperatura:</strong>
                    ${dados.current.temperature_2m}°C
                </p>
 
                <p>
                    <strong>Umidade:</strong>
                    ${dados.current.relative_humidity_2m}%
                </p>
 
                <p>
                    <strong>Vento:</strong>
                    ${dados.current.wind_speed_10m} km/h
                </p>
            </div>
        `;
 
    } catch (erro) {
 
        clima.innerHTML =
            "<p>Erro ao consultar a previsão do tempo.</p>";
 
        console.error(erro);
    }
}
 
function erroLocalizacao() {
 
    document.getElementById("clima").innerHTML = `
        <p>
            Não foi possível obter sua localização.
            Verifique se a permissão de localização foi concedida.
        </p>
    `;
}
 