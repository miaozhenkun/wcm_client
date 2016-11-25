import { WcmClientPage } from './app.po';

describe('wcm-client App', function() {
  let page: WcmClientPage;

  beforeEach(() => {
    page = new WcmClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
