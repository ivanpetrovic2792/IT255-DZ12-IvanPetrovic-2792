import { DZ12Page } from './app.po';

describe('dz12 App', () => {
  let page: DZ12Page;

  beforeEach(() => {
    page = new DZ12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
