# wonkystuff k&aelig;stle — clone of the Bastl Kastle

[[img|/modules/images/kastle.png|200]]

* [[https://wonkystuff.co.uk/kaestle.html | Main shop page]]
* [[https://lectronz.com/products/kaestle | EU shop page]]

## Overview

* Module format: double-width, full height
* Power consumption: ??mA

This module is a clone of the original *Kastle* mini-modular drone/complex-oscillator synth from **[Bastl Instruments](https://bastl-instruments.com/)**.

The module contains *six* different synthesis modes delivered in a classically lo-fi manner. Two outputs exist (*OSC OUT* and *Secondary* - top-right of the module), and these produce the following combinations when *MODE* is connected as shown:

| MODE connection | OSC OUT              | Secondary        |
|-----------------|----------------------|------------------|
| (disconnected)  | Frequency Modulation | Phase Distortion |
| **-**           | Noise A              | Noise B          |
| **+**           | Track and Hold       | Formant          |

As with all Kastle modules, sequence generation uses a 'rungler' algorithm which generates a pattern on the *STEPPED* output. This can be affected by input to the *BIT IN* input (see below).

Full operating details can be found directly from [the Bastl website](https://bastl-instruments.com/instruments/kastle) (controls and connections are given the same names).

## Controls

There are 2 knobs for each parameter; left and right. The value of a given parameter is the position of the right control *plus* a proportion of the input signal (controlled by the left knob).

* **PITCH** Changes the pitch of the carrier oscillator (has no effect in Formant synthesis);
* **TIMBRE** This is techinically mislabelled (like the original) in that it controls the pitch of a 2nd oscillator; what this oscillator does however, is "react" with the main one to create phase addition/cancellation, distortion and all sorts of other good stuff so is quite correct musically!
* **SHAPE** This has two functions; the simple one is that it sets the pulse width of the **-n** out. The main purpose is to add/remove harmonics by changing the waveform of the main oscillator. This can vary from subtle to manic…
* **LFO RATE** controls the speed of the Low Frequency Oscillator, which is great for varying vibrato (pitch modulation) and many other parameters to make the sound more interesting, even bonkers!

## Connectivity

Outputs are distinguished by having a white border; inputs are borderless.

!> **Note**: Apart from the '**+** **-**' pair, all horizontal lines of sockets are connected together, to be used as local 'multiples'.

### Inputs

* **PITCH** As above;
* **TIMBRE** As above;
* **SHAPE** As above;
* **LFO RATE** As above;
* **MODE** Changes the oscillator mode as described in the table above;
* **BIT IN** Change the output of the sequence generated at the *STEPPED* output:
  * Disconnected: 16-step repeating pattern;
  * Connected to '**-**': 8-step repeating pattern.
  * Connected to '**+**': Random pattern;
* **LFO RST** A positive-going edge on this input will step the pattern output forward by one step, as well as resetting the triangle LFO output to its start phase.

## Outputs

* **OUT** - Main Oscillator out.
* **-n** -  Secondary Main Oscillator out - this will produce different sounds than the main out
* **- +** Fixed voltage outputs; *+* is connected to +5v (via an internal resistor); *-* is connected to ground;
* **STEPPED** The stepped voltage output of the 'rungler' algorithm. The pattern is affected by the signal present on the *FEED* input;
* **Triangle** A triangle-wave LFO;
* **Square** A square-wave LFO.

## Patch Suggestions

The common AE "trick" of patching an output into another to mix them works well with the Kaestle.

This is a deceptively powerful module; you may find the [original user manual](https://bastl-instruments.com/content/files/manual-kastle-v1.5.pdf) helpful — it has a useful tips and tricks section as well as a fuller explanation of the synthesis modes (basically it is a must read!)

Here's a short overview from the [wonkystuff&reg; YouTube channel](https://youtube.com/@wonkystuff):

%embed% https://youtu.be/ha2NRi0Jfag %%

There is also an excellent video by [RSKT](https://www.youtube.com/@RSKT_music):

%embed% https://www.youtube.com/watch?v=RN1DwAKuv4k %%

Until this module, the only way to have CV control of an LFO was to use a regular oscillator and use a divider module to lower the resulting frequency.  This module makes that patch a  ot easier! Changing the frequency of the LFO using an Envelope is superb for making even basic sounds more interesting. Modulating the frequency of the LFO (e.g. with [BF Synth Kurt's Sloth](modules/bfsynth/bfsynth_kurts-sloth.md)) is an excellent way to introduce subtle variations in the sound, very nice on filter cutoff for instance.

!> Since the module is open-source, wonkystuff updates to the code can be found on the [wonkystuff github](https://github.com/wonkystuff/) (along with schematics for all of the k¶aelig;stle modules):
