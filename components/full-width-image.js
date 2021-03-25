import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('./title.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Button = dynamic(() => import('./button.js'));

class FullWidthImage extends Component {
  render() {
    return <div className="FullWidthImage" style={Object.assign(
        {},{backgroundImage: `url("${this.props.image}")`}, this.props.style
      )}>
      <style jsx>{`
        .FullWidthImage {
          text-align: center;
          height: 70vh;
          display: flex;
          padding-top: 10rem;
          justify-content: center;
          flex-direction: column;
          color: #fff;
          background: #0E2F50 center center / cover no-repeat;
          position: relative;
          overflow: hidden;
          margin: 15px 0;
        }
        .black-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .max-width {
          margin: 0 auto;
          width: 36rem;
          max-width: 100%;
          padding: 0 3rem;
          position: relative;
        }
        .button {
          background: #f00;
        }
      `}</style>
    </div>
  }
}

export default FullWidthImage;
