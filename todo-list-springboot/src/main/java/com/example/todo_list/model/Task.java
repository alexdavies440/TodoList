package com.example.todo_list.model;

import jakarta.persistence.Entity;

@Entity
public class Task extends AbstractEntity {

    private String description;

    private Priority priority;

    private int timeRequiredMinutes;

    public Task(String description, Priority priority, int timeRequiredMinutes) {
        this.description = description;
        this.priority = priority;
        this.timeRequiredMinutes = timeRequiredMinutes;
    }

    public Task() {}

    @Override
    public String toString() {
        return description;
    }

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

    public int getTimeRequiredMinutes() {
        return timeRequiredMinutes;
    }

    public void setTimeRequiredMinutes(int timeRequiredMinutes) {
        this.timeRequiredMinutes = timeRequiredMinutes;
    }
}
