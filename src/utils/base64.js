/**
 * Convert base64 to a object
 * @param {String} base64 The base64 value to be converted
 * @return {Object} The object converted
 */
export function convertBase64ToObject(base64) {
  return JSON.parse(decodeURIComponent(atob(base64)));
}

/**
 * Convert object to a base64
 * @param {Object} base64 The object value to be converted
 * @return {String} The base64 converted
 */
export function convertObjectToBase64(object) {
  return btoa(encodeURIComponent(JSON.stringify(object)));
}

/**
 * Convert file to a base64
 * @param {File} file The file value to be converted
 * @return {Promise} Promise with converted base64
 */
export function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Convert base64 to a file
 * @param {String} base64 The base64 value to be converted
 * @return {Promise} Promise with converted file
 */
export function convertBase64ToFile({ base64, filename, mimeType }) {
  if (!base64 || !filename)
    return Promise.reject("Base64 and filename is required");

  const type = mimeType || (base64.match(/^data:([^;]+);/) || "")[1];

  return fetch(base64)
    .then((response) => response.arrayBuffer())
    .then((buffer) => new File([buffer], filename, { type }));
}
