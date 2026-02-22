# 2ENV

[[img|modules/images/2env.png|100]]

[[https://www.tangiblewaves.com/store/p59/2ENV.html | View Product Page]]

2ENV is a dual attack - decay envelope. It can be switched between full sustain (the output remains at full level as long as the GATE input is on) and zero sustain (for percussive envelopes). Another switch (SLOW/FAST) allows selecting the time range.​
For manual triggering there is a button for each envelope.
CV control: Both attack and decay time can be CV controlled; the CV "multiplies" the time by 1...approx. 8 times.

Module power consumption: 8 mA

## Inputs
* **GT1** - gate or trigger for envelope 1
* **ACV1** - accept CV for attack stage for envelope 1
* **DCV1** - accept CV for decay stage for envelope 1
* **GT2** - gate or trigger for envelope 2
* **ACV2** - accept CV for attack stage for envelope 2
* **DCV2** - accept CV for decay stage for envelope 2

## Outputs
* **BUS GATE** (2) - Gate signal from MIDI
* **OUT1** (3) - CV from envelope 1
* **END1** - a trigger CV for when envelope 1 has finished
* **OUT2** (3) - CV from envelope 2
* **END2** - a trigger CV for when envelope 2 has finished

## Controls

The controls are grouped into 2 identical groups marked with the number 1 and 2 for each of the individual envelopes. We only describe the controls for one group as they work exactly the same for the other group.

* **ATTACK** Knob - change the attack time from 0 (percussive) to either 2 or 16 seconds depending on FAST/SLOW switch
* **DECAY** Knob - change the decay time from 0 to either 3 or 24 seconds depending on FAST/SLOW switch
* **GT/TR** Switch - switch between GATE or TRIGGER mode. When in GT mode the envelope will rise according to ATTACK knob or ACV2 value for as long as signal on GTx is high and once signal drops then decay part will be initiated. When in TR mode the attack part of the envelope will play out until it reaches full level and then initiate decay part.
* **FAST/SLOW** Switch - changes time multiplier for attack and decay times. See above.
* **Trigger** Button - sends a trigger signal to start the envelope. Always acts like a trigger even when GT mode is active. Unmarked on front panel.

## Patch Suggestions

Envelopes are one of the basic modulation sources in subtractive synthesis. They are usually used to modulate amplitude, pitch or a filter. Often you would trigger the envelope from the BUS GATE which means that if a key is pressed on a MIDI keyboard the envelope would activate and open a VCA for instance and then slowly (or fast) close it once the key is released. The envelope can also be triggered from an [[2lfo.md|LFO]] or [[triq164.md|TRIQ164]] for rhythmic or percussive uses.

The 2ENV can also trigger itself when the output ENDx is patched into the GTx.  This can make an envelope into a slow moving LFO (low frequency oscillator), or oscillator in audio range, with varied waveforms depending on the attack/decay settings. 

This video explains the usage of the AE Modular 2ENV module on a very basic level: 

%embed% https://youtu.be/c3qsSg5ZfSk %%

Using the 2ENV as a voltage-controlled trigger delay in a feedback loop:

%embed% https://www.youtube.com/watch?v=Ckq9sDzokU0 %%

Patching a swinging rhythm with the 2ENV as a trigger delay:

%embed% https://www.youtube.com/watch?v=LH610hDpp_Y %%

