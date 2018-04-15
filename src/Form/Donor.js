import CompanyFields from './CompanyFields.js'
import IndividualFields from './IndividualFields.js'
import DonationFields from './DonationFields.js'
import { Row, Col, Input } from 'react-materialize';
import React, { Component } from 'react';

class Donor extends Component {
    constructor() {
        super();
        this.state = {
            showForm: 1

        }
    }

    handleChange(value) {
        this.setState({
            showForm: value
        });
    }
    handleCompany(e) {
        this.setState({
            showForm: 2
        });
    }

    render() {
        const current = this.state.showForm;
        var form = null;
        switch (current) {
            case 1: //show individual form
                form = (<IndividualFields />);
                break;
            case 2://show company form
                form = (<CompanyFields />);
                break;
            default://don't show form
                form = null;

        }
        return (
            <div>
                <Row >
                    <Col s={4} m={4} l={4} ><h3>Donor Information</h3></Col>
                </Row>
                <div>
                    <Row>
                        <a name='orgType' onClick={(e)=>this.handleChange(1)} >Individual Donation</a>
                        <a name='orgType' onClick={(e)=>this.handleChange(2)}>Organizational Donation</a>
                    </Row>
                </div>
                <Row>
                  <Col s={4}>{form}</Col>
                  <Col s={6}><DonationFields/></Col>

                </Row>

            </div>
        );
    }
}

export default Donor;
