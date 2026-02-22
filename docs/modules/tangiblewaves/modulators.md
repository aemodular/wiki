# MODULATORS
[[img|modules/images/MODULATORS.png|100]]

[[ https://www.tangiblewaves.com/store/p152/MODULATORS.html | View Product Page]]

MODULATORS is a multifunctional 1U module. It is designed especially with very small AE systems in mind.

It includes a simple EG, an LFO, a random CV generator and a VCA.

Module power consumption: 13 mA

## Inputs

* **ENV GT** - The trigger input for the Envelope section.
* **VCA IN** - For the audio/CV that you want to control with the VCA
* **VCA MOD** - For the CV which controls the level of the VCA output.
* **LFO PWM** - CV input to change the shape of the LFO waveform, this could affect gate time (triggering envelopes), complexity of filter modulation amongst many other things.
* **LFO SYNC** - a CV pulse here will reset the LFO waveform to the beginning of the cycle; this is most useful where you want the sound to be the same for each key press/sequencer note.

## Outputs

* **ENV**  (x2) - CV output from the envelope section
* **VCA** (x2) - Audio/CV output from the VCA
* **LFO Triangle/sawtooth** - output from the LFO for these wave shapes
* **LFO Square/PWM** - output from the LFO for these wave shapes.
* This means the LFO can modulate 2 things separately without the use of a **MULT**.
* **RND** (x2) - CV output from the random section

## Controls

* **ENV | ATTACK** (knob) - Controls how quickly the CV rises when triggered. Please note that, in trigger mode, a slow attack could mean the envelope will not "play"; this is usually when the knob is over the 8 o'cock position.
* **ENV | RELEASE** (knob) - Controls how quickly the CV descends when the attack or sustain ends.
* **ENV | Gate/Trig** (switch) - This switch means you can either have just the A/D envelope (great for percussion) or sustain as well. This means the CV stays high until the trigger stops, e.g. when the key is released on a keyboard.
* **LFO | RATE** (knob) - This sets the frequency of the LFO
* **LFO | PW** (knob) - This sets the waveshape around a squarewave, moving this knob whilst playing is the same as applying a CV to the **LFO PWM** input.
* **LFO | Triangle/Saw** (switch) - This selects which waveform you would prefer at the **LFO Triangle/sawtooth** input.
* **RND | MODE** (button) -

  **Press and release of this button** will mean the random CV will change in sync with the LFO; this means, in effect,  it can be triggered via the LFO Sync input. Be aware that PWM in particular can cause there to be no triggers, due to zero pulsewidth (so no rise from zero volts). There is a three second delay for this sync to take effect due to the following use:-

  **Press and release the button multiple times** sets the tempo of the CV changes, the faster you tap.... The longest gap between presses is 3 seconds.

  **Press and hold this button**

The LED in the random section will then flash.  You select between the three modes by releasing the button when it is on the one you desire. The mode the random section is currently in is shown by the number of flashes. 

* **1 flash** Quantized - the CV is in a minor scale from 0 to 2 volts. Useful for Oscilator & [[solina.md | SOLINA]] pitch
* **2 flashes** Random (stepped) -  CV between 0 and 4 volts.
* **3 flashes** Smoothed - As random, but the voltage changes more slowly between CVs.

## Patch Suggestions

If you want more than one input to the VCA, you will need to use a mixer module such as the [[2attcv.md | 2ATTCV]]. You can use a **MULT** if necessary however.

If you want a smooth(er) transition between the CVs of the Random CV generator, this can be done with the [[slew-edge.md | SLEW/EDGE]] module.
