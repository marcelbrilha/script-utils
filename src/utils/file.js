import { convertFileToBase64 } from "./base64";

/**
 * Download simple file
 * @param {Object} Options
 */
export async function downloadFile({
  nameWithExtension,
  buffer,
  type = "application/octet-stream",
}) {
  if (!nameWithExtension || !buffer) {
    throw new Error("Name and buffer is required.");
  }

  const base64 = await convertFileToBase64(
    new File([buffer], nameWithExtension, { type })
  );

  const link = window.document.createElement("a");
  link.download = nameWithExtension;
  link.href = base64;
  link.click();
  link.remove();
}
