# DRONX

[[img|modules/images/DRONX.png|400]]

[[ https://www.tangiblewaves.com/store/p120/DRONX.html | View Product Page]]

This is a 6 channel mixer, with tone controls and built in delay FX. It is optimised for use with the [[drone38.md|Drone38 module]] but is useful for larger AE systems regardless.

Another possible mixer is the [[mixconsole.md|Mixconsole]].

Module power consumption: 42 mA

## Inputs

* **IN1** to **IN6** Channels 1 to 6 for the mixer, level controlled by the relevant vertical fader (below)
* **TIME1 CV** this combined with the time 1 knob controls parameter 1 of the in built FX chosen.
* **TIME2 CV** this combined with the time 2 knob controls parameter 2 of the in built FX chosen.

## Outputs

* **OUT** (x3) - mono output of the Dronx module.
* **MULT** - a passive splitter/mixer separate to the module electronics.

## Controls

* **Bass** - alters the level of lower frequencies in the mixed signal
* **Treble** - alters the level of higher frequencies in the mixed signal
* **Distortion** - depending on your point of view, this sets the level of analog authenticity or racket!
* **Time 1** - sets the delay time of channel 1 of the selected FX.
* **Time 2** - sets the delay time of channel 2 of the selected FX.
* **LFO depth** - this controls the amount the LFO affects the sound, the rate is set by the selected program.
* **Feedback** - with no feedback you only get the original sound going through the FX once, with maximum feedback it goes through an infinite number of times; somewhere in the middle is usually great musically, this knob controls the amount...
* **DRY - WET** - A fully dry signal has none of the FX sound in it. A fully wet signal is just the FX sound. Again, we usually want somewhere in the middle which is controlled by this knob.
* **Level 1** to **Level 6** - controls the amount of the signal from that numbered input in the output signal.

## Delay Effect Programs
The delay FX unit of the DRONX has 9 unique programs that are described below:

1. single short
2. single long
3. echo 1 (two delays with different feedback levels)
4. echo 2 (two delays with different feedback levels)
5. echo 3 (two delays with different feedback levels)
6. parallel delays
7. chorus + delay (with LFO modulation, depth with LFO DEPTH, speed is fixed)
8. wonky (like 3 but random modulation delay time, depth with LFO DEPTH)
9. glitch (like 8 but at the beginning and end of the delay times the delay chip is being "abused" to generate weird and unexpected effects)

## Patch Examples

Even if you do not have 6 sound sources in your AE system this still is a useful module, if you can spare the real estate! 

Most AE VCOs let you use more than one output at once, so this can be used as a sub mixer for them before further processing (with or without FX). 

You can use it to mix parts from different areas along the audio chain, e.g. before and after the Filter. 

It is useful to combine external sources (via [[4io.md|4I/O module]]), drums (e.g. Kick module) and VCOs, [[solina.md| Solina module]] etc. to make one output to send to your recording device/PA etc.

Here is a video made by The 5th Volt about the DRONE38 and DRONX modules:
%embed% https://youtu.be/bkpZkUtRAy4 %%
