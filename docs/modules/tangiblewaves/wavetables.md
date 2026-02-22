# WAVETABLES
[[img|modules/images/wavetables.png|200]]

[[https://www.tangiblewaves.com/store/p105/WAVETABLES.html | View Product Page]]

The WAVETABLES module is a sound module based on the wavetable technology first heard on the PPG range of synthesisers. It has been developed in close collaboration with Paula Maddox from [[http://dove-audio.com/ | DOVE Audio]] who is also the designer of such classic synths as the Modal 002, Modal 001 and Modal 008 from Modal Electronics.
 
There are 7 different tables each with their own unique sound, from very gentle, though vocal sounds, into rich bell like tones to harsh digital tones. Each table has a number of waveforms that can be morphed into each other as you scan through them with either a potentiometer or CV control.

Module power consumption: 40 mA

## Inputs
* **CV1** - base pitch of the oscillator
* **CV2** - base pitch of the oscillator (added to the first)
* **FM** - Modulating the pitch
* **WAVE** - modulate the wave position within a table
 
## Outputs
* **Out** - output of the wavetable sound
 
## Controls
* **Coarse Frequency** - Coarse selection of base frequency
* **Fine Frequency** - Fine control of base frequency
* **FM Depth** - Amount the incoming FM CV will change the pitch
* **FM Bipolar** - When on, the FM CV will be centered around the base frequency, so an incoming triangle wave will modulate the pitch both up and down, in the off position the incoming CV will only module the pitch up.
* **Detune** - Adds a second version of the same waveform, creating anything from a subtle chorusing type effect to a full octave above.
* **Table** - Selects the current table that you are working with
* **Wave Mod** - sets the amount of the incoming CV that affects the wave you hear
* **Wave Bipolar** - When on the wave CV will be centered around the chosen wave, so an incoming triangle will move both up and down through the table. In the off position the incoming CV will only move up through the table.
* **Wave** - Selects the waveform from within that table
 
## Patch Suggestions

The output of this module obviously can be run through the rest of the AE system, a hybrid digital/analogue synth at a very good price!   The [[ nyle-filter.md | Nyle filter]] with its CV adjustable resonance is recommended...

The CV control of the wavetable position is an amazing tool; using an [[ adsr.md | envelope]] you can get subtle or bonkers effects that change as you hold a key down. 

In a similar vein, using an LFO square wave and the wave mod knob, you can set the wavetable position so it alternates between 2 waveforms.  An attuenator, (e.g. [[ 2cvtool.md| 2CVTOOL]] can be helpful here.

If you want something a bit more experimental, you can use a [[ sample-and-hold.md | Sample-and-Hold]] to randomly select the waveform, and if you put that through the [[ slew-edge.md | SLEW LIMITER]]  first  you can control how smoothly it jumps between waveforms. 

## Demo
Thanks to Felix from The Tuesday Night Machines for this excellent demo video:

%embed% https://www.youtube.com/watch?v=XcHaxjhjuIY %%
