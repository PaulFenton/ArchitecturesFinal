
package service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.flowable.engine.ProcessEngine;
import org.flowable.engine.ProcessEngineConfiguration;
import org.flowable.engine.RepositoryService;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.TaskService;
import org.flowable.engine.impl.cfg.StandaloneProcessEngineConfiguration;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.task.api.Task;
import org.springframework.stereotype.Service;

@Service
public class FlowableServiceImpl implements FlowableService{
	
	private ProcessEngineConfiguration cfg;
	private ProcessEngine processEngine;
	private RepositoryService repositoryService;
	private RuntimeService runtimeService;
	private ProcessInstance processInstance;
	private TaskService taskService;
	
	public FlowableServiceImpl() {
		this.cfg = new StandaloneProcessEngineConfiguration()
			      .setJdbcUrl("jdbc:h2:mem:flowable;DB_CLOSE_DELAY=-1")
			      .setJdbcUsername("sa")
			      .setJdbcPassword("")
			      .setJdbcDriver("org.h2.Driver")
			      .setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_TRUE);

		this.processEngine = cfg.buildProcessEngine();
		this.repositoryService = this.processEngine.getRepositoryService();
		this.runtimeService = this.processEngine.getRuntimeService();
		this.taskService = this.processEngine.getTaskService();
		
		this.repositoryService.createDeployment().name("testProcess")
        .addClasspathResource("processes/testprocess.bpmn20.xml")
        .deploy();

	}

	@Override
	public String startProcessInstance(Map<String, Object> processInitVariables) {
		// TODO Auto-generated method stub
		this.processInstance = runtimeService.startProcessInstanceByKey("testProcess", processInitVariables);
		
		return this.processInstance.getProcessInstanceId();
	}

	@Override
	public List<TaskDetail> getTasks(String userId) {
		// TODO Auto-generated method stub
		List<Task> tasks = this.taskService.createTaskQuery().taskCandidateOrAssigned(userId).list();
		return parseTaskDetail(tasks);
	}
	
	@Override
	public List<TaskDetail> getAllTasks() {
		List<Task> tasks = this.taskService.createTaskQuery().list();
		return parseTaskDetail(tasks);
	}
	
	@Override
	public String completeTask(String taskId) {
		if(this.taskService.createTaskQuery().list().stream().map(task -> task.getId()).collect(Collectors.toList()).contains(taskId)) {
			taskService.complete(taskId, null);
			return "Marked Task " + taskId + " as Complete!";
		} else {
			return "TaskId=" + taskId + " does not exist :(";
		}
		
		
	}
	
	
	public List<TaskDetail> parseTaskDetail(List<Task> tasks) {
		List<TaskDetail> taskDetails = new ArrayList<TaskDetail>();
		tasks.forEach(task -> taskDetails.add(new TaskDetail(
				task.getId(),
				task.getName(),
				task.getAssignee(),
				task.getDescription(),
				task.getDueDate()
			)));
		return taskDetails;
	}

	@Override
	public List<UserDetail> getCandidateUsers() {
		// hard code the user list for now...
		List<UserDetail> list = new ArrayList<UserDetail>();
		list.add(new UserDetail("Paul", "developer"));
		list.add(new UserDetail("Dario", "developer"));
		list.add(new UserDetail("Johnny", "Appleseed"));
		return list;
	}

}
