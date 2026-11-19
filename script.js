// Filtro de projetos e validação do formulário.

// 1. Filtro dos projetos
const botoesFiltro = document.querySelectorAll("[data-filter]");
const projetos = document.querySelectorAll("[data-project]");
const contador = document.getElementById("filter-count");
const listaProjetos = document.querySelector(".projects");

function filtrarProjetos(categoria) {
    let quantidade = 0;

    projetos.forEach((projeto) => {
        const categorias = projeto.dataset.category.split(" ");
        const mostrar = categoria === "Todos" || categorias.includes(categoria);
        projeto.hidden = !mostrar;
        if (mostrar) quantidade++;
    });

    botoesFiltro.forEach((botao) => {
        botao.setAttribute("aria-pressed", botao.dataset.filter === categoria);
    });

    contador.textContent = `${quantidade} projeto(s) encontrado(s).`;

    let aviso = document.getElementById("sem-projetos");
    if (quantidade === 0 && !aviso) {
        aviso = document.createElement("p");
        aviso.id = "sem-projetos";
        aviso.className = "empty-state";
        aviso.textContent = "Nenhum projeto encontrado. Escolha outro filtro.";
        listaProjetos.append(aviso);
    } else if (quantidade > 0 && aviso) {
        aviso.remove();
    }
}

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => filtrarProjetos(botao.dataset.filter));
});

// 2. Formulário de contato
const formulario = document.getElementById("contact-form");
const campos = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    motivo: document.getElementById("motivo"),
    assunto: document.getElementById("assunto"),
    mensagem: document.getElementById("mensagem")
};
const erros = {
    nome: document.getElementById("nome-error"),
    email: document.getElementById("email-error"),
    motivo: document.getElementById("motivo-error"),
    assunto: document.getElementById("assunto-error"),
    mensagem: document.getElementById("mensagem-error")
};
const grupoAssunto = document.getElementById("assunto-group");
const contadorMensagem = document.getElementById("message-counter");
const resumo = document.getElementById("form-summary");
const status = document.getElementById("form-status");
const botaoEnviar = document.getElementById("submit-button");
const resultadoTeste = document.getElementById("test-outcome");

let tentouEnviar = false;
let processando = false;

function tamanhoUtil(valor) {
    return valor.trim().length;
}

function mostrarErro(campo, mensagem) {
    erros[campo].textContent = mensagem;
    if (mensagem) campos[campo].setAttribute("aria-invalid", "true");
    else campos[campo].removeAttribute("aria-invalid");
}

function validarCampo(nome) {
    const campo = campos[nome];
    const valor = campo.value;
    const tamanho = tamanhoUtil(valor);
    let erro = "";

    if (nome === "nome") {
        // Aceita letras (inclusive acentuadas), espaços, hífen e apóstrofo.
        // Impede nomes formados apenas por números ou com caracteres inválidos.
        const nomeValido = /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u.test(valor.trim());
        if (tamanho < 3 || tamanho > 80) erro = "Digite um nome com 3 a 80 caracteres.";
        else if (!nomeValido) erro = "Digite um nome válido, usando apenas letras, espaços, hífen ou apóstrofo.";
    } else if (nome === "email") {
        if (!valor.trim()) erro = "Informe seu e-mail.";
        else if (!campo.validity.valid) erro = "Digite um e-mail em formato válido.";
    } else if (nome === "motivo" && !valor) {
        erro = "Selecione o motivo do contato.";
    } else if (nome === "assunto" && campos.motivo.value === "outro") {
        if (tamanho < 5 || tamanho > 100) erro = "O assunto deve ter de 5 a 100 caracteres.";
    } else if (nome === "mensagem") {
        if (tamanho < 30 || tamanho > 1000) erro = "A mensagem deve ter de 30 a 1000 caracteres.";
    }

    mostrarErro(nome, erro);
    return erro === "";
}

function atualizarAssunto() {
    const mostrar = campos.motivo.value === "outro";
    grupoAssunto.hidden = !mostrar;
    campos.assunto.disabled = !mostrar;
    campos.assunto.required = mostrar;

    if (!mostrar) {
        campos.assunto.value = "";
        mostrarErro("assunto", "");
    } else if (tentouEnviar) {
        validarCampo("assunto");
    }
}

function atualizarContador() {
    contadorMensagem.textContent = `${tamanhoUtil(campos.mensagem.value)}/1000 caracteres (mínimo: 30).`;
}

function limparStatus() {
    resumo.textContent = "";
    status.textContent = "";
    status.className = "form-status";
}

function validarFormulario() {
    const ordem = ["nome", "email", "motivo", "assunto", "mensagem"];
    const invalidos = ordem.filter((nome) => {
        if (nome === "assunto" && campos.motivo.value !== "outro") return false;
        return !validarCampo(nome);
    });

    if (invalidos.length) {
        resumo.textContent = `Existem ${invalidos.length} campo(s) para corrigir. Veja as mensagens abaixo dos campos.`;
        campos[invalidos[0]].focus();
        return false;
    }
    return true;
}

campos.motivo.addEventListener("change", () => {
    atualizarAssunto();
    if (tentouEnviar) validarCampo("motivo");
    limparStatus();
});

Object.entries(campos).forEach(([nome, campo]) => {
    campo.addEventListener("blur", () => {
        campo.dataset.usado = "sim";
        if (nome !== "assunto" || campos.motivo.value === "outro") validarCampo(nome);
    });
    campo.addEventListener("input", () => {
        if (nome === "mensagem") atualizarContador();
        if (tentouEnviar || campo.dataset.usado === "sim") validarCampo(nome);
        limparStatus();
    });
});

// Envio real pelo FormSubmit ou simulacao controlada para a apresentacao.
function simularEnvio(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado === "success") resolve();
            else reject(new Error("Falha simulada"));
        }, 700);
    });
}

async function enviarMensagem() {
    const dados = new FormData(formulario);
    dados.delete("test-outcome");
    const resposta = await fetch("https://formsubmit.co/ajax/caua.matos@ucsal.edu.br", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: dados
    });

    const resultado = await resposta.json();
    if (!resposta.ok || resultado.success === "false" || resultado.success === false) {
        throw new Error("Nao foi possivel enviar a mensagem.");
    }
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    if (processando) return;

    tentouEnviar = true;
    limparStatus();
    if (!validarFormulario()) return;

    processando = true;
    formulario.setAttribute("aria-busy", "true");
    botaoEnviar.disabled = true;
    botaoEnviar.textContent = "Processando...";
    status.textContent = "Processando sua mensagem. Aguarde.";

    try {
        if (resultadoTeste.value === "real") {
            await enviarMensagem();
            status.textContent = "Mensagem enviada. Obrigado pelo contato!";
        } else {
            await simularEnvio(resultadoTeste.value);
            status.textContent = "Demonstração de sucesso concluída. Nenhum e-mail foi enviado.";
        }
        status.className = "form-status success";
        formulario.reset();
        tentouEnviar = false;
        Object.keys(campos).forEach((nome) => mostrarErro(nome, ""));
        atualizarAssunto();
        atualizarContador();
    } catch {
        status.textContent = resultadoTeste.value === "real"
            ? "Nao foi possivel enviar agora. Seus dados foram mantidos. Tente novamente mais tarde."
            : "Falha simulada. Seus dados foram mantidos e voce pode tentar novamente.";
        status.className = "form-status error";
    } finally {
        processando = false;
        formulario.removeAttribute("aria-busy");
        botaoEnviar.disabled = false;
        botaoEnviar.textContent = "Enviar mensagem";
    }
});

atualizarAssunto();
atualizarContador();
