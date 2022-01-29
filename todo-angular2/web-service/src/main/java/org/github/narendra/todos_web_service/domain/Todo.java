package org.github.narendra.todos_web_service.domain;

import com.fasterxml.jackson.annotation.JsonProperty;



public class Todo {

	@JsonProperty("id")
	private int id;
	private String name;
	private Boolean isDone;
	
	public Todo() {}
	
	public Todo(int id, String name, Boolean isDone) {
		this.id = id;
		this.name = name;
		this.isDone = isDone;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@JsonProperty(value = "isDone")
	public Boolean isDone() {
		return isDone;
	}

	public void setDone(Boolean isDone) {
		this.isDone = isDone;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", name=" + name + ", isDone=" + isDone + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + (isDone ? 1231 : 1237);
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		if (isDone != other.isDone)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}	
}
