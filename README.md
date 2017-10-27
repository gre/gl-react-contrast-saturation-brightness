# gl-react-contrast-saturation-brightness ![](https://img.shields.io/npm/v/gl-react-contrast-saturation-brightness.svg) ![](https://img.shields.io/badge/gl--react-~2.1-05F561.svg) ![](https://img.shields.io/badge/gl--react-dom%20%7C%20native-f90.svg)

[Universal](https://projectseptemberinc.gitbooks.io/gl-react/content/docs/universal.html) gl-react **contrast-saturation-brightness effect**.

## Props

- `children` **(required)**: the content to contrast-saturation-brightness.
- `contrast`: positive number.
- `saturation`: positive number. values from 0.0 (grayscale) to 1.0 (identity) produces a color desaturation. Values higher than 1.0 produce a color saturation.
- `brightness`: positive number.

> in `contrast`, `saturation`, `brightness` props, 0.0 means 0% and 1.0 means 100%.

## Usage Examples

```js
var ContrastSaturationBrightness = require("gl-react-contrast-saturation-brightness").ContrastSaturationBrightness;
// or
import {ContrastSaturationBrightness} from "gl-react-contrast-saturation-brightness";
```

### Grayscale

```html
<ContrastSaturationBrightness saturation={0.0}>...</ContrastSaturationBrightness>
```

### Some contrast and brightness

```html
<ContrastSaturationBrightness contrast={1.4} brightness={1.2}>...</ContrastSaturationBrightness>
```
