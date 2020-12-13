/**
 * Generate a UUID (v1)
 * @param {Integer} c clock-seq-and-reserved clock-seq-low
 * @return {String} The UUID
 * http://www.rfcreader.com/#rfc4122_line385 allows random instead of MAC address
 * https://www.famkruithof.net/uuid/uuidgen
 * https://realityripple.com/Tools/UnUUID/
 */
export function generateId(c = 9999) {
  const t = ((Date.now() + 12219292800000) * 1e4).toString(16);
  const n = crypto.getRandomValues(new Uint8Array(6)).reduce((sum, x, i) => {
    return sum + (i === 0 ? x | 1 : x).toString(16).padStart(2, "0");
  }, "");
  return `${t.slice(-8)}-${t.slice(-12, -8)}-1${t.slice(0, 3)}-${c}-${n}`;
}
