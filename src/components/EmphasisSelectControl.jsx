import React from "react"

const EmphasisSelectControl = props => {
  return (
    <div className="select">
      <select
        name="group"
        value={props.group}
        onChange={props.handleChange}
        required>
        <option value="">Select an area</option>
        <option value="Accessibility">Accessibility</option>
        <option value="Content Marketing">Content Marketing</option>
        <option value="Data Analysis">Data Analysis</option>
        <option value="Design Sprints">Design Sprints</option>
        <option value="Security">Security</option>
        <option value="SEO/SEM">SEO/SEM</option>
        <option value="A/B Testing">A/B Testing</option>
        <option value="Performance Optimization">
          Performance Optimization
        </option>
        <option value="Research &amp; Development">
          Research &amp; Development
        </option>
      </select>
    </div>
  )
}

export default EmphasisSelectControl
