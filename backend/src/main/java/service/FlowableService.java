package service;

import java.util.List;
import java.util.Map;


public interface FlowableService {
	public SimpleResponse startProcessInstance(Map<String, Object> processInitVariables);
	public List<TaskDetail> getTasks(String userId);
	public List<TaskDetail> getAllTasks();
	public SimpleResponse completeTask(String taskId, Map<String, Object> estimate);
	public List<UserDetail> getCandidateUsers();
	public TaskDetail getTaskDetail(String taskId);
	public Estimate getEstimate(String taskId);
	public Estimate getReview(String taskId);
}
