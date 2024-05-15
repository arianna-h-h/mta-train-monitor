# README

### Project goal:
Create a small application to allow a user to look up train arrival data through the Washington Area Metro Transit Authority API

### Instructions: 
1. Create `.env` file using API key from WMATA.  
2. Run install and start scripts
```
cd project
chmod +x install.sh && ./install.sh
chmod +x start.sh && ./start.sh
```
I chose to use a script to start the servers in order to be more extensible with config, etc by being outside the npm scope. There are advatanges disadvantages to both approaches. 

### Process:
1. Review instructions
2. Review WMATA API
3. Decide to use Node.js and React
4. Create directory structure
    * backend directory
    * frontend directory
5. Develop backend
6. Run and test backend manually on port 8000
    * Mock out some tests
7. Draw sketch on paper of frontend components
8. Develop frontend
    * Start with create-react-app
    * Create App.js
    * Create other components
9. Manually test frontend and backend together in the browser

### Possible extentions:
1. Add UI styling
2. Write front end tests with unit tests, snapshots, etc
3. Allow users to save their home station
    * Add user auth and database
4. Hook into other APIs from WMATA like bus predictions or rail station info




