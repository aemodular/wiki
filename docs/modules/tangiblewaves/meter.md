# METER
[[img|modules/images/METER.png|200]]

[[ https://www.tangiblewaves.com/store/p106/meter.html | View Product Page]]

This is a multi-functional module for visualizing and measuring signals.

## Inputs

* **IN** - Signal to be displayed/analysed
* **Mult**  - this can be a simple mixer (only really worth it for CVs) or a way of splitting a signal to several outputs, e.g. a trigger for Envelopes for the filter and VCA at the same time. You can plug anything (in/out) into any mult socket.,

## Outputs

* **+5V**        - A steady 5 volt signal.
* **B.CV**      - The bus voltage derived from the midi note number via the Master module. The higher the note number the higher the voltage

* **Midi Out** - Midi CV from bus via Master module, defaults to A for tuning purposes. See Oscillator calibration later.  

## Controls

* **Timebase** - this lets you zoom in to see a waveform (or part of), or see several waveforms at once.
* **Mode** - selects modes as below

There are 5 different display modes for the input signal, and a 6th mode for calibrating oscillators using the midi out socket on this module.

The 5 modes are

* **oscilloscope  AC**   - for displaying alternating current signals
* **oscilloscope  DC**   -  for displaying direct current signals
* **spectrum analyzer**  - display the frequency spectrum of the input signal, lowest frequency to left, higher to right, the taller the graph spike the louder that frequency is.
* **voltmeter**  displays the voltage of input signals
* **frequency meter** displays the frequency of the input signal; displayed as hertz and as musical note with +/- 100 cent difference. __(The frequency of the root "A" can be adjusted) how__
* **Threshold**  - this sets the level at which the display will start displaying the signal.
* **AC Mult** switch - this is usually set on x1; this is the module using the signal as it is. the x2.5 position increases the height of the display to increase visuals and can help with fine tuning the signal.

## Display

The reason for buying this module!

## Patch Suggestions

**Calibration of an OSC**
This module can be used for [[2oscd.md | oscillator]] calibration. Take the Midi out CV to your oscillator CV in, Pick a simple waveform out and put that into the Meter module in. 

For calibrating the VCO with the METER module, you use best the square wave output with a medium pulse width of the VCO, connected to the METER input. Additionally, you connect:
* BUS-CV with CV in on the VCO, and
* via a stereo minijack cable the MIDI out from METER with MIDI IN on the MASTER

Put the Meter module in Osc. Calib mode and follow the instructions on the screen. 

**Other uses**
This module is great for adding activity for a video, or low light level playing!

It can be useful for helping set the gate length on triggers from LFOs etc.
