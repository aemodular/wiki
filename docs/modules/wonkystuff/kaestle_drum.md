# wonkystuff k&aelig;stle drum — clone of the Bastl Kastle Drum

[[img|/modules/images/kastle-drum.png|200]]

* [[https://wonkystuff.co.uk/kaestle-drum.html | Main shop page]]
* [[https://lectronz.com/products/kaestle-drum | EU shop page]]

## Overview

* Module format: double-width, full height
* Power consumption: 25mA

This module is a clone of the *Kastle Drum* mini-modular 'patchable groovebox' from **[Bastl Instruments](https://bastl-instruments.com/)**.

The module creates percussive sounds (*DRUMS* output) based on a mix of short samples and synthesis — all in the typically *Kastle* lo-fi manner! A secondary *NOISES* output produces some secondary percussion sounds derived from the main voice. There are 8 sounds in total, selected by the *DRUM* control. Some of the sounds have subtle variations which will depend upon the precise position of the *DRUM* control!

As with all Kastle modules, drum-pattern generation uses a 'rungler' algorithm which generates a pattern on the *PATTERN* output. This can be affected by input to the *FEED* input (see below).

Full operating details can be found directly from [the Bastl website](https://bastl-instruments.com/instruments/kastle-drum) (controls and connections are given the same names).

## Controls

There are 2 knobs for each parameter; left and right. The value of a given parameter is the position of the right control *plus* a proportion of the input signal (controlled by the left knob).

* **DRUM** There are 8 drum sounds in the Kaestle Drum, and this knob is how to move between them. Moving to another sound's "zone" triggers that sound. Thus, if you have a square wave CV you can switch between 2 sounds triggering them each time, a constant rising/falling CV could trigger all 8 sounds;
* **PITCH** Controls the pitch of the drum sound, or the playback rate of the samples;
* **DECAY** Sets the length of time the module will sound with each trigger. Note the centre (vertical) position is for the shortest envelope, and turn clockwise to get longer decay. Turning the knob anti-clockwise from the centre also increases the decay time, but also adds a downward pitch envelope;
* **TEMPO** Sets the apparent speed of the rhythmic pattern. Thus subtle variations in tempo (or not subtle!) can be controlled with a CV and the left knob in this section. An external envelope can be quite fun!

## Connectivity

Outputs are distinguished by having a white border; inputs are borderless.

!> **Note**: Apart from the '**+** **-**' pair, all horizontal lines of sockets are connected together, to be used as local 'multiples'.

### Inputs

* **DRUM** As above;
* **PITCH** As above;
* **DECAY** As above;
* **TEMPO** As above;
* **TRIG IN** The main envelope trigger for the drum synth and Noise output. These inputs are dynamic, i.e. a 0.5 to 2V pulse will trigger a quiet envelope. A 2-3.5V pulse will trigger a louder envelope and a 3.5 to 5V pulse will trigger the loudest envelope. These voltages are approximate. If you have 2 signals going into the inputs it is really easy to add accents/variation to your drum/noise sound (Excellent for Hi-hats);
* **FEED** Change the output of the sequence generated at the *STEPPED* output:
  * Disconnected: 16-step repeating pattern;
  * Connected to '**-**': 8-step repeating pattern.
  * Connected to '**+**': Random pattern;
* **CLK IN** A positive-going edge on this input will step the pattern output forward by one step. If the LFO rate is low, then it has no effect on the other LFO outputs - for higher LFO rates, the LFO output is reset to its start phase.

### Outputs

* **DRUMS** The main drum voice output;
* **NOISES** A secondary voice, somehow derived from the main voice - but different/glitchy;
* **- +** Fixed voltage outputs; *+* is connected to +5v (via an internal resistor); *-* is connected to ground;
* **PATTERN** The stepped voltage output of the 'rungler' algorithm. The pattern is affected by the signal present on the *FEED* input;
* **LFO** A triangle-wave LFO;
* **PULSE** A square-wave LFO.


## Patch Suggestions

If you find this module a bit mind blowing at first, you may find the [original user manual](https://bastl-instruments.com/content/files/manual-kastle-drum-web.pdf) helpful — it has a bunch of internal info which might prove enlightening!

Here's a short overview from the [wonkystuff&reg; YouTube channel](https://youtube.com/@wonkystuff):

%embed% https://youtu.be/_pkOL4cmK_8 %%

There is also an excellent video by [RSKT](https://youtube.com/@RSKT_music):

%embed% https://www.youtube.com/watch?v=RN1DwAKuv4k %%

This module screams more than most to be patched with the rest of the AE; an external envelope on the tempo has been mentioned, the trigger could be manual, the Kaestle Drum's LFO or anything else. Use of LFOs to vary the sound can bring great rewards for instance, the attenuator Knobs on the left side of the module being really useful here (It is very easy to descend into chaos however!).

!> Since the module is open-source, wonkystuff updates to the code can be found on the [wonkystuff github](https://github.com/wonkystuff/) (along with schematics for all of the k¶aelig;stle modules):
