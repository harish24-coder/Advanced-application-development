package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Users;
import com.example.boat.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo repository;

    public List<Users> getUsers(){
        return repository.findAll();
    }

    @SuppressWarnings("null")
    public void addUsers(Users user){
        repository.save(user);
    }

    @SuppressWarnings("null")
    public Users getUserById(String id){
        return repository.findById(id).get();
    }

    @SuppressWarnings("null")
    public void addUser(Users user) {
        repository.save(user);
    }

    @SuppressWarnings("null")
    public Users updateUser(String id, Users userDetails) {
        Users user = repository.findById(id).get();
                              

        // Update user details
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        // Set other fields as needed

        return repository.save(user);
    }

    @SuppressWarnings("null")
    public void deleteUser(String id) {
        Users user = repository.findById(id).get();
                              
        repository.delete(user);
    }
}
