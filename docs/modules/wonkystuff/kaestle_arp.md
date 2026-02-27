# wonkystuff k&aelig;stle ARP — clone of the Bastl Kastle ARP

[[img|/modules/images/kastle-arp.png|200]]

* [[https://wonkystuff.co.uk/kaestle-arp.html | Main shop page]]
* [[https://lectronz.com/products/kaestle-arp | EU shop page]]

## Overview

* Module format: double-width, full height
* Power consumption: 25mA

This module is a clone of the last addition to the well-known *Kastle* series of mini-modular synths from **[Bastl Instruments](https://bastl-instruments.com/)**, the melodic-generator "ARP".

As with all Kastle modules, pattern generation uses a 'rungler' algorithm which generates a pattern on the *PATTERN* output. This can be affected by input to the *FEED* input (see below).

To change the root note, disconnect all patch cables; connect the *CHORD* input to **+**; turn the *NOTE*, *TIMBRE*, and *DECAY* knobs fully clockwise and press the *B* button.

From the Bastl Manual:

> While in boot mode:
>
> The NOTE knob provides a preview of the root triad chord corresponding to the selected root key.
>
> The TIMBRE knob determines the root key (C is fully turned counterclockwise).
>
> The DECAY knob serves as FINE-TUNE (A=440Hz can be found around the center position). It is advisable to have your tuner active during the boot mode to assist you in making accurate adjustments.

Full operating details can be found directly from [the Bastl website](https://bastl-instruments.com/instruments/kastle-arp) (controls and connections are given the same names).

## Controls

There are 2 knobs for each parameter; left and right. The value of a given parameter is the position of the right control *plus* a proportion of the input signal (controlled by the left knob).

* **NOTE** Chooses the base pitch of the oscillator;
* **TIMBRE** Adds 'XOR Waveshaping' to the tone, from smooth tones to metallic overtones;
* **DECAY** Adjust the decay of the tone, the further away from the 'centre', the longer the note sounds for. When turned left, new notes only sound
  when the current note stops, resulting in 'skips' of the note pattern;
* **TEMPO** adjust the speed of the internal LFO.

## Connectivity

Outputs are distinguished by having a white border; inputs are borderless.

!> **Note**: Apart from the '**+** **-**' pair, all horizontal lines of sockets are connected together, to be used as local 'multiples'.

### Inputs

* **NOTE** As above;
* **TIMBRE** As above;
* **DECAY** As above;
* **TEMPO** As above;
* **CHORD** Changes the *degree* of the output pitches:
  * Disconnected: Chord I;
  * Connected to '**-**': Chord IV.
  * Connected to '**+**': Chord V;
* **FEED** Change the output of the sequence generated at the *PATTERN* output:
  * Disconnected: 16-step repeating pattern;
  * Connected to '**-**': 8-step repeating pattern.
  * Connected to '**+**': Random pattern;
* **CLK IN** A positive-going edge on this input will step the pattern output forward by one step. If the LFO rate is low, then it has no effect on the other LFO outputs - for higher LFO rates, the LFO output is reset to its start phase.

### Outputs

* **ARP** The main tonal output of the module;
* **BASS** A bass drone sounding at the root pitch of the selected chord (See *CHORD* input above);
* **- +** Fixed voltage outputs; *+* is connected to +5v (via an internal resistor); *-* is connected to ground;
* **PATTERN** The stepped voltage output of the 'rungler' algorithm. The pattern is affected by the signal present on the *FEED* input;
* **LFO** A triangle-wave LFO;
* **PULSE** A square-wave LFO.

# Further info

!> Since the module is open-source, wonkystuff updates to the code can be found on the [wonkystuff github](https://github.com/wonkystuff/) (along with schematics for all of the kaelig;stle modules):
