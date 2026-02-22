## FILTER (WASP TYPE)
[[img|modules/images/filterwasp.png|100]]

[[ https://www.tangiblewaves.com/store/p9/FILTER_%28wasp_type%29.html | View Product Page]]

This filter module is a variant of the Wasp filter, a quite strange circuit used  first in the EDP Wasp synth end of the seventies, which abuses digital chips in an analog way leading to the characteristic sound of this filter type. In this module, vactrols are used for controlling the filter frequency.​

__NOTE: This module has been upgraded.  Version 1 has only one signal input (IN), while version 2 has two signal inputs for high-pass and low-pass.  See **inputs**.__

Module power consumption: 3 mA

## Inputs
* **IN** - (v1 only) audio signal going through the filter
* **IN H** (v2 Only) - this input is for higher level signals.
* **IN L** (v2 Only) - this input adds some gain to give a higher signal level of the module circuitry, (i.e. low input signals).
* **CV 1** - accepts CV control for cutoff frequency, this will affect all three filter curves
* **CV 2** - additional CV control for cutoff frequency, this will also affect all three filter curves

## Outputs
* **LP** - low pass filter output
* **BP** - band pass filter output
* **HP** - high pass filter output
* **BUS CV** - this sits below the input jacks on the left side and will output CV pitch from a connected MIDI device
* **BUS CTRL** - this sits below the input jacks on the left side and will output the MIDI control message from a connected MIDI device.

## Controls
* **FREQ Knob** - cuttoff frequency
* **CV 1 Knob** - control voltage attenuator
* **RESONANCE Knob**

## Patch Suggestions

Here's a patch for a low pass gate:
* Any signal -> WASP (IN L)
* WASP (LP) -> VCA (IN1)
* ENV (OUT) -> WASP (CV1)
* ENV (OUT) -> VCA (CV1)

This module does not have CV control of resonance, but it can be created by putting one of the filter outputs through a [[ 2vca.md | VCA ]] whose level is controlled by the CV modulation source (e.g. LFO or [[ 2env.md | envelope]]), then feeding the VCA output back into the same filter module - you will need a mixer module, (e.g. [[ 4attmix.md | 4ATTMIX]]), or use a **mult** if necessary as there is only one input.

## Sound Examples
Check out this video by RSKT about the many uses of the WASP filter:
%embed% https://www.youtube.com/watch?v=2rxo45xVLog %%

This video below shows a comparison between the AE Modular WASP filter and the original.
%embed% https://youtu.be/kGIT-D9sueo %%

AE Modular filter comparison:
%embed% https://www.youtube.com/watch?v=ZY9VkSyMrik %%
