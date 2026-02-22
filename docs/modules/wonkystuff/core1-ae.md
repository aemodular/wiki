# wonkystuff core1.æ
[[img|modules/images/coreae.png|100]]

[[https://wonkystuff.net/product/core1-ae-v1-2-black/ | View Product Page]]

This is a programmable sound generator from Wonkystuff. The Core series are small, reprogrammable devices, based around a particularly limited microprocessor (as used by Bastl in their Kastle) having a mere 8kB of code space and 512 bytes of RAM! We find that with these limitations, some interesting algorithms can still be programmed and new and interesting sound generators and modulators can be constructed.

It comes with dr1 firmware already loaded to be a complex oscillator. However you can find and download many other firmwares directly from this page:

https://wonkystuff.net/tag/examplecore/

Module power consumption: 25mA

## Inputs
* **cv-b** - CV control for the **b** parameter
* **cv-c** - CV control for the **c** parameter
* **cv-d** - CV control for the **d** parameter
* **a-in** - Audio input for effects and also to upload new firmware

## Outputs
* **m-a** - PWM produced output which is AC coupled (for audio signals)
* **m-c** - PWM produced output which is DC coupled (for control signals)
* **s-a** - digital output which is AC coupled (for audio signals)
* **s-c** - digital output which is DC coupled (for control signals)

## Controls
* **a** potentiometer - control for parameter **a**
* **b** potentiometer - control for parameter **b**
* **c** potentiometer - control for parameter **c**
* **d** potentiometer - control for parameter **d**
* **rst** button - used for uploading new firmwares, see below for instructions.
* **led** - this LED can be programmed to flash. It also indicates the upload progress when uploading a new firmware.

## Controls of the default dr1 firmware

The core1.ae module comes with the dr1 firmware pre-installed. This is a complex oscillator which is really fun to play with and also gives you a selection of different waveforms. 

**Outputs**

* **m-a/c** - Main audio output
* **s-a/c** - Square-wave sub-oscillator output

**Controls**

* Knob **a** - 'perturbation' (random switching of wavetables
* Knob **b** - wavetable select (Sine, Triangle, Square, Saw with intermediate positions being a blend)
* Knob **c** - Main oscillator frequency (Fundamental pitch)
* Knob **d** - Secondary oscillator frequency (enveloped by the main oscillator)

**Inputs**

As per the normal operation of the core1.ae the inputs for b, c, d can be used to CV control the parameters which are otherwise controlled by the corresponding knobs. The knob position provides an offset to which the input CV is added.

## How to program the Core1.ae module

This is very old school in that you load new programs in to the module via the audio input. This page describes everything you need to know:

https://wonkystuff.github.io/arduino/

Some very easy to follow examples are available in this Github repository:

https://github.com/wonkystuff/coreExamples

There is a section on the AE Modular forum to discuss programming this module:

https://forum.aemodular.com/board/25/programming-core1-ae
