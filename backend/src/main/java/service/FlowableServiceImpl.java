
package service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.flowable.engine.HistoryService;
import org.flowable.engine.ProcessEngine;
import org.flowable.engine.ProcessEngineConfiguration;
import org.flowable.engine.ProcessEngines;
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
	private HistoryService historyService;
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
		this.historyService = this.processEngine.getHistoryService();
		this.taskService = this.processEngine.getTaskService();
		
		this.repositoryService.createDeployment().name("testProcess")
        .addClasspathResource("processes/testprocess.bpmn20.xml")
        .deploy();

	}

	@Override
	public String start() {
		// TODO Auto-generated method stub
		this.processInstance = runtimeService.startProcessInstanceByKey("testProcess");
		
		return this.processInstance.getProcessInstanceId();
	}

	@Override
	public List<TaskDetail> getTasks(String userId) {
		// TODO Auto-generated method stub
		List<Task> tasks = this.taskService.createTaskQuery().taskCandidateOrAssigned(userId).list();
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
				task.getAssignee()
			)));
		return taskDetails;
	}

}
