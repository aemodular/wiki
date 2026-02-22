# wonkystuff RBSS
[[img|modules/images/RBSS.png|100]]

The rbss (random bit-shift sequencer) module is inspired by the famous "Turing Machine" Eurorack module by Music Thing Modular which in turn was inspired by many previous shift-register sequence generators.

When it is in stock, you can buy this module at [[https://wonkystuff.net/product/rbss/ | Wonkystuff]].

**NOTE**: if you have an older rbss module of serial number lower than 130, then you might have issues using it with the QUANTIZER module from tangible waves. This is due to some noise that is output by the module which the digital QUANTIZER module can't quite process. If you have this problem, then you can easily fix this yourself if you know how to use a soldering iron. Please follow the instructions on [[https://wonkystuff.net/rbss-quantizer-issue/ | this page]]

## Inputs

* **clk in** - Every time there is a rising edge on the voltage in this input, the sequence shifts one step. This can be driven up to audio rates for some interesting noises! 
* **len cv** - The control voltage on this input is added to the control voltage from the front panel length control (so if the knob is fully clockwise, this voltage will have no effect)
* **chance cv** - The control voltage on this input is added to the control voltage from the front panel chance control (so if the knob is fully clockwise, this voltage will have no effect)
* **bus clk** - MIDI clock signal, via the master module.

## Outputs

* **a out** (x3) - an audio-coupled output which will generate a pulse proportional to the difference in voltage between adjacent sequence steps;
* **cv out** (x3) - a control voltage representing the current bit-shifted binary pattern;
* **clk out** - a simple square clock signal

## Controls

* **rate** - This changes the frequency of the clock pulse appearing at the clk out pin. (In order to trigger the rbss, the clk out must be connected to the clk in).
* **chance** - this specifies the probability that the next step in the sequence will change voltage, from 0 (never) to 1 (always).
* **length** - this is the number of steps that will be present in the sequence, from 1 to 16.

## Patch Suggestions

You the clk out to trigger other modules, e.g. [[ seq8.md | SEQ8 ]] or [[ trip.md | TRIP ]] modules). 

This video shows how you can use the RBSS together with the [[ seq16.md | SEQ16 ]] to create long evolving sequences.
%embed% https://youtu.be/lQotLnLqgHA %%

This video demonstrates how to use the audio output of the RBSS.
%embed% https://youtu.be/apqzOGBofuc %%

Here is an ambient patch that uses 3x RBSS modules.
%embed% https://youtu.be/T-sKgZNlKrM %%
