package spring.application;

import java.util.List;


public interface FlowableService {
	public String start();
	public List<TaskDetail> getTasks();
	public String completeTask(String taskId);
}
