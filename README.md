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
 C:\Users\goura\OneDrive\Desktop\Full Backend Course\Projects\Notepad-ToDo\public\images\part 1.png

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
 C:\Users\goura\OneDrive\Desktop\Full Backend Course\Projects\Notepad-ToDo\public\images\part 2.png

Routes
  ```sh
  GET / → Renders the main page with a list of tasks
  POST /create → Creates a new task and saves it as a text file

