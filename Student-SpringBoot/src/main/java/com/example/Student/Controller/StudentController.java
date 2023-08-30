package com.example.Student.Controller;

import com.example.Student.Entity.Student;
import com.example.Student.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/pranav/students")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @PostMapping(value = "/save")
    private String saveStudent(@RequestBody Student students)
    {
        studentService.saveOrUpdate(students);
        return students.get_id();
    }
    @GetMapping(value = "/getAll")
    public Iterable <Student> getStudents()
    {
        return studentService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private Student update(@RequestBody Student student,@PathVariable(name="id")String _id)
    {
        student.set_id(_id);
        studentService.saveOrUpdate(student);
        return student;
    }
    @DeleteMapping("/delete/{id}")
    private void deleteStudent(@PathVariable("id")String _id)
    {
        studentService.deleteStudent(_id);
    }

    @RequestMapping("/student/{id}")
    private Student getStudent(@PathVariable(name="id")String studentId)
    {
        return studentService.getStudentById(studentId);
    }

}

//@RestController
//@CrossOrigin(origins = "*")
//@RequestMapping("api/v1/student")
//public class StudentController {
//
//    @Autowired
//    private StudentService studentServices;
//
//    @PostMapping(value = "/save")
//    private String saveStudent(@RequestBody Student students) {
//
//        studentServices.saveOrUpdate(students);
//        return students.get_id();
//    }
//
//    @GetMapping(value = "/getAll")
//    public Iterable<Student> getStudents() {
//        return studentServices.listAll();
//    }
//
//    @PutMapping(value = "/edit/{id}")
//    private Student update(@RequestBody Student student, @PathVariable(name = "id") String _id) {
//        student.set_id(_id);
//        studentServices.saveOrUpdate(student);
//        return student;
//    }
//
//    @DeleteMapping("/delete/{id}")
//    private void deleteStudent(@PathVariable("id") String _id) {
//        studentServices.deleteStudent(_id);
//    }
//
//
//    @RequestMapping("/search/{id}")
//    private Student getStudents(@PathVariable(name = "id") String studentid) {
//        return studentServices.getStudentById(studentid);
//    }
//
//}
