# wonkystuff kæstle

[[img|/modules/images/wskaestle.jpeg|200]]

[[https://wonkystuff.net/product/kaestle/ | View the shop page]]   

This is Wonkystuff's take on the Bastl Instruments reknown [[https://bastl-instruments.com/instruments/kastle/ | Kastle minisynth]], re-engineered to fit the AE modular format.  Although set up as as a 2 operator FM synth, It offers several sorts of synthesis within its confines.  

Module power consumption: ? mA


## Inputs

The WS Kaestle's inputs are located mostly on the left hand side of the module. They are 4 sets of 3 by each knob those inputs affect,  a group of 4 on the lower right, and the top 2 of the other square of sockets. 

* **OSC Pitch** - row 3 sockets top left - These are 3 CV inputs that work with the 2 OSC Pitch controls as covered below.
* **OSC Timbre** - row 3 sockets, 2nd row down, left hand side - These are 3 CV inputs that work with the 2 OSC Timbre controls as covered below.
* **Waveshape** - row 3 sockets, 3rd row down, left hand side -  These are 3 CV inputs that work with the 2 Waveshape Knobs as covered below.
* **LFO RATE** - row 3 sockets bottom left - These are 3 CV inputs that work with the 2 LFO Rate knobs as covered below.
* **Mode** -  top 2 sockets of square on right near the 2nd Osc Timbre knob - These inputs change the way the module behaves:-
* Nothing patched, the Main Osc out is phase modulation, the Secondary is phase distortion. Both are digital synthesis methods, the first by Yamaha, the 2nd by Casio.  
* A low signal  (usually the **-** outout) is attached, both outputs produce white noise, the secondary with more "character".
* A high signal (e.g. th **+** output) is attached, the main Osc output is track & hold modulation, the secondary is formant synthesis.  The latter is useful for emulating a voice or animal sounds.   
* **Bit In** - Top 2 of 4 sockets square in lower right corner - These inputs set the function of the **Stepped** outputs.
* Nothing patched, the output generates 16 pulses per LFO cycle.
* A low signal  (usually the **-** outout) is attached, the output generates 8 pulses per LFO cycle.
* A high signal (e.g. th **+** output) is attached, the pulse output is random.
* **LFO RST**  - Bottom 2 of 4 sockets square in lower right corner - This resets the LFO to the high point of the triangle waveform. This means any modulation will be at its maximum and then descend. Also useful for syncing the LFO with your main clock pulse etc.

## Outputs

The WS Kaestle's outputs are not all located in the usual, top right hand side of the module. **They are all marked by having a white outline around them.**

Group 6 sockets top right:-

* **OUT** - Main Oscillator out.
* **-n** -  Secondary Main Oscillator out - this will produce different sounds than the main out

The common AE "trick" of patching an output into another to mix them works well with the Kaestle.

Bottom 2 of 4 socket square below:-

* **-** -  A ground (0V) "signal".
* **+** - A set +4V signal.

Square of 9 sockets right side of module, **all are from the LFO**:-

* **Stepped** - top row of 3 - This produces a number of pulse per cycle of the LFO wavform, controlled by the **mode** input.
* **Triangle** - middle row of 3 sockets - the main LFO output. For modulation etc.
* **-n** - Bottom row of 3 - the pulse wave output of the LFO, good for triggers etc. 

## Controls

There are 2 knobs for each parameter; left and right. The Left knob controls the amount of modulation etc from the relevant input(s)

The parameter value associated with the label, (Pitch/Timbre/Waveshape/LFO Rate), consists of the position of the knob in the centre of the panel PLUS the signal from the inputs, whose level is controlled by the left hand knob.

* **OSC Pitch** - controls the main frequency of the sound.
* **OSC Timbre** - This is techinically mislabelled (like the original) in that it controls the pitch of a 2nd oscillator; what this oscillator does however, is "react" with the main one to create phase addition/cancellation, distortion and all sorts of other good stuff so is quite correct musically!
* **Waveshape** -  This has two functions; the simple one is that it sets the pulse width of the **-n** out. The main purpose is to add/remove harmonics by changing the waveform of the main oscillator. This can vary from subtle to manic.... 
* **LFO RATE** - controls the speed of the Low Frequency Oscillator, which is great for varying vibrato, (pitch modulation), and many other parameters to make the sound more interesting, even bonkers!

## Display

The LED shows the clock or tempo of the LFO

## Patch Suggestions

This is a deceptively powerful module, you may find the original's user manual helpful, and has a useful tips and tricks section as well. There is also a brief explnation of the various synthesis types available on this module, basically it is a must read!

https://bastl-instruments.com/content/files/manual-kastle-v1.5.pdf

There is also an excellent video by RSKT:-

%embed% https://www.youtube.com/watch?v=RN1DwAKuv4k %%


Until this module, the only way to have CV control of an LFO was to use a regular oscillator and use a divider module to lower the resulting frequency.  This module makes that patch a  lot easier! Changing the frequency of the LFO using an Envelope is superb for making even basic sounds more interesting. Having a slower LFO, (or [[KeuerslagerkurtSloth |Kurt's Sloth]]), control the frequency is excellent for subtle variations in sound, very nice on filter cutoff for instance. 
