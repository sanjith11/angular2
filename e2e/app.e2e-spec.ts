import { SanAngularPage } from './app.po';

describe('san-angular App', function() {
  let page: SanAngularPage;

  beforeEach(() => {
    page = new SanAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
