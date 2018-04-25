# Architectures Final Project

## Running the Back End Locally:

Install prerequisites on your path: 
* Java 8 (JRE/JDK)
* Maven

Open terminal and cd to the /backend directory of this repo, then run the commands to build & start:

```
mvn clean install -U
mvn spring-boot:run
```
Navigate to "localhost:8080/test", you should see "welcome to backend!"

## Using the Back End REST API

* /startProcessInstance   -   this post request starts a process instance for an estimation/approval task. The body needs to include the following data:
```
  {
    "name": "Estimate Request",
    "assignee": "Dario",
    "description": "test estimate request description",
    "duedate": "2018-04-27",
    "approver": "Paul"
  }
```

* /getTasks/{userId}   -   this returns a list of available tasks for a user
```
  localhost:8080/getTasks/Paul
```

* /getAllTasks    -   this returns all tasks currently in the system

* /getTaskDetails/{taskId}   - this gets task information for a specific task

* /completeTask/{taskId}   -   this post request completes a task based on a provided taskId parameter
```
  localhost:8080/completeTask/2514
```
The body for /complete task should look like:
```
{
      "title": "testTitle",
      "description": "test desc",
      "costs": [
      	{
      		"id": 1, 
	      	"name": "Item name...", 
	      	"category": "Engineering", 
	      	"description": "right click to add rows...", 
	      	"cost": 0.0
      	},{
      		"id": 2, 
	      	"name": "Item name...", 
	      	"category": "Engineering", 
	      	"description": "right click dsdsto add rows...", 
	      	"cost": 1.2
      	}],
      "total": 1000
	
}
```

## Running the Front End Locally:

Install prerequisites on your path:
* NodeJS
* Angular CLI (run npm install -g @angular/cli)

Open terminal and cd to the /frontend directory and run the following commands:
```
npm install
ng serve
```
Navigate to "localhost:4200", you should see the app dashboard
