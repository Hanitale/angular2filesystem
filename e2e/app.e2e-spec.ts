import { Ang2FilesystemPage } from './app.po';

describe('ang2-filesystem App', () => {
  let page: Ang2FilesystemPage;

  beforeEach(() => {
    page = new Ang2FilesystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fs works!');
  });
});
