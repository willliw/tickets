import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table, Button } from 'reactstrap';
import { injectIntl } from 'react-intl'
import { Container } from 'reactstrap';
import SectionHeader from './SectionHeader';
import Logo from './assets/logo.png';

class Home extends Component {
  render () {
    const intl = this.props.intl
    return (
      <div>
        <SectionHeader>
          <img
            className="align-middle d-inline-block"
            src={Logo}
            width="100"
            alt="Taipei Ethereum Meetup Logo"
            style={{
              marginBottom: '24px',
            }}
          />
          <h2>{intl.formatMessage({ id: 'eventTitle' })}</h2>
          <p>{intl.formatMessage({ id: 'eventDescription' })}</p>
          <Button tag={Link} to="/register" color="primary" size="lg">{intl.formatMessage({ id: 'Register' })}</Button>
        </SectionHeader>
        <Container className='py-3'>
          <p>{intl.formatMessage({ id: 'eventPayment' })}</p>
          <p>{intl.formatMessage({ id: 'eventDate' })}</p>
          <Table>
            <thead>
              <tr>
                <th>{intl.formatMessage({ id: 'Time' })}</th>
                <th>{intl.formatMessage({ id: 'Topic' })}</th>
                <th>{intl.formatMessage({ id: 'Guests' })}</th>
                <th>{intl.formatMessage({ id: 'Host' })}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19:00 - 19:30</td>
                <td>Networking</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>19:30 - 20:10</td>
                <td>Panel 1: Sharding Clients</td>
                <td>TBD</td>
                <td><a href="https://twitter.com/karl_dot_tech" target="_blank" rel="noopener noreferrer">Karl Floersch</a></td>
              </tr>
              <tr>
                <td>20:10 - 20:25</td>
                <td>Break</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>20:25 - 21:05</td>
                <td>Panel 2: Ethereum Research Work</td>
                <td>TBD</td>
                <td><a href="https://twitter.com/karl_dot_tech" target="_blank" rel="noopener noreferrer">Karl Floersch</a></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default injectIntl(Home);
