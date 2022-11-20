const _digit = (numbers) => {
  let index = 2;

  const reverse = numbers
    .split("")
    .reduce((buffer, number) => [+number].concat(buffer), []);

  const sum = reverse.reduce((buffer, number) => {
    buffer += number * index;
    index = index === 9 ? 2 : index + 1;
    return buffer;
  }, 0);

  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
};

/**
 * Validate a CNPJ number
 * @param {String|Number} cnpj The CNPJ value to be validated
 * @return {Boolean}
 */
export function validateCnpj(cnpj) {
  const cleaned = cnpj.toString().replace(/\D/g, "");
  const validator =
    !cleaned || cleaned.length !== 14 || /^(\d)\1+$/.test(cleaned);

  if (validator) return false;

  let registration = cleaned.substr(0, 12);
  registration += _digit(registration);
  registration += _digit(registration);

  return registration.substr(-2) === cleaned.substr(-2);
}

/**
 * Format a CNPJ value
 * @param {String|Number} cnpj The CNPJ to be formatted
 * @return {String} The formatted CNPJ
 */
export function formatCnpj(cnpj) {
  return cnpj
    .toString()
    .replace(/[^\d]/g, "")
    .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}
