# Resistance Is Futile

[[img|modules/images/RIF_mixer_final.png|100]]

[[https://github.com/fauxcyrillic/spatial-mixer | Open source]]

Resistance Is Futile offers a simple way to add space to a mix. Connected audio sources are spread across the stereo image according to their position in the (almost) horizonal inputs. So a sound patched to the furthest left input will be strong in the left channel and almost inaudible in the right. There are three left-biased positions of increasing strength, three right-biased, and in the middle is two centred inputs; one of the center inputs also has a slight high-pass filter applied, to add a different tonal characteristic and avoid muddying the mix.

This module is based on elements from two open-source Eurorack modules: [[https://llllllll.co/t/prototyping-nearness-a-minimal-panning-mixer-module/8330 | Nearness]], and [[https://github.com/modular-maculata/mixor-image | Mixor Image]].

Module power consumption: 3mA

## Inputs

From left to right:

* **Extreme left** 
* **Heavily left**
* **Slightly left**
* **Centre** - with a high-pass filter applied
* **Centre** - with no filter
* **Slightly right**
* **Heavily right**
* **Extreme right**

Although the labeling is minimal, the decorative rings generally illustrate the pan position of each input. The centred input with high-pass is (somewhat subtly) indicated with a symbol like an "i" above it.

## Outputs

Standard AE style L and R outputs allow you to send the panned signals into other modules. Otherwise, two 3.5mm jacks allow the module to be used as an end-of-chain output. If no cable is inserted into the right jack then the left jack operates as a stereo output. 

## Patch notes

Be aware that in order to properly hear the effect you will need to send the audio either through a stereo output, or otherwise use an external mixer with dedicated left and right inputs.
* The 4I/O module can output a stereo signal on jacks 1 and/or 3 if the left and right signals are patched to inputs 1 and 2, or 3 and 4 respectively. 
* HPAMP can output stereo, but the headphone amp in the POWER module is mono, so the effect will not be apparent.
* FADRMIX6 has a stereo main out and a stereo headphone out.
* COMPACTMIXER also has both stereo main and a stereo headphone output.
* MIXCONSOLE has left and right mono outputs and a separate stereo output, but no headphone.

This mixer should play particularly nicely with modules which have their own L and R in/out or otherwise have 'variant' outputs, for example:
* MultiFX
* Cirrus
* Rains - send the ODD and EVEN outputs to opposite ends of the stereo spectrum
* LOFI Delay - use the separate WET and DRY outs
* Coils - the main and Aux outputs usually provide different sounds

Interesting effects could be achieved with the 4VCA or Wonkystuff QVCA and MOCO module, to 'sweep' an audio source across the stereo field. The SELECTOR module from Tangible Waves could also be a great way to route audio to various panning points.

## Open source & customisation

All design files and schematics are provided through the Github link at the top of the page.

The panning is achieved very simply by passing each input through a resistor before it moves on to the mixer stage. The larger this resistor, the less of the signal that is passed into the mix.

If building from scratch, the degree of panning can be adjusted to taste by changing the resistor pairs. On the PCB these are indicated on the silkscreen eg. **HL+** and **HL-** (HL being short for "hard left"). The + or - symbol indicates whether the resistor in that position is the larger (+) or smaller (-) of the two. Remember that larger resistor = quieter signal. So HL- is the smaller resistor of the pair, if you increase the value of this resistor then the amount of audio from this input which makes it into the L mix will decrease, making the panning feel less extreme.

The default values (indicated on the schematic) are taken directly from the 'Nearness' module:
<ul>
<li>HL+ / HR+ = 1.69M ohm</li>
<li>LL+ / RR+ = 442k</li>
<li>L+ / R+ = 215k</li>
<li>HP / C = 140k</li>
<li>HL- / HR- = 100k</li>
<li>LL- / RR- = 102k</li>
<li>L- / R- = 113k</li>
</ul>

The high-pass filter is build from a 180k resistor which is surface mounted, so harder to change. The capacitor can be easily changed to achieve a different cutoff value, though. The default value is 5.6nF, taken from the 'Mixor Image' module.</br>

</br>[[img|modules/images/top_assembly_drawings.png|200]]

## Sound demo

%embed% https://www.youtube.com/watch?v=UETfBd1QYmg %%