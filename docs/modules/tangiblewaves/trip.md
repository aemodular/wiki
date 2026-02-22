# TRIP
[[img|modules/images/TRIP.png|100]]

[[https://www.tangiblewaves.com/store/p121/TRIP.html | View Product Page]]

**TRIP** is a **TRI**gger **P**rocessor module; it takes incoming triggers and repeats them - you can think of it as a delay module for triggers. The delay time and the number of repeats can be set with a knob and additionally be CV controlled. Beyond a static delay, the delays of one input trigger can be accelerated or decelerated, leading to the rhythm of a bouncing ball for instance. In another mode, the probability of the output triggers can be chosen.

Different output modes change the assignment of the delays to the eight outputs; either, all delayed triggers for one input trigger are on one output, or the delays go through the outputs 1...8. By this, complex events can be triggered.

Finally, the acceleration and the gate time can be CV controlled as well.

The module is "polyphonic" in a sense, that consecutive triggers at the input don't stop currently running trigger outputs from a previous trigger, but mixing them all. Together with variable delay times and acceleration, highly complex trigger patterns can appear on each of the eight outputs.

Module power consumption: 8 mA

## Inputs
* **TR IN** - trigger input
* **DELAY** - accept CV for the delay time  (value from knob DELAY TIME will be added) 
* **RPTS** - accept CV for number of repeats (value from knob REPEATS will be added) 
* **ACCEL** - accept CV for acceleration (value from knob ACCELERTN will be added) 
* **GATE** - accept CV for gate time (value from knob GATETIME will be added) 
* **MUTE** - silences all outputs

## Outputs
* **1...8** - trigger outputs;depending of seleted operation mode


## Controls
* **DELAY TIME** Knob - change the delay time from 0.02 to either 1 or 5 seconds depending on FAST/SLOW operation mode
* **REPEATS** Knob - change the number of trigger repeats from 1 to 32
* **ACCELERTN** Knob - change the acceleration (center to right) / deceleration (center to left) of the delayed triggers 
* **GATE TIME** Knob - change the gate time of the output triggers 
* **PROBABL./ACCEL.** Switch - switch between PROBABILITY or ACCELERATION mode. When in ACCELERATION mode, the outputput triggers will fire faster / slower with every step; when in PROBABILITY mode the output triggers are fired/supressed randomly.
* **MAN TRIG** Button - sends a trigger signal to start the triggers manually, additionally to the TR IN. 

## Configuration
Pressing the MAN TRIG button for one second enters the configuration mode; here:
* the LEDs 1..3 show the output mode; change with knob DELAY TIME
* the LED 5 shows the dry+wet mode; change with knob REPEATS
* the LED 6 shows the delay time range; change with knob ACCEL
* the LED 7 shows the overflow mode; change with knob GATE TIME.

**Output modes:**

**Mode 1** is a combined mode; output 1 has all delayed triggers, outputs 2-8 have only the delayed trigger of the according delay counter. If REPEATS is greater than 7, then the outputs 2-8 remain silent for later delays.

**Mode 2** is similar to Mode 1, except that the combined triggers at output 1 don't exist, therefore you have 8 separate outputs for the delays 1 to 8.

**Mode 3** works as following: The delays of the first input trigger appear at output 1; if a new input trigger signal comes in before the first delayed trigger sequence is finished, then it's delays are sent to output 2. Same for subsequent trigger inputs up to eight.
For further trigger inputs it is checked which output is free (no more current triggers running) and this one is used for the delays of the incoming trigger.

**Dry+Wet mode:**

When Dry+Wet mode is activated (LED 6 in Configuration mode), then the input trigger is also sent to the output, so original trigger and it's delays are combined.

**Delay time range:**

When the time range is set to on (LED 7 in Configuration mode), then, the maximum delay time range is eight times longer compared to time range "off". The maximum delay time is approx. 20 seconds, and even longer with negative acceleration.

**Overflow loop:**

When the overflow loop is set to on (LED 8 in Configuration mode), repeats that exceed the count of 8 are started again within the output range of eight outputs. If set to off, then repeats (except output 1 in Mode 1) beyond the 8th are discarded.
This setting has no effect in Mode 3.

**Quit the configuration:**
Short pressing the MAN TRIG button exits the Configuration mode and returns to regular operation.


## Patch Suggestions

The most obvious use for this module is "echo" type FX, repeating a sound as set by the module controls.

It can be good on CVs, try it off an [[2lfo.md | LFO]] going to filter cutoff....

An excellent module for helping produce sound FX, try  [[noise.md | NOISE]] through a VCA controlled by this module as a starting point. 

Most people run this module from an LFO to provide the initial trigger, but there's no reason it can't be one of the AE modular's sequencer clocks or trigger outs... This can be excellent to then provide a modulation source that (sort of) works with the tempo.
