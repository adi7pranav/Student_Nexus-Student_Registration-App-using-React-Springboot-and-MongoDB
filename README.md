# Student_Registration-App-using-React-Springboot-and-MongoDB
This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on a student registration database using React, MongoDB, and Spring Boot. The project includes API endpoints for performing these operations, allowing you to interact with the data stored in the MongoDB database.

## Technologies Used
**React**: A JavaScript library for building user interfaces.<br/>
**MongoDB**: A NoSQL database for storing structured data.<br/>
**Spring Boot**: A Java framework for building microservices and web applications.<br/>

## API Endpoints
The Spring Boot app will start and expose API endpoints at http://localhost:8081/api/pranav/student<br>
**GET** : /api/pranav/student/getAll: Retrieve a list of all students.<br/>
**GET** :  /api/pranav/student/student/{id}: Retrieve details of a specific student.<br/>
**POST** : /api/pranav/student/save: Create a new student.<br/>
**PUT** : /api/pranav/student/edit/{id}: Update information for a specific student.<br/>
**DELETE** : /api/pranav/student/delete/{id}: Delete a specific student.<br/>

## Frontend Implementation Details
The React frontend uses the following technologies and concepts:<br/>
**useState Hook**: To manage state within functional components.<br/>
**useEffect**: To perform side effects like data fetching after rendering.<br/>
**Axios**: A promise-based HTTP client for making API requests.<br/>

## Screenshots
Following are the Screenshots of the Project
### API Testing
#### GET (get Student By Id)
![GET](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/0aee41e1-204c-4ae4-a6e8-5e28ce243efb)
#### GET (get All Students)
![GET_All](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/831de1c0-5b6a-4703-a803-47c21710e219)
#### POST (save Stduent Data)
![POST](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/c0882bb5-a5f3-45e0-b6c3-4e0eb4e9ed6e)
#### PUT (update Student Data by Id)
![PUT](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/65fbf6e1-56e6-41a8-acbd-6d3af6dac5d4)
#### DELETE (delete Student Data by Id)
![DELETE](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/09cf9e97-8000-43a0-a527-670c027bbc6c)
 ### MongoDB Database
 ![MongodbSS](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/3ae81e7f-82c3-4079-858c-6938ee072a95)
### React Output
![Output](https://github.com/adi7pranav/Student_Registration-App-using-React-Springboot-and-MongoDB/assets/84617438/11e62e82-b0b1-4573-8929-486e60dbb83e)





