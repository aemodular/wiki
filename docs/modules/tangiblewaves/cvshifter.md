# CVSHIFTER

[[img|modules/images/CVSHIFTER.png|100]]

[[https://www.tangiblewaves.com/store/p148/CVSHIFTER.html | View Product Page]]

The CVSHIFTER module controls 4 outputs from one CV input; what the outputs do depend on the mode the user chooses. 

* **Classic** - Each trigger in shifts the CV out by one position, the new CV goes to output CV 1. The CV that was at output 1 goes to output 2 and so on. This means you need to have 4 triggers before there is a CV at output 4. This mode will not produce triggers at the TRIG 1-4 outputs. This mode means you can generate chords within your AE modular.
* **Cycle** - Each trigger sends the CV to the next output channel with a gate signal at the relevant output, after output 4 it cycles back to output 1. This can be excellent for percussion tracks.
* **Random** - The CVs are sent in random order to one of the four outputs, with a gate at the relevant output.

Power Consumption: 12 mA

## Inputs

* **CV** - the input CV which is sampled with each trigger pulse
* **TRIG** - the trigger input which samples the input CV and sends the output to one of the outputs
* **TRIG SLOW** - ?
* **RESET** - reset the sequence

## Outputs

* **CV1** - The first output of the sequence
* **CV2** - The second output of the sequence
* **CV3** - The third output of the sequence
* **CV4** - The fourth output of the sequence
* **TRIG1** - When in CYCLE mode this sends a trigger on the first step of the sequence, in RANDOM mode, when output 1 is selected.
* **TRIG2** - When in CYCLE mode this sends a trigger on the second step of the sequence, in RANDOM mode, when output 2 is selected.
* **TRIG3** - When in CYCLE mode this sends a trigger on the third step of the sequence, in RANDOM mode, when output 3 is selected.
* **TRIG4** - When in CYCLE mode this sends a trigger on the fourth step of the sequence, in RANDOM mode, when output 4 is selected.

## Controls

* **MODE** - cycles through the 3 modes explained above.
* **RESET** - performs a manual reset of the sequence, so the next CV will be on output 1 only.
* **MAN TRIG** - manual trigger for a CV sample/next step in the sequence.

## Display

The 4 leds light when the relevent output has a CV present.

## Patch Suggestions

Compared to the "classic" circuits, this module is digital based and therefore doesn't suffer from drift as some analogue ASRs and S&Hs do. The result is, that you can control the pitch of up to four oscillators which can be a move into polyphony.  The first step is to do a paraphonic synth, which means the four oscillators go through one filter and VCA. If you have a keyboard connected to your AE, the Key CV (BUS CV if using a midi keyboard) and trigger (BUS GATE if using midi) need to go to the CVShifter inputs; experiment from there!

This module can be excellent for producing CVs that are used to modulate a sequence; you can run the triggers so that they are triggered every step of the sequence (e.g. using the out on the [[seq8.md|SEQ8]]), a specific step using  the numbered outs or, where it can get really interesting, is using one of the 4 sequences in the [[triq164.md|TRIQ164]] or [[kyaa_euclidgrid.md|Euclid Grid]]....
