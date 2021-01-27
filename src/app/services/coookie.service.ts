import { Injectable } from "@angular/core";

@Injectable()
export class CookieService {
  constructor() {
  }

  public getCookie(name: string) {
    const cookieArray: string[] = document.cookie.split(';');
    const cookieName = `${name}=`;
    for (const cookie of cookieArray) {
      const c: string = cookie.replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return undefined;
  }

  public deleteCookie(name) {
    this.setCookie(name, '', -1);
  }

  public setCookie(name: string, value: string, expireDays: number, path = '') {
    const d: Date = new Date();
    const hours = 24;
    const minutes = 60;
    const seconds = 60;
    const milliSeconds = 1000;
    d.setTime(d.getTime() + expireDays * hours * minutes * seconds * milliSeconds);
    const expires = `expires=${d.toUTCString()}`;
    const cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}${cpath}`;
  }
}
