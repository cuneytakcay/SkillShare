import React, { Component } from 'react'
import { Row, Input, Autocomplete, Button } from 'react-materialize'

export default function Post(props) {
    return(
  <div>
    <Row>

    <Input name='group1' type='checkbox' value='iCan' label='iCan' />
    <Input name='group1' type='checkbox' value='iNeed' label='iNeed' />

    </Row>
    <Row>
    <Input s={12} type='select' label="Category" defaultValue='2'>
<option value='Landscaping'>Landscaping</option>
<option value='Home Repair'>Home Repair</option>
<option value='Automotive'>Automotive</option>
<option value='Computer and Technology'>Computer and Technology</option>
<option value='Pet Care'>Pet Care</option>
<option value='Accounting'>Accounting</option>
<option value='Legal'>Legal</option>
<option value='Health and Wellness'>Health and Wellness</option>
<option value='Bicycle Repair'>Bicycle Repair</option>
<option value='Miscellaneous'>Miscellaneous</option>
    </Input> 
    </Row>
    <Row>
    <Input placeholder="Enter Description Here" s={12} label="Description" />
    <Input placeholder="Title" s={12} label="Title" />
    </Row>
    <Row>
    </Row>
    <div>
    <Button>Submit</Button>
    </div>
    </div>
    )
 }
