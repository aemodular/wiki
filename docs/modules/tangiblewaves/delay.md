# DELAY (LOFI TYPE)

[[img|modules/images/delay.png|100]]

[[https://www.tangiblewaves.com/store/p17/DELAY_%28LoFi%29_.html | View Product Page]]

Lo-Fi Delay is a analogue, old fashioned bucket brigade style of delay 

Module power consumption: 18 mA

## Inputs

* **In** - Main incoming audio signal
* **CV** - CV control of delay time so can do Flanger/Phaser type sounds (with LFO).
* **In 2** -  for 2nd signal in, this will be mixed in without attenuation
* **In 3** -  for 3rd signal in, this will be mixed in without attenuation

## Outputs

* **Outs** (2) - (mixed signal)
* **Wet**- (delay sound only)
*  **Dry** - (original signal(s) only)
* **Thru** - passive mixing/splitting nothing to do with the delay.

## Controls

* **Delay** - Set delay time, further impacted by CV control above.
* **Feedback** - This controls the amount of the output signal that is send back to the input, so you can get reverb type sounds, repeated echoes etc.
* **Dry/Wet** - This controls the amount of dry (original signal) and wet (the delayed sound) in the output.

## Patch Suggestions

**Dynamic Control**
If you want dynamic control of the dry/wet mix, you can use the separate outs and then combine in the [[4attmix.md|4ATT/Mix]] or [[4vca.md|4VCA]]. 

**Bass Sounds**
Excellent on bass sounds as is naturally less bright than digital delays.

**CV Control**
Using the CV control of the delay time can be done with any CV, not just LFOs. Sequencer CV outs can generate some great rhythmic and/or melodic  effects. Envelopes can the same, or do strange FX depending on settings and how they are triggered. 

**Other input sources**
It can be really interesting on CV rather than audio.....

**Controlling Feedback**
The wet signal output and the three mixed inputs makes adding CV control over feedback straightforward. Simply run the wet output to the signal input of a VCA, and run the VCA output to one of the delay inputs. The VCA CV input now controls the amount of feedback. Use a module like the CV Tool to add an offset and attenuate a CV from an LFO or envelope in order to more precisely control the feedback.
