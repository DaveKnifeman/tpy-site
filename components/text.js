import React, { Component } from 'react';

class Text extends Component {
  render() {
    return <div className="Text" style={Object.assign({}, {
      color: this.props.color == 'white' ? '#fff' : '#0F2247'
    }, this.props.style)}>
      {this.props.children}
      <style jsx>{`
        .Text {
          font-family: "Montserrat", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: left;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  }
}

export default Text;
