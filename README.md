# Script Utils - JS

Script Utils é uma coleção de scripts úteis para automatizar tarefas comuns de desenvolvimento, como formatação de dados e validação de informações. Esses scripts foram criados para serem simples e fáceis de usar, permitindo que você se concentre em escrever código em vez de lidar com tarefas tediosas.

## Comandos importantes

| Descrição             | Comando          |
| --------------------- | ---------------- |
| Instalar dependências | npm install      |
| Verificar código      | npm run lint     |
| Ajustar código        | npm run lint-fix |
| Executar os testes    | npm run test     |
| Realizar commit       | npm run commit   |

## Scripts Disponíveis

Atualmente, os seguintes scripts estão disponíveis neste projeto:

- convertObjectToBase64.js: Converte um objeto para uma string em base64.
- convertBase64ToObject.js: Converte uma string em base64 de volta para um objeto.
- validateCnpj.js: Valida se um número CNPJ é válido.
- formatCnpj.js: Formata um número CNPJ.
- validateCpf.js: Valida se um número CPF é válido.
- formatCpf.js: Formata um número CPF.
- parseMoney.js: Converte uma string de dinheiro em um número.
- formatMoney.js: Formata um número em uma string de dinheiro.
- formatTelephone.js: Formata um número de telefone.

## Como utilizar

Para usar os scripts deste projeto, basta importar o arquivo correspondente para o seu projeto e chamá-lo como uma função. Por exemplo:

```js
import {
  convertBase64ToObject,
  convertObjectToBase64,
  formatCnpj,
  formatCpf,
  formatMoney,
  formatTelephone,
  parseMoney,
  validateCnpj,
  validateCpf,
} from "utils";

function main() {
  const objBase64 = convertObjectToBase64({ test: "OK" });
  const obj = convertBase64ToObject("JTdCJTIydGVzdCUyMiUzQSUyMk9LJTIyJTdE");
  const isValidCnpj = validateCnpj(83127443000175);
  const cnpjFormatted = formatCnpj("07168056000107");
  const isValidCpf = validateCpf(22617781046);
  const cpfFormatted = formatCpf("22617781046");
  const money = parseMoney("50.000,50");
  const moneyFormatted = formatMoney(50.15);
  const telephoneFormatted = formatTelephone(1144196539);

  console.log(objBase64);
  console.log(obj);
  console.log(isValidCnpj);
  console.log(cnpjFormatted);
  console.log(isValidCpf);
  console.log(cpfFormatted);
  console.log(money);
  console.log(moneyFormatted);
  console.log(telephoneFormatted);
}

main();
```

## Contribuindo

Contribuições são bem-vindas! Se você tiver algum script útil que gostaria de adicionar a este projeto, sinta-se à vontade para enviar uma pull request.

## Licença

Este projeto é licenciado sob a Licença MIT.
