# LFO--

[[img|modules/images/LFOmm-frontpanel.png|100]]

[[https://github.com/fauxcyrillic/LFO-minus-minus | Open source]]

A 1U version of [[https://wiki.aemodular.com/#/modules/fauxcyrillic_lfo-plus-plus | LFO++]], with slightly fewer features.
The core functionality is identical, but this module lacks the DEPTH and OFFSET controls from the bigger version.

Module power consumption: 10mA

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
* **Shape** - chooses from the eight available LFO wave shapes:

* Ramp
* Reversed ramp
* Square
* Triangle
* Sine
* Sweep
* Stepped random
* Smooth random