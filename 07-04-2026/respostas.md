### respasta 1 e 2 
- Por que `PATCH` é a melhor escolha nesse caso?
Porque você quer alterar apenas um campo (nome) da fruta, sem mexer no restante do objeto.
O PATCH foi criado exatamente para esse tipo de situação: modificações parciais.


- O que significa atualização parcial?
Atualização parcial significa que você envia somente os campos que deseja alterar, em vez do objeto completo


- O que acontece quando você envia apenas um campo?
Atualiza somente o campo enviado
Mantém todos os outros dados inalterados

 Perguntas para responder em um arquivo .md


- Por que `PUT` é considerado uma substituição completa?
Porque o PUT indica que você está enviando uma nova versão completa do recurso


- Qual é a diferença entre substituir e atualizar parcialmente?
PATCH → altera apenas partes específicas
PUT → substitui o objeto inteiro


- Se o objeto tivesse mais campos, o que poderia acontecer se eles não fossem enviados?
Ser apagados
Ser resetados
 Ser substituídos por valores padrão (null, por exemplo)
 ###
