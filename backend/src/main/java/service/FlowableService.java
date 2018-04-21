package service;

import java.util.List;


public interface FlowableService {
	public String start();
	public List<TaskDetail> getTasks(String userId);
	public String completeTask(String taskId);
}
