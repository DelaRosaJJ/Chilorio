/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.braziljs.loiane.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.codehaus.jackson.annotate.JsonAutoDetect;

/**
 *
 * @author javier
 */
@JsonAutoDetect
@Entity
@Table(name = "REGIONS")
public class Regions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REGIONS_ID")
    private Long id;
    @Column(name = "REGIONS_CODE",nullable = false)
    private String regioncode;
    @Column(name="REGIONS_DESCRIPTION",nullable=false)
    private String description;
    @Column(name="REGIONS_LASTUPDATE",nullable=false)
    private String LastUpdate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the regioncode
     */
    public String getRegioncode() {
        return regioncode;
    }

    /**
     * @param regioncode the regioncode to set
     */
    public void setRegioncode(String regioncode) {
        this.regioncode = regioncode;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the LastUpdate
     */
    public String getLastUpdate() {
        return LastUpdate;
    }

    /**
     * @param LastUpdate the LastUpdate to set
     */
    public void setLastUpdate(String LastUpdate) {
        this.LastUpdate = LastUpdate;
    }

   
    
}
