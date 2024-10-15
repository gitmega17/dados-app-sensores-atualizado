Yuri Yve
Rm 551358

Link do Repositório:
https://github.com/gitmega17/dados-app-sensores-atualizado

#Checkpoint Desenvolvimento de Casa Monitorada#

-Projeto desenvolvido como parte do checkpoint de disciplina, focado na criação de um sistema de monitoramento de temperatura em uma residência, utilizando sensores simulados.

>>Funcionalidades
-Monitoração de temperatura e umidade em diferentes cômodos da casa (Cozinha, Sala, Quarto e Escritório).
-Envio automático de dados dos sensores a cada 30 segundos.
-Envio manual de dados ao clicar nos botões correspondentes.
-Simulação de temperaturas e umidades utilizando dados históricos.

>>Tecnologias Utilizadas
-Frontend: HTML, CSS, JavaScript, Bootstrap.
-Backend: API para recebimento de dados (não inclusa no repositório).
-Autenticação: JWT (JSON Web Token) para autenticação com o backend.

>>Estrutura do Projeto
-index.html: Página principal com a planta da casa e visualização dos sensores.
-Simulação de sensores: Temperaturas e umidades simuladas com valores aleatórios.
-Contagem regressiva: Indica o tempo para o próximo envio automático de dados.

>>Como Executar
-Clone o repositório.
-Abra o arquivo index.html em um navegador.
-Utilize os botões para enviar dados manualmente, ou aguarde pelo envio automático.
-Observação: A API de backend é necessária para o envio de dados dos sensores. O exemplo de código no arquivo HTML inclui um token JWT e funções para simulação, mas a API deve estar rodando localmente em http://localhost:3000.

>>Simulação dos Dados
-A função simulateTemperature() retorna uma temperatura aleatória entre 22°C e 30°C.
-A função simulateHumidity() retorna uma umidade aleatória entre 30% e 80%.
