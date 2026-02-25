# wonkystuff rbss/2

[[img|/modules/images/rbss-2.png|100]]

* [[https://wonkystuff.co.uk/rbss-2.html | Main shop page]]
* [[https://lectronz.com/products/rbss2 | EU shop page]]

## Overview

* Module format: single-width, full height
* Power consumption: 10mA

A new version of the most popular wonkystuff module! The random bit-shift sequencer (rbss) — is a re-imagining of the well-established Turing Machine from Eurorack. It's a semi-predictable source of randomness in a single-width AEModular module.

The main changes from the original rbss are:

* CV controllable clock rate (all of the three controls: rate, length and chance are now voltage-controllable);
* No 'audio' output (the same effect can be had by passing the CV output through a high-pass filter)
* 8 'bit' outputs, exposing the individual bits which go to make the CV, allowing for repetetive, random, related triggers — really good fun with the wonkystuff µDrum modules such as the bd55, rs55, hh110, etc.

## Controls

* **length** - this is the number of steps that will be present in the sequence, from 1 to 16.
* **chance** - this specifies the probability that the next step in the sequence will change voltage, from 0 (never) to 1 (always).
* **rate** - This changes the frequency of the clock pulse appearing at the clk out pin. (In order to trigger the rbss, the clk out must be connected to the clk in).

## Connectivity

Mostly the same as the [rbss](/modules/wonkystuff/rbss.md).

### Inputs

* **clk in** - Every time there is a rising edge on the voltage in this input, the sequence shifts one step. This can be driven up to audio rates for some interesting noises!
* **len cv** - The control voltage on this input is added to the control voltage from the front panel *length* control (so if the knob is fully clockwise, this voltage will have no effect)
* **chance cv** - The control voltage on this input is added to the control voltage from the front panel *chance* control (so if the knob is fully clockwise, this voltage will have no effect)
* **rate cv** - The control voltage on this input is added to the control voltage from the front panel *rate* control (so if the knob is fully clockwise, this voltage will have no effect)

### Outputs

* **bus clk** ***(left side)***: clock signal from the bus, either from the master module, or mb/1.
* **cv out** (x2): a control voltage representing the current bit-shifted binary pattern;
* **clk out** (x2): a simple square clock signal
* **bits 0-7**: Exposes the internal state of the bits used to create the CV, allowing for repetitive, random, related triggers — really good fun with the wonkystuff &mu;Drum modules (this basically means that the same bit pattern is replicated across each bit-output with a single clock-pulse delay).

## Videos

rbss/2 is used in this demo of drum sounds, showing use of the *bit* outputs:

%embed% https://youtu.be/ovZFnizwh2I %%
