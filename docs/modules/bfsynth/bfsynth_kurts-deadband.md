# BF Synth - Kurt's Dead Band

Kurt's Dead Band module is a unique waveshaper, it is able to shape both audio and CV/DC inputs. It will introduce a so-called 'Dead Band': a portion of your input wave will be snapped to one voltage of your choice. In this way, you can introduce a 'pause' in your waveform. On audio it can give phaser-like effects, but depending on the complexity of the input waveform, it can also sound like a unique kind of filter. On CV you can introduce a steady 'pause' in your CV signal, or you can introduce a sudden vertical 'bump' if you use the vertical dead band setting. You can determine the location of the Dead Band (eg at 2V), and also the size around that voltage that gets snapped to the preset voltage. The location can be controlled with CV input.

You can purchase the module here: [[https://www.tindie.com/products/bfsynths/kurts-dead-band-kit/ ]]
 
# Inputs
 
* **In**: Four inputs that get actively mixed together before they enter the waveshaper circuit, much like the B section of the 4-4 Mixer. Input can be both audio or CV/DC.
* **CV**: Four CV inputs that get actively mixed together before they enter the waveshaper circuit. CV is used to control the location parameter of the dead band.
 
# Outputs
 
* **Out**: The inputs with an introduced dead band.
* **CV Mix**: The four CV inputs that are mixed together, useful as an additional mixer or to use further on with other modules.
* **Mult**: 6 passive mult patchpoints that are connected.
 
# Controls
 
* **Location**: The location of the dead band, ranging from 0V to 5V. Any input CV amount gets 'added' to this fixed voltage.
* **Size**: The range or width of this dead band, centered around the location. If you turn it full left, there should be barely any effect. Fully to the right, audio should be gone or almost gone, depending on the input volume.
* **CV**: An attenuation knob for the input CV, much likes the knobs found on AE Filters. It determines how much the CV input influences the 'Location' parameter.
* **Gain**: This knob acts as a final gain after the dead band is introduced. However, it should be noted, that it does not act like your usual 'gain' or amplification. Depending on where you deadbanded your input, this parameter will act differently. It will work as a classic gain (ie volume boost) only when your circuit is deadbanded around 2.5V, so with the 'Location' knob in its central setting. This knob is particularly useful when you feed eg an envelope as input to the module. Tweaking this parameter will make sure that the 'start' of your envelope is at 0V, and not at eg 1V (which would otherwise give you a slight sustain when you drive a VCA with your envelope). Experimenting is key with this parameter, it is a dangerous one to tweak in the middle of a live performance!
 
* The switch allows you to change the dead band from a horizontal to a vertical dead band. A horizontal dead band introduces a horizontal 'pause' in the waveform, while a vertical dead band introduces a sudden 'bump' in voltage.
 
# Patch Suggestions
 
The Dead Band module is very much a 'building block' module. Depending on what you feed it, it can give very different results, so experimenting and trying different out of the box stuff is the way to go! But some basic ideas to get you going:
 
You can patch a simple VCO into the module, and use a slow LFO as CV input to get some subtle timbral changes in your waveform. It works best with the "Size" parameter at lower values, and the 'Location' parameter somewhere between one quarter and three quarters. This should give you some phaser like results. Tweak the CV attenuation knob to determine the amount of FX.
 
If you swap the LFO from the previous patch with another VCO, you will modulate the location parameter at audio rates, which also gives very interesting results! Now you can try patching different CV inputs at the same time, which mixes them together. Or you can check out the different timbre when using the vertical setting.
 
If you input a more complex waveform, like a mix of some VCO's and white noise, or a complex oscillator like the Algodrone, you will find that the Dead Band can have some filter like qualities. If you now input an envelope in the CV input, you will find that it can act like a strange kind of VCA depending on how you tweak the settings!

