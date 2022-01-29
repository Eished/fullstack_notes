import { TestBed, inject } from '@angular/core/testing';

import { TodoRestService } from './todo-rest.service';

describe('TodoRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoRestService]
    });
  });

  it('should ...', inject([TodoRestService], (service: TodoRestService) => {
    expect(service).toBeTruthy();
  }));
});
