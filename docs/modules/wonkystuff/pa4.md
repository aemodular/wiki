# wonkystuff pa/4 — 4-voice polyphonic MIDI Assigner &mu;Module

[[img|/modules/images/pa4.png|200]]

* [[https://wonkystuff.co.uk/pa-4.html | Main shop page]]
<!-- * [[https://lectronz.com/products/pa-4 | EU shop page]] -->

## Overview

* Module format: micro-module
* Power consumption: ??mA

[filename](../../common/micro.md ':include')

The pa/4 consumes MIDI signals and directs note-related messages (note on/off and polyphonic aftertouch) to one of the four outputs to enable polyphony, e.g. four (or more — see later) oscillators can be used to form chords etc.

Messages which are not related to individual notes are forwarded to all 4 outputs ensuring that program changes and CC messages (for example) are sent to all attached [mco1/b](/modules/wonkystuff/mco1b.md) modules so that the same sound is made by each attached module.

The pa/4 implements a number of different allocation methods:

* **unison**: Sends note information to all 4 outputs simultaneously — intended for tuning, but can of course be used for some big note stacks!
* **lowest available**: The selected output is always the lowest available — so that, for example, repeated individual notes will always be emitted from the same output
* **round robin**: The selected output is the one after the previously-used one — so that, for example, repeated individual notes will always be emitted from each output in turn
* **p5-ish**: The note itself chooses the output to be used, e.g. C3 is always sent to the same output.

If all voices are sounding, then the next output is used according to the allocation method (voice stealing), which means that a tree of pa/4 modules could be built to make larger polyphonic ensembles!

[filename](../../common/imdi_gen.md ':include')

## Controls

* Button: changes voice allocation mode;

## Connectivity

Inputs and outputs are all IMDI signals.

### Inputs

* **i** - the IMDI input - connect this to the channel output of an IMDI generator as listed above.

### Outputs

* **t** ***(left side)***:  IMDI Thru - a buffered copy of the input data, to be connected to the IMDI input of a subsequent module.
* **1-4** IMDI channel outputs, allocated as above.

# Video

Here's John from wonkystuff&reg; explaining at Superbooth 2025:

%embed% https://youtu.be/_JevK9rhjNQ %%