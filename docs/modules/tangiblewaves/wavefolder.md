# WAVEFOLDER
[[img|modules/images/wavefolder.png|100]]

[[ https://www.tangiblewaves.com/store/p45/WAVEFOLDER.html | View Product Page]]

Basically, the WAVEFOLDER clips and folds an incoming waveform. Usually waveforms with little overtones like triangle or sine waves are used as input. In general, by the clipping and folding, the WAVEFOLDER enriches the input signal with more overtones.

The module is based on a design also used by Ken Stone for his CGS modular. The original circuit dates back to a publication from 1973.

Module power consumption: 3 mA

## Inputs
* **IN** - Audio or CV signal input
* **CV SHP.** - Wave folding CV control through the SHAPE CV attenuator
* **CV 2** - Wave folding CV control without attenuation
* **BUS CTRL** - MIDI CC20 CV from the MASTER I/O bus 
* **BUS GATE** - MIDI Gate CV from the MASTER I/O bus


## Outputs
* **OUT** - Processed input signal 

## Controls
* **DRIVE** - Amplifies the input signal
* **SHAPE CV** - Folds the top of the input signal waveform down, if the amplification is strong enough. Folding increases by turning the pot clockwise.
* **SHAPE** - Clips the input signal waveform hard from the top all the way down to silence. Clipping effect increases by turning the pot counterclockwise.

A tutorial video by The Tuesday Night Machines:

%embed% https://www.youtube.com/watch?v=k2nVM6SzMEQ %%


## Patch Suggestions

The Wavefolder can be used to boost any signal level, e.g. Triangle wave on the VCO.

Create a dull sine wave to process with the WAVEFOLDER: Run a square wave VCO through a low pass filter with a low cutoff frequency. For pitch sequencing, you might want to add a little bit of pitch CV to the filter cutoff control too, not just the VCO. This is often called “keyboard tracking” in non-modular synths’ filter settings, which makes sure that the filter opens up a little on higher notes. Otherwise, a constant cutoff will dull the sound of higher notes more than lower notes.

WAVEFOLDER Feedback: Patch the input signal (e.g. a triangle wave) in a mixer and the mixer output into the WAVEFOLDER. Then patch one WAVEFOLDER output back into another [[ 4attmix-fader.md| mixer input]] and slowly turn the mix knob up. For voltage control over the feedback, patch the WAVEFOLDER output in a VCA and from there into the mixer. Modulate the VCA with an LFO, Envelope, [[ sample-and-hold.md | Sample & Hold]] or [[ seq8.md | Sequencer]] then. Feedback can get very crazy quickly, so start with low knob and modulation settings.

Since the WAVEFOLDER creates complex (harsh sounding) waveforms, you can send them through a [[ ms20-filter.md | filter]] to smooth them. As they are different than your standard square or sawtooth waves, they also sound different, and often more interesting, through filters.

Try modulating the WAVEFOLDER’s shape with its input signal, i.e. send the triangle or sine wave audio signal in the audio input and also in the SHAPE CV input. 

This video by TTMs gives an excellent demo of what the Wavefolder can do:-

%embed% https://www.youtube.com/watch?v=g9CE_nP9KZA %%


## Sound Examples

WAVEFOLDER-focused jam session with patch notes:
%embed% https://www.youtube.com/watch?v=9BOl5g6HDqg %%

Jam session in which the main mix is sent through the WAVEFOLDER:
%embed% https://www.youtube.com/watch?v=sALZ7ZcWhRY %%
