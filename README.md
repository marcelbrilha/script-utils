# Script Utils - JS

Biblioteca com scripts utilitários

## Comandos importantes

| Descrição             | Comando          |
| --------------------- | ---------------- |
| Instalar dependências | npm install      |
| Verificar código      | npm run lint     |
| Ajustar código        | npm run lint-fix |
| Executar os testes    | npm run test     |
| Realizar commit       | npm run commit   |

## Como utilizar

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
