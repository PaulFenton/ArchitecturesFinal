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
Navigate to "localhost:8080/test", you should see a string returned

## Using the Back End REST API

* /start   -   this starts the flowable process engine
* /getTasks   -   this returns a list of available tasks
* /completeTask?taskId=2509   -   this completes a task based on a provided taskId parameter
