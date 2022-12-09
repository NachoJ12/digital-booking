package com.grupo9.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="product")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Column(columnDefinition="TEXT")
    private String description;

    @Column(columnDefinition="TEXT")
    private String short_description;
    private boolean active;
    private String address;
    private String latitude;
    private String longitude;
    private String area;
    private Double average_score ;

    @ManyToOne
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    private City city;

    @OneToMany (mappedBy = "product", cascade = CascadeType.ALL)
    //@JsonIgnore
    private List<Image> image;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "site_policies")
    private String policiesSite;
    @Column(name = "hse_policies" )
    private String policiesSecurityAndHealth;
    @Column(name= "cancellation_policies")
    private String policiesCancellation;

    //@OneToMany (mappedBy = "product", cascade = CascadeType.ALL)
    //@JsonIgnore
    //private List<ProductAttribute> attributes;

    @ManyToMany(cascade={CascadeType.MERGE})
    @JoinTable(name="product_spec", joinColumns=@JoinColumn(name="id_product"),
            inverseJoinColumns=@JoinColumn(name="id_spec"))
    private List <ProductAttribute> attributes;

    public Product() {
    }

   /* public Product(Integer id, String name, String description, String short_description, boolean active, String address, String latitude, String longitude, String area, Double average_score, City city, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.short_description = short_description;
        this.active = active;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.area = area;
        this.average_score = average_score;
        this.city = city;
        this.category = category;
    }*/

    /*public Product(Integer id, String name, String description, String short_description, boolean active, String address, String latitude, String longitude, String area, Double average_score, City city, Category category, String policiesSite, String policiesSecurityAndHealth, String policiesCancellation) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.short_description = short_description;
        this.active = active;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.area = area;
        this.average_score = average_score;
        this.city = city;
        this.category = category;
        this.policiesSite = policiesSite;
        this.policiesSecurityAndHealth = policiesSecurityAndHealth;
        this.policiesCancellation = policiesCancellation;
    }*/

    public Product(Integer id, String name, String description, String short_description, boolean active, String address, String latitude, String longitude, String area, Double average_score, City city, Category category, String policiesSite, String policiesSecurityAndHealth, String policiesCancellation, List<ProductAttribute> attributes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.short_description = short_description;
        this.active = active;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.area = area;
        this.average_score = average_score;
        this.city = city;
        this.category = category;
        this.policiesSite = policiesSite;
        this.policiesSecurityAndHealth = policiesSecurityAndHealth;
        this.policiesCancellation = policiesCancellation;
        this.attributes = attributes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Double getAverage_score() {
        return average_score;
    }

    public void setAverage_score(Double average_score) {
        this.average_score = average_score;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Image> getImage() {
        return image;
    }

    public void setImage(List<Image> image) {
        this.image = image;
    }

    public String getPoliciesSite() {
        return policiesSite;
    }

    public void setPoliciesSite(String policiesSite) {
        this.policiesSite = policiesSite;
    }

    public String getPoliciesSecurityAndHealth() {
        return policiesSecurityAndHealth;
    }

    public void setPoliciesSecurityAndHealth(String policiesSecurityAndHealth) {
        this.policiesSecurityAndHealth = policiesSecurityAndHealth;
    }

    public String getPoliciesCancellation() {
        return policiesCancellation;
    }

    public void setPoliciesCancellation(String policiesCancellation) {
        this.policiesCancellation = policiesCancellation;
    }

    public List<ProductAttribute> getAttributes() {
        return attributes;
    }

    public void setAttributes(List<ProductAttribute> attributes) {
        this.attributes = attributes;
    }
}
