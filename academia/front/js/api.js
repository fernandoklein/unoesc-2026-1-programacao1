const API = "http://localhost:3000";

async function getAlunos() {
    return fetch(`${API}/aluno`).then(r => r.json());
}

async function getPlanos() {
    return fetch(`${API}/plano`).then(r => r.json());
}

async function getMatriculas() {
    return fetch(`${API}/matricula`).then(r => r.json());
}

async function postAluno(data) {
    return fetch(`${API}/aluno`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });
}

async function postPlano(data) {
    return fetch(`${API}/plano`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });
}

async function postMatricula(data) {
    return fetch(`${API}/matricula`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });
}