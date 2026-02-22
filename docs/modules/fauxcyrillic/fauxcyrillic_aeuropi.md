# AEuroPi
[[img|modules/images/AEuroPi_W_bordered.png|200]]

[[https://www.tindie.com/products/fauxcyrillic/aeuropi/ | View Product Page]]

This is a port of the EuroPi module by [[https://allensynthesis.co.uk/modules/europi.html | Allen Synthesis]].

EuroPi offers a hardware bridge for the Raspberry Pi Pico, providing one digital ‘trigger’ input, one analogue input, six outputs, two knobs, two buttons, and a small OLED display. The EuroPi software library provides easy access to these features for developing small ‘scripts’ which run on the module. Users can develop their own scripts easily in Python, alternatively a varied collection of user-contributed scripts is included by default.

EuroPi was developed by Rory Allen, who gave his blessing to this AE port; many thanks are due for his hard work and commitment to open-source.

Module power consumption: 70mA


## Inputs
* **D in** - Digital Input
* **A in** - Analog Input

## Outputs
* **B.CV** - outputs the CV signal from the AE Bus
* **B.Gate** - outputs the Gate signal from the AE Bus

The module also has 6 analog outputs on the top right which are controlled by the currently selected mode.

## Controls

From the main menu, use knob 2 (on the right) to move up and down to select a script. Press either button to launch a script.

To return to the main menu at any point, press and hold both buttons for ~2 seconds, then release.

## Scripts

To see the full details of each script you can read their .md files on [[https://github.com/fauxcyrillic/AEuroPi/tree/AEuroPi-custom-latest/software/contrib | Github]]

Here is a brief overview of the current scripts included in the AE version:


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/bernoulli_gates.md | BERNOULLI GATES]] - Based on MI Branches, a trigger input to D IN is routed to one of two outputs at random, the probability of which is adjusted by the position of the knobs. There are two bernoulli gates, both share the same trigger but the probability can be set independently.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/coin_toss.md | COIN TOSS]] - Self-generated probability gates, similar to the above, but can run from its own internal clock.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/consequencer.md | CONSEQUENCER]] - MI Grids-inspired gate and CV sequencer, with switchable pre-defined gate patterns and a random stepped CV generated from a Turing Machine-like process. With three gate outputs and three CV outs, this is ideal for triggering drum patterns while using the CV to vary accents, filter, decay time etc.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/cvecorder.md | CVECORDER]] - Record CV patterns from A IN into one of six channels, which then play in a loop from the six outputs.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/diagnostic.md | DIAGNOSTIC]] - A simple script for diagnosing any hardware issues; displays the values of inputs and knob/button status.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/envelope_generator.md | ENVELOPE GENERATOR]] - A basic envelope generator; can be switched between AR and ASR, with adjustable rise and fall.

[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/euclid.md | EUCLID]] - Generates six independent Euclidean rhythms. The length, number of steps, rotation and skip probability of each pattern can be independently adjusted.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/hamlet.md | HAMLET]] - A spin-off of Consequencer, where one drum track is sacrificed to make way for two sets of melodic gates and random CV. In this way the script can drive a complete ‘voice’ of two drums and two melodic lines.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/harmonic_lfos.md | HARMONIC LFOS]] - Six related LFOs, each of which can be one of five shapes (sine, saw, square, smooth random, noise). Each channel can be set to a different division of the master tempo which is set with knob 1 and/or through A IN. Sending a gate to D IN will reset all LFOs.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/kompari.md | KOMPARI]] - A simple comparator based on Allen Synthesis’ stand-alone Kompari module. Send a CV to A IN, and the six outputs are set according to the relation between that voltage and the upper & lower boundaries set by the positions of knobs 1 and 2.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/logic.md | LOGIC ]]- Six digital logic operations generated from signals sent to both inputs: AND, OR, XOR, NAND, NOR, and XNOR.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/master_clock.md | MASTER CLOCK]] - A clock source and divider.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/noddy_holder.md | NODDY HOLDER]] - Two channels of sample & hold / track & hold, plus inverted outputs.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/pams.md | PAM’S]] - An adaptation of the core functionality from the Pam’s New Workout module. A clocked modulation source where each of the six outputs can be a clocked gate, euclidean rhythm, LFO, quantised CV, S&H, etc.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/particle_physics.md | PARTICLE PHYSICS]] - A simple ‘bouncing ball’ simulation, outputs gates when the “ball” reaches its highest and lowest points, and continual CV proportional to the ball’s height and velocity.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/poly_square.md | POLY SQUARE]] - Six simple square wave oscillators formed from a base pitch, with various polyphony modes and adjustable detune.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/polyrhythmic_sequencer.py | POLYRHYTHMIC SEQUENCER]] - Based on the Moog Subharmonicon, a sequencer which advances notes according to a polyrhythmic clock.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/probapoly.md | PROBAPOLY]] - Generate polyrhythmic gate patterns, with probability.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/quantizer.md | QUANTIZER]] - A simple quantiser. Output 1 is the quantised signal, outputs 2-5 are shifted up/down by semitones.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/radio_scanner.md | RADIO SCANNER]] - A tool for directly manipulating CV on 2 axis, inspired by tuning a shortwave radio.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/sequential_switch.md | SEQUENTIAL SWITCH]] - CV signals sent to A IN are routed to one of the six outputs. A trigger sent to D IN switches to the next output. Various switching modes are available; random, ping pong, reverse, etc.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/smooth_random_voltages.py | SMOOTH RANDOM]] VOLTAGES - Random CV values / sample & hold from A IN, with adjustable slew time.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/strange_attractor.md | STRANGE ATTRACTOR]] - Lorenz-style chaotic modulation with X, Y and Z as CV outputs, and three gate signals relative to those values.


[[https://github.com/fauxcyrillic/AEuroPi/blob/AEuroPi-custom-latest/software/contrib/turing_machine.md | TURING MACHINE]] - A faithful Turing Machine port with some of the functionality of the Pulses expander. Random looped CV on output 6, the other 5 outputs provide various combinations of pulses.


## More Info

There is a section on the AE Modular forum to discuss programming this module:

https://forum.aemodular.com/thread/2745/aeuropi-firmware

API documentation is available here:

https://allen-synthesis.github.io/EuroPi/
