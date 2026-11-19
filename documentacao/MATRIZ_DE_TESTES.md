# MATRIZ DE TESTES – PORTFÓLIO

**Projeto:** Portfólio front end
**Responsável pelos testes:** Cauã

| ID | Cenário testado | Resultado esperado | Resultado observado | Status |
|---|---|---|---|---|
| T01 | Enviar formulário vazio | Mostrar erros e indicar o primeiro campo inválido | Validações apresentadas | Aprovado |
| T02 | Nome com espaços e caracteres especiais | Rejeitar somente espaços e aceitar nome válido com acentos e hífen | Comportamento verificado | Aprovado |
| T03 | E-mail inválido e depois válido | Rejeitar formato inválido e aceitar formato válido | Comportamento verificado | Aprovado |
| T04 | Nome com 2, 3, 80 e 81 caracteres | Respeitar os limites mínimo e máximo | Limite de 80 caracteres observado; demais limites não registrados individualmente | Parcial |
| T05 | Mensagem com 29, 30, 1000 e 1001 caracteres | Respeitar os limites e atualizar o contador | Funcionamento informado pelo autor | Aprovado com ressalva |
| T06 | Assunto vazio, com 4 e com 5 caracteres quando selecionado "Outro" | Exigir assunto válido | Funcionamento informado pelo autor | Aprovado com ressalva |
| T07 | Gerar erro no assunto e trocar o motivo | Ocultar o campo e retirar sua validação quando não for necessário | Comportamento verificado | Aprovado |
| T08 | Clicar várias vezes durante o processamento | Impedir envios duplicados | Funcionamento informado pelo autor, sem registro detalhado | Aprovado com ressalva |
| T09 | Simular falha e tentar novamente | Preservar os dados e permitir nova tentativa | Funcionamento informado pelo autor, sem registro detalhado | Aprovado com ressalva |
| T10 | Enviar com sucesso e editar um campo | Atualizar o estado do formulário | Funcionamento informado pelo autor, sem registro detalhado | Aprovado com ressalva |
| T11 | Navegar por teclado, celular e zoom | Manter acesso aos controles e conteúdo | Teste em modo celular realizado; teclado e zoom não registrados individualmente | Parcial |
| T12 | Selecionar diferentes categorias de projetos | Exibir somente projetos da categoria escolhida | Filtro corrigido e testado após ajuste no CSS | Aprovado |
| T13 | Selecionar categoria sem projetos | Exibir mensagem informando que nenhum projeto foi encontrado | Teste final informado como concluído pelo autor | Aprovado com ressalva |

## Observações

- Os testes foram realizados manualmente pelo autor do projeto.
- O Console e a aba Network foram verificados, sem erros aparentes.
- A visualização em modo celular foi testada e apresentou funcionamento normal.
- O filtro de projetos foi corrigido com a regra CSS que oculta elementos com o atributo `hidden`.
- Alguns testes foram relatados como funcionando, mas não tiveram todos os valores e resultados registrados individualmente.

**Conclusão:** Os principais recursos do portfólio foram testados, incluindo formulário, navegação, visualização em celular e filtro de projetos. Os itens com ressalvas podem ser detalhados com novas verificações e evidências.