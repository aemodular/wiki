# CVADD-HQ

[[img|modules/images/CVADD-HQ.png|100]]

[[https://www.tangiblewaves.com/store/p137/CVADDER-HQ.html | Product Page]]

This module is made to generate CVs which are accurate enough to keep pitch/transposes etc. completely in tune. This could be for 1V/Octave synthesisers, (doesn't have to be the AE modular). This accuracy applies to Oscillators and Sequence modules so could be useful for many purposes.

If the transposition buttons are not necessary and you could use two precision adders, take a look at the [[2cvadd-hq.md|2CVADD-HQ]] module


## Inputs

* **1** to **3** - these three inputs are added together
* **IN A4 Neg** - this input is deducted from the other three, i.e. it is an inverter.

## Outputs

* **Out A** (x2) - Output of the combined CVs from the 4 inputs.
* **OFFSET CV** (x2) - this is the voltage provided by the control knob/buttons, e.g. if set to 1 octave it will be 1V at this output.
* **MULT** - a passive mixer/splitter separate to the module electronics.

## Control

* **+2 Oct** Button - this will add 2V to the CV mix from the inputs, adding 2 octaves if going to an oscillator or filter cutoff.
* **+1 Oct** Button - this will add 1V to the CV mix from the inputs, adding an octave if going to an oscillator or filter cutoff.
* **Free** Button - if this button is selected, the knob below selects the voltage added to the mix from the inputs.
* **OFFSET** Knob - this selects the amount added to the input CVs if the __Free__' button is selected.

## Display

* **+2 Oct**  LED - lit when 2 volts are being added to the output.
* **+1 Oct** LED - lit when 1 volt is being added to the output.
* **Free** - Lit when the knob can be used to set the voltage added to the output.

## Patch Suggestions

The most obvious use is before [[2oscd.md|VCOs]] to combine CVs to control pitch. Having 2 outputs each circuit could control 2 oscillators without any help. The inverting input (4) can be really useful here.

The same applies for controlling filter cutoff frequency.

This module can be used as a CV mixer anyway, regardless of destination, again Input 4 can be really handy.
