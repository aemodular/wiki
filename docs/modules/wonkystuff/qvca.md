# wonkystuff qvca — four channel Voltage Controlled Amplifier

[[img|/modules/images/qvca.png|100]]

* [[https://wonkystuff.co.uk/qvca.html | Main shop page]]
* [[https://lectronz.com/products/qvca | EU shop page]]

## Overview

* Module format: single-width, full height
* Power consumption: ??mA

This is quad VCA which is designed only for audio use (unlike the standard Tangible Waves [[2vca.md | 2VCA]] which can be applied to both audio and CV signals).

## Controls

None

!> **Note** Internally there are 4 small trimmers which can be used in case control signals start breaking through into the audio signal. Simply pop off the faceplate and carefully adjust them until the CV signal breakthrough is minimised. I find this easiest to do with a square wave CV.

## Connectivity

Fairly standard for a VCA, except for tyhe additional *inverted CV* outputs.

## Inputs

* **CV 1-4** - accepts an incoming control voltage, 0 volts is no signal to the output(s), +5V is the loudest signal.
* **VCA  1-4** - accepts the  CV or audio signal you want to control

## Outputs

* **CV 1-4** - the CV is inverted (i.e "rotated" around 2.5V); if input is 0, the output will be 5V. If the input is 3.5V the output will be 1.5V
* **VCA  1-4** -  Individual outputs of the 4 channels, the level set by the relevant CV input.

## Patch Suggestions

This is a good module to do stereo with, as the panning can be CV controlled.  Send to the CV output of the left or right channel to the CV input of the channel doing the other side.

This feature can also be used to produce "Ducking". This is when a sound is reduced/removed when another sound plays. This is most often seen in radio/TV broadcasts when the announcer starts to speak the music will quieten. Like most effects it can be subtle or blatant.  Send the CV output of the sound you want to play to the CV input of the sound you want to quieten/silence. Fiddle with the levels/CVs to get the effect you want. In some cases you may need an attenuator/mixer or a module like the [[/modules/tangiblewaves/2cvtool.md | 2CVTOOL]].

The 5th Volt has a video about this module

%embed% https://www.youtube.com/watch?v=gheNK7QXFX4 %%
