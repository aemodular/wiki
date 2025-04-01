# uWNDCOMP

[[img|modules/images/uWNDCMP.png|100]]

[[https://www.tangiblewaves.com/store/p200/uWNDCOMP.html | View Product Page]]

This module is a CV and Audio processor which creates gate signals when certain levels are reached by the input signal. These levels are defined as a "window" by an offset and window size (level). Gates are set to on when the input signal is either below, within or above the "window".

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

## Inputs
* **IN** - The input signal, either CV or Audio
* **OFS CV** - sets the offset (lower level) of the window
* **WS CV** - sets the window size

## Outputs
* **OVR** - This gate is on when the input signal is above the window
* **IN** - This gate is on when the input signal is within the defined window
* **UND** - This gate is on when the input signal is below the window

## Controls
* **OFFSET** - sets the offset of the window
* **WINDOW SIZE** - sets the window size

## Patch Suggestions
The behaviour of the uWNDCOMP can be used for a lot of creative purposes, like triggering something at a certain level of a CV signal from envelope, LFO or whatever, self-modfying sequences, mangling audio signals by mixing the input signal and the outputs, controlling FX chains dynamically together with a switch module like the 3VCSWITCH etc. You can think of it as a kind of analog controlled logic module.
