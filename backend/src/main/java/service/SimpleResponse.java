package service;

public class SimpleResponse {
	private String responseText;
	
	public SimpleResponse(String response) {
		this.responseText = response;
	}

	public String getResponseText() {
		return responseText;
	}

	public void setResponseText(String responseText) {
		this.responseText = responseText;
	}
}
