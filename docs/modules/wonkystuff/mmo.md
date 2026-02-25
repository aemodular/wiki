# wonkystuff mmo — clone of minimo programmable device &mu;Module

[[img|/modules/images/mmo.png|200]]

* [[https://wonkystuff.co.uk/mmo.html | Main shop page]]
<!-- * [[https://lectronz.com/products/mmo | EU shop page]] -->

## Overview

* Module format: micro-module
* Power consumption: 20mA

## Overview

[filename](../../common/micro.md ':include')

mmo is a fairly faithful recreation of the [open-source minimo](https://minimosynth.com/) except for the adition of a buffered output and the use of the ubiquitous ICSP programming header seen in many other boards.

In order to update the firmware, you will need a suitable programmer — something like the USBAsp is great — it's what I use. See [Programming ICSP Modules](https://wonkystuff.co.uk/icsp-programming) on the wonkystuff website.

*miniMo* came up in discussion on the [AE Modular Forum](https://forum.aemodular.com/thread/441/minimo-modular-based-on-attiny85), and it looked like a fun thing to make a version of.

wonkystuff already make a [programmable module based on the ATTiny85](/modules/wonkystuff/core1-ae.md), but in case that takes up too much space in the rack, or you don't actually need to reprogram using an audio signal, then the mmo might be for you!

### Notes

* The miniMO was developed as open-source hardware & software by Jose Gonzalez — the original 'miniMO' website is here: https://minimosynth.com/
* The wonkystuff® Github repository containing our fork of the code and schematics etc. is here: https://github.com/wonkystuff/miniMO_core
* At the moment there are 16 different programs available, but we intend to play around a bit and hopefully make some more in the fullness of time.

## Controls

* A single parameter knob, function depends on the loaded firmware;
* A single button to switch between parameters (different parameters respond to different patterns of clicks)

## Connectivity

As might be expected, connectivity is limited!

### Inputs

* **3** CV control of parameter 1 - it sums with the position of the parameter knob to feed a value into the firmware;
* **4** CV control of parameter 2 - functionality depends on chosen firmware.

### Outputs

* **out** whatever the firmware decides to output!

# Related videos

John from wonkystuff&reg; made a pair of videos on the [wonkystuff&reg; YouTube channel](https://youtube.com/@wonkystuff) describing the PCB layout of the *mmo*, as a beginners guide to future module builders:

%embed% https://youtu.be/LfWHmPN24ys %%
%embed% https://youtu.be/Fr0tgWV6pVw %%

Finally, how to program the *mmo*:

%embed% https://youtu.be/F39jZ6yaw30 %%
