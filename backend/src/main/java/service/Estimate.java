package service;

import java.util.Arrays;
import java.util.List;

public class Estimate {
	private String title;
	private String description;
	private List<LineItem> costs;
	private Number total;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<LineItem> getCosts() {
		return costs;
	}
	public void setCosts(List<LineItem> costs) {
		this.costs = costs;
	}
	public Number getTotal() {
		return total;
	}
	public void setTotal(Number total) {
		this.total = total;
	}
	
	@Override
	public String toString() {
		return "Estimate [title=" + title + ", description=" + description + ", costs=" + costs.toString()
				+ ", total=" + total + "]";
	}

}
