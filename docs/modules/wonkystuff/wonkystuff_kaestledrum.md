# wonkystuff kæstle drum

[[img|/modules/images/wskaestledrum.jpeg|200]]

[[https://wonkystuff.net/product/kaestledrum/ | View the shop page]]   

This is Wonkystuff's take on the Bastl Instruments  [[https://bastl-instruments.com/instruments/kastle-drum/ | Kastle Drum]], re-engineered to fit the AE modular format. 


Module power consumption: ? mA

## Inputs

The WS Kaestledrum's inputs are located mostly on the left hand side of the module. They are 4 sets of 3 sockets by each knob those inputs affect,  a group of 4 on the lower right, and the top 2 of the other square of sockets. 

* **Drum** - row 3 sockets top left - These 3 inputs work in conjunction with the 2 Drum knobs as covered below. A signal above 3V here will trigger the drum synth. 
* **Pitch** - row 3 sockets, 2nd row down, left hand side - These 3 inputs work with the 2 Pitch controls as covered below. A signal above 3V here will trigger the **Noise** output. 
* **Decay** - row 3 sockets, 3rd row down, left hand side - These 3 inputs work with the 2 Decay knobs as covered below.
* **Tempo** - row 3 sockets bottom left - These 3 inputs work with the 2 Tempo controls as covered below.

* **Trig In**  -  top 2 sockets of square on right near the 2nd Pitch knob - The main envelope trigger for the drum synth and Noise output. These inputs are dynamic, i.e. a 0.5 to 2V pulse will trigger a quiet envelope. A 2-3.5V pulse will trigger a louder envelope and a 3.5 to 5V pulse will trigger the loudest envelope. These voltages are approximate. If you have 2 signals going into the inputs it is really easy to add accents/variation to your drum/noise sound. Excellent for Hi-hats....

* **Feed** - Top 2 of 4 sockets square in lower right corner - This input controls the **Pattern** output of the LFO as shown below.
* **CLK IN**  - Bottom 2 of 4 sockets square in lower right corner - A trigger pulse here resets the LFO to the highest point of the triangle wave so you can, in effect, create different LFO waveshapes. This also means any modulation the LFO is doing will be at the highest level and descend. 

## Outputs

The WS Kaestledrum's outputs are not all located in the usual, top right hand side of the module. **They are all marked by having a white outline around them.**

Group 6 sockets top right:-

* **Drums** (3) - Main output of drum synth.
* **Noises** (3) - noise/glitchy noise output, independent of the drum synth.

The common AE trick of putting one output into the other to mix them together works well on the Kaestle Drum.

Bottom 2 of 4 socket square below:-

* **-** - a ground (0V).
* **+** - a steady +4V which can be used to add to other CVs etc.  

Square of 9 sockets right side of module, **all are from the LFO**:-

* **Pattern** - top row of 3 - These outputs generate 4, 8 or 16 pulses depending on the CV at the **Feed** input. If nothing is attached to the Feed input you get 8 pulses per LFO cycle. If a low signal/ground (e.g. **-**) is connected you get 4 pulses per LFO cycle. If a high signal (e.g. **+**) is connected you will get 16 pulses per LFO cycle. Switching between patterns will cause psudo-random pulses during the cross over. 
* **LFO** - middle row of 3 sockets - The regular LFO output, this is a triangle wave but it is variable by use of modulation (particularly **Tempo** or **CLK In**). 
* **CLK** - Bottom row of 3 - Pulse output of the LFO, for triggers etc.

## Controls

There are 2 knobs for each parameter; left and right.  The left knob controls the signal level from the relevant input(s).

The parameter value associated with the label, (Drum/Pitch/Decay/Tempo), consists of the position of the knob in the centre of the panel PLUS the signal from the inputs, whose level is set by the left side control.

* **DRUM** -  There are 8 drum sounds in the Kaestle Drum, and this knob is how to move between them. Moving to another sound's "zone" triggers that sound. Thus, if you have a square wave CV you can switch between 2 sounds triggering them each time, a constant rising/falling CV could trigger all 8 sounds....
* **Pitch** -  Sets the frequency/pitch of the selected drum sound(s).
* **Decay** - Sets the length of time the module will sound with each trigger. Note the centre (vertical) position is for the shortest envelope, and turn clockwise to get longer decay. Turning the knob anti-clockwise from the centre  also increases the decay time, but also affects the pitch.
* **Tempo** - Sets the apparent speed of the rhythmic pattern. Thus subtle variations in tempo (or not subtle!) can be controlled with a CV and the left knob in this section. An external envelope can be quite fun....

## Patch Suggestions

If you find this module a bit mind blowing at first, you may find the original's user manual helpful. Most of the detail on this page came from this source. 

https://bastl-instruments.com/content/files/manual-kastle-drum-web.pdf

There is also an excellent video by RSKT:-

%embed% https://www.youtube.com/watch?v=RN1DwAKuv4k %%

This module screams more than most to be patched with the rest of the AE; an external envelope on the tempo has been mentioned, the trigger could be manual, the Kaestle Drum's LFO or anything else. Use of LFOs to vary the sound can bring great rewards for instance, the attenuator Knobs on the left side of the module being really useful here. Very easy to descend into chaos however, :-)

If Wonkystuff ever upgrade the firmware, or provide different programming for the module, you will be able to find it here:-

https://github.com/wonkystuff/kastle
