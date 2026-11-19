# Diagnóstico do portfólio

Este diagnóstico registra três melhorias diferentes identificadas durante a finalização do portfólio. As evidências de antes e depois devem ser capturas reais da versão antiga e da versão atual do projeto.

## Problemas identificados e melhorias realizadas

| ID | Local | Como reproduzir/verificar | Comportamento anterior | Comportamento esperado | Prioridade | Correção / situação |
|---|---|---|---|---|---|---|
| D01 | Filtro de projetos (`.projects` e cards `[data-project]`) | Selecionar HTML, CSS ou JavaScript e observar os cartões exibidos. | A quantidade de projetos era atualizada, mas os cartões continuavam visíveis mesmo quando não correspondiam à categoria selecionada. | Exibir somente os projetos da categoria escolhida e ocultar os demais. | Alta | **Corrigido no CSS** com `.projects > [hidden] { display: none !important; }`. O autor confirmou que, após a alteração, os cartões passaram a ser filtrados corretamente. |
| D02 | Validação do campo Nome (`#nome`) | Digitar apenas números, por exemplo `22121`, e tentar validar/enviar o formulário. Depois, testar um nome como `Ana Silva` ou `João Pedro`. | A validação anterior verificava principalmente o tamanho do texto e podia aceitar uma sequência formada somente por números como se fosse um nome. | Aceitar nomes com letras, incluindo acentos, espaços, hífen e apóstrofo; rejeitar valores somente numéricos e caracteres inválidos. | Alta | **Corrigido no JavaScript** com validação do conteúdo por expressão regular Unicode, além do limite de 3 a 80 caracteres. Repetir os testes no navegador e guardar a captura do resultado. |
| D03 | Formulário de contato (`#contact-form`) | Comparar a versão antiga do formulário com a versão atual. Na atual, selecionar os motivos de contato e escolher “Outro” para verificar o campo de assunto condicional. | Na versão antiga registrada pelo autor, o formulário apresentava somente Nome, E-mail e Mensagem. | Organizar melhor o contato, permitindo selecionar o motivo e informar um assunto específico quando o motivo escolhido for “Outro”. | Média | **Melhoria implementada:** foram adicionados o campo “Motivo do contato” e o campo “Assunto”, exibido e exigido condicionalmente quando “Outro” é selecionado. A versão atual do HTML contém esses campos e o JavaScript controla sua exibição. |

## Ordem de prioridade

1. **Alta — D01:** corrigir o filtro para que os cartões exibidos correspondam à categoria escolhida.
2. **Alta — D02:** impedir que números isolados sejam aceitos como nome no formulário.
3. **Média — D03:** melhorar a organização do formulário de contato com motivo e assunto condicional.

## Evidências de antes e depois

A atividade solicita pelo menos três comparações reais. Salve capturas feitas no próprio projeto. Não use imagens ilustrativas ou inventadas como se fossem capturas de tela.

| Comparação | Captura do antes | Captura do depois | O que deve aparecer |
|---|---|---|---|
| D01 — Filtro de projetos | `evidencias/D01_antes.png` | `evidencias/D01_depois.png` | Antes: cartões permaneciam visíveis após selecionar uma categoria. Depois: somente os cartões correspondentes aparecem. |
| D02 — Validação do nome | `evidencias/D02_antes.png` | `evidencias/D02_depois.png` | Antes: o campo aceitava uma sequência somente numérica, como `22121`. Depois: esse valor gera erro e um nome válido, como `Ana Silva`, é aceito. |
| D03 — Formulário de contato | `evidencias/D03_antes.png` | `evidencias/D03_depois.png` | Antes: somente Nome, E-mail e Mensagem. Depois: aparecem também Motivo do contato e, ao selecionar “Outro”, o campo Assunto. |

## Outras verificações e pendências

- Testar no navegador a rejeição de `22121` e a aceitação de nomes com acentos, espaços e hífen após a correção de D02.
- Para D03, testar as opções do campo Motivo e confirmar que Assunto aparece e se torna obrigatório somente quando “Outro” é selecionado.
- Registrar separadamente os testes responsivos em 360 px, 768 px, 1280 px e zoom de 200%.
- A navegação completa por teclado deve ser verificada e registrada.
- Console e Network foram relatados sem erros pelo autor; manter essa informação como teste relatado, não como auditoria independente.
- A ativação do FormSubmit depende de confirmação do endereço pelo serviço. Os modos de demonstração são simulados e não enviam e-mail.
- Inserir as capturas reais na pasta `evidencias`.
- A revisão por colega deve ser preenchida por alguém que realmente execute os cenários; não registrar uma revisão simulada como real.
