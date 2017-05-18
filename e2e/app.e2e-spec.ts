import { FeaturesPage } from './app.po';

describe('features App', () => {
  let page: FeaturesPage;

  beforeEach(() => {
    page = new FeaturesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
