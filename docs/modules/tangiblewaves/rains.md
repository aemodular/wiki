# RAINS
[[img|modules/images/rains.png|200]]

[[https://www.tangiblewaves.com/store/p186/RAINS.html | View Product Page]]

RAINS is the AE modular adaption of Mutable Instruments' Rings module. Rings was (as not in production anymore) a resonator.

When something resonates, by being hit, plucked etc. the material has frequencies that are naturally created; this is why acoustic instruments like guitars, drums, cymbals etc. have distinctive sounds; this can be subtle to wildly differing sounds for the same hit/note played.  A resonator recreates this natural behavior enabling more "realistic" emulations of acoustic sounds or, much more fun, making a synthesised sound seem more natural to our ears. It can also create a whole other areas of sound for the synthesist to explore....

There are also some hidden modes; see the patch suggestion section for more information.


Module power consumption: 

## Inputs

* **IN** - For an audio source you want to affect with the rains; this is optional for the Rains module to make noise. Can also be a trigger in.
* **V/OCT** - Use this to change the frequency/pitch(es) of the resonator.
* **STRUM** -  For polyphonic use mainly, but always works as a trigger in.
* **STRUCT CV** - For use in conjunction with the Structure Knob below.
* **FREQ CV** - Use this to change the frequency/pitch(es) of the resonator, but not the main signal.
* **Brightness CV** - For use in conjunction with the Brightness Knob below.
* **Damping CV** - For use in conjunction with the Damping Knob below.
* **Position CV** - For use in conjunction with the Position Knob below.

## Outputs

* **Out** (x2) - Main signal and all harmonics etc mixed together.
* **Odd Out** - In Mono mode (see below), Odd numbered harmonics only - useful for adding "grit"/dirtiness to the sound quite often. In Poly mode, does the 1st, or 1st & 3rd voices only.
* **Even Out** - In Mono mode (see below), Even numbered harmonics only - useful for thickening the sound quite often. In Poly mode, does the 2nd, or 2nd & 4th voices only.

These "individual outs" are useful for changing the sound further just by mixing back in with the main out, or processing with FX etc. 

* **Mult** - a non-buffered mixer/divider circuit seperate to the module electronics.

## Controls

* **Poly** Button - this sets whether the Rains is in mono, duo or polyphonic mode. The latter is 4 voices. What this essentially means is that the sound gets more complex as you add more voices. 

Green LED - one voice, Yellow 2 voices and Red 4 voice.

* **Type** Button - this sets the way the Rains module behaves.

*Green LED - Modal resonator - simplest, similar to a string/tube being plucked/hit 
*Yellow LED - Sympathetic strings - more complex adding tones to the orginal signal as well as similar behavior to the modal resonator.
*Red LED - Modulated/Inharmonic strings - the most complex adding further to the s.s. mode by using time delay modulation and different filtering.  Can get Bell like tones in this mode.


The **4 CV +/- knobs** control the effect of the CV at the appropiate input for the parameter labelled by the knob to the CV knob's right.  E.g. The Damping CV input is controlled by the 3rd knob down in the left column.

This control can be an increase to the knob position (+ side of the dial) or deducted form the knob position (- side of the dial). If the knob is centred, (vertical), the CV has no impact on the sound. 

* **Structure** - This control emulates the material something is made of, so sets the resonant frequencies generated.

* **Brightness** - This controls the amount of higher frequencies in the sound.

* **Damping** - This controls how long the resoanant sounds are produced for, at longer times it can start producing more harmonics from its own sound in some circumstances.

* **Position** -  This emulates where, if this was a physical object, it was hit. All drummers know the sound is affected by where you hit the pad for instance.  It is somewhat like a comb filter in action, (though less boring than that sounds!) and changes the harmonics in the signal more subtely as a rule (which can be broken).


## Patch Suggestions

This is not a normal filter module!  I highly recomend starting off quite simple; use 2 LFOs and put one in **IN** or **STRUM** and move the other around to see what each parameter does. 

The Rains module can make some very lush/full string sounds and similar, so the [[phaser.md | Phaser]], [[multifx.md | Multifx]] and [[spring-reverb.md | Spring Reverb]] are great with it. 

It begs to have lots of CVs put into it, so envelopes, LFOs etc are needed. Of particular note are [[modulators.md | Modulators]], the [[joystick.md | Joystick ]] module and [[bfsynth_kurts-sloth.md | Sloth ]].

To combine the 3 different outs the [[polamix.md | Polamix]] is ideal.

It can do some excellent tuned percussion sounds with no inputs, triggered from a sequencer like the [[triq164.md | TRI164 ]] means the other channels could trigger other sounds in time with it, or envelopes to affect the Rain's sound.... 

The Rains has the most impact on incoming noises if they are fairly simple but, having said that, it can make some incredible sounds when fed from the [[wavetables.md | Wavetables ]] Oscillator. 

It is well worth experimenting with the different modes of Poly & Type, One I found particularly nice when just triggering the Rains on its own was Green LED on Poly and Orange LED on Type.

There are also several hidden "easter egg" modes, as per the original module; this  [[ https://www.infinitesimal.eu/modules/index.php/Mutable_Instruments_Rings | link]] explains them pretty well, but this video by    faux cyrillic is specific to the Rains and really helpful:

%embed% https://www.youtube.com/watch?v=_WYS1sy-Yr8 %%
