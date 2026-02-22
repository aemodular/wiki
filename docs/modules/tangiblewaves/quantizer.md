# QUANTIZER
[[img|modules/images/QUANTIZER.png|100]]

[[https://www.tangiblewaves.com/store/p99/QUANTIZER.html | View Product Page]]

The QUANTIZER takes four different CV inputs and processes them in a way that the CV values "snap" to the exact values so that oscillators controlled by the outputs of the module play the notes of a selected musical scale. With an encoder one of 16 scales can be selected and is displayed in a text display,

There are 4 independent channels that are quantized to the same selected scale.

Module power consumption: 15 mA

## Inputs
* **CV 1** - accept CV for channel 1 of the quantizer
* **CV 2** - accept CV for channel 2 of the quantizer
* **CV 3** - accept CV for channel 3 of the quantizer
* **CV 4** - accept CV for channel 4 of the quantizer 

## Outputs
* **CV 1** - Quantized CV from channel 1 of the quantizer
* **CV 2** - Quantized CV from channel 2 of the quantizer
* **CV 3** - Quantized CV from channel 3 of the quantizer
* **CV 4** - Quantized CV from channel 4 of the quantizer 
* **TRIG 1** - Gate signal on change of CV from channel 1 of the quantizer
* **TRIG 2** - Gate signal on change of CV from channel 2 of the quantizer
* **TRIG 3** - Gate signal on change of CV from channel 3 of the quantizer
* **TRIG 4** - Gate signal on change of CV from channel 4 of the quantizer
* **MULT** - unbuffered multiple, unconnected from the module's circuitry 
* **B. CV** - CV signal from MIDI (via Master module)

**Please note:** 

The notation of the outputs is slightly different on the panel than indicated here. There are two rows of identical outputs, side by side. For each output-trigger there is an activity LED, indicating a change in quantized CV.

## Controls
* **SCALE Knob** - selects the current scale. 16 scales are available, the selected scale will be displayed in the small display to the right of this knob 
* **LOCK Switch** - prevents accidental changes of the selected scale when activated 
* **OFFSET Knob** - Select from up to 12 notes from the well-tempered scale as base-value, depending on the scale selected. All left would be equivalent to a key of C

**Please note:** 

Scale selection directly takes place when the SCALE Knob is turned, clicking it has no specific effect.

**Available SCALES, as indicated on the display, are as follows:**

* **Minor** (e.g. equivalent to A-B-C-D-E-F-G in ‘A minor’)
* **Major** (e.g. equivalent to C-D-E-F-G-A-B in ‘C major’)
* **Dorian** (e.g. equivalent to C-D-Eb-F-G-A-Bb in ‘C Dorian mode’)
* **Phrygian** (e.g. equivalent to C-Db-Eb-F-G-Ab-Bb in ‘C Phrygian mode’)
* **Lydian** (e.g. equivalent to C-D-E-F#-G-A-B in ‘C Lydian mode’ )
* **Mixolyd** [Mixolydian] (e.g. equivalent to C-D-E-F-G-A-Bb in ‘C Mixolydian mode’ )
* **Locrian** (e.g. equivalent to C-Db-Eb-F-Gb-Ab-Bb in ‘C Locrian mode’)
* **Gypsy** (e.g. equivalent to C-D-Eb-F#-G-Ab-B in ‘C Hungarian minor scale’ )
* **Whole** (equivalent to C-D-E-F#-G#-A# or B-Db-Eb-F-G-A as ‘Whole tone scales’)
* **Pent Min** [Pentatonic Minor] (e.g. equivalent to C-Eb-F-G-Bb in ‘C Minor pentatonic’)
* **Pent Maj** [Pentatonic Major] (e.g. equivalent to C-D-E-G-A in ‘C Major pentatonic’)
* **1-3-5** (e.g. equivalent to C-E-G in ‘C’)
* **1-3-4** (e.g. equivalent to C-E-F in ‘C’)
* **Fifth** (e.g. equivalent to C-G in ‘C’)
* **Octave** (e.g. equivalent to C in ‘C’)
* **Chromat** (The 12 welltempered notes of the chromatic scale)


## Patch Suggestions

The most obvious use is to transform any CVs to fit the scale you are using, to then control the pitch of VCOs and the Solina module. It can also be interesting on LFOs and filters.

here is the Quantizer used on a sequencer CV...

%embed% https://www.youtube.com/watch?v=Vk3rE23m29E&t=1593s %%

 It can also be used for other things, e.g.

Using the QUANTIZER as a rhythm generator:

%embed% https://www.youtube.com/watch?v=PI7t-gcR15w %%
