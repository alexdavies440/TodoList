package com.example.todo_list.controller;

import com.example.todo_list.data.TaskRepository;
import com.example.todo_list.model.Task;
import com.example.todo_list.model.TaskDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public List<Task> getTasks() {
//        Task dummyTask = new Task("Dummy task");
//        taskRepository.save(dummyTask);
        return taskRepository.findAll();
    }

    @PostMapping("/delete")
    public void deleteTask(@RequestBody int id) {
        taskRepository.deleteById(id);
    }

}
