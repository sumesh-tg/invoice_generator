import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private key = CryptoJS.enc.Utf8.parse('1234567890123456'); // Your secret key (must be 16, 24, or 32 characters long for AES)
  private iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // Your initialization vector


  constructor() { }

  // / Encrypt the data
  encrypt(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  // Decrypt the data
  decrypt(data: string): string {
    const decrypted = CryptoJS.AES.decrypt(data, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
  }
}
