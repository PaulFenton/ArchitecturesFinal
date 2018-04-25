package service;

import java.util.List;
import java.util.Map;


public interface FlowableService {
	public String startProcessInstance(Map<String, Object> processInitVariables);
	public List<TaskDetail> getTasks(String userId);
	public List<TaskDetail> getAllTasks();
	public String completeTask(String taskId);
	public List<UserDetail> getCandidateUsers();
}
