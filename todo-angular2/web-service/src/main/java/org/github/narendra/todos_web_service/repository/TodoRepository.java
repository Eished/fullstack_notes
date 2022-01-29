package org.github.narendra.todos_web_service.repository;

import org.github.narendra.todos_web_service.domain.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Integer> {

}
