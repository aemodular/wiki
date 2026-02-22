# LOPAG (VACTROL LOW PASS GATE)
[[img|modules/images/lopag.png|100]]

[[ https://www.tangiblewaves.com/store/p62/LOPAG_%28lowpass_gate%29.html | View Product Page]]

This is a fairly subtle module filter wise, and certainly shouldn't be a first filter purchase as there is no direct control of the filter itself other than on/off. 

This doesn't mean it isn't useful however....

Module power consumption: 1 mA

## Inputs

* **IN** - the audio signal input. This module will not make any sound without this.
* **TRIG** - A +5V pulse will activate a short opening of the gate.
* **GATE** - The module will sound for the length of the +5V pulse provided, use the PWM output of an LFO module  and then you can adjust this time on that module.
* **CV** - The module will sound to the volume (voltage) and length of the signal provided, e.g. an ENV module will let you do full attack, decay, sustain and release shaping.
* **BUS GATE** - This is actually an output generated from the Master module from Midi, it will be zero or +5V when a relevant key is pressed on a connected keyboard.

## Outputs

also see Bus Gate above.

* **OUT** (x3) - the audio signal output.
* **TRIG** - the trigger from trig in is output here, 
* **MULT** -  a passive mixer/splitter completely separate to the module circuits.

## Controls

* **VCA/LP GATE** switch - this turns the filter circuit on or off. Useful for seeing what is actually being done to the sound, or if you are short of VCAs.
* **CV LEVEL**  knob -  This controls to amount the CV input affects the volume of the sound, too far anticlockwise and there will be no sound unless one of the other inputs is used as well.

## Patch Suggestions


It can be used as a straight VCA triggered by the gate, CV and/or trig inputs in any combination or singly; this can be very useful for polyrhythmic effects.  One more CV/trigger input than the regular AE VCAs. This works in either LP or VCA mode. 

It is good for adding "Punch" to percussive sounds, especially the AE [[kick.md | KICK]] module.

It can save using a filter and VCA module if it does what you want to the sound, with less patching and CV/ triggers then needed also.

The classic running a held chord, ([[solina.md | SOLINA]]), through a gate triggered in time to the drum pattern is very good with this module, in either mode. The  Gate input is really useful for this as you can then adjust how long the chord is heard for - if your trigger is too short, put through a ENV module and use that output into the gate or the CV input on this module.

This module does not have CV control of resonance, but it can be created by putting one of the outputs through a VCA whose level is controlled by the CV modulation source (e.g. LFO or envelope), then feeding the VCA output back into this module - you will need a mixer module, or use a **mult** if necessary as there is only one input. Be aware you will not be able to adjust the frequency like on a regular filter but it can still be useful/ interesting.... Process the sound further before feeding it to the VCA?

## Sound Examples

AE Modular filter comparison:
%embed% https://www.youtube.com/watch?v=ZY9VkSyMrik %%
