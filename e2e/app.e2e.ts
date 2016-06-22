import { Af2WtfPage } from './app.po';

describe('af2-wtf App', function() {
  let page: Af2WtfPage;

  beforeEach(() => {
    page = new Af2WtfPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('af2-wtf works!');
  });
});
