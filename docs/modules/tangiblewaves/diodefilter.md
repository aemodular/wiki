# DIODEFILTER

[[img|modules/images/DIODEFILTER.png|100]]

[[ https://www.tangiblewaves.com/store/p151/DIODEFILTER.html | View Product Page]]

The DIODEFILTER is an adaption of the well-known diode ladder filter that became most popular by Roland's TB-303 bassline. And here it is for the AE modular!

Module power consumption: 3 mA

## Inputs

* **In H** - Input for lower level signals
* **In L** - Input for higher level signals
* **CV1** -  0-5V control voltage input whose effect level is controlled by the CV1 knob.
* **CV2** - 0-5V control voltage input, with no controlled attenuation within this module.
* **Accnt1** -  Boosts the filter cutoff/volume when a voltage is applied.
* **Accnt2** - Boosts the filter cutoff/volume when a voltage is applied.

## Outputs
* **LP OUT** (x2) -  The audio signal after being filtered. 
* **Bus CV** -  Voltage produced via a midi keyboard connected to the master module.
* **Bus CTRL** - Voltage produced via a midi keyboard connected to the master module.

## Controls
* **FREQ** - Sets the Cutoff Frequency of the filter
* **CV1** - Controls the amount the CV1 input affects the cutoff frequency of the filter.
* **RESONANCE** - the more this level is increased the more the frequencies around the cutoff frequency are enhanced/ amplified.

## Patch Suggestions

It shouldn't really need saying that this is a great filter for bass lines! Try Sawtooth and PWM waveforms for the most obvious effect....

Having an LFO **not** synced with the tempo, KK's [[keuerslagerkurt-sloth.md| Sloth]] or even an envelope on a slow trigger to vary the cutoff frequency (from gentle to mad!) is great, especially on bass....

This module does not have CV control of resonance, but it can be created by putting one of the filter outputs through a VCA whose level is controlled by the CV modulation source (e.g. LFO or envelope), then feeding the VCA output back into the same filter - you may need a mixer module, or use a mult if necessary as the levels on the 2 inputs are different. Try the low input for the feed back from the VCA first.... 
