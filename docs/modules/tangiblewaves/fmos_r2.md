# FMOS R2
[[img|modules/images/FMOS_R2.png|100]]

[[[https://www.tangiblewaves.com/store/p97/FMOS_R2.html](https://www.tangiblewaves.com/store/p225/FMOS_R2.html)| View Product Page]]

The FMOS R2 brings FM synthesis to the AE modular. It offers the basic FM synthesis with one oscillator and one modulator, which can be either sine wave or other waveforms independently. The modulation depth and frequency ratio of the modulator can be set with a knob and additionally by CV control. It can also produce a pure sine wave if needed.

**Note:** This is the new and improved version of the [[fmos.md|FMOS]] module, which has been discontinued for a while.

Module power consumption: 30 mA

## Inputs
* **CV1** - CV control over the pitch of the oscillator.
* **MOD CV** - CV control over the depth of the modulator's depth.
* **SYNC** - Sync input for the oscillator; a pulse resets the waveform cycle. Use a squarewave as sync input
* **IMDI IN** - Input for IMDI data, to control pitch via MIDI notes and configure the module via MIDI controllers
* **IMDI THRU** - the **&#8592;** socket below **IMDI IN** in provides the IMDI in buffered, to be patched to another module if necessary.

## Outputs
* **OUT** - audio output signal
* **SUB** - suboscillator output / alternatively gate out (for IMDI control)
* **MIX** - mix audio plus suboscillator
* **B.CTRL** - CTRL signal from MIDI bus
* **B.CV** - CV signal from MIDI bus

## Controls
* **FREQ** - Potentiometer for changing the pitch of the oscillator. When CV is sent, then that will be added to this setting.
* **Switch CV** - switch between continous (CONT) and semitone quantized CV control
* **FEEDBCK/FIX FREQ** - Potentiometer for setting modulator feedback (OPM switchn = FDB) or modulator fixed frequency (OPM switch = FIX) 
* **Switch +2OCT** - When in high position, the pitch will be increased by 2 octaves
* **MULTIPLIER** - Potentiometer to select the FM frequency ratio. Any CV control will be added to this setting. In case of OPM = FDB the fixed frequency can be doubled, tripled with this knob (ringmodulator like sound)
* **MOD DEPTH** - Potentiometer to select the depth of the modulation. Any CV control will be added to this setting. Turn it all the way to the left (set to 0) for pure basic waveform.
* **Switch OPM** - switch the modulator operator mode between feedback (FDB) and fixed frequency (FIX)
* **Button MODE/CONFIG** - Selects between 8 different basic waveforms for carrier and modulator; indicated by different LED colors.
  
**LED:**

The LED usually indicates the selected waveform setting:

* **LED red**: Sine wave for carrier and modulator
* **LED green**: triangle wave for carrier and modulator
* **other LED colors**: partially with blinking: different combinations of more complex waveforms; just listen to them!


**fine-tune pitch**

For fine-tuning the oscillator pitch (especially helpful with IMDI control), press and hold the MODE/CONFIG button until the LED flashes red fast; now, (with the button still pressed), fine-tune the pitch with knob FREQ. With the FREQ knob in the center position during this operation, the FMOS is configured to middle A = 440Hz pitch with FREQ knob in full left position. This ensures easy pitch setting especually with IMDI note control.

## IMDI operation

**IMDI data rate**

IMDI allows two different data rates; standard (31250, identical with MIDI data rate) and highspeed(230400). Which speed setting is chosen for the module is indicated at startup: When the LED flashes green for a few times, the standard speed is selected, When the LED flashes red for a few times, the module is in highspeed IMDI mode. To change the speed, hold the MODE/CONFIG button pressed at startup and release after the initial flashes have indicated the new speed.

**Note / pitch control**

Incoming MIDI notes set the modules pitch. THe MIDI channel of the message is ignored; when use with IMDI HEART as source for IMDI messages, the notes are defined by the output settings of thr IMDI HEART module.

MIDI notes are added to the pitch set by the FREQ knob and CV (although, a mix of CV and IMDI pitch control is not recommended).
Pitchbend messages are accepted, by default in a range of +/- 1 octave. The pitchbend range can be changed by a MIDI RPN message; see controller chart below.


**Program change**

MIDI program change messages change the selected waveform; valid program numbers are 0...7

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

FM synthesis lends itself to bell sounds in particular, and brings a whole different colour palette to regular oscillators. Very useful for percussion also. For metallic and percussion sounds, the fixed frequwncy mode of the modulator operator is especially useful.

FMOS lends itself to be used as the main oscillator in a patch. One famous patch where a FM-type of oscillator got used is the Krell patch by Todd Barton on a Buchla.

And not to forget FM bass sounds!

A version of the patch you can rebuild with the AE Modular is described here:
http://manual-synthesis.info/2017/01/26/krell/#fn:1 

The full details of the patch used with AE Modular are to be found here
https://forum.aemodular.com/post/7208/thread 

Any settings of FMOS can make sense in that context and should be done to your liking.

The sine wave can be really good as a modulation CV, usually attenuated with a [[2cvtool.md|2CVTOOL]] or similar. 

Here is a video by The 5th Volt which features this module.

%embed% https://youtu.be/J5syne2sP6I %%
