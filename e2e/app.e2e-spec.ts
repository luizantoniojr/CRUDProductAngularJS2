import { CRUDProductsPage } from './app.po';

describe('crudproducts App', function() {
  let page: CRUDProductsPage;

  beforeEach(() => {
    page = new CRUDProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
