package com.example.Student.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student")
public class Student {
    @Id
    private String _id;
    private String _name;
    private String _address;
    private String _mobile;

    public Student(String _id, String _name, String _address, String _mobile) {
        this._id = _id;
        this._name = _name;
        this._address = _address;
        this._mobile = _mobile;
    }

    public Student() {
    }

    public String get_id() {
        return _id;
    }

    public String get_name() {
        return _name;
    }

    public String get_address() {
        return _address;
    }

    public String get_mobile() {
        return _mobile;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public void set_name(String _name) {
        this._name = _name;
    }

    public void set_address(String _address) {
        this._address = _address;
    }

    public void set_mobile(String _mobile) {
        this._mobile = _mobile;
    }

    @Override
    public String toString() {
        return "Student{" +
                "_id='" + _id + '\'' +
                ", _name='" + _name + '\'' +
                ", _address='" + _address + '\'' +
                ", _mobile='" + _mobile + '\'' +
                '}';
    }
}
