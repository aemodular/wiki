# µOSC
[[img|modules/images/uOSC.png|100]]

[[https://www.tangiblewaves.com/store/p220/uOSC.html | View Product Page]]


This micro module is a tiny, multifunctional oscillator module that offers a variety of waveforms:
* Sawtooth
* Pulse
* Triangle/Sine
* three different wavetables
It offers knobs and CV control for pitch and shape (variations of the base waveform). Additionally, it can be controlled via IMDI and supports note/pitch, pitchbend, Assignable controller for shape and pitchbend range can be set via IMDI/MIDI by the specified controller message.

This module needs to be installed on the [[u-base.md | µBASE]] module or other micro-module carriers, like uBASE QS2 or uCASE!

Module power consumption: 7...12 mA

## Inputs

* **CV** - CV control for pitch, 1V/octave
* **IMDI** - IMDI messages for pitch, shape and others
* **SHP** - CV for controlling the shape
* **CV2** - additional CV input for pitch control

## Outputs

* **OUT**  - the audio output
* **SO**  - suboctave as square wave; this can be configured as gate output which is useful when the module is controlled by IMDI
* **MX**  - mix of audio out and suboctave

## Controls

* **FREQ** Pot - controls the pitch
* **SHAPE** Pot - modifies the selected waveform in different ways, depending on the selected waveform
* **0 / +2** switch - changes the pitch by 2 octaves
* **mode** button - cycles through the available modes / waveforms, displayed by the LED:
red: sawtooth, green: pulse, orange: triangle/sine, green/orange blink: wavetable 1,  red/orange blink: wavetable 2, orange-blink: wavetable 3

## Shape function
* in Sawtooth mode: full left is a single sawtooth, the further right, increasingly detuned double sawtooth
* in Pulse mode: sets the pulsewidth
* in triangle/sine mode: in the left half, triangle wave, in the right half sine wave
* in wavetable modes: scans through the wavetable waveforms

## IMDI operation

**IMDI data rate**

IMDI allows two different data rates; standard (31250, identical with MIDI data rate) and highspeed (230400). Which speed setting is chosen for the module is indicated at startup: When the LED flashes green for a few times, the standard speed is selected, When the LED flashes red for a few times, the module is in highspeed IMDI mode. To change the speed, hold the MODE/CONFIG button pressed at startup and release after the initial flashes have indicated the new speed.

**Note / pitch control**

Incoming MIDI notes set the modules pitch. THe MIDI channel of the message is ignored; when use with IMDI HEART as source for IMDI messages, the notes are defined by the output settings of the IMDI HEART module.
MIDI notes are added to the pitch set by the FREQ knob and CV (although, a mix of CV and IMDI pitch control is not recommended).
Pitchbend messages are accepted, by default in a range of +/- 1 octave.

**Program change**

MIDI program change messages change the selected waveform; valid program numbers are 0...5

**Sound control**

The following MIDI controllers are used for controlling the modules operation:

|MIDI controller #|Function|
|--------------|-----------|
|80 |SUB output mode: value 0 = suboscillator; value 64 or higher: SUB operates as gate output|
|173 |All notes off; resets note, pitchbend and gate out (if sub output is in gate mode)
|RPN 0000|Set pitchbend range|

By this, you have full control over the module behaviour e,g, when controlling from a DAW or a MIDI hardware controller

## Patch Suggestions

