import { Ng2AotSpikePage } from './app.po';

describe('ng2-aot-spike App', function() {
  let page: Ng2AotSpikePage;

  beforeEach(() => {
    page = new Ng2AotSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
