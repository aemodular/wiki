# Piqued

[[img|modules/images/Piqued.png|100]]

[[https://github.com/fauxcyrillic/piqued | Open source]]

A conversion of Mutable Instruments *Peaks* to AE Modular; a dual-channel trigger to function converter.

Module power consumption: 50mA

## Inputs
* **T1** - Trigger channel one
* **T2** - Trigger channel two

## Outputs
* **Out 1** - Output of channel one
* **Out 2** - Output of channel two

* **B.Clock** - Midi clock signal from the bus cable
* **B.Gate** - Gate trigger from the bus cable


## Controls

**Split**

In split mode (LED is lit) knobs 1 and 2 control the parameters of channel one, and knobs 3 and 4 control the parameters of channel two. This allows individual control over each channel, but the parameters are slightly simplified (eg. in Envelope mode the output becomes a simple AD envelope where knob 1/3 controls attack and knob 2/4 controls decay)

In twin mode (the split LED is not lit), both channels parameters are controlled by the same four knobs. However, because of the extra controls this allows finer adjustment of the parameters (eg. in Envelope mode the output of both channels is now an ADSR envelope, with knobs 3 & 4 controlling sustain and release respectively)

**Mode**

Switch between four operating modes:

* Envelope generator
* LFO
* Tap tempo LFO
* 808-style drum synth

See [[https://pichenettes.github.io/mutable-instruments-documentation/modules/peaks/manual/ | the original Mutable Instruments documentation]] for full controls for each mode.

**Trig 1 & Trig 2**

Manual triggers for both channels.

**Expert control mode**

Hold SPLIT for about 1 second until it starts flashing. Now you can use all four controls to edit both channels independently:
- when the LED is flashing once, you are editing channel 1
- when the LED is flashing twice rapidly, you are editing channel 2

*An often-overlooked feature of the expert control setting is that each channel can also have its MODE independently set. Eg. channel 1 could be an envelope, while channel 2 is an LFO.*

**Alternative modes**

Hold the MODE button for ~1 second until it starts flashing. Now the four modes are:

* Mini step sequencer (2 steps in split mode, 4 in twin/expert mode)
* Trigger delay/shaper
* Trigger stream randomizer
* Digital drum synth

As above, check the full MI docs for details on these modes.

**Secrets**

Hold SPLIT and MODE together for ~1 second, then repeat twice more to enter [[https://en.wikipedia.org/wiki/Numbers_station | Number station mode.]]

The module generates audio reminiscent of a number station, with number samples and pitched tones triggered by T1 and T2. The controls adjust pitch, probability of switching to a different number, amount of noise, amount of distortion.

Once in number station mode, repeat the SPLIT and MODE hold once more again to enter bouncing ball mode, a physics based envelope generator. T1 and T2 throws the virtual ball, controls adjust factors such as gravity and energy loss per bounce.

