package service;

public class LineItem  {
	private String id;
	private String name;
	private String category;
	private String description;
	private Number cost;
	
	public LineItem(String id, String name, String category, String description, Number cost) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.description = description;
		this.cost = cost;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Number getCost() {
		return cost;
	}
	public void setCost(Number cost) {
		this.cost = cost;
	}
	
	@Override
	public String toString() {
		return "LineItem [id=" + id + ", name=" + name + ", category=" + category + ", description=" + description
				+ ", cost=" + cost + "]";
	}
	
}
