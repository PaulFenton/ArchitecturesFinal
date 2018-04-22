package service;

import java.util.Date;

public class TaskDetail {

    private final String id;
    private final String name;
    private final String assignee;
    private final String description;
    private final Date duedate;

    public TaskDetail(String id, String name, String assignee, String description, Date duedate) {
        this.id = id;
        this.name = name;
        this.assignee = assignee;
        this.description = description;
        this.duedate = duedate;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    
    public String getAssignedTo() {
    	return assignee;
    }
    
    public String getDescription() {
    	return description;
    }
    
    public Date getDueDate() {
    	return duedate;
    }
}