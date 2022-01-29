package org.github.narendra.todos_web_service.web;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.github.narendra.todos_web_service.domain.Todo;
import org.github.narendra.todos_web_service.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
public class TodosController {

	@Autowired
	private TodoRepository todoRepository;
	
//	@Autowired
//	private DatabaseSetup databaseSetup;
	
	@ResponseBody
	@RequestMapping(method= RequestMethod.GET, path = "/rest/api/todos")
	public ResponseEntity<List<Todo>> listAllTodos() {
		List<Todo> todos = toList(todoRepository.findAll());
		System.out.println(todos);
	    return new ResponseEntity<List<Todo>>(todos, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/rest/api/todos")
	public ResponseEntity<Todo> createTodo(@RequestBody Todo todo, UriComponentsBuilder ucBuilder) {
		
		todo = todoRepository.save(todo);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(todo.getId()).toUri());
        return new ResponseEntity<Todo>(todo, headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/rest/api/todos/{id}",method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Todo getTodo(@PathVariable("id") Integer id) {
		Todo findOne = todoRepository.findOne(id);
		System.out.println(findOne);
		return findOne;
	}
	
	@RequestMapping(value = "/rest/api/todos/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public Todo updateName(@PathVariable("id") Integer id, @RequestBody Todo receivedTodo) throws InterruptedException {
		Todo task = todoRepository.findOne(id);
		if (receivedTodo.getName() != null) {
			task.setName(receivedTodo.getName());
		} 
		if (receivedTodo.isDone() != null) {
			task.setDone(receivedTodo.isDone());
			Thread.sleep(1000L);
		}
		return todoRepository.findOne(id);
	}
	
	@RequestMapping(value = "/rest/api/todos/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public void delete(@PathVariable("id") Integer id) {
		Todo task = todoRepository.findOne(id);
		if(task != null){
			todoRepository.delete(id);
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/rest/api/todos/seed")
	public ResponseEntity<Todo> seed(UriComponentsBuilder ucBuilder) {
		Todo todo = new Todo(0, "Task 1", false);
		todo = todoRepository.save(todo);
		todo = new Todo(0, "Task 2", false);
		todo = todoRepository.save(todo);
		todo = new Todo(0, "Task 3", false);
		todo = todoRepository.save(todo);
		todo = new Todo(0, "Task 4", false);
		todo = todoRepository.save(todo);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(todo.getId()).toUri());
        return new ResponseEntity<Todo>(todo, headers, HttpStatus.CREATED);
	}
	
	private List<Todo> toList(Iterable<Todo> todos) {
		LinkedList<Todo> todoList = new LinkedList<Todo>();
		Iterator<Todo> iterator = todos.iterator();
		while (iterator.hasNext()) {
			Todo todo = iterator.next();
			System.out.println(todo);
			todoList.add(todo);
		}
		return todoList;
	}
}
