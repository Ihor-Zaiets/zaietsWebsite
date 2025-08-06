# Description

The idea of this project is to create an interactable CV. The intended target audience are HRs, who are making the initial
browsing, and technical specialists, who can evaluate my technical skills.

## Setup

1. Download source code. 
2. Make sure, there are no port conflicts on your host machine. Either free app's required ports,
   or change port settings in **docker-compose.yml** file in project root's directory.
    1. Backend hosts on port <code>8080</code>
    2. Frontend hosts on port <code>4200</code>
    3. Database hosts on port <code>5435</code>
3. <code>cd</code> into project's root directory where **docker-compose.yml** file is located 
   and run <code>docker compose up</code>. It will create 3 container for backend, frontend and database with restart policy
   <code>unless-stopped</code>.
4. You can now access website at <code>localhost:4200</code>
