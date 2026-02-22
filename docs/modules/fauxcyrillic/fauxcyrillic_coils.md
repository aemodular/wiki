# Coils

[[img|modules/images/Coils_panel_final.png|200]]

[[https://www.tindie.com/products/fauxcyrillic/coils/ | View Product Page]]

[[https://github.com/fauxcyrillic/Coils | Open source]]

Coils is a port of the famous Eurorack module *Plaits* from Mutable Instruments.

Coils/Plaits is a multi-functional digital oscillator featuring 24 different synthesis modes: wavetables, speech synthesis, chord engines, physical modelling, drum synthesis, DX7 patch support, and many more.

Module power consumption: 90mA

## Inputs
* **MDL** - incoming CV will switch between synthesis models
* **V/OCT** - pitch CV input
* **LEVEL** - CV control of output level (when CV LVL switch is engaged)
* **TRIG** - trigger the internal LPG and envelope generator; excites physical models
* **TIMBRE** - CV control over timbre, attenuated by its attenuverter
* **FM** - as above
* **MORPH** - as above
* **HARMONIC** - direct CV control of the harmonic parameter

## Outputs
* **OUT** - main audio output signal
* **AUX** - a varient or by-product of the main output, which varies from model to model. For example this may be a sub-octave output, a root note, or a different waveform.

## Controls

Because of the number of synthesis models available, the controls can be confusing. I recommend refering to this useful [[https://www.rochefsky.com/learnings/plaits | cheat sheet]].

**In default navigation mode:**
* **Left button** - cycle through GREEN (tonal) synthesis modes. Hold this button and turn MORPH and TIMBRE to adjust the internal LPG cutoff and attack.
* **Right button** - cycle through RED (noise / percussive) synthesis modes. Hold and turn harmonics to change the range of the v/oct input.

*Quickly press & hold both buttons together (about 1 second) to switch between normal and alternative navigation modes.*

**In alternative navigation mode:**
* **Left button** - cycle backwards through all available synth modes.
* **Right button** - cycle forwards through modes.

BONUS "SECRET" SYNTH MODELS:
Only accessible in alt navigation mode. Cycle forwards through all green and red models until you end up in YELLOW mode. There are eight bonus sounds in this mode, including a 6-op FM synth, a string machine emulation, square wave arpeggiator and so on. See [[https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/firmware/ | firmware v1.2 notes]] for full details.

## Tips & troubleshooting

Mutable modules often feature a smart technique for detecting whether or not a cable is inserted in an input. With AEs single-signal DuPont style wires this isn't possible, so this automatic detection is emulated with a series of switches.

DRONE / TRIG - in drone mode the oscillators will run freely, just as Plaits runs when no patch cable is inserted into the 'trig' input.

In TRIG mode the module will be silenced until a trigger is recieved on the trig CV input. Each trigger will fire the internal low pass gate.

LPG / CV LVL - with the module in 'drone' mode setting this switch to CV LVL will silence the audio out until a voltage is receieved on the LEVEL CV input. Unlike TRIG this does not fire the internal envelope but rather directly controls the output level - essentially acting like an internal VCA.

*Note in the current version the LEVEL input only responds once the voltage reaches 2.5V.*

INT MOD / CV MOD - the TIMBRE, FM, and MORPH parameters can be modulated when a trigger is received; when INT MOD is selected this modulation will be taken from the internal envelope shape. Switch to CV MOD to modulate these parameters using external CV instead. Modulation of these three controls is attenverted with the lowest three pots - with the attenuverter in the centre position no modulation will be receieved. Turn clockwise for increasing levels of positive modulation, and counter-clockwise for negative modulation.

**Calibration:**

*When nothing is connected to the MDL input the eight LEDs should only display a single steady light. If a second LED is flickering, and/or you hear bursts of static noise from the module, this may indicate that the module is not correctely reading zero volts on that input. Usually this can be solved easily with calibration. The process is quite simple, but you need a steady 1 volt and 3 volt source.*

Press and hold both buttons for 2 seconds to enter calibration mode. When one LED starts flashing, send 1V to the v/oct input, then press any button. The led will change colour; now send 3V to the v/oct input. Press a button again to return to normal mode.

If all the leds flash red after calibrating, it means the calibration has failed - double check your voltage levels and try again.

**LFO mode:**

While holding the right button, turn HARMONICS fully counter-clockwise (the leds will pulse up and down). In LFO mode the frequency control will range from 0.016Hz (~1 minute) to 16Hz.

**Accessibility:**

Holding the right button while the module powers up will enable/disable colour-blind mode. When enabled, the green/red/yellow model indicators are replaced with different brightness levels.

**Firmware hacking:**

Firmware updates (if available) can be applied in a similar way to Tangible Waves CIRRUS module. Set the frequency knob to noon, then connect audio from your computer/phone/tablet to your rack, either throught the master module, 4I/O or similar, and connect the audio to the MDL input. Power up the rack while holding the left button on COILS, then play the audio file. When complete, the module will reboot. If all leds flash red, the update has failed, please adjust your audio levels and try again.

Alternatively, there are four right-angle pins on the bottom of the module which can be connected to an ST-LINK adaptor or similar. See https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/open_source/ for details on firmware hacking and the Mutable dev environment.

## Sound demo

%embed% https://www.youtube.com/watch?v=vPqwHbqy58w %%
