# 3VCSWITCH

[[img|modules/images/3vcswitch.png|100]]

[[https://www.tangiblewaves.com/store/p42/3VCSWITCH.html | View Product Page]]

This module gives you 3 separate switches, controllable from the buttons on the front panel or via the gate inputs.  Each circuit can be used bidirectionally; i.e a signal can be sent to one of two destinations or one of two signals can be selected to go to the output.

Module power consumption: 4 mA

## Inputs

* **IO1** - Circuit 1's in/out going  to/from 1A or 1B
* **Gate1** - a +5V pulse here switches from 1A to 1B or from 1B to 1A
* **IO2** - Circuit 2's in/out going  to/from 2A or 2B
* **Gate2**  - a +5V pulse here switches from 2A to 2B or from 2B to 2A
* **IO3** - Circuit 3's in/out going  to/from 3A or 3B
* **Gate3**  - a +5V pulse here switches from 3A to 3B or from 3B to 3A
* **+5V** - actually an output giving +5V, the maximum the AE Modular can deal with. Very useful for further processing via this module or others for modulation.
* **Bus Gate** - This output gives a +5V  signal whilst an external midi device key on is pressed, via the Master module.

## Outputs

* **1A** - Circuit 1's A in/out
* **1B** - Circuit 1's B in/out
* **2A** - Circuit 2's A in/out
* **2B** - Circuit 2's B in/out
* **3A** - Circuit 3's A in/out
* **3B** - Circuit 3's B in/out

## Controls

The panel is marked 1,2 and 3 for each circuit, the controls are the same for each.

* **Latch** button. - When this button is pressed it moves the connection from A to B or B to A.
* **MMT** button. - When this button is pressed output/input on A is switched to B, or vice versa, but only whilst the switch is pressed, i.e. it is a momentary button. 

## Patch Suggestions

There is a patch challenge for this module on the forum. Here you can find more interesting uses of this module: http://forum.aemodular.com/thread/313/patch-challenge-pulling-old-switcheroo

This module is excellent for providing variation in rhythms/ sequences by cutting a trigger in or out via the buttons if "playing" the AE modular, or the gate inputs - the latter can be done with an LFO, envelope or one of the sequencer modules. It works really well with the [[triq164.md | TRIQ164]] module. The [[seq16.md | SEQ16]] module main out can work with a bit of care, but it works really well using of one of the various gate outputs to the 3VCSwitch, especially combined with the [[logic.md|Logic module]] to vary things further.

It is useful where you want to automate switching between 2 audio paths, (e.g. 2 different filters) as part of a patch. 

It can be used to create Stereo from mono by going 1 in to 2 out, (thanks to [[/artists/thetuesdaynightmachines.md| Tuesday Night Machines]] for this one). He suggests "now use a square VCO to quickly switch that audio signal between the ears for crazy effects". 

Other trigger/ trigger variation modules, like the [[trip.md | Trip]], [[mm-div.md|MM Divider]] and, particularly the [[topograf.md | Topograf]] combine with the 3VCSwitch for endless possibilities.

Below is a video by [[https://the5thvolt.com | The 5th Volt]] a with various patch ideas:

%embed% https://youtu.be/ddANhDYMVh0 %%

This video is for a Eurorack module similar to the 3VCSWITCH, and so gives some more ideas you may want to explore.

%embed%  https://www.youtube.com/watch?v=bfir-EnTCaw %%
