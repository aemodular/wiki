# VCO
[[img|modules/images/vco.png|100]]

[[ https://www.tangiblewaves.com/store/p6/VCO_.html | View Product Page]]

The voltage-controlled oscillator (VCO) is a typical analog audio oscillator with 1V/Oct pitch tracking for musical purposes. VCOs are one of the most basic audio sources in a synthesizer. Their sound is usually further shaped and refined by filters, wavefolders, voltage-controlled amplifiers (VCAs) and other audio effects.

Module power consumption: 16 mA

## Inputs
* **CV1** - control voltage input for pitch frequency (1V/Oct)
* **CV2** - another control voltage input for pitch frequency (1V/Oct)
* **MOD** - control voltage input for modulating either frequency or the square wave's pulse width
* **PW** - dedicated pulse width modulation control voltage input
* **SYNC** - resets the waveform when a trigger signal is received

## Outputs
* 2x **RAMP** - ramp/sawtooth wave output
* 2x **TRI** - triangle wave output, quieter than the other outputs so it might need amplification via the [[2signalamp.md | 2SIGNALAMP]] module for example
* 2x **SQUARE** - square wave output
* **BUS CV** - pitch control voltage form the [[master.md| MASTER I/O]] module's MIDI-CV converter 

## Controls
* **MOD DEPTH** Potentiometer - attenuator for the MOD input control voltage
* **MOD DEPTH** Switch - switches the MOD control voltage target between frequency and pulse width
* **COARSE** - coarse tuning of the VCO frequency
* **FINE** - fine tuning of the VCO frequency
* **PULSEWIDTH** - manual control over the square wave's pulse width, control voltage modulation is added to this potentiometer setting

## Patch Suggestions
RSKT made this super comprehensive introduction video with some very nice demo patches:
%embed% https://youtu.be/x_66mesl7Ls %%

This video by Synths & Things explains the ins and outs of this module really well:
%embed% https://youtu.be/vBKg-7lSAus %%

This video by The Tuesday Night Machines demonstrates frequency modulation sounds:
%embed% https://www.youtube.com/watch?v=jVtANkhEBGY %%
