# wonkystuff moco

[[img|modules/images/moco.png|100]]

* [[https://wonkystuff.co.uk/moco.html | Main shop page]]
* [[https://lectronz.com/products/moco | EU shop page]]

## Overview

* Module format: single-width, full height
* Power consumption: 20mA

The concept behind the morph controller is that a series of 4 overlapping triangular envelopes are generated from an input CV (plus manual offset), meaning that it can be used with a quad vca (such as the qvca) to fade across four audio sources. As it was originally thought of as a companion to the [[/modules/wonkystuff/qvca | qvca]], the moco also has a simple 4:1 audio mixer for recombining the four outputs, saving the use of a separate mixer module.

!> Note: the mixer **inverts** the signals, so in the case where original signals are recombined with the mixer output some phase cancellation is likely.

## Controls

* **CV**  - this is an attenuator for the CV input so you can set the amount of morphing/sweep between the outputs.
* **POS** - This gives manual control of the morphing/"mix" from just output A, A&B, B only, B&C, C only, C&D, D only.

## Connectivity

### Inputs

* **CV** - This takes a zero to 5V signal and sets the "mix" of the outputs accordingly, in the same manner as the *POS* knob.
* **Mixer in** - the next 4 sockets down the left hand side (marked going to a triangle pointing right with a plus sign in it) are inputs to the inverting audio mixer.

### Outputs

When an output is not active, it's level is 0V. The maximum voltage is around 4.5V when it is that output being active **on its own**.

* **a** (x2) - In normal usage, this is first CV to be activated, (lowest CV input voltage), but it depends on the CV and/or Position knobs. It overlaps with output **b**;
* **b** (x2) - This CV overlaps with **a** and **c**;
* **c** (x2) - This CV overlaps with **b** and **d**;
* **d** (x2) - This is the last CV to be activated, (highest CV input voltage) and overlaps with **c**;
* **mix** ***(left hand side)*** (x3) - inverted mix of signals input to the internal mixer.

The markings to left of the outputs give a graphic representation of this delay/pattern.

# Patch Suggestions

This module is based on the Doepfer A-144 (now discontinued) whose page can be found [[https://doepfer.de/a144.htm | here]]. This page has a users manual in English or German which is very detailed and useful.

Wonkystuff&reg; have an excellent introductory video to this module:-

%embed% https://www.youtube.com/watch?v=5MWcSaScPGY %%

Though the video demonstrates the CV input with an LFO, the use of an envelope to mix your audio signals can mean you can have some superb sonic changes consistently on each key press/activation, not necessarily needing a filter...  For this, the Tangible Waves [[4vca.md | 4VCA]] module is excellent due to having the mix outputs.

As almost demonstrated in the video, you can produce a 2, 3 or 4 step beat/pulse with this module and an LFO. This is shown is mixing VCOs but these CVs could go to "mix" other sounds, raise a filter cutoff, go to an envelope module ([[adsr.md | ADSR]] could be interesting) and anywhere else you can think of to send a CV...

For randomness, try the [[wonkystuff_rbss | Wonkystuff rbss]] as the CV in, or could use [[sample-and-hold.md | sample and hold]].
