# wonkystuff mcc/4 — 4 part MIDI Controller extractor &mu;Module

[[img|/modules/images/mcc4.png|200]]

* [[https://wonkystuff.co.uk/mcc-4.html | Main shop page]]
* [[https://lectronz.com/products/mcc-4 | EU shop page]]

## Overview

* Module format: micro-module
* Power consumption: ??mA

[filename](../../common/micro.md ':include')

mcc/4 is one of the fundamental IMDI integration components, and performs two tasks:

* Conversion of MIDI Continuous Controller (CC) message to CV signals for control of non-IMDI modules;
  * In 'CC Mode', the module generates 4 independent CV outputs derived from a programmable range of MIDI CC messages (e.g. 1-4, or 23-26). In the following description, we’ll call the lowest CC the ‘base’ CC (e.g. for the range 23-26, *CC 23* is the base CC). The outputs are labeled ‘a, b, c, d’, where ‘a’ is the voltage derived from the base CC, ‘b’ is derived from ‘base+1’ CC etc.
* Conversion of MIDI note data to CV/Gate suitable for driving the traditional modular synth voice (oscillator, envelope, VCA).
  * In 'Note Mode' the module outputs Pitch-CV, Velocity-CV, Gate and Trigger signals.

Selection of the operating mode is done by pressing the front-panel button and sending a MIDI message to the module.

* Sending a MIDI Note-On message switches the mcc/4 into *MIDI Note Extraction* mode (e.g. 'traditional' MIDI-CV conversion);
* Sending a MIDI CC message switches the mcc/4 into *CC extraction mode*
  * If *pitch bend* is sent, then CC extraction is slightly different - see below.

This is summarised in this table:

| Output | MIDI CC | Pitch Bend            | Note On     |
|--------|---------|-----------------------|-------------|
| **a**  | CC      | Pitch Bend            | Gate        |
| **b**  | CC+1    | CC 1 (Mod wheel)      | Trigger     |
| **c**  | CC+2    | CC 2 (Breath Control) | Velocity CV |
| **d**  | CC+3    | CC 3                  | Note CV     |

!> **Note**: Ordinarily, each output is scaled between 0-5v, however in the MIDI-CV mode, the 'Note CV' output is scaled between 0-4.096v for pitch accuracy, giving a range of C-0 (MIDI Note 24) to C4 (MIDI Note 72).

## Controls

* Button:
  * Short-press: 'MIDI Learn' mode: The next MIDI CC message received will be the new 'base' CC. If no CC is received, then the module will revert to the last-stored base CC (see table below for special cases). Whilst in 'Learn' mode, the MIDI LED will light — the LED extinguishes when Learn mode is no longer active (either due to timeout, or because a suitable MIDI message has been received);
  * Long-press: Writes the current base CC to eeprom, along with the currently active CV values. This means that the next time the module is powered on the current base CC is reloaded as well as the values of those 4 CCs. Whilst the button is pressed, the LED will light — when the write to eeprom has completed, the LED will extinguish.

## Connectivity

### Inputs

* **i** - the IMDI input - connect this to the channel output of an IMDI generator (e.g. [[/modules/wonkystuff/mb1 | mb/1]], [[/modules/tangiblewaves/imdi-heart | IMDI Heart]], [[/modules/wonkystuff/umdx | &mu;mdx]], [[/modules/wonkystuff/cvmx | CVMx]], [[/modules/wonkystuff/mimo | mi/mo]] etc.)

### Outputs

* **t** ***(left side)***: IMDI Thru - a buffered copy of the input data, to be connected to the IMDI input of a subsequent module.
* **a-d**: CV output as described in *Overview* above.
* **LED**: indicates MIDI activity, or 'Learn mode' status (see above)
