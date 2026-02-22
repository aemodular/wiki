# Pikocore
[[img|modules/images/pikocore_v1_1.png|200]]

[[https://www.tindie.com/products/fauxcyrillic/pikocore-beta/ | View product page]]

[[https://github.com/fauxcyrillic/Pikocore | Open source]]

Pikocore is a small, simple, distinctly lo-fi rhythm sample looper. Samples are stored on a Raspberry Pi Pico using a web-based firmware creator and various effects can be applied to the sample as it loops.

AE Pikocore is an adaptation of the [[https://infinitedigits.co/wares/pikocore/ | original standalone device of the same name, by infinitedigits]].

Module power consumption: 50mA


## Inputs

* **TRIGGER 1 to 8** - sending a gate or trigger signal to each of these inputs has the same effect as pressing the corresponding button on the panel, creating step jumps & retrigger events


## Outputs

* **AUD 1** - Audio output
* **AUD 2** - A duplicate audio output
* **CLK OUT** - A clocked pulse for syncing other modules
* **CLK IN** - Receives a clocked pulse for syncing from other modules



## Controls

The eight buttons select one of eight ‘slice points’ which are automatically generated when the samples are uploaded using the firmware generator. Pressing a button will jump to that slice. Holding two buttons at once will generate a retrigger effect at a speed determined by the distance between the two slices, with random effects applied such as filter cutoff, speed changes etc.

Press the four corner buttons (1, 4, 5, 8) together to start/stop playback.

Press the inner four buttons (2, 3, 6, 7) together to engage or disengage “clock lock”. By default, after engaging a retrigger with the buttons or trigger inputs the sample will continue playing from that position. By engaging Clock Lock the sample will instead carry on from the point it would have been at if uninterrupted - you might find this a more natural rhythm and better for syncing with other modules.

SELECT - Moves between the 8 ‘effect combos’ listed on the panel, with the current position indicated by the LED. 

A - Adjusts the ‘A’ effect of the selected position

B - Adjusts the ‘B’ effect

ATTENUATE - Adjusts the overall output volume.


## Effects

**sample** changes the sample being played

**break** modifies all probabilities simultaneously using varied easing functions.

**filter** is a resonant low-pass filter that attenuates higher frequencies.

**stretch** performs a lofi timestretch effect.

**gate** controls the amount of gating on the sample.

**gate %** controls the probability of gating.

**jump %** controls the likelihood of jumping to a different step in the current sample.

**retrig %** controls the likehood of retriggering.

**tunnel %** controls the likelihood of jumping to a different sample.

**rev %** controls the probability of reversing direction.

**seq rec** will record sequences, up to 128 steps (cw = record, ccw = erase).

**seq on** turns on the sequencer (cw = on, ccw = off).

**save** saves probabilities, sample, volume, and tempo (cw = save).

**load** recalls the last save (cw = load).

**vol/fold** changes the volume and adds a wavefolding effect.

**tempo** controls the tempo in steps of 5 bpm (50-305)


## Tips

Patching a bunch of triggers (perhaps from a Euclid Grid, AEuroPi or RBSS v2) to several different trigger inputs will create some varied retrigger effects as different combinations of pulses sync up.

Simple, clean drum loops are the best types of samples to load. Pikocore will struggle to generate slice points with non-rhythmic content. Also the audio output is PWM, so ‘complex’ samples (eg. a sample of a jazz loop with a full band playing behind the drummer) will probably come out sounding bad.

A standard Pi Pico only has 2mb memory, which is about enough to store at least ~8 standard loops. Various Pico clones are available with more memory, and should work as long as they’re considered “pin compatible” with the original Pico.

If the memory of your Pico is very close to full, there seems to be a chance the module will crash when trying to save a pattern. This is mostly a problem with the 2mb version due to general lack of space.

## Sound demo

%embed% https://www.youtube.com/watch?v=h8vz7FFMxwc %%



