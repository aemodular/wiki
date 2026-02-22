# 4ATTMIX

[[img|modules/images/4attmix.png|100]]

[[https://www.tangiblewaves.com/store/p53/4ATTMIX.html | View Product Page]]

This module offers four separate attenuators to reduce signal strengths and also comes with a mix output.

There is the same module with faders rather than knobs, which can be really useful for audio mixing live etc.
[[4attmix-fader.md|4ATTMIX Fader]]

Module power consumption: 2 mA

## Inputs

* **IN 1-4** - signal inputs for each attenuator


## Outputs

* **OUT 1-4** - individual attenuator outputs
* **MIX** - The 4 **In** signals combined, dependent on the controls and switch settings below.
* 2x **+5V** - static 5V outputs
* **Bus Ctrl** - Midi CC20 CV from Master I/O module
* **Bus Gate** - gate signal from the Master I/O MIDI to CV converter 

## Controls

*  **LEVEL 1-4** potentiometers - reduce the strength of the incoming signals 1-4
*  **MIX** switches - adds/ removes the relevant input signal from the mix outputs.
*  **DC AUDIO** switch - switches the module between DC-coupled (0-5V) and AC-coupled (signal centered around 2.5V, sometimes useful for audio signals) operation


## Patch Suggestions

- You can create a tweakable control voltage by patching a +5V output into an input then attenuate it with the relevant knob to suit your needs. The output is then patched to what you are wanting to control. This is useful when another module offers a CV input which you would like to control with a knob and doesn't have a CV level already built in, (e.g the PWM 1 and 2 inputs on the [[2oscd.md | 2OSC/d module]]).

- The individual attenuator outputs and the mix output work at the same time, so you can have a mix of different control voltages as well as their individual signals for further use or processing by other modules.
