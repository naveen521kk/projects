---
title: "SJCE Feedback Site - A feedback collecting and reporting platform for my college"
summary: "Modern web application for collecting student feedback on courses and teachers, generating performance reports, and providing valuable insights to stakeholders."
date: "Jun 03 2022"
draft: false
tags:
- Full-Stack Development
- Next.js
- FastAPI
- Docker
- Python
- React
- Material-UI (MUI)
- MySQL
- REST API
- DevOps
demoUrl: https://feedback.stjosephs-engg.cc/
---

## Project Description
The Feedback Site for SJCE was developed to replace an outdated, slow, and difficult-to-maintain feedback system. The new site allows students to submit feedback on professors and generates comprehensive reports on departmental and teacher performance. The project aimed to create a secure, scalable, and user-friendly platform that provides valuable insights to stakeholders.

## Project Objective & Scope
The primary objectives of the feedback site were:
- Enable students to submit feedback on courses and teachers.
- Allow administrators to monitor feedback data, filter it by various criteria, and generate performance reports.
- Ensure the site is secure, scalable, and easy to use.

## Tech Stack
- **Front-end**: Next.js, React, Material-UI
- **Back-end**: FastAPI, MySQL, Pydantic
- **Containerization**: Docker
- **Authentication & Security**: JWT, bcrypt, HTTPS, CORS

## Key Features
### Seamless Feedback Submission
- Dynamic feedback forms adapt to the user's role and department.
- Feedback is validated and stored in the database.

### Comprehensive Monitoring by Admin and HOD
- Admins can filter feedback data by department, course, teacher, rating, etc.
- View statistics like average ratings and number of feedbacks.
- Generate reports in PDF or Excel format.

### Performance Calculation and Report Generation
- Performance scores calculated using a weighted average formula.
- Reports include performance scores, summaries, and comments.
- Reports available for download in PDF or Excel format.

## Technical Challenges
### Designing the Database Schema
- Designing a schema that ensures data integrity and consistency.
- Tools: MySQL Workbench

### Creating API Routes
- Defining parameters, data models, validation rules, and response formats.
- Documenting API routes using Swagger UI.

### Containerizing and Deploying the Application
- Creating Dockerfiles and docker-compose file for front-end and back-end.
- Setting up environment variables, network settings, and port mappings.

## Deployment and Hosting
- **Server Setup**: Ubuntu OS, network settings, firewall rules, SSH access.
- **Docker Installation**: Verifying Docker and docker-compose installations.
- **Running the Site**: Configuring environment variables and running docker-compose to build and run the site.

## Improvements and Future Scope
### What Was Improved
- Enhanced usability and security.
- Scalable architecture for future growth.
- Real-time performance monitoring and reporting.

### Future Enhancements
- Add more feedback categories and criteria (e.g., events, clubs).
- Introduce more performance metrics and visualizations (e.g., histograms, pie charts).

## Customer Satisfaction
The feedback site has been well-received by students, faculty, and administrators at SJCE. It has streamlined the feedback process, provided actionable insights, and contributed to improving the quality of education.

## Conclusion
The Feedback Site for SJCE is a robust and scalable solution that facilitates user feedback submission, admin monitoring, and performance calculation. Built with a modern tech stack, it ensures security and usability. The site is a successful project with potential for future enhancements.

**Contact Information**
For any questions, comments, or feedback, please feel free to contact me. Thank you for your time and attention. 😊

---

**Demo Video**
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZzalJL4h4Xg?si=ydw76_uLXFw1DcT_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>