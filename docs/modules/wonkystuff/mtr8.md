# wonkystuff mtr/8 — 8 output MIDI to Trigger extractor &mu;Module

[[img|/modules/images/mtr8.png|200]]

* [[https://wonkystuff.co.uk/mtr-8.html | Main shop page]]
* [[https://lectronz.com/products/mtr-8 | EU shop page]]

## Overview

* Module format: micro-module
* Power consumption: 7mA

[filename](../../common/micro.md ':include')

mtr/8 is an 8-output MIDI to Trigger converter (It's actually a MIDI-Gate converter, but the main use for this was to trigger the wonkystuff &mu;Drums!). The mtr/8 consumes MIDI note on/off messages (8 consecutive MIDI notes) from the IMDI source device.

The module maps consecutive note-on/off messages to each of its 8 outputs in a manner similar to how the [[/modules/wonkystuff/mcc4.md | mcc/4]] maps MIDI CC messages. In 'MIDI Learn mode', the received note is the 'base' note and is mapped to output 0, the next note to output 1 etc. — for example, if the mtr/8 receives Middle C (C-3, or note 60) the outputs will map from Middle-C to the G above (G-3, note 67).

[filename](../../common/imdi_gen.md ':include')

## Controls

* Button:
  * Short-press: 'MIDI Learn' mode: The next MIDI Note-on received will be the new 'base' Note. If no Note-on is received, then the module will revert to the last-stored base note. Whilst in 'listen' mode, the MIDI LED will light — the LED extinguishes when listen mode is no longer active (either due to timeout, or because a Note-on message has been received)
  * Long-press: Writes the current base note to eeprom, so that the next time the module is powered on the current base note is reloaded. Whilst the button is pressed, the LED will light — when the write to eeprom has completed, the LED will extinguish.

## Connectivity

### Inputs

* **i** - the IMDI input - connect this to the channel output of an IMDI generator as listed above.

### Outputs

* **t** ***(left side)***:  IMDI Thru - a buffered copy of the input data, to be connected to the IMDI input of a subsequent module.
* **0-7** Gate outputs (x8)
