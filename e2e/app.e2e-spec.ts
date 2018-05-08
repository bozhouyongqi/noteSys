import { NotesSysPage } from './app.po';

describe('notes-sys App', () => {
  let page: NotesSysPage;

  beforeEach(() => {
    page = new NotesSysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
