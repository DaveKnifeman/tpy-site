import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import config from "../config/config";

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
    fetch(`${config.apiUrl}/newsletter/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.EMAIL,
        fname: this.state.FNAME,
        lname: this.state.LNAME,
        cname: this.state.CNAME
      })
    }).then(function(data) {
      alert('Done! See you soon at Technology Park Ypenburg.')
      self.refs.form.reset()
    }).catch(function(error) {
      console.log('Something went wrong while subscribing.')
    });
    return false;
  }
  render() {
    let enabledFields = [
      'EMAIL',
      'FNAME',
      'LNAME',
      'CNAME'
    ];
    return <div className="ContactForm flex">
      <div className="flex-1 form">
        <p className="intro-text">
          {this.props.introText}
        </p>
        <form onSubmit={(e) => this.submitForm(e)} ref="form">
          {enabledFields.indexOf('EMAIL') >= 0 && <input required type="email" name="EMAIL" placeholder="Email" onChange={this.handleChange} />}
          {enabledFields.indexOf('FNAME') >= 0 && <input required type="text" name="FNAME" placeholder="First name" onChange={this.handleChange} />}
          {enabledFields.indexOf('LNAME') >= 0 && <input type="text" name="LNAME" placeholder="Surname" onChange={this.handleChange} />}
          {enabledFields.indexOf('CNAME') >= 0 && <input type="text" name="CNAME" placeholder="Company" onChange={this.handleChange} />}
          <div align="right">
            <Button type="submit">
              subscribe
            </Button>
          </div>
        </form>
      </div>
      <div className="flex-1 address">
        <p hidden>
          <img src="/static/pages/newsletter/page-header.jpg" alt="2019: THT OPENING EN HACKATON - © sacha grootjans" />
        </p>
        <p className="paragraph">
          Technology Park Ypenburg<br />
          <a href="https://www.openstreetmap.org/node/2599747462" target="_blank" rel="external noopener">Laan van Ypenburg 108</a><br />
          2497 GC The Hague<br />
          The Netherlands
        </p>
      </div>
      <style jsx>{`
        .ContactForm p {
          color: #0f2247;
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }
        img {
          display: block;
          max-width: 100%;
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
        @media(min-width: 480px) {
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
