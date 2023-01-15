package com.grupp5.ExArbete.models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "clients")
public class Client {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private long id;

    @Column
    private String username;
    private String password;
    private String email;
    private Timestamp created_on;

    public Client(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Client() {
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getCreated_on() {
        return created_on;
    }

    public void setCreated_on(Timestamp created_on) {
        this.created_on = created_on;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", created_on=" + created_on +
                '}';
    }
}
