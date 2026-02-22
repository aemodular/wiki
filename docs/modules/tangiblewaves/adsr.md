# ADSR

[[img|modules/images/ADSR.png|100]]

[[https://www.tangiblewaves.com/store/p96/ADSR.html | View Product Page]]

The ADSR module offers the classic four-stage envelope (Attack, Decay, Sustain, Release) which accepts CV control over each of the stages. For the time values (A, D, R) the value set by the knob can be increased to five times the duration by the corresponding CV value. For the Sustain value the knob and CV value are simply added.

The envelope is also loop-able by patching the end output into the gate input, becoming a very adjustable LFO.

Module power consumption: 10 mA

## Inputs
* **GATE** - gate or trigger for envelope
* **A CV** - accept CV for attack stage of envelope 
* **D CV** - accept CV for decay stage of envelope 
* **S CV** - accept CV for sustain stage of envelope (value from knob will be added!) 
* **R CV** - accept CV for release stage of envelope

## Outputs
* **OUT** - CV from envelope 
* **END** - a trigger CV generated when the envelope has finished 
* **MULT** - unbuffered multiple, unconnected from the module's circuitry 
* **B. GATE** - Gate signal from MIDI via the Master module

## Controls
* **ATTACK** Knob - change the attack time from 0 (percussive) to either 2 or 16 seconds depending on FAST/SLOW switch 
* **DECAY** Knob - change the decay time from 0 to either 3 or 24 seconds depending on FAST/SLOW switch 
* **SUSTAIN** Knob - change the decay time from 0 to either 3 or 24 seconds depending on FAST/SLOW switch 
* **RELEASE** Knob - change the decay time from 0 to either 3 or 24 seconds depending on FAST/SLOW switch 
* **GT/TR** Switch - switch between GATE or TRIGGER mode. When in GT mode the envelope will rise according to the ATTACK knob &/or the A CV value(s) and stay open on the sustain level until the gate closes. Then the envelope will lower according to the Release &/or R CV value(s). In gate mode, the envelope CV value is, in effect, set by the sustain knob &/or S CV level. When in TR mode the attack part of the envelope will play out until it reaches full level and then initiate release part.  
* **SLOW/FAST** Switch - In slow mode the attack, decay and release times are longer than in fast mode.
* **MAN TRIG** Button - sends a trigger signal to start the envelope. Always acts like a trigger even when GT mode is active. **(note: the picture above does not show the trigger button)**

## Patch Suggestions

Envelopes are one of the basic modulation sources in subtractive synthesis. They are usually used to modulate amplitude, pitch or a filter. 

The CV control of the envelope is extremely useful for doing characteristics like shorter release for higher pitch notes, lowering the sustain volume on higher (or lower) pitch notes so the sound stays more even in the mix - you may need an inverter like on the [[2cvtool.md|2CVTOOL]].

If you are wanting to do tremolo (volume) on a sustained note then this module is ideal; put the control CV (e.g. LFO, [[joystick.md|JOYSTICK]] or Midi CC20 via master module) into the sustain CV and away you go - you are likely to need an attenuator...

One fun thing to do is to have an LFO or [[sample-and-hold.md|S&H]] doing a slight variation (i.e. use an attenuator) to the decay &/or release CV, nice on most things and can be brilliant on a percussion sound.

The ADSR can also trigger itself when the output END is patched into the GATE input. Depending on the values of ATTACK and DECAY this can make it into a slow moving LFO (low frequency oscillator) or oscillator in audio range, with varied waveforms which can, of course, be modulated via CV on this module. This can be excellent.....

Apart from the additional stages it is very similar to the [[2env.md|2ENV]] module.
