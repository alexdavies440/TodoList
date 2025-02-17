package com.example.todo_list.controller;

import com.example.todo_list.data.TaskRepository;
import com.example.todo_list.model.Priority;
import com.example.todo_list.model.Task;
import com.example.todo_list.model.TaskDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    @PostMapping("/update")
    public void updateTask(@RequestBody Task[] newTasks) {

        for (Task newTask : newTasks) {
            if (newTask != null) {
                Optional<Task> optTask = taskRepository.findById(newTask.getId());

                if (optTask.isPresent()) {
                    Task task = optTask.get();
                    task.setListIndex(newTask.getListIndex());
                    taskRepository.save(task);
                }
            }
        }
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable("id") int id) {
        taskRepository.deleteById(id);
    }

    @PostMapping("/add")
    public void addTask(@RequestBody String description) {
        Task newTask = new Task(description, Priority.MEDIUM);
        taskRepository.save(newTask);
        newTask.setListIndex(newTask.getId());
        taskRepository.save(newTask);
    }

    @PostMapping("/priority/{id}")
    public void updatePriority(@PathVariable("id") int id, @RequestBody Priority newPriority) {

        Optional<Task> optTask = taskRepository.findById(id);

        if (optTask.isPresent()) {
            Task task = optTask.get();
            task.setPriority(newPriority);
            taskRepository.save(task);
        }
    }

}
