# Course-Registration-Api
-->

>  A RESTfull API built with Express and Mongoose 


This API has been designed for registration of courses for a university. This will be used to implement backend services for handling 
student registration requests. This involves submitting registration requests, validating the requests, and storing the data 
in a database.

##  BUILT WITH

- JAVASCRIPT
- NPM
- EXPRESS
- MONGOOSE
- MONGODB
- NODE
- ESLINT
- VSCODE
- JSONWEBSTOKENS

### USAGE

To have this app on your pc, you need to:
*  clone this repo: git clone https://github.com/tharunan11/Course-Registration-Api.git

* In the project directory, you can run:

  - `$ npm install` - [installs all the dependencies required by the project]

  - `$ npm start` - [runs nodemon server.js]
 
## AUTHENTICATION

JSON web token has been used for authentications purposes. Without authentication one can view the courses but cannot create or register new course. 
They also cannot delete or update course. User can sign up using 'users/signup/ ' . Once they signed in , they can log in to the website using route 
'users/login/'. When they do so, a token for them is returned. Using that token using authorization header, one can post (create or register courses).
Without that token one can only get all the courses. So authentication is required for sending post request.

## Schemas
   User schema for authentication :
       This schema is used for authentication of users.
      {
      "email" : String eg("Tharunant@gmail.com"),
      "password" : String eg("password")
      }
      
   All courses Schema :
       In this schema one can find all the courses available for registration. 
      {
        "courseID": Number eg(103),
        "coursename": "String eg(discrete)",
        "instructor": "String eg(jaga)",
      },
      
   Registered Course Schema :
       Using this schema one can register the reqired course from ID of 'all courses Schema' using reference.
      {
          "courseID": "String eg(64176f65802c6483fa19abb9)"
      }

##ERROR HANDLING
  * One cannot enter duplicate password for signup which aldready exist.
  * Only valid emails are allowed ( eg - tharunantgmail.com is not allowed).
  * While logging only the emails exist in the database ( created using signup ) can log in and get a token.
  * Only matched password can log in using emails.
  * Only defined routes are allowed (given below)
  * Without courseID, courseName,Instructor, a course cannot be created.
  * Similarly without CourseID , course cannot be registered.
  * No duplicate course( with same ID) can be registered or created.
  
## Routes
  These routes are entered preceeded by localserver
  
    ->To get all the courses available                          : [GET]    - /allcourses/
    ->To Create a new course (Done only after autherization)    : [POST]   - /allcourses/
    ->To Update a course (Done only after autherization)        : [PATCH]  - /allcourses/
    ->To Delete a course (Done only after autherization)        : [DELETE] - /allcourses/
    ->To Get a specific course using ID                         : [GET]    - /allcourses/courseID/

    ->To register for a course(Done only after authorization)   : [POST]   - /regcourses/
    ->To get all the registered courses                         : [GET]    - /regcourses/
    ->To Get a specific course using ID                         : [GET]    - /regcourses/courseID/
    
    ->For a user to sign up                                     : [POST]   - /users/signup/
    ->For a user to log in                                      : [POST]   - /users/login/
    ->To delete a user                                          : [DELETE] - /users/userID/
    
  
## Testing

      You can test this app using POSTMAN 
      
      

