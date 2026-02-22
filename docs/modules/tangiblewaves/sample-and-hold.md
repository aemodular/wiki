# SAMPLE & HOLD
[[img|modules/images/samplehold.png|100]]

[[ https://www.tangiblewaves.com/store/p18/SAMPLE%26HOLD.html | View Product Page]]

A module whose output voltage is set by "sampling" the input voltage when triggered. This is usually for producing random notes/modulation in conjunction with the [[noise.md|NOISE]] module.

There are 2 independent Sample & Hold circuits within this module.

Module power consumption: 2 mA

## Inputs

* **In 1** - The source for where the voltage will be selected from.
* **Trig 1** - For a pulse to tell the module to take the voltage reading of input 1 and send that value to output 1.
* **In 2** - The source for where voltage will be selected from.
* **Trig 2** - For a pulse to tell the module to take a reading from input 2 and send that value to output 2.

## Outputs

* **Out 1** (2) - The voltage selected by In/Trig 1 is available here.
* **Out 2** (2) - The voltage selected by In/Trig 2 is available here.
* **Thru** (4) - On older modules marked **Mult** as a passive mixing/signal splitter as per many other AE Modules. 



## Controls

This module has no performance controls.

## Patch Suggestions

Check out this comprehensive tutorial in RSKT's growing AE Modular video series:
%embed% https://youtu.be/kzJN3jk_ZS4 %%

This earlier video also describes how to use the SAMPLE&HOLD module and makes use of the [[2attcv.md|2ATTCV]] module for generating CVs:- 

%embed% https://youtu.be/NZVme2SNxXU %%

This is quite an old video so it doesn't suggest using the [[quantizer.md|QUANTIZER]] module to make the pitch CVs match a key; with this, a sample & hold circuit can produce sequencer type CVs. Triggers can be from many modules including [[triq164.md|TRIQ164]], [[topograf.md|TOPOGRAF]] or [[midiclock-divider.md | MIDICLOCK DIVIDER]]

Try using an [[2lfo.md|LFO]] instead of noise as the input source,  quite handy for modulation but can be good to give a restricted random arpeggiator type sequence if used on the pitch of the VCO(s).

Using Noise, the Voltage variation is about the maximum the AE Modular can deal with, so use of some form of attenuation is usually needed  - the [[4attmix.md|4ATTMIX]], 2ATTCV or [[mixer4-4.md | Mixer 4-4 modules]] can do this.

With attenuation, this module can be really good to give a bit of variation to a sequence by varying the filter on the sound - use the [[2attcv.md|2ATTCV]] module to combine the envelope and S&H outputs to the Filter module. It's also good on resonance on the [[nyle-filter.md | NYLEFILTER]]. Use the same trigger as the sequence if you want to be in sync with that, and can change timing(s) with use of one of the logic or divider modules.

It can produce bit crusher style results when used to sample audio signals.
