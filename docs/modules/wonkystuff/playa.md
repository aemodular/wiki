# wonkystuff playa — MIDI percussion voice &mu;Module

[[img|/modules/images/playa.png|200]]

* [[https://wonkystuff.co.uk/playa.html | Main shop page]]
<!-- * [[https://lectronz.com/products/playa | EU shop page]] -->

## Overview

* Module format: micro-module
* Power consumption: ??mA

[filename](../../common/micro.md ':include')

**playa** is a small *velocity-sensitive* percussion module which plays short samples in response to MIDI notes.

The samples originate from the korg 'minipops' drum machine used by people like Jean Michel Jarre, and contribute a nice bit of variation to the rhythmic palette of AE Modular.

In addition to responding to note information, the module also has three basic digital effects:

* bit-depth;
* sample-rate reduction;
* pitch change (not tuned!)

These effects can be changed using MIDI CC messages, the base CC being learned in the same way as in the [mcc/4](/modules/wonkystuff/mcc4.md)

The note-range can be mapped to any 8-note range on the keyboard in the same way as the [mtr/8](/modules/wonkystuff/mtr8.md)

[filename](../../common/imdi_gen.md ':include')

## Controls

* button:
  * Short-press: enter MIDI Learn mode;
  * Long-press: global parameter save.

- Defaults:
  * By default, the sounds are mapped from MIDI note 60 to 67;
  * By default CC mapping starts at 32 (so effects are adjusted using CC 32, 33, 34).

These defaults can be changed by using the MIDI learn functionality, and stored with a long-press.

## Connectivity

### Inputs

* **i** - the IMDI input - connect this to the channel output of an IMDI generator as listed above.

### Outputs

* **t** ***(left side)***:  IMDI Thru - a buffered copy of the input data, to be connected to the IMDI input of a subsequent module.
* **out**: Audio output
* **LED**: indicates MIDI activity, or 'Learn mode' status (see above)

