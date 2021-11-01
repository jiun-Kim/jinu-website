import React, { Component } from "react";
import QrReader from "react-qr-scanner";

class QrScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: "100%",
      width: "100%",
    };
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          facingMode="rear"
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }
}

export default QrScanner;
