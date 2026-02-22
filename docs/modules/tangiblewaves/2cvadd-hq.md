# 2CVADD-HQ

[[img|modules/images/2CVADD-HQ.png|100]]

[[https://www.tangiblewaves.com/store/p138/2CVADD-HQ.html | Product Page]]

The 2CVADD-HQ has 2 separate circuits which are useful for controlling CVs more accurately for pitch, to keep things in tune. This could be for any 1V/Octave synthesisers, (doesn't have to be the AE modular). This accuracy is useful for to Oscillators and Sequence modules, but could be good for many purposes.

If you would like to have transposition buttons to shift by one or two octaves (or an adjustable amount), take a look at the [[cvadd-hq.md|CVADDER-HQ]] module



## Inputs

* **A1** to **A3** - these three inputs are added together in circuit A of the module
* **IN A4 Neg** - this input is deducted from the other three on the A circuit.
* **B1** to **B3** - these three inputs are added together in circuit B of the module

## Outputs

* **A** (x2) - Output of circuit A
* **B** (x2) - Output of circuit B
* **MULT** - a passive mixer/splitter separate to the module electronics.

## Patch Suggestions

The most obvious use is before a VCO, (e.g. [[2oscd.md|2OSC/D]]) to combine CVs to control pitch. Having 2 outputs each circuit could control up to 2 oscillators without any help. The inverting input (4) on circuit A can be really useful here. If you need to control more oscillators the [[4buffer.md|4BUFFER]] is recommended rather than just using the **Mult** as this assists with CV/pitch tracking accuracy.

The same applies for controlling filter cutoff frequency.

This module can be used as a CV mixer anyway, regardless of destination, again Input 4 on circuit A can be really handy.

