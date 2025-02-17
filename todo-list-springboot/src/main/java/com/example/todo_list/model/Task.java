package com.example.todo_list.model;

import jakarta.persistence.Entity;

@Entity
public class Task extends AbstractEntity {

    private String description;

    private Priority priority;

    public Task(String description, Priority priority) {
        this.description = description;
        this.priority = priority;
    }

    public Task() {}

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    @Override
    public String toString() {
        return description;
    }
}
