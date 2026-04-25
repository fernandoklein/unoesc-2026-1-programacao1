async function carregarSelects() {
    const alunos = await getAlunos();
    const planos = await getPlanos();

    idaluno.innerHTML = alunos.map(a =>
        `<option value="${a.idaluno}">${a.nome}</option>`
    ).join("");

    idplano.innerHTML = planos.map(p =>
        `<option value="${p.idplano}">${p.nome}</option>`
    ).join("");
}

async function carregarTudo() {
    renderAlunos(await getAlunos());
    renderPlanos(await getPlanos());
    renderMatriculas(await getMatriculas());
    carregarSelects();
}

async function criarAluno() {
    await postAluno({
        nome: nome.value,
        email: email.value,
        telefone: telefone.value
    });
    carregarTudo();
}

async function criarPlano() {
    await postPlano({
        nome: nomePlano.value,
        duracao_meses: parseInt(duracao.value),
        valor: parseFloat(valor.value)
    });
    carregarTudo();
}

async function criarMatricula() {
    await postMatricula({
        idaluno: parseInt(idaluno.value),
        idplano: parseInt(idplano.value),
        data_inicio: data_inicio.value
    });
    carregarTudo();
}

carregarTudo();