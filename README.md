# managerTask
## Observação sobre o código
O frontend foi desenvolvido utilizando FlutterFlow.
A exportação do código-fonte não está disponível no plano atual da plataforma.
Para avaliação, o projeto pode ser acessado diretamente via:
- Link do projeto FlutterFlow
  https://app.flutterflow.io/project/manager-tasks-kx58s5
- Link do deployment web
  https://manager-tasks-kx58s5.flutterflow.app/
  
---

## Como rodar / testar (passo a passo)
1. Acesse o link do deployment web.
2. Realize login ou crie o cadastro.
3. Crie uma nova tarefa informando título e descrição.
4. Marque/desmarque tarefas como concluídas.
5. Verifique no Firestore a criação/atualização dos documentos.
6. Teste permissões acessando com outro usuário.

---

## Arquitetura (resumo)
O frontend foi construído no FlutterFlow e publicado via Web Deployment da própria plataforma. Ele é responsável pela interface do usuário e pela interação com o backend, consumindo dados de forma segura.

O backend utiliza Firebase, com Cloud Functions em Node.js para operações sensíveis e regras de negócio, garantindo que validações críticas não fiquem apenas no cliente. O Firestore é usado como banco de dados, com regras de segurança restringindo leitura e escrita apenas aos usuários autenticados e aos seus próprios registros.

As regras do Firestore garantem isolamento de dados por usuário, enquanto as Cloud Functions centralizam validações e operações críticas.

---

## Regras do Firestore
As regras de segurança estão disponíveis no arquivo `firestore.rules` neste repositório.

---

## Próximos passos (se tivesse mais tempo)
- Implementar testes automatizados para Cloud Functions.
- Melhorar a experiência do usuário (feedback visual, loading states, empty states).
- Adicionar paginação e otimização de queries no Firestore.
- Implementar logs e monitoramento via Firebase Logging.
