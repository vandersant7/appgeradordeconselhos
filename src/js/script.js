const botaoConselho = document.getElementById('btn-conselho')

botaoConselho.addEventListener('click', () => {
    main()

})

async function conselhoAleatorio() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url);
    return await resposta.json();
}

async function mudarConselho() {
    const conselho = await conselhoAleatorio();

    const textConselho = document.getElementById('conselho');
    const descricao = document.getElementById('descricao');

    descricao.innerHTML = `A D V I C E # ${conselho.slip.id}`;
    textConselho.innerHTML = `"${conselho.slip.advice}"`;

    return conselho
}


async function main() {
    try {
        const novoConselho = await mudarConselho();
    } catch (erro) {
        console.error("Ocorreu um erro:", erro);
    }
}