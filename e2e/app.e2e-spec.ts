import { MdAccordionPage } from './app.po';

describe('md-accordion App', () => {
  let page: MdAccordionPage;

  beforeEach(() => {
    page = new MdAccordionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
