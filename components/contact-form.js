import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import * as R from 'ramda';

const Button = dynamic(() => import('./button.js'));
const Map = dynamic(() => import('./map.js'));

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.state[e.target.name] = e.target.value;
    this.forceUpdate();
  }
  submitForm(e) {
    const self = this;
    if(e) e.preventDefault();

    fetch('/api/mail/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        tel: this.state.tel,
        website: this.state.website,
        type: this.state.type,
        eventDate: this.state.eventDate,
        eventExpectedRsvps: this.state.eventExpectedRsvps,
        message: this.state.message
      })
    }).then(function() {
      alert('Thank you for your email!')
      self.refs.form.reset()
    });
    return false;
  }
  render() {
    let enabledFields, pageConfig = {
      showMap: true,
      showAddress: true
    }
    switch(this.props.type) {
      case 'join-community':
        enabledFields = [
          'name',
          'company',
          'email',
          'tel',
          'website',
          'type',
          'message'
        ]
        pageConfig.showMap = false;
        pageConfig.showAdress = false;
        break;
      case 'host-event':
        enabledFields = [
          'name',
          'company',
          'email',
          'tel',
          'eventDate',
          'eventExpectedRsvps',
          'message'
        ]
        break;
      default:
        enabledFields = [
          'name',
          'email',
          'tel',
          'message'
        ]
    }
    return <div className="ContactForm flex">
      <div className="flex-1 form">
        <p className="intro-text">
          {this.props.introText}
        </p>
        <form onSubmit={(e) => this.submitForm(e)} ref="form">
          {enabledFields.indexOf('type') >= 0 && <div>
            <label>I'm interested in joining the community by </label>
            <select name="type" onChange={this.handleChange}>
              {R.map((type) => {
                return <option key={type} value={type}>{type}</option>
              }, [
                '',
                'becoming a member',
                'using a workspace',
                'hosting an event',
                'working on a co-create project',
                'other',
              ])}
            </select>
          </div>}
          {enabledFields.indexOf('name') >= 0 && <input required type="text" name="name" placeholder="Name" onChange={this.handleChange} />}
          {enabledFields.indexOf('company') >= 0 && <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />}
          {enabledFields.indexOf('email') >= 0 && <input required type="email" name="email" placeholder="Email" onChange={this.handleChange} />}
          {enabledFields.indexOf('tel') >= 0 && <input type="tel" name="tel" placeholder="Phone number" onChange={this.handleChange} />}
          {enabledFields.indexOf('website') >= 0 && <input type="text" name="website" placeholder="Your website" onChange={this.handleChange} />}
          {enabledFields.indexOf('eventDate') >= 0 && <input type="date" name="eventDate" placeholder="Date of event" onChange={this.handleChange} />}
          {enabledFields.indexOf('eventExpectedRsvps') >= 0 && <select>
            {R.map((rsvpRange) => {
              return <option key={rsvpRange} value={rsvpRange}>{rsvpRange}</option>
            }, [
              '10-50',
              '50-100',
              '100-200',
              '200-500',
              'other',
            ])}
          </select>}
          {enabledFields.indexOf('message') >= 0 && <textarea name="message" placeholder="Message" onChange={this.handleChange}></textarea>}
          <div align="right">
            <Button type="submit">
              send message
            </Button>
          </div>
        </form>
      </div>
      <div className="flex-1 address">
        {pageConfig.showMap && <div style={{margin: '24px 0'}}>
          <Map />
        </div>}
        {pageConfig.showMap && <div>
          <p className="paragraph">
            Technology Park Ypenburg<br />
            <a href="https://www.google.com/maps/place/Technology+Park+Ypenburg/@52.042522,4.3526007,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b7f39f75f887:0xc779b2518cc28f12!8m2!3d52.042522!4d4.3547894?hl=en" target="_blank" rel="external noopener">Laan van Ypenburg 108</a><br />
            2497 GC The Hague<br />
            The Netherlands
          </p>
          <p className="paragraph">
            TPY is conveniently located between The Hague and Delft, right next to the A4 and close to the <a href="https://www.htm.nl/halte/laan-van-ypenburg" target="_blank" rel="external">Laan van Ypenburg</a> tram- and bus stop (tram 15 & bus 30). We also have plenty of free parking facilities at our park!
          </p>
        </div>}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <style jsx>{`
        .ContactForm {
        }
        .ContactForm p {
          color: #0f2247;
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }
        .intro-text {
          color: #0f2247;
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .flex-1 {
          flex: 1;
        }
        .form, .address {
          width: 48%;
        }
        @media (max-width: 600px) {
          .flex {
            display: block;
          }
          .form, .address {
            width: unset;
          }
        }
        .form {
          margin-bottom: 26px;
        }
        .form label {
          color: #0f2247;
          font-family: "Montserrat", sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 32px;
        }
        .ContactForm input[type="text"],
        .ContactForm input[type="email"],
        .ContactForm input[type="date"],
        .ContactForm input[type="tel"],
        .ContactForm select,
        .ContactForm textarea {
          color: #0f2247;
          font-family: "Montserrat", sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border: none;
          display: block;
          margin: 24px 0;
          width: 100%;
          padding: 0 8px;
        }
        .ContactForm textarea {
          padding: 6px 8px;
          height: 200px;
        }
        .address .paragraph {
          color: #0f2247;
          font-family: "Montserrat", sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 32px;
        }
        @media(min-width: 600px) {
          .address {
            margin: 0 0 0 34px;
          }
        }
        .address a {
          color: #0f2247;
        }
      `}</style>
    </div>
  }
}

export default ContactForm;
