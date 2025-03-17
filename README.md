# Task Manager Web App
____________________________________________________________________________________________________

A simple web application built with Node.js, Express, and EJS that allows users to create and view tasks. Tasks are stored as text files in the files directory.

Features

🎯 Create tasks with a title and details <br>
🎯 View a list of all created tasks<br>
🎯 Uses Express.js for backend<br>
🎯 Uses EJS for rendering dynamic content<br>
🎯 Uses Tailwind CSS for styling with external CSS<br>

Technologies Used

🎯 Node.js (Server-side runtime)<br>
🎯 Express.js (Backend framework)<br>
🎯 EJS (Templating engine)<br>
🎯 Tailwind CSS (Styling, now in public/stylesheets/styles.css)<br>
🎯 File System (fs) (For storing tasks as text files)<br>


Screenshot:
 ![part 1](https://github.com/user-attachments/assets/66dfe487-88a0-40bd-b781-55a13cba9275)


Installation & Setup:-

1. Clone the repository:
   ```sh
   https://github.com/GouravSinghDosad/Simple-To-Do-List-App.git

2. Install dependencies:
   ```sh
   npm install

3. If using nodemon:
   ```sh
   nodemon index.js

4. Open the app in the browser:
   ```sh
   http://localhost:3000

Project Structure:
 ![part 2](https://github.com/user-attachments/assets/1a71211b-8647-400f-94f5-79fdb7f63393)


Routes
  ```sh
  GET / → Renders the main page with a list of tasks
  POST /create → Creates a new task and saves it as a text file

