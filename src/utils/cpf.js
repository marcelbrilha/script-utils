/**
 * Validate a CPF number
 * @param {String} input - CPF number
 * @return {Boolean}
 */
export function validateCpf(input) {
  const cpf = String(input).replace(/\D/g, "");
  const digits = cpf.split("").map((x) => parseInt(x));
  const isRepeatingNumber = (str) => /^(\d)(\1){10}$/.test(str);
  const validator =
    cpf === "" ||
    cpf.length !== 11 ||
    !/^\d{11}$/.test(cpf) ||
    isRepeatingNumber(cpf);

  if (validator) return false;

  for (let j = 0; j < 2; j++) {
    let sum = 0;

    for (let i = 0; i < 9 + j; i++) {
      sum += digits[i] * (10 + j - i);
    }

    let checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) {
      checkDigit = 0;
    }

    if (checkDigit !== digits[9 + j]) {
      return false;
    }
  }

  return true;
}

/**
 * Format a CPF value
 * @param {String|Number} cnpj The CPF to be formatted
 * @return {String} The formatted CPF
 */
export function formatCpf(cpf) {
  return cpf
    .toString()
    .replace(/[^\d]/g, "")
    .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}
