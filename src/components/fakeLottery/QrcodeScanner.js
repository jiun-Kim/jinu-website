import React, { Component } from "react";
import QrReader from "modern-react-qr-reader";

class QrScanner extends Component {
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          facingMode={"environment"}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default QrScanner;
