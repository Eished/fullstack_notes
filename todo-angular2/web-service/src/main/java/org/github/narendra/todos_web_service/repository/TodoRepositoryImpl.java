package org.github.narendra.todos_web_service.repository;

import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.github.narendra.todos_web_service.domain.Todo;

public class TodoRepositoryImpl implements TodoRepository {

	private ConcurrentHashMap<Integer, Todo> todoStore = new ConcurrentHashMap<Integer, Todo>();
	private static final AtomicInteger idSequence = new AtomicInteger();
	
	@Override
	public long count() {
		return todoStore.size();
	}

	@Override
	public void delete(Integer arg0) {
		todoStore.remove(arg0);
	}

	@Override
	public void delete(Todo arg0) {
		todoStore.remove(arg0.getId());
	}

	@Override
	public void delete(Iterable<? extends Todo> arg0) {
		throw new UnsupportedOperationException();
	}

	@Override
	public void deleteAll() {
		todoStore.clear();
	}

	@Override
	public boolean exists(Integer arg0) {
		return todoStore.containsKey(arg0);
	}

	@Override
	public Iterable<Todo> findAll() {
		return new ArrayList<Todo>(todoStore.values());
	}

	@Override
	public Iterable<Todo> findAll(Iterable<Integer> arg0) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Todo findOne(Integer arg0) {
		return todoStore.get(arg0);
	}

	@Override
	public <S extends Todo> S save(S arg0) {
		arg0.setId(idSequence.incrementAndGet());
		todoStore.put(arg0.getId(), arg0);
		return arg0;
	}

	@Override
	public <S extends Todo> Iterable<S> save(Iterable<S> arg0) {
		throw new UnsupportedOperationException();
	}

}
