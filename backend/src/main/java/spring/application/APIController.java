package spring.application;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.flowable.task.api.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {
	
	@Autowired
	FlowableService flowableService;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/test")
    public String test() {
        return "test route";
    }
    
    @RequestMapping("/start")
    public String startProcessEngine() {
    	String pId = flowableService.start();
    	
    	return "Created process with id: " + pId;
    }
    
    @RequestMapping("/getTasks")
    public List<TaskDetail> getTasks() {
    	//List<TaskDetail> taskList = new ArrayList<TaskDetail>();
    	List<TaskDetail> taskList = flowableService.getTasks();
    	return taskList;
    }
    
    @RequestMapping("/completeTask")
    public String completeTask(@RequestParam("taskId") String taskId) {
    	String result = flowableService.completeTask(taskId);
    	return result;
    }
}
