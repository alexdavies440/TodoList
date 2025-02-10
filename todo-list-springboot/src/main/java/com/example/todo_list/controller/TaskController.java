package com.example.todo_list.controller;

import com.example.todo_list.data.TaskRepository;
import com.example.todo_list.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("tasks")
    public List<Task> sendTask() {
        return taskRepository.findAll();
    }
}
