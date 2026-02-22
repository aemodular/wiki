# ALGODRONE

[[img|modules/images/ALGODRONE.png|200]]

[[ https://www.tangiblewaves.com/store/p90/ALGODRONE.html | View Product Page]]

The ALGODRONE module is a sound and CV source based on the so-called bytebeat algorithms. These are simple formulas, usually expressed as one line of program code, that spit out a wide variety of interesting tonal to rhythmical patterns, regardless of their simplicity.

The ALGODRONE module contains a number of these algorithms plus three parameter knobs that change values within the current algorithm. These changes vary from subtle to dramatic, even with small changes, depending on the algorithm and the setting of the other parameters.

Some algorithms create sound loops, to use these more flexible the ALGODRONE can work in a kind of "granular" mode where a smaller part of the entire loop is repeated and with the POSITION knob you can move through the entire output loop.

Module power consumption: 14 mA

## Inputs

* **CV** - Base frequency for the algorithm
* **GATE** - Resets the current algorithm run to the start, this is useful for "one-shots"
* **PAR1** - CV input for Parameter 1 of the algorithm
* **PAR2** - CV input for Parameter 2 of the algorithm
* **PAR3** - CV input for Parameter 3 of the algorithm
* **GRAIN SIZE** - CV input for Grain Size
* **POS** - CV input for position of the grain within the loop

## Outputs

* **BUS CV** - (positioned on the left side) Pitch signal from the MIDI bus
* **OUT** - Output of the algorithm
* **CYCLE** - trigger output when a cyclic algorithm (loop) has reached its end before repeating
* **MULT** - unbuffered multiple

## Controls

* **ALGORITHM** knob - selects the current algorithm, 67 factory and 30 user presets are available, the selected algorithm will be displayed in the small display to the right of this knob
* **COARSE FREQ**  knob - coarse selection of base frequency. Although a higher frequency often leads to a higher pitched sound, each algorithm reacts differently to this and there can be drastic changes to the behaviour of the sound when the frequency changes.
* **FINE FREQ** knob - fine control of the base frequency
* **PAR 1** knob - controls the value of parameter 1 of the selected algorithm. Each algorithm uses these parameters differently and not every algorithm uses all three or even any of the parameter. It is up to the user to explore how changes in parameters affect the sound.
* **PAR 2** knob - value of parameter 2
* **PAR 3** knob - value of parameter 3

Some of the algorithms produce sound loops which can be "frozen" and only a tiny fraction of the loop played at a time. This is called Granular Synthesis and the following three knobs control the "grain mode".

* **GRAIN SIZE** knob - only a tiny fraction of the complete sound loop the algorithm creates is played. The size knob controls how large the area is. When the knob is turned all the way to the left, then the grain encompasses the complete loop which means grain mode is OFF. Turning the knob gradually to the right increases the area of the grain, starting with a very short loop to a larger one.
* **POSITION** knob - when in grain mode this knob controls where in the complete sound loop the grain is playing. The position starts at the beginning of the loop with the knob all the way to the left and by turning the knob to the right the grain is shifted towards the end of the loop.
* **MOTION** - controls the way the grain plays within a frozen loop. Fully to the left, the grain played completely static. Turning to the right until the middle position, an increased triangle LFO modulation is applied to the grain position, adding some liveliness and smooth movement to the sound. When set to the right half of the knob (random) the grain is shifted randomly across the loop.

The ALGODRONE can also produce random algorithms which can be slightly mutated and then stored for later use. The three push buttons at the top are used for this.

* **SAVE** push button - store the current algorithm in a user location between 68 and 96. When the SAVE button is pressed, the numbers will flash and the ALGORITHM knob can be used to select the target slot number, the current algorithm in that slot will play. Once the desired slot has been found, press SAVE again to store the current random algorithm in that slot.
* **RND** push button - creates a completely new randomised algorithm
* **MUTATE** -  when creating a random algorithm, this changes one item in the random algorithm, like the operator (e.g. "+" -> "*") or a constant value

## Patch Suggestions

Bytebeat has been first explored by Viznut with a series of videos on YouTube and a very detailed analysis of the code on his blog: http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html

When the Algodrone module was first announced there was quite a lively discussion on the AE Forum: http://forum.aemodular.com/thread/49/bytebeats-beginners-guide

This resulted in the very first beginners guide prepared by The Tuesday Night Machines which you can download here: http://nightmachines.tv/the-absolute-beginners-guide-to-coding-bytebeats.html

The Algodrone module does not really let you program your own algorithms, rather  it contains a selection of 67 different built in algorithms with different uses of the parameter values and which react differently to the base frequency. Some are looping and can be used in granular mode, some aren't. Currently there is no list of what each algorithm does, so experimentation and patience is required to explore the sonic variety of each algorithm.

In addition to the builtin algorithms new ones can be "found" by repeatedly pressing the RND and MUTATE buttons which create random algorithms which can be saved into one of 30 user assignable slots (68 - 97).

Here is a very short video on how the Algodrone can sound like.
%embed% https://youtu.be/-B2jgMYxYU8 %%

Here is a video by Matt Wand (who has actually contributed a number of algorithms for this module) showing off the various ways in which this module can be used: https://vimeo.com/392829975
<!-- (it seems that embed does not work for vimeo) %embed% https://vimeo.com/392829975 %% -->


Overview video by The Tuesday Night Machines:
%embed% https://youtu.be/Q6Mz9qpbUwo %%

This is a great exploration of the module's sonic landscapes by Max Richardson:
%embed% https://youtu.be/eJLnuI2EC9U %%
