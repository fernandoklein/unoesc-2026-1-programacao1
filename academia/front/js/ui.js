function mostrar(secao, el) {
    document.getElementById("alunos").style.display = "none";
    document.getElementById("planos").style.display = "none";
    document.getElementById("matriculas").style.display = "none";

    document.getElementById(secao).style.display = "block";

    document.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
    el.classList.add("active");
}

function badge(venc) {
    return new Date(venc) >= new Date()
        ? '<span class="badge bg-success">Ativo</span>'
        : '<span class="badge bg-danger">Vencido</span>';
}

function renderAlunos(lista) {
    tabelaAlunos.innerHTML = lista.map(a => `
        <tr>
            <td>${a.idaluno}</td>
            <td>${a.nome}</td>
            <td>${a.email}</td>
        </tr>
    `).join("");
}

function renderPlanos(lista) {
    tabelaPlanos.innerHTML = lista.map(p => `
        <tr>
            <td>${p.idplano}</td>
            <td>${p.nome}</td>
            <td>${p.duracao_meses}</td>
            <td>R$ ${p.valor}</td>
        </tr>
    `).join("");
}

function renderMatriculas(lista) {
    tabelaMatriculas.innerHTML = lista.map(m => `
        <tr>
            <td>${m.aluno?.nome || m.idaluno}</td>
            <td>${m.plano?.nome || m.idplano}</td>
            <td>${m.data_inicio}</td>
            <td>${m.data_vencimento}</td>
            <td>${badge(m.data_vencimento)}</td>
        </tr>
    `).join("");
}