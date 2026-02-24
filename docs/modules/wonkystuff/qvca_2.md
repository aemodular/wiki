# wonkystuff qvca v2 — four channel Voltage Controlled Amplifier

[[img|/modules/images/qvca2.png|100]]

* [[https://wonkystuff.co.uk/qvca2.html | Main shop page]]
* [[https://lectronz.com/products/qvca-2 | EU shop page]]

## Overview

* Module format: single-width, full height
* Power consumption: ??mA

This is a re-working of the orginal qvc with updated PCB routing and front panel. It's a quad VCA which is designed only for audio use (due to signal decoupling CV signals are not able to be used).

The novel element of the qvca is the additional output of inverted control-CVs, this allows a single CV (e.g. from an LFO) to raise the volume of one VCA whilst reducing the volume of another. Check the video below for a demo.

## Controls

None

!> **Note** Internally there are 4 small trimmers which can be used in case control signals start breaking through into the audio signal. Simply pop off the faceplate and carefully adjust them until the CV signal breakthrough is minimised. I find this easiest to do with a square wave CV.

## Connectivity

Fairly standard for a VCA, except for tyhe additional *inverted CV* outputs.

### Inputs

* **CV 1-4** - accepts an incoming control voltage, 0 volts is no signal to the output(s), +5V is the loudest signal.
* **VCA 1-4** - accepts the audio signal to be controlled

### Outputs

* **CV 1-4** - the CV is inverted (i.e "rotated" around 2.5V); if input is 0, the output will be 5V. If the input is 3.5V the output will be 1.5V
* **VCA  1-4** -  Individual outputs of the 4 channels, the level set by the relevant CV input.

## Patch Suggestions

See suggestions for [qvca](/modules/wonkystuff/qvca.md)