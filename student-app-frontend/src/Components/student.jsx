import axios from 'axios';
import {useEffect, useState } from "react";
 
function Student()
{

//Logic

  const [studentid, setId] = useState('');
  const [studentname, setName] = useState("");
  const [studentaddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8081/api/pranav/students/getAll");
         setUsers(result.data);
         console.log(result.data);
  }
 

  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8081/api/pranav/students/save",
        {
        _name: studentname,
        _address: studentaddress,
        _mobile: mobile
        },{headers:{"Content-Type" : "application/json"}});
          alert("Student Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

 
   async function editStudent(students)
   {
    setName(students._name);
    setAddress(students._address);
    setMobile(students._mobile); 
    setId(students._id);
   }
 
   async function DeleteStudent(studentid)
   {
        await axios.delete("http://localhost:8081/api/pranav/students/delete/" + studentid); 
        alert("Student deleted Successfully");
        Load();
   }
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        await axios.put("http://localhost:8081/api/pranav/students/edit/" + studentid ,
       {

        _name: studentname,
        _address: studentaddress,
        _mobile: mobile
       
       });
         alert("Account Details Updated!");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("Student Update Failed");
       }
  }



//Design

  return (
    <div>
        <center><h1>Student Details</h1></center>
       
       <hr></hr>
       <div class="floatIt">
       <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>Student Name</label>
                <input  type="text" class="form-control" id="studentname"
                value={studentname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Student Address</label>
                <input  type="text" class="form-control" id="studentaddress" 
                 value={studentaddress}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />


              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
                    &nbsp; &nbsp;
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
                {/* <br/> */}
                <center>
<table class="content-table" align="center">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Student Address</th>
      <th scope="col">Student Mobile</th>
      
      <th scope="col">Options</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <td>{student._name}</td>
                <td>{student._address}</td>
                <td>{student._mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
            </center>
       </div>
       </div>
            );
        }
  
  export default Student;
  