# SVFILTER (STATE VARIABLE)
[[img|modules/images/svfilter.png|100]]

[[ https://www.tangiblewaves.com/store/p61/SVFILTER_.html | View Product Page]]

This filter module is a classic state variable filter.

Two signal inputs for different signal levels control the "drive" of the module.  

Compared to the wasp filter this filter has a significant self resonance and also a very quick response to cutofffrequency changes.

Module power consumption: 2 mA

## Inputs
* **IN H**  - this input is for higher level signals.
* **IN L**  - this input adds some gain to give a higher signal level of the module circuitry, (i.e. low input signals).
* **CV 1** - control voltage for cutoff frequency, this will affect all three filter curves
* **CV 2** - control voltage for cutoff frequency, this will also affect all three filter curves

## Outputs
* **LP** - low pass filter output
* **BP** - band pass filter output
* **HP** - high pass filter output
* **BUS CV** - this sits below the input jacks on the left side and will output CV pitch from a connected MIDI device
* **BUS CTRL** - this sits below the input jacks on the left side and will output the MIDI control message from a connected MIDI device (CH1 - CC20)

## Controls
* **FREQ Knob** - cuttoff frequency
* **CV 1 Knob** - control voltage attenuator
* **RESONANCE Knob**

## Patch Suggestions

First check out the excellent tutorial video by RSKT:
%embed% https://www.youtube.com/watch?v=6olW3JRty60 %%

Here's a patch for a low pass gate:
* Any signal -> SVFILTER (IN L)
* SVFILTER (LP) -> VCA (IN1)
* ENV (OUT) -> SVFILTER (CV1)
* **the same** ENV (OUT) -> VCA (CV1)

This module does not have CV control of resonance, but it can be created by putting one of the filter outputs through a VCA whose level is controlled by the CV modulation source (e.g. LFO or envelope), then feeding the VCA output back into the same filter module - you may need a mixer module, or use a **mult** if necessary as the inputs have different levels. Try the low input for the feed back from the VCA first....

It can be interesting to combine the different outputs from the filter as they each create different sonic variation with the cutoff/resonance etc.  This can be taken further by the different outs getting different treatment before being combined again. A good use for this is the [[delay.md | Lo-Fi delay]] on the high pass &/or Bandpass filters to have a less "muddy" bottom end.

## Sound Examples

AE Modular filter comparison:
%embed% https://www.youtube.com/watch?v=ZY9VkSyMrik %%
