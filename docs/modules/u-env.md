# uENV

[[img|modules/images/uENV.png|100]]

[[https://www.tangiblewaves.com/store/p198/uENV.html | View the Product Page]]

This is a single envelope generator which can be switched between Attack/Release (AR) and Attack/Decay (AD) as well as linear or exponential output. The attack and decay (release) times can be between 0.01 and 60 seconds and can both be controlled via CV.

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: ? mA

## Inputs
* **GATE** - This can be either a gate or trigger depending on the mode selected and starts the envelope action.
* **CV A** - You can control the length of the Attach phase with CV
* **CV D** - You can control the length of the Decay (Release) phase with CV

## Outputs
* **OUT** - the output of the envelope
* **END** - a trigger signal which is sent when the envelope has reached the end of its cycle

## Controls
* **ATTACK** (knob) - Controls the length of the attach phase
* **DECAY** (knob) - Controls the length of the decay (release) phase
* **TRG CONF** (button) - short press triggers the envelope, long press and hold enables the config settings. The multicolor LED displays different colours depending which mode has been selected.


## Patch Suggestions
This module behaves very much like the [[2env.md | 2ENV module]]. Apart from using it as an envelope it can also be turned into an LFO by patching the END trigger into the GATE input.
