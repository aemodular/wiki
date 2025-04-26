# uFM

[[img|modules/images/uFM.jpeg|100]]

[[https://www.tangiblewaves.com/store/p221/uFM.html | View the Product Page]]

This micro module is a two operator FM oscillator with either sinewaves or 4 other waveform combinatios which can produce a wide range of sounds. It can be controlled via CV or via MIDI when combined with IMDI HEART or Wonkystuff's mb/1 MIDI source modules.

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: 7...12 mA

## Inputs
* **CV** - controls the pitch of the oscillator
* **IMDI** - MIDI signals to control the various parameters of the FM operators as well as pitch
* **MD** - CV control over the depth of the modulation oscillator; the FM "strength".
* **MLT** - CV control for the multiplier of the modulator oscilaltor

## Outputs
* **OUT** - the sound of the oscillator
* **SO** - a squarewave sub oscillator which is pitched one octave lower than the main oscillator; alternatively gate out (for IMDI control)
* **MX** - both main sound and sub oscillator mixed together

## Controls
* **FREQ** (knob) - Controls and offsets the frequency of the oscillator
* **OCT 0/+2** (switch) - allows to add 2 octaves to the main pitch
* **MOD DPT (knob) -  Set the depth of the modulation. Any CV control will be added to this setting. Turn it all the way to the left (set to 0) for pure basic waveform.
* **MODE** - Selects between 5 different basic waveforms for carrier and modulator; indicated by different LED colors. Red: classic FM with two sinewaves; green: triangle carrier, other colors/blink patterns: combination of complex waveforms for carrier/modulator.

## IMDI operation

**IMDI data rate**

IMDI allows two different data rates; standard (31250, identical with MIDI data rate) and highspeed(230400). Which speed setting is chosen for the module is indicated at startup: When the LED flashes green for a few times, the standard speed is selected, When the LED flashes red for a few times, the module is in highspeed IMDI mode. To change the speed, hold the MODE button pressed at startup and release after the initial flashes have indicated the new speed.

**Note / pitch control**

Incoming MIDI notes set the modules pitch. THe MIDI channel of the message is ignored; when use with IMDI HEART as source for IMDI messages, the notes are defined by the output settings of thr IMDI HEART module.
MIDI notes are added to the pitch set by the FREQ knob and CV (although, a mix of CV and IMDI pitch control is not recommended).
Pitchbend messages are accepted, by default in a range of +/- 1 octave. The pitchbend range can be changed by a MIDI RPN message; see controller chart below.

**Program change**

MIDI program change messages change the selected waveform; valid program numbers are 0...4

**Sound control**

The following MIDI controllers are used for controlling the modules operation:

|MIDI controller #|Function|
|--------------|-----------|
|70 (Sound Controller 1) |Multiplier|
|74 (Sound Controller 5) |Modulation depth|
|80 |SUB output mode: value 0 = suboscillator; value 64 or higher: SUB operates as gate output|
|RPN 0000|Set pitchbend range|

By this, you have full control over the module behaviour e,g, when controlling from a DAW or a MIDI hardwdare controller.


## Patch Suggestions

FM synthesis lends itself to bell sounds in particular, and brings a whole different colour palette to regular oscillators. Very useful for percussion also. FOr metallic and percussion sounds, the fixed frequwncy mode of the modulator operator is especially useful.

And not to forget FM bass sounds!

## Patch Suggestions
