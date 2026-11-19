# Relatório técnico

## Refatoração realizada

No projeto-base, o JavaScript tinha várias estruturas separadas para controlar o formulário. O código foi reorganizado em etapas mais fáceis de acompanhar: filtro dos projetos, validação de cada campo, atualização do assunto condicional, contador e simulação do envio.

A função `validarCampo` concentra as regras de cada campo. A função `validarFormulario` percorre os campos na ordem e leva o foco ao primeiro que precisa ser corrigido. Isso facilita localizar a regra e explicar o funcionamento durante a apresentação.

## Critério de contagem

O contador e a validação usam `trim().length`. O `trim()` desconsidera espaços no começo e no fim antes de contar. Assim, espaços sozinhos não fazem uma mensagem ou nome parecer válido. O mesmo critério é usado no contador e na validação da mensagem.

## Regra condicional do assunto

O campo “Assunto adicional” aparece e se torna obrigatório somente quando o motivo selecionado é “Outro”. Quando o visitante escolhe outro motivo, o campo é ocultado, desabilitado, limpo e deixa de participar da validação e dos dados preparados.

## Como funciona o contato

O formulário valida os campos no navegador. Depois, no modo normal, os dados são enviados ao serviço FormSubmit, configurado para encaminhar as mensagens a caua.matos@ucsal.edu.br. Durante o processamento, o botão fica desabilitado para impedir tentativas simultâneas. Em caso de falha, os dados permanecem preenchidos e é possível tentar novamente. Para a apresentação, há modos separados de sucesso e falha simulados.

**Limitação:** o envio real depende da disponibilidade do FormSubmit e da confirmação inicial do endereço de destino solicitada pelo serviço. Os modos de demonstração não enviam e-mail.

## Verificações técnicas pendentes

- Executar todos os testes da matriz no navegador.
- Conferir o console e a aba Network.
- Testar 360 px, 768 px, 1280 px e zoom de 200%.
- Registrar três pares de evidências antes/depois.
- Solicitar a revisão de um colega e preencher o arquivo correspondente.


## Conhecimento incluído

Foi acrescentado Java como conhecimento em nível iniciante. A descrição informa que estou aprendendo os fundamentos da linguagem e os primeiros conceitos de Programação Orientada a Objetos (POO), sem afirmar domínio da tecnologia.
