# 2VCA

[[img|modules/images/2vca.png|100]]

[[https://www.tangiblewaves.com/store/p11/2VCA_.html | View Product Page]]

2VCA contains two separate VCA (voltage controlled amplifiers); the classic module to shape the volume of a sound that is fed to IN by a control voltage, e.g. from an ENV to the CV input.  If zero voltage is provided, the VCA stays closed and  the IN signal doesn't go through.  As the CV rises so does the signal strength going through to the output.

A switch determines the operation mode (DC/CV or audio), choosing the right position can reduce/avoid pop's with short attack envelopes.

An additional knob for each VCA attenuates the level, if necessary.​  

Module power consumption: 5 mA

There is also a [[4VCA|4VCA]] module available.

## Inputs
* **IN1** - accept audio or control signal to be amplified or attenuated
* **CV1** - accept CV for amplitude modulation of IN1 signal.
* **IN2** - accept audio or control signal to be amplified or attenuated
* **CV2** - accept CV for amplitude modulation of IN2 signal

## Outputs
* **OUT 1** (2) - amplified or attenuated signal from IN1
* **OUT 2** (2) - amplified or attenuated signal from IN2
* **BUS CV** - CV signal from MIDI
* **BUS CTRL** - CTRL signal from MIDI (CH1 - CC20)
* **MULT** - Passive signal multiplier, all sockets are bi-directional

## Controls
The controls are grouped into 2 identical groups marked with the number 1 and 2 for each of the individual VCA. We only describe the controls for one group as they work exactly the same for the other group.

* **CV Knob** - signal level attenuation.
* **AUDIO/DC Switch** - switch between AUDIO or DC mode.

## Patch Suggestions

This tutorial explains the various uses of a VCA:
%embed% https://www.youtube.com/watch?v=hLWA_exujZw %%

As stated above, the most common use is patching an oscillator to any IN and an envelope to the corresponding CV.  

But VCAs may be used for an infinite number of purposes.  They can be used to modulate any signal's amplitude, be it control or audio rate.  Here are some ideas:

- Patching an audio signal both into the IN and the CV inputs results in AM synthesis.  
- Patching separate audio signals to  VCAs/CV through a [[4attmix.md|mixer]] you get a wave shaper.
- Patch an [[2lfo.md|LFO]] to IN1 and another LFO to CV1.  The second LFO then modulates the amplitude of the first one, providing some variety to it.

VCAs are simple and absolutely versatile.  That's why "you can never have too many VCAs".
