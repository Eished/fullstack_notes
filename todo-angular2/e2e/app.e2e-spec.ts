import { TodoAngular2Page } from './app.po';

describe('todo-angular2 App', () => {
  let page: TodoAngular2Page;

  beforeEach(() => {
    page = new TodoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
