# SLEW / EDGE
[[img|modules/images/slew.png|100]]

[[ https://www.tangiblewaves.com/store/p84/SLEW%2FEDGE.html | View Product Page]]

The SLEW/EDGE module combines the function of a slew limiter for CVs and a CV change detector in one module. Slew is a method of slowing the rate of change of a CV signal, i.e. the changes are less abrupt thus being useful for things like portamento. The slew operation can be activated individually for rising and/or falling CVs.

The other function is edge detection, which can generate various gate / trigger output signals depending on the rise and fall of the input CV; this information is available on different outputs.

Module power consumption: 5 mA

## Inputs

* **IN** - accepts the CV or audio signal which will be shaped
* **↑ GATE** -  gate signal (+5V) that activates slew on rising input CV, if the slew ↑ switch is off.
* **↓ GATE** -  gate signal (+5V)  that activates slew on falling input CV, if the slew ↓ switch is off.
* **⇅ GATE** -  gate signal (+5V) that activates slew for all input CV changes, this is useful if you have one of the switches below set to slew on, and want the other to be active sometimes as well.
* **B.CV** -  MIDI CV signal from bus (from Midi keyboard via Master module)
* **B.GATE** -  MIDI Gate signal from bus (from Midi keyboard via Master module)

## Outputs

* **SLEW OUT** - The slew processed input signal 
* **⇅** -   this output is high (+5V) if the last input change was a rising voltage and low (0V) if the input was falling
* **PULSE ↑** - this sends a short pulse each time the input voltage is rising
* **PULSE ↓** - this sends a short pulse each time the input voltage is falling
* **PULSE ⇅** - this sends a short pulse each time the input voltage is rising or falling

## LED Indicators

* **LAST ↑** - this LED lights up if the last input voltage change was rising
* **LAST ↓** - this LED lights up if the last input voltage change was falling
* **PULSE ↑, PULSE ↓** -  this LED reflects the PULSE ↑ / PULSE ↓ outputs

## Controls

* **SLEW ON ↑** - activates slew on rising input voltages, if this switch is on the gate input has no effect.
* **SLEW ON ↓** -  activates slew on falling input voltages, if this switch is no the gate input has no effect.
* **LOG/LIN** -  changes the characteristic of the voltage change between linear and logarithmic, the latter gives bigger changes as a rule.
* **SLEW TIME** - this knob sets the rate the CV will change, from almost instant to some changes will not have time to show at the output!

## Patch Suggestions

If the CV is used e.g. for controlling an [[2oscd.md | oscillator]], you can get portamento between pitch CV changes. With the two switches (or the Gate ins), it can be controlled to be only on rising or falling CVs or both. Just patch the cable that was going to the oscillator to this module's input, and the Slew Out to the Oscillator.

The Slew detector can be useful if using the [[sample-and-hold.md | S&H module]] for modulation; rather than jumps it will smooth the changes between the different levels, particularly good on filter modulation, unless you want sudden changes. 

This module can be good on a [[2lfo.md | LFO]] to , in effect, vary the wave shape - try with a square wave first and you will understand more quickly.

This module can be a way of making an LFO more of a master clock, with the various edge outputs triggering at different times in the waveform cycle.  **⇅**,    **PULSE ↑**,  **PULSE ↓** & **PULSE ⇅** - experiment, very good for a percussion track but one(or more) outputs could be the clock on the [[seq8.md | sequencer module]]....

%embed% https://youtu.be/1Kx6sTYoG1Y %%
