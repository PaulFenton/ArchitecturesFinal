package service;

public class TaskDetail {

    private final String id;
    private final String name;
    private final String assignedTo;

    public TaskDetail(String id, String name, String assignedTo) {
        this.id = id;
        this.name = name;
        this.assignedTo = assignedTo;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    
    public String getAssignedTo() {
    	return assignedTo;
    }
}