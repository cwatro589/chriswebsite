import { ChriswebsitePage } from './app.po';

describe('chriswebsite App', () => {
  let page: ChriswebsitePage;

  beforeEach(() => {
    page = new ChriswebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
