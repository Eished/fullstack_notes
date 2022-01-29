import { TestBed, inject } from '@angular/core/testing';

import { InMemoryTodoService } from './in-memory-todo.service';

describe('InMemoryTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryTodoService]
    });
  });

  it('should ...', inject([InMemoryTodoService], (service: InMemoryTodoService) => {
    expect(service).toBeTruthy();
  }));
});
