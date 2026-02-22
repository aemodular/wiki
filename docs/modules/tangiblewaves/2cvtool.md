# 2CVTOOL

[[img|modules/images/2CVTOOL.png|100]]

[[https://www.tangiblewaves.com/store/p93/2CVTOOL.html | View Product Page]]

The 2CVTOOL offers two separate units for offset, attenuation and inversion of signals, also known as "attenuverter". This can be useful for all kinds of purposes.

Module power consumption: 2 mA

## Inputs
* **IN 1** - accepts any CV or audio signal
* **IN 2** - accepts any CV or audio signal

## Outputs
* **Bus CV** - CV signal from MIDI (CC20)
* **Bus CTRL** - CTRL signal from MIDI
* **OUT 1** (x2) - attenuverted and offset signal from IN1
* **OUT 2** (x2) - attenuverted and offset signal from IN2
* **MULT** - passive multiple, not connected to the module's circuitry

## Controls
* **OFFSET 1** - Potentiometer to dial in the offset voltage for channel 1.
* **LEVEL 1** - Potentiometer to select the attenuation. This is a bipolar control in that it can reduce the incoming voltage or increase it.
* **OFFSET 2** - Potentiometer to dial in the offset voltage for channel 2. This will be added to the incoming CV.
* **LEVEL 2** - Potentiometer to select the attenuation. This is a bipolar control in that it can reduce the incoming voltage or increase it.

## Patch Suggestions

This is (currently) one of the few modules that can invert a signal so can be invaluable. For example; you want a filter to close as a key is held and then open once released the easiest way to do this is to invert the CV out from an envelope generator. Another common example is inverting a trigger so something else is making noise when the trigger is not "on", useful for rhythm patches...

This module can be useful to provide a knob control to a parameter that doesn't otherwise have one. For example CV2 on the [[ms20-filter.md|MS20 filter module]].

It can also be good with the [[joystick.md|JOYSTICK]] module, for instance if you want a CV being controlled by that also have another adjustment.

Currently only the [[mixconsole.md| Mixconsole]] has CV control of the channel input levels on a mixer; you can use the 2CVTOOL to set a minimum level with the offset, and then the modulation amount (i.e. volume) is controlled by this module's level knob. Excellent with Envelopes but works with LFOs as well....
