# wonkystuff mco/1b — MIDI-Controlled Oscillator &mu;Module

[[img|/modules/images/mco-1b.png|200]]

* [[https://wonkystuff.co.uk/mco-1b.html | Main shop page]]
* [[https://lectronz.com/products/mco1b | EU shop page]]

## Overview

* Module format: micro-module
* Power consumption: ??mA

[filename](../../common/micro.md ':include')

This module is a (digital) MIDI-Controlled-Oscillator. It differs from a traditional oscillator in that pitch and all parameters are controled via MIDI, enabling complex configuration over a single signal patch-lead.

It is an update to the original mco/1 (no longer available), and adds:

* more user-programmable memory locations;
* more parameters to the voice architecture; and
* the ability to *poly-chain* multiple oscillators!

The module responds to MIDI notes 1 to 105 (C#-2 to A6 – although as a digital oscillator, aliasing is evident at the higher reaches!).

In *monophonic mode*, it uses last-note-priority, and remembers up to 8 held notes (when a note is released, the pitch returns to the previously held note — when the last note is released, the output remains at that pitch to allow for slowly decaying notes).

In *polychain mode*, it will sound the first note that is seen, and ignore all subsequent notes until the first note is released. Notes which are ignored are forwarded through the ‘x’ output, allowing subsequent oscillators to consume these notes. This means theoretically that infinite polyphony is available, although physical limits rather prevent that!

[filename](../../common/imdi_gen.md ':include')

## Controls

* **tune** modifes the pitch for the purposes of tuning with other oscillators. Typically a user would send the same note to multiple oscillators and then tune them all to match; alternatively (of course) tuning could be against an external pitch source.
* button:
  * Short-press: enter MIDI Learn mode;
  * Long-press: global parameter save.

## Connectivity

### Inputs

* **i** - the IMDI input - connect this to the channel output of an IMDI generator as listed above.

### Outputs

* **t** ***(left side)***:  IMDI Thru - a buffered copy of the input data, to be connected to the IMDI input of a subsequent module.
* **a**: Audio output
* **x**: MIDI Overflow (polychain mode), or soft-thru (monphonic mode)
* **t**: New-Note trigger: 5ms pulse when a new note is pressed;
* **g**: Gate: +5v when a key is pressed; 0v otherwise.
* **LED**: indicates MIDI activity, or 'Learn mode' status (see above)

## Demo Video

This is for the original *mco/1*, but the principle is the same:

%embed% https://youtu.be/tX5hsa-9fTE %%


## MIDI Specification

Parameters of the audio waveform are controlled using MIDI CC messages and/or program-change messages. The voice architecture is *loosely* based on the Juno-6 voice architecture. Each parameter has a range of 0-127, allowing for quite a few different waveforms!

Each of the CCs in this table are saved/recalled in response to *Program Change* messages.

The base-CC (indicated by &lt;b&gt; below) can be changed in MIDI-Learn mode.

### Voice parameters

| Parameter             | MIDI CC               | Description |
|-----------------------|-----------------------|-------------|
| Ramp                  | &lt;b&gt;             | A rising sawtooth wave |
| Square                | &lt;b&gt;+1           | A square/pulse wave |
| Pulse width           | &lt;b&gt;+2           | Width of the square/pulse |
| PWM amount            | &lt;b&gt;+3           | Modulation of Pulse Width by the internal LFO |
| Sub Oscillator        | &lt;b&gt;+4           | A square wave sitting one octave below the main pitch |
| Noise                 | &lt;b&gt;+5           | Digital sequence of random pulses, based on the noise generation algorithm of the DR-110 drum-voice clones
| LFO rate              | &lt;b&gt;+6           | Rate of the modulating LFO |
| Sine Level            | &lt;b&gt;+7           | 8bit sinewave wavetable level |
| Velocity Sensitivity  | &lt;b&gt;+8           | The amount of volume variation resulting from the velocity of note messages. Sensitivity of 0 means that the amplitude is always ‘full’.
| Transpose             | &lt;b&gt;+9           | Specified in semitones; adds up to 24 semitones to the base pitch. |

### Other CCs

| Function         | MIDI CC | Description |
|------------------|---------|-------------|
| Modulation       | 1       | Applies pitch modulation from the LFO |
| Legato           | 68      | In legato mode the GATE output stays high for new notes; otherwise the GATE signal briefly  |goes low for each new note.
| All sound off    | 120     | Sets the volume of the audio to zero. |
| All notes off    | 123     | Clear the GATE output. |
| Mono Mode        | 126     | Switch to monophonic mode (default) |
| Poly Mode        | 127     | Switch to polychain mode |
| Pitch bend range | RPN 0   | Sets the range of pitch bend. |

### Program Change

In addition to the above MIDI CCs, mco/1b also responds to the following Program Change messages:

| Program Number | Behaviour |
|----------------|-----------|
| 0-31           | A selection of preset wave combinations from the parameter CC list above. |
| 32-41          | User-programmable wave combinations of parameter CCs. If a Program change message is sent whilst in ‘MIDI Lean mode’  |then the current parameters are stored to that location.

### Global Parameters

The following parameters are stored in the module when a long-press on the button is detected:

| Parameter         | Behaviour |
|-------------------|-----------|
| Legato Mode       | Whether the module retriggers the GATE output upon each new note-on (Mono mode only) |
| Base CC           | The CC upon which all parameters are based (&lt;b&gt; above). This allows each mco in a stack to respond to different CCs. |
| Pitch bend range  | How big an effect the pitch bend has on the pitch of the note (set via RPN above) |
| Default Program   | The program memory to load when starting or resetting the module |