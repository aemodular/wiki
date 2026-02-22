# MS 20 FILTER
[[img|modules/images/MS20FILTER.png|100]]

[[ https://www.tangiblewaves.com/store/p87/MS20_FILTER.html | View Product Page]]

This filter module is a variant of the Korg MS20 filter. With a switch it can be turned into either lowpass or highpass filter mode, but not both at the same time.

Module power consumption: 3 mA

## Inputs
* **IN H** - this input is for higher level signals.
* **IN L** - this input adds some gain to give a higher signal level of the module circuitry, (i.e. low input signals).
* **CV 1** - accepts CV control for cutoff frequency
* **CV 2** - additional CV control for cutoff frequency

## Outputs
* **OUT** - the output of the filtered signal
* **MULT** - an unbuffered multiple
* **BUS CV** - this sits below the input jacks on the left side and will output CV pitch from a connected MIDI device
* **BUS CTRL** - this sits below the input jacks on the left side and will output the MIDI control message from a connected MIDI device.

## Controls
* **FREQ Knob** - cuttoff frequency
* **CV 1 Knob** - control voltage attenuator
* **RESONANCE Knob** - sets the amount of amplification of the frequencies on/around the cut off point.
* **LP/HP Switch** - filter type lowpass / highpass

## Patch Suggestions

The filter can be used just like any other filter in the AE range, however it offers a very pronounced and beautiful resonance that goes quickly into self resonance. It is excellent for lead sounds and bass.

This module does not have CV control of resonance, but it can be created by putting one of the filter outputs through a [[2vca.md |VCA]] whose level is controlled by the CV modulation source (e.g. LFO or envelope), then feeding the VCA output back into the same filter - you may need a mixer module, or use a **mult** if necessary as the levels on the 2 inputs are different.  Try the low input for the feed back from the VCA first....

The MS20 Filter is adept at producing bass/kick drum sounds.  Use the self resonance with the cutoff tuned low to your desire. To boost the bottom end, feed in a Sine wave ([[wavetables.md | WAVETABLES]], VCO or [[fmos.md | FMOS]]), again tune to what you want. From the filter; a VCA with a short attack is needed; the [[lopag.md | LOPAG]] module is good as it can further enhance the sound.  To enhance the initial "thump" put a very short envelope into the CV1 input, the amount of "thump" can then be controlled by the CV1 Knob. These Kick drums are worth sampling to free up your AE for other duties!

## Sound Examples

AE Modular filter comparison:

%embed% https://www.youtube.com/watch?v=ZY9VkSyMrik %%
