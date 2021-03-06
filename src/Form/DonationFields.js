import React, { Component } from 'react';
import { Card, Row, Input, Col, Button, Icon} from 'react-materialize';

class DonationFields  extends Component {
  render() {
    return (
    <Card className="form-card-donation" title= 'Donation Information'>
        <Row>
            <Input placeholder="Donation Details" s={12} label="Donation Details" />
            <Input s={3} type='select' label="Donation Category">
                <option value='Clothing'>Clothing</option>
                <option value='Electronics'>Electronics</option>
                <option value='Furniture'>Furniture</option>
                <option value='Appliances'>Appliances</option>
                <option value='Athletic Equipment'>Athletic Equipment</option>
                <option value='Hygene Products'>Hygene Products</option>
                <option value='Tickets'>Tickets</option>
                <option value='School Supplies'>School Supplies</option>
                <option value='Other'>Other</option>
            </Input>

            <Input s={3} type='select' label="Item Type">
                <option value='1'>Item Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </Input>

            <Input s={3} label="Qty"/>
            <Input s={3} label="Fair Market $"/>
            <Input s={3} name='on' type='date' label="Available Date" onChange={function(e, value) {}} />
            <Input s={3} name='on' type='date' label="End Date" onChange={function(e, value) {}} />
            <Input s={3} type='select' label="Condition">
                <option value='1'>Donation Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </Input>
            <Input s={3} type='select' label="Delivery/Pick up">
                <option value='1'>Item Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </Input>
            <Row><Col s={3}><Button left>Upload Picture</Button></Col></Row>

            <Row><Col s={8}><Icon small>plus_one</Icon><p>Add another donation</p></Col></Row>
            <Row><Col s={9}><Input placeholder="$xxxxxx.yy" s={12} label="Total Donation Faie Market Value" /></Col><Col s={3}><Button>Submit</Button></Col></Row>
        </Row>
    </Card>
    );
  }
}

export default DonationFields;
