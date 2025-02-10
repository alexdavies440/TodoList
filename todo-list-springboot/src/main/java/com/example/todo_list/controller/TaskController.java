package com.example.todo_list.controller;

import com.example.todo_list.data.TaskRepository;
import com.example.todo_list.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("tasks")
    public List<Task> sendTask() {
        return taskRepository.findAll();
    }

    @PostMapping("delete")
    public void deleteTask(@RequestParam int id) {
        taskRepository.deleteById(id);
    }

    @PostMapping("add")
    public void addTask(@RequestParam int id) {
        Optional<Task> newTask = taskRepository.findById(id);
        newTask.ifPresent(task -> taskRepository.save(task));
    }
}
