# µOSC
[[img|modules/images/uOSC.png|100]]

[[https://www.tangiblewaves.com/store/p220/uOSC.html | View Product Page]]


This micro module is a tiny, multifunctional oscillator module that offers a variety of waveforms:
* Sawtooth
* Pulse
* Triangle/Sine
* three different wavetables
It offers knobs and CV control for pitch and shape (variations of the base waveform). Additionally, it can be controlled via IMDI and supports note/pitch, pitchbend, Assignable controller for shape and pitchbend range can be set via IMDI/MIDI by the specified controller message.

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: ? mA

## Inputs

* **CV** - CV control for pitch, 1V/octave
* **IMDI** - IMDI messages for pitch, shape and others
* **SHP** - CV for controlling the shape
* **CV2** - additional CV input (###to be specified)

## Outputs

* **OUT**  - the audio output
* **SO**  - suboctave as square wave
* **MX**  - mix of audio out and suboctave

## Controls

* **FREQ** Pot - controls the pitch
* **SHAPE** Pot - modifies the selected waveform in different ways, depending on the selected waveform
* **0 / +2** switch - changes the pitch by 2 octaves
* **mode** button - cycles through the available modes / waveforms, displayed by the LED:
red: sawtooth, green: pulse, orange: triangle/sine, blinking ###EXPLAIN: wavetable 1, 2, 3

## Shape function
* in Sawtooth mode: full left is a single sawtooth, the further right, increasingly detuned double sawtooth
* in Pulse mode: sets the pulsewidth
* in triangle/sine mode: in the left half, triangle wave, in the right half sine wave
* in wavetable modes: scans through the wavetable waveforms

## Patch Suggestions
