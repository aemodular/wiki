# kyaa 2AUTO

This is a touch sensative knob movement recorder which generates CVs. The signal can be live, single trigger or looped amongst other permutations. There are 2 independent recorders.

[[https://kyaa.co/product/2auto | View Kyaa's Shop Page]] - currently on pre-orders for the next production batch.

Module power consumption: 

## Inputs

* **Trig A** - A trigger signal activates the recorded CV of circuit A,unless in loop mode.
* **Trig B** - A trigger signal activates the recorded CV of circuit A, unless in loop mode.
* **Clock in** - unlabeled but the arrow to the bus/ext switch gives it away! This input does not need to be used if you are using a midi clock (e.g. drum machine, sequencer) into the master module.

## Outputs

* **A** (3) - Output from knob A's noodlings....
* **Trig A** - The gate signal from input A is duplicated here, or a trigger gate will be generated at the begininng of each loop.
* **B** (3) - Output from knob B's noodlings....
* **Trig B**  - The gate signal from input B is duplicated here, or a trigger gate will be generated at the begininng of each loop.

## Controls

* **EXT/Bus** - This switch sets where the 2Auto uses the bus clock (usually derived from the midi clock input into the master module) or an signal plugged into the socket at the other end of the arrow.

**There are 2 sets of controls; one for the A section and one for the B section. The controls are the same for each, as listed below.**

The **knob** whose movement is used/recorded to set the CV. You start recording by touching the knob.

Switches -

* **SYNC** - If Sync is on, the 2Auto will activate the loop in time with the clock signal being recieved at the clock in input.
* **Loop** - this turns on/off loop mode. In loop mode the 2Auto becomes, in effect, a customisable LFO where any pattern can be repeated upto a length of 30 seconds. When not in loop mode it is like a (very) complex shape envelope generator, again up to 30 seconds long.
* **Lock** - When this switch is on the recorded pattern is protected, and touching the knob does not erase the recording, this is excellent for use live in particular so you have less accidents...

## Patch Suggestions.

* There is an active thread for this module on the forum:-  https://forum.aemodular.com/thread/2083/2auto

* This module can be used anywhere where you would use an LFO or an Envelope Generator - excellent for controlling filter cut off as you can be as wild or as subtle as you like very easily, without needing further processing through attentuentors etc.
* The same applies for other areas where a modicum/high degree of control of the CV is required, the wave modulation on the [[wavetables.md | Wavetables]] module is a great example. In this example you can create interesting timbral changes without the use of a filter.
* You can make a live/controlled stereo panner in conjunction with the [[mixconsole.md | Mixconsole]] module by panning 2 channels hard left and right ands then controlling their levels with the 2Auto. There are several options here, using section A on one channels and section B on the other is the easiest, but you could use the [[2cvtool.md | 2CVTool]] for instance to provide the "reverse" signal to supply the other channel from one section's output.
* It can be a fun sequencer in one shot or loop mode, put the output through the [[quantizer.md | Quantizer]] module to be tuneful (if you want to be!). 

RSKT has done another excllent video on this module:-

%embed%  https://www.youtube.com/watch?v=GZRyBf_RDqc %%
