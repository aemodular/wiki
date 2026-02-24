# wonkystuff mi/mo — MIDI TRS Input/output &mu;Module

[[img|/modules/images/mimo.png|200]]

* [[https://wonkystuff.co.uk/mio.html | Main shop page]]
* [[https://lectronz.com/products/mimo | EU shop page]]

## Overview

* Module format: micro-module
* Power consumption: ??mA

[filename](../../common/micro.md ':include')

mi/mo is a bi-directional translator between the well-known TRS MIDI (both type A and B) and the internal patchable MIDI connections, aka 'IMDI'. It's a very simple module which simply implements the standard MIDI I/O circuitry (opto-isolator input and buffered output) as described in the [MIDI 1.0 specification](https://midi.org/midi-1-0-detailed-specification).

## Controls

None

## Connectivity

Lines on the front panel indicate which TRS connector performs which purpose!

### Inputs

* **TRS (top right)** MIDI (Type A or B) input from a reguular MIDI device. This is translated onto the *o* output.
* **i** IMDI input. This is translated onto the *bottom-left TRS* output.

### Outputs

* **t** ***(left side)***: IMDI Thru - a buffered copy of the input data, to be connected to the IMDI input of a subsequent module.
* **o** The IMDI representation of the MIDI signal appearing at the *top-right TRS* input.
