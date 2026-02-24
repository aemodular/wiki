# wonkystuff mb/1 — "MIDI Brain" for AE Modular

[[img|/modules/images/mb1.png|100]]

* [[https://wonkystuff.co.uk/mb-1.html | Main shop page]]
* [[https://lectronz.com/products/mb-1 | EU shop page]]

## Overview

* Module format: single-width, full height
* Power consumption: ??mA

The beginning of the MIDI integration concept! This module consumes MIDI signals from any source via the TRS input and breaks out the channel data to its own output. In addition *System Real-Time* messages (e.g. clock signals) are given their own output pins for easy integration with existing clock-driven modules (e.g. drum-triggers, sequencers etc.).

For an overview of IMDI/MIDI integration, take a look [[/IMDI | at this page]], IMDI-compatible modules [[/modules/cat_IMDI | can be found here]]

## Controls

None. A web-based editor for clock division can be found here: [can be found here](https://github.wonkystuff.co.uk/mb-1Setter/editor.html)

## Connectivity

mb/1 is really a converter; input comes from outside of AE (from a DAW, standalone sequencing device, or controller keyboard for example), ouputs feed other *IMDI-capable* modules (see [[/modules/cat_IMDI.md | the IMDI category listing]] for these).

### Inputs

* **TRS** *Type A* or *Type B* MIDI input (note that the first 10 mb/1 only supported *Type B*, so an adapter might be needed, depending upon the MIDI source)

### Outputs

* **1-16** individual channel-specific data. MIDI messages which are channel-specific (e.g. Notes, controller, aftertouch etc.) will be routed to the appropriate output. Note that non-channel messages will not be output here (e.g. clock, Syestem Exclusive etc.)
* **r/s** 'Run/Stop' signal:
  * Outputs 5v when a clock-start message has been received;
  *  Outputs 0v when a clock-stop message is received.
* **clock** a clock signal derived from the 24ppqn MIDI clock signal. It is possible to divide this down to other rates (e.g. 1/16th pulses) by using the online editor which [can be found here](https://github.wonkystuff.co.uk/mb-1Setter/editor.html)
* **start** outputs a 5ms pulse when a MIDI clock start message is received, this is typically used to reset sequencer modules so that they always start in the same location. No pulse is generated when a MIDI-continue is recieved;
* **midi** This is a copy of the input data in IMDI format, including all channel and non-channel data received. Basically this is a *MIDI Thru* connection.
