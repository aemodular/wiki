# MIDICLOCK DIVIDER

[[img|modules/images/midiclock-divider.png|100]]

[[https://www.tangiblewaves.com/store/p12/BEAT_DIVIDER.html | View Product Page]]

_Notice:_ This module was previously known as BEAT DIVIDER.

This module is designed to break the 24 pulses per quarter note from Midi into more musically useful intervals for the modular synthesist. The Midi usually comes via the master module on the **Bus CLK** output on the module.

It can be used to divide other clocks, e.g. an [[2lfo.md|LFO]] or even a [[2oscd.md|VCO]].

If you need more complex division, there is the [[mm-div.md|Multi Mode Divider]] module.

Module power consumption: 6 mA

## Inputs

* **Clock** - the signal to be divided by this module.
* **Reset** - If things are not in sync, try triggering this input, e.g. with Midi Start signal from below.

The next 2 are actually outputs on the (usually input) left side of the AE module.

* **Bus CLK** - Midi clock via the Master module
* **Bus Start**  - +5V trigger pulse when midi start is pressed on external equipment, via the Master module.

## Outputs

* **Out A** (2) - main output of the module, set by controls below.
* **Out B** (2) - secondary output, set as dotted or triplet pattern of output A, i.e. a longer pulse per beat (dotted), or every other pulse being on the middle of the gap between the A pulses, (triplet) via switch below.
* **Thru** - Labelled **Mult** on older modules. A Passive mixer/splitter  completely separate to the module circuits.

## Controls

* **Dotted/Triplet** Switch - sets style of output B, as per above.
* **Div** knob - marked from 1/2 to 1/32, this set how many triggers you get per bar, 1/2 being the slowest and 1/32 the fastest and it varies in between so can be quite hard to sync to external sequences/drum patterns etc. until you get your ear tuned in. Use of the reset input helps with this.

## Patch Suggestions

The most obvious use for this module is to sync the AE modular's sequencer modules, (e.g. [[seq16.md|SEQ16]]), but it can also be used to created  general triggers or modulation in tempo with the midi clock.

Using an LFO as a clock it gives use several different triggers which can be really good for self playing modular improvisations.

If you use the A output as your [[kick.md|KICK drum]] trigger, the B output can be really good for Snare or hi-hat type sounds. 
