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

* /start   -   this starts the flowable process engine
* /getTasks   -   this returns a list of available tasks
* /completeTask?taskId=2509   -   this completes a task based on a provided taskId parameter

## Running the Front End Locally:

Install prerequisites on your path:
* NodeJS
* Angular CLI (run npm install -g @angular/cli)

Open terminal and cd to the /frontend directory and run the following commands:
```
npm install
ng serve
```
Navigate to "localhost:4200", you should see "welcome to frontend!"
