export class Af2WtfPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('af2-wtf-app h1')).getText();
  }
}
