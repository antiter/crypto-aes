function getAesString (src) {
    // // 加密
    const utf8Parse = CryptoJS.enc.Utf8;
    const iv = utf8Parse.parse('0102030405060708');
    const key = utf8Parse.parse('aaaaaaaaaaaaaaaa');// 16位秘钥
    const data = utf8Parse.parse(JSON.stringify(src));
    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    // return CryptoJS.enc.Base64.stringify(encrypted);
    return encrypted.toString(); // 返回的是base64格式的密文
    }
function getDesString(encrypted, key) {
const utf8Parse = CryptoJS.enc.Utf8;
    const iv = utf8Parse.parse('0102030405060708');
    const key = utf8Parse.parse('aaaaaaaaaaaaaaaa');// 16位秘钥
  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
     iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
