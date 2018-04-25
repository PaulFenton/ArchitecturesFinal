package service;

public class UserDetail {
	private String userId;
	private String description;
	
	public UserDetail(String userId, String description) {
		this.userId = userId;
		this.description = description;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
