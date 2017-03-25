import { browser, element, by } from 'protractor';

export class Ang2FilesystemPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fs-root h1')).getText();
  }
}
