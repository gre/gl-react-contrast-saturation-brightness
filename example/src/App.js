import React, { Component } from "react";
import { Surface } from "gl-react-dom";
import { ContrastSaturationBrightness } from "gl-react-contrast-saturation-brightness";
import "./App.css";

class Field extends Component {
  render() {
    const { label, onChange, value } = this.props;
    return (
      <label>
        <span>{label}</span>
        <input
          type="range"
          min={0}
          max={4}
          step={0.01}
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
        />
        <span>{(value * 100).toFixed(0)}%</span>
      </label>
    );
  }
}

class App extends Component {
  state = {
    contrast: 1,
    saturation: 1,
    brightness: 1
  };
  render() {
    const { contrast, saturation, brightness } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">gl-react-contrast-saturation-brightness</h1>
        </header>
        <div className="App-body">
          <Surface width={500} height={300}>
            <ContrastSaturationBrightness
              contrast={contrast}
              saturation={saturation}
              brightness={brightness}
            >
              https://i.imgur.com/wxqlQkh.jpg
            </ContrastSaturationBrightness>
          </Surface>
          <div>
            <Field
              value={contrast}
              onChange={contrast => this.setState({ contrast })}
              label="contrast"
            />
            <Field
              value={saturation}
              onChange={saturation => this.setState({ saturation })}
              label="saturation"
            />
            <Field
              value={brightness}
              onChange={brightness => this.setState({ brightness })}
              label="brightness"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
