# uPOLY

[[img|modules/images/uPOLY.jpeg|100]]

[[https://www.tangiblewaves.com/store/p222/uPOLY.html | View the Product Page]]

The uPOLY is a polyphonic, 4-voice sawtooth oscillator module.

It can work either as a source of pre-defined chords in major or minor scale; or it can be controlled via IMDI as a paraphonic oscillator with a common envelope.

Each voice consists of two sawtooth oscillators, that can be detuned by a certain amount; this makes this module most suitable for smooth pad sounds.

A switch changes between minor and major scale; a CV input (CHD) goes through the chords of the chosen scale.

Another feature of the module is a chorus/phaser effect that can be mixed into the output.

When controlled by IMDI, the possibilities are even more:
* Notes can be played individually
* A common volume envelope is applied to the sound; Attack and Decay time can be controlled via MIDI controller messages from your DAW or MIDI controller
* An LFO with adjustable rate and depth can be applied
* All parameters can be controlled by MIDI controllers via the IMDI HEART module; over one single patch cable! (Regarding IMDI, see IMDI HEART for more info).

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: 7...12 mA

## Inputs
* **CV** - Sets the basic pitch of the generatoed chord, added to FREQ pot.
* **IMDI** - Input for MIDI signals, these should come from either the [[imdi-heart.md | IMDI HEART]] or the [[wonkystuff_mb1.md | Wonkystuff mb/1 modules]]. Many parameters of this module can only be controlled via MIDI.
* **CHD** - CV to control the chord; with 1 volt change, all chords of the chosen scale (minor/major) are selected. The range of 1...2 volts repeats the chords, but in a higher range.
* **CV2** - CV control for oscilaltor spread

## Outputs
* **OUT** - The sound output of the oscillator
* **G** - Gate output, active when used in IMDI mode. (On some of the first modules, this was labelled as BS, but with same function. Output MX on these modules is without function.)

## Controls
* **SCALE** (switch) - switches the CV controllable chord scale to major or minor
* **SPREAD** (knob) - chooses the detune/spread of the oscillators per voice; when moved together with the MODE botton pressed, additional parameters can be set. (On some of the first modules, this was labelled as CHORD, but with the same function).

  Depending on the chosen mode, following parameters are set:
  - Continuous chord (red LED): Add phaser/chorus
  - Paraphonic mode and IMDI mode: Select envelope shape (different combinations of attack/decay)
* **FREQ** (knob) - selects the basic pitch; in IMDI mode, this acts only as fine tune, the actual pitchn is determined only by the played notes. When moved together with the MODE botton pressed, a bass note can be added (knob moved to the right half)
* **MODE** (button) - selects the basic operation mode of the module; indicated by the LED color:
  - red: Continuous chord mode
  - green: Paraphonic mode with envelope; the IMDI input acts as GATE input. Without a gate signal patched, chords are played continuously same as in "red" mode. There is only one envelope that is applied to all voices in parallel. Decay happens when the last note is released.
  - orange: IMDI mode; the module can be played freely polyphonic via IMDI messages; the envelope from the paraphonic mode is applied here too

## IMDI operation

**IMDI data rate**

IMDI allows two different data rates; standard (31250, identical with MIDI data rate) and highspeed(230400). Which speed setting is chosen for the module is indicated at startup: When the LED flashes green for a few times, the standard speed is selected, When the LED flashes red for a few times, the module is in highspeed IMDI mode. To change the speed, hold the MODE/CONFIG button pressed at startup and release after the initial flashes have indicated the new speed.

**Note / pitch control**

Incoming MIDI notes play up to 4 notes parallel. The MIDI channel of the message is ignored; when use with IMDI HEART as source for IMDI messages, the notes are defined by the output settings of the IMDI HEART module.
MIDI notes are added to the pitch set by the FREQ knob and CV (although, a mix of CV and IMDI pitch control is not recommended).
Pitchbend messages are accepted, by default in a range of +/- 1 octave.

**Sound control**

The following MIDI controllers are used for controlling the modules operation:

|MIDI controller #|Function|
|--------------|-----------|
|70|Oscillator detune|
|73|Attack of envelope (retained after module restart)|
|72|Decay of envelope (retained after module restart)|
|77|LFO depth|
|76|LFO rate|
|93|Phaser/Chorus mix (retained after module restart)|
|121|Reset all controllers; all of the above settings are restored to initial values| 
|123 |All notes off; resets note, pitchbend and gate out (if sub output is in gate mode)
|RPN 0000|Set pitchbend range|

By this, you have full control over the module behaviour e,g, when controlling from a DAW or a MIDI hardwdare controller

## Patch Suggestions
Although quite powerful on its own, this module is best paired with and IMDI HEART or mb/1 module to receive MIDI messages to be played freely.
