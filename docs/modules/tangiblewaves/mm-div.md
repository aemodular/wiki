# MM-DIV
[[img|modules/images/mmdiv.png|100]]

[[ https://www.tangiblewaves.com/store/p83/MM-DIVIDER_.html | View Product Page]]

A multi-mode divider for clock and audio signals.

It can be used either for dividing clock signals (e.g. from an LFO, BEATDIVIDER) for rhythmical purposes but also for audio signals - in this case you get subharmonics / lower octaves squarewaves at the outputs, which can be mixed or used separately.


The module has eight outputs which - depending on the selected division mode - provide different division factors of the input signal:

* Beat: musical/rhythmical clocks are generated as 1/1, 1/2, 1/4... 1/16 and triplets
* Binary: the outputs work as binary counter (same as the predecessor module DIVIDER)
* Decimal: The outputs have decimal divisions of the input, meaning half, third, quarter, fifth... of the input clock
* Prime: The outputs use the prime numbers as division factors
* Fibonacci: The outputs use the numbers of the fibonacci row as division factors

Module power consumption: 10 mA

## Inputs
* **CLK** - clock input either triggers,square waves or audio signals
* **RESET** - CV gate or trigger to reset all output signals; in case of audio signals this can get quite unique, ringmodulator-like sounds.
* **SHIFT** - CV gate or trigger to shift/rotate the outputs; usually, the fastest output is on output 1, but with shift the entire output pattern is shifted so the fastest output can be set to any position 1...8.

## Outputs
* **1..8** - 8 trigger out puts for the different clock divisions
* **BUS GATE** - MIDI Gate signal from the internal bus
* **BUS CLK** - The MIDI clock signal from the internal bus. Please note that the actual clock resolution depends on your MIDI clock source. The MIDI standard is 24ppqn (Pulses per Quarter Note)
* **BUS START** - sends a trigger when the MIDI start message is sent from a connected MIDI device
* **BUS STOP** - sends a trigger when the MIDI stop message is sent from a connected MIDI device


## LED Indicators
* **1..8** - each of the 8 LEDs will light up when the associated trigger is active
* **MODE** - LED lights to the left of the selected division mode

## Controls
* **RESET** - resets all output signals; in case of audio signals this can get quite unique, ringmodulator-like sounds.
* **MODE** - select the division mode.
* **SHIFT** - shifts/rotates the outputs; usually, the fastest output is on output 1, but with shift the entire output pattern is shifted so the fastest output can be set to any position 1...8.

## Patch Suggestions
A clock divider can be used in many different ways. The most common use is to use it for rhythmical applications to trigger percussive sounds or advance the clock of a [[ seq8.md |step sequencer]]. The different division modes can lead to interesting and uncommon rhythmical patterns. Using the shift knob, the pattern can be varied for dramatic effect.

The MM-DIV also accepts input in audio range. If you patch in a saw or triangle wave from an oscillator you can get sub oscillators out of the various outputs.

Here is a very quick demonstration by The 5th Volt on how to use the rotating patterns to play with drum sequences:

%embed% https://youtu.be/pXVyXn8TV8c %%
