# LFO++

[[img|modules/images/LFOpp_frontpanel.png|200]]

[[https://www.tindie.com/products/fauxcyrillic/lfo/ | View Product Page]]

[[https://github.com/fauxcyrillic/LFO-plus-plus | Open source]]

A two channel LFO generator with advanced features, including eight waveforms, depth and offset controls, and CV rate control.

Module power consumption: 12mA

## Inputs

* **1** - CV control of LFO 1 rate (when rate switch is set to CV)
* **2** - CV control of the rate of LFO 2

## Outputs
* **1** - output of LFO 1
* **INV** - inverted version of LFO 1
* **2** - output of LFO 2
* **INV** - inverted version of LFO 2


## Controls

* **Rate** - sets the rate of each LFO. At its slowest, the LFO cycle is around 20 seconds, at maximum it is 40ms.
* **CV/Pot** - when set to 'pot' the rate knob offers direct control over the LFO rate, and CV input is disabled. When set to 'CV', incoming voltage to the 1 and 2 inputs will set the rate of each LFO. In this mode the pot functions as an annenuator.
* **Depth** - adjusts the strength of the output level.
* **Offset** - when the depth is less than maximum, this will move the LFO wave around a centre point which can have an interesting effect on the output, especially when the offset is 'uneven', ie. set to neither minimum nor maximum or the midpoint, but somewhere inbetween.
* **Shape** - chooses from the eight available LFO wave shapes:

* Ramp
* Reversed ramp
* Square
* Triangle
* Sine
* Sweep
* Stepped random
* Smooth random