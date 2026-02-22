# SOLINA
[[img|modules/images/solina.png|200]]

[[ https://www.tangiblewaves.com/store/p88/SOLINA.html | View Product Page]]

The SOLINA String Machine is a digital string synthesizer module for lush pad sounds, based on Jan Ostman's DSP code. It features extensive chord generation options and offers various adjustable sound shaping parameters, like oscillator detuning and vibrato.

Module power consumption: 11 mA


## Inputs

* **CV** - CV input for chord selection
* **CH. VAR CV** - CV input to select the chord variants (inversions, raised thirds, etc.)
* **CHORD +** - Trigger input to play the next chord in the progression preset
* **CHORD -** - Trigger input to play the previous chord in the progression preset
* **4th GATE** - Gate input. switching the 4th note on (high) or off (low)


## Outputs

* **BUS CV** - (positioned on the left side) Pitch signal from the MIDI bus
* **BUS GATE** - (positioned on the left side) Gate signal from the MIDI bus
* **OUT** - Audio output
* **MULT** - Unbuffered multiple

## Controls

Chord generation and playback:

* **COARSE FREQ** knob - tunes the root note of the chord (quantized to semi tones)
* **FINE FREQ** knob - tunes the root note of the chord (unquantized)
* **+1 OCT** switch - transposes the chords up by one octave
* **CHORD** knob - selects the chord to be played
* **CHORD + / -** buttons - step through a preset chord progression (1-4-5, etc.), if the CHORD knob is set all the way counterclockwise
* **CHORD VAR** knob - selects different chord variants. Middle position is the standard position for regular chords. In the left half there are inversions and in the right half there are variants with raised or lowered 3rds or 5ths, as well as 5ths-only at the full clockwise position. 
* **MAJ/MIN SCALE** switch - switches between major or minor scale
* **4TH NOTE ON** switch - adds a fourth note to the chord
* **7th / BASS** switch - selects the 7th or the Bass note as 4th note

Sound shaping:

* **OSC SPREAD** knob - slightly detunes the individual notes for a wider, moving sound
* **TONE** knob - blends between a lo-fi digital low pass and high pass filter effect
* **LFO RATE** knob - adjusts the vibrato speed
* **PITCH MOD** knob - adjusts the vibrato amount
* **ENSEMBLE MIX** knob - blends in a phaser effect


## Patch Suggestions

For authentic 70s strings, (or just great sound sin general), the [[phaser.md | PHASER]] module is a great partner for the Solina.

Chord generation and playback is actually quite easily done, even though it can seem very complex, especially if you're not well versed in music theory. Start with all knobs turned fully counter clockwise, except for the CHORD VAR knob, which should be at its middle position. Then tweak the COARSE and FINE FREQ knobs to tune the root note chord to your liking or to other sounds in your patch. After that, choose MAJOR or MINOR as a scale and turn the CHORD knob to hear which of the available chords fit your music piece. You may sequence them then via the CV input. For more interesting chords, set the CHOR VAR knob to a different position and listen to the chords again (not all will necessarily change). Also switch on a 4th note if you like.

Usage of the CHORD + / - buttons and trigger inputs to step through common chord progression presets (1-4-5, etc.) requires the CHORD knob to be fully counterclockwise and no voltage present at the CV input. The chord progressions let you instantly play pleasing chords to your tuned root note and set scale. This is practical if you just want to create a quick backing chord track to your patch. In case you want to sequence the chord changes with triggers from a sequencer, it is helpful to do so via a [[3vcswitch.md | 3VCSWITCH]] module together with a [[midiclock-divider.md | MIDICLOCK DIVIDER]]  or [[mm-div.md | MM-DIV]] module. This combination will allow you to route your sequencer triggers to either the CHORD + or CHORD - input, to play up and down a chord progression. The chords in the progression presets do not wrap around, so there will be a point when + or - won't step any further and you have to use the opposite button/trigger input to play the progression backwards again.

As with any modular synth oscillator, go ahead and route the SOLINA's audio through other modules, like filters, VCAs, a [[wavefolder.md | WAVEFOLDER]] and [[multifx.md | MULTIFX]] to further shape its sound and apply rhythm to the strings.

Don't Forget the [[phaser.md | PHASER]] module....

An excellent video guide to the Solina by The Tuesday Night Machines:
%embed% https://youtu.be/R3lDrnbjHHQ %%

Superbooth 2019 prototype sound demo video by The Tuesday Night Machines:
%embed% https://youtu.be/OGV4r7Wq6B8 %%
