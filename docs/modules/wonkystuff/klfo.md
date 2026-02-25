# wonkystuff k-lfo — complex 'k&aelig;stle' LFO &mu;Module

[[img|/modules/images/klfo.png|200]]

* [[https://wonkystuff.co.uk/k-lfo.html | Main shop page]]
* [[https://lectronz.com/products/k-lfo | EU shop page]]

## Overview

* Module format: micro-module
* Power consumption: 10mA

[filename](../../common/micro.md ':include')

This module is simply the 'rungler' LFO section from the [Bastl Instruments](https://bastl-instruments.com/) Kastle modules (as found in the 3 wonkystuff *k&aelig;stle* modules [OG](/modules/wonkystuff/kaestle.md), [DRUM](/modules/wonkystuff/kaestle_drum.md), and [ARP](/modules/wonkystuff/kaestle_arp.md)). Since using one of the full-size modules just to use the LFO felt excessive, the micro-module was born.

## Controls

* **rate** changes the lowest rate of the LFO;
* **cv amt** The LFO rate can be increased by introducing a CV (*cv* input below), and this knob controls how much of that CV influences the rate.

## Connectivity

The LFO section of the *k&aelig;stle modules is reproduced entirely. Horizontal pairs of connections are 'local multiples', as you might want to send the signals to more than one place.

### Inputs

* **cv** A voltage applied here will increase the rate of the LFO, depending on the *cv amt* control (above);
* **bit** Change the output of the sequence generated at the *rungler* output:
  * Disconnected: 16-step repeating pattern;
  * Connected to a low-level: 8-step repeating pattern.
  * Connected to high-level: Random pattern;
* **clk** A positive-going edge on this input will step the pattern output forward by one step. If the LFO rate is low, then it has no effect on the other LFO outputs - for higher LFO rates, the LFO output is reset to its start phase.

### Outputs

Although the panel has graphical labels, they are listed here from top to bottom:

* **square** A simple square wave output;
* **rungler** A stepped, 'repeatedly chaotic' output, with 8 possible output voltages affected by the state of the *bit* input described above;
* **triangle** Triangle-wave output;

# Further Info

More details on the internals of the LFO can be found in the [user manual of the Kastle Drum](https://bastl-instruments.com/content/files/manual-kastle-drum-web.pdf).

!> Since the code from this module is derived from the open-source *kastle*, the code and schematic is available from the [wonkystuff github](https://github.com/wonkystuff/k-lfo).

