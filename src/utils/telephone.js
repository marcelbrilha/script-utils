/**
 * Format a telephone value
 * @param {String|Number} telephone The telephone to be formatted
 * @return {String} The formatted telephone
 */
export function formatTelephone(telephone) {
  const telephoneReplaced = telephone.toString().replace(/[^\d]/g, "");

  if (telephoneReplaced.length > 10)
    return telephoneReplaced.replace(
      /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
      "($1) $2 $3-$4"
    );

  return telephoneReplaced.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
}
