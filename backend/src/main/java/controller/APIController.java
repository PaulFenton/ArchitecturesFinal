package controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import service.FlowableService;
import service.TaskDetail;
import service.UserDetail;

@RestController
public class APIController {
	
	@Autowired
	FlowableService flowableService;

    @RequestMapping("/test")
    public String test() {
        return "controller works!";
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/startProcessInstance")
    public String startProcessInstance(@RequestBody Map<String, Object> initialTask) {
    	// check the body request
    	if(initialTask.get("name").equals(null)) {
    		return "Missing task name.";
    	} if(initialTask.get("assignee").equals(null)) {
    		return "Missing task assignee.";
    	} if(initialTask.get("description").equals(null)) {
    		return "Missing task description.";
    	}
    	String pId = flowableService.startProcessInstance(initialTask);
    	
    	return "Created process with id: " + pId;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/getTasks/{userId}")
    public List<TaskDetail> getTasks(@PathVariable String userId) {
    	List<TaskDetail> taskList = flowableService.getTasks(userId);
    	return taskList;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/getAllTasks")
    public List<TaskDetail> getAllTasks() {
    	List<TaskDetail> taskList = flowableService.getAllTasks();
    	return taskList;
    }    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/completeTask/{taskId}")
    public String completeTask(@PathVariable String taskId) {
    	String result = flowableService.completeTask(taskId);
    	return result;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/getCandidateUsers")
    public List<UserDetail> getCandidateUSers() {
    	List<UserDetail> userList = flowableService.getCandidateUsers();
    	return userList;
    }
}
