package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import service.FlowableService;
import service.TaskDetail;

@RestController
public class APIController {
	
	@Autowired
	FlowableService flowableService;

    @RequestMapping("/test")
    public String test() {
        return "controller works!";
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/start")
    public String startProcessEngine() {
    	String pId = flowableService.start();
    	
    	return "Created process with id: " + pId;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/getTasks/{userId}")
    public List<TaskDetail> getTasks(@PathVariable String userId) {
    	List<TaskDetail> taskList = flowableService.getTasks(userId);
    	return taskList;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/completeTask")
    public String completeTask(@RequestParam("taskId") String taskId) {
    	String result = flowableService.completeTask(taskId);
    	return result;
    }
}
