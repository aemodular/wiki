# PAN / XFADE

[[img|modules/images/PAN_XFADE.png|100]]

[[ https://www.tangiblewaves.com/store/p213/PAN%2FXFADE.html | View Product Page]]

This module is a routing processort for audio or CV signals. In PAN mode it moves one input signal smoothly between the left and right output channels. In XFADE mode it takes two input signals and blends them into a single output. The panning and fading can be controlled manually via the knobs or via CV.

Module power consumption: ? mA

Module width: 1 unit

## Inputs
* **IN1/L** - first or left input signal
* **IN2/R** - second or right input signal
* **POS CV** - CV input to control panning or cross fading. In Pan mode: 0V moves the signel to the left channel and 5V to the right channel. In XFADE mode: 0V makes the first signal 100% , 2.5V makes both signals 50% and 5V makes the right signal 100%.

## Outputs
* **OUT L** - Left output channel
* **OUT R** - Right output channel
* **BUS CTRL** - If a MIDI controller is connected then this output returns the position of the MOD Wheel (in most cases)

## Controls
* **POSITION/XFADE** - Manual control for panning and cross fading. In PAN mode: Left moves the input signal to the left channel and full right moves the signal to the right channel. In XFADE mode: Left makes the first signal 100% and full right makes the right signal 100%. Any position between achieves a smooth blend or mix.
* **AUDIO/CV** - This switch controls whether the incoming and outgoing signals are either treated as CV (0-5V) or Audio (centred around 2.5V).
* **XFADE/PAN** - changes the routing behaviour between PAN or XFADE
* **CV DEPTH** - Attenuator for the incoming POS CV signal. This is very useful to control "how far" a signal travels to the left or right in PAN mode or how much a signal should stay in the mix in XFADE mode.

## Patch Suggestions
This module makes it easy to create movement of sound in space by either moving to the left or right speakers. It's also a great module to achieve smooth fades and mixes of thwo sounds which can be controlled by an LFO.
