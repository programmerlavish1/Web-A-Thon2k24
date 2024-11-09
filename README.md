
 functional solution to refine captcha

 UIDAI Portal Bot Detection System : 

*Project Overview*

The UIDAI Portal Bot Detection System is designed to enhance security on the Aadhaar portal by distinguishing between human users and bots through passive detection techniques. By analyzing behavioral cues, such as mouse movement, click patterns, and session activity, this system helps prevent unauthorized bot access to Aadhaar resources without relying on intrusive CAPTCHA systems.

*Table of Contents*

Features    
Installation
Usage
Project Structure
Demo
Tech Stack
Future Enhancements
Contributing
License


*Features*

Passive Bot Detection: Analyzes user behaviors, like mouse movement patterns, to distinguish bots from humans.
Intuitive Login and Registration Pages: User-friendly interfaces for UIDAI portal login and registration.
Data Persistence: Stores user data locally for session continuity.
Security and Privacy: Protects user data and maintains session integrity.


*Installation*
Clone this repository:

bash
Copy code
git clone https://github.com/programmerlavish1/Web-A-Thon2k24.git
cd UIDAI-Bot-Detection
Install dependencies:

react: => For building the user interface ("react": "^18.2.0")
react Router DOM: => "react-router-dom" ("^6.4.0")
Axios: => "axios" ("^1.3.0")

*Styling Dependencies*

Tailwind CSS => For utility-first styling ("tailwindcss": "^3.2.0)

Express: => for backend server ("express": "^4.18.2")
Body-Parser : => For parsing incoming request bodiesF ("body-parser": "^1.20.1")
Cors: => For handling Cross-Origin Resource Sharing (if frontend and backend are on different servers) ("cors": "^2.8.5")
PostCSS and Autoprefixer: Used with Tailwind CSS.("postcss": "^8.4.6",
"autoprefixer": "^10.4.1")
package.json dependencies => "dependencies": {
  "react": "^18.2.0",
  "react-router-dom": "^6.4.0",
  "axios": "^1.3.0",
  "tailwindcss": "^3.2.0",
  "express": "^4.18.2",
  "body-parser": "^1.20.1",
  "cors": "^2.8.5"
},
"devDependencies": {
  "postcss": "^8.4.6",
  "autoprefixer": "^10.4.1"
}



bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Run the backend server (ensure backend API is accessible if necessary):

bash
Copy code
node server.js


*Usage*

Registration Page:

Users provide a username, password, and an Aadhaar photo URL to register.
Login Page:
Users must pass a passive CAPTCHA by random mouse movements to prove human behavior.
After successful verification, users can access the portal.

Home Page:

Displays user information and Aadhaar photo if verification and login are successful.


*Project Structure*

HomePage Component (HomePage.js): Displays user information and Aadhaar photo if available.
LoginPage Component (LoginPage.js): Manages login form and passive CAPTCHA verification using mouse movement data.
MouseTracking Component (MouseTracking.js): Captures and verifies mouse movement patterns.
UserForm Component (UserForm.js): Handles user registration with username, password . 


*Demo*
![image1](https://github.com/user-attachments/assets/f4ca2378-b2e4-4e92-8aad-607b9e4254ba)
![image2](https://github.com/user-attachments/assets/db951b3d-cb0d-4d0a-8377-7a5a86036f9e)
![image3](https://github.com/user-attachments/assets/0c9a2671-67de-42cf-8812-872ac9571016)# Web-a-thon2k24
![U![image4](https://github.com/user-attachments/assets/3d17f97f-d33e-44fe-b26a-73ff5b21bd18)
![image3](https://github.com/user-attachments/assets/1c752557-9127-4a43-b75f-cb21820c1a31)
![image5](https://github.com/user-attachments/assets/19017dab-9f83-4511-bfdb-0abb536928ef)




Frontend: React, Tailwind CSS for UI design.
Backend: Node.js with Express for handling API calls (assumed).
Verification: Machine learning model for bot detection.
Future Enhancements
Integrate ML model with live data to improve bot detection accuracy.
Add database storage for long-term user session tracking and behavior analysis.
Implement advanced authentication mechanisms like OTP-based verification.
Contributing
Contributions are welcome! To contribute:

*Fork the repository*

Create a new branch for your feature.
Submit a pull request describing the enhancements.

*License*
Distributed under the MIT License. See LICENSE for more information.
