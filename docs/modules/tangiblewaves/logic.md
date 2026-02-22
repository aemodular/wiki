# LOGIC
[[img|modules/images/logic.png|100]]

[[ https://www.tangiblewaves.com/store/p16/LOGIC.html | View Product Page]]

The LOGIC module contains two separate logic operators and two signal inverters.

Each operator combines two inputs by different logical rules (AND, NAND, XOR).
This can be used

* either for operations on trigger / gate signals (let gate signals pass depending on other signals, invert them depending on the other input etc.)
* or for audio signals, where you get ringmodulator-like sounds when feeding two different oscillator frequencies.

Module power consumption: 1 mA

## Inputs
* **1A** - First signal input for logic operator 1
* **1B** - Second signal input for logic operator 1
* **2A** - First signal input for logic operator 2
* **2B** - Second signal input for logic operator 2
* **IN3** - Signal to be inverted
* **IN4** - Signal to be inverted

## Outputs
The outputs are grouped in two identical groups marked with number 1 and 2 for each individual LOGIC operator.  We only describe the outputs of one group as they work exactly the same for the other group.

* **NAND** - (Not AND) outputs a LOW signal when **both** input signals are HIGH.  Otherwise outputs HIGH.  This is the truth table:

**NAND**

  | Input A | Input B | Output |
  | :-: | :-: | :-: |
  | 0 | 0 | 1 |
  | 0 | 1 | 1 |
  | 1 | 0 | 1 |
  | 1 | 1 | 0 |


* **AND** - outputs a HIGH signal when **both** input signals are HIGH.  Otherwise, outputs LOW.

**AND**

  | Input A | Input B | Output |
  | :-: | :-: | :-: |
  | 0 | 0 | 0 |
  | 0 | 1 | 0 |
  | 1 | 0 | 0 |
  | 1 | 1 | 1 |


* **XOR** - (Exclusive OR) outputs a HIGH signal when **either** input signal is HIGH but **not when both** are HIGH or LOW.

**XOR**

  | Input A | Input B | Output |
  | :-: | :-: | :-: |
  | 0 | 0 | 0 |
  | 0 | 1 | 1 |
  | 1 | 0 | 1 |
  | 1 | 1 | 0 |


* **INV3** - Inverts the signal of IN3 input.  If IN3 is HIGH, it outputs LOW.  If IN3 is LOW, it outputs HIGH.
* **INV4** - Inverts the signal of IN4 input.  If IN4 is HIGH, it outputs LOW.  If IN4 is LOW, it outputs HIGH.



## Display
* **AND 1** - Visual reference for the first logic gate AND output.  When AND output is HIGH, the LED turns on.  When the AND output is LOW, the LED turns of.
* **AND 2** - Visual reference for the second logic gate AND output.  When AND output is HIGH, the LED turns on.  When the AND output is LOW, the LED turns of.

## Patch Suggestions

- The very basic patch is to connect one Pulse [[2lfo.md | LFO]] into 1A and another one into 1B.  Then connect any of the outputs of group 1 to the a VCA's CV input.

- Patching an LFO to input 1A and an audio signal to 1B (or vice versa), converts the logic gate into a signal gate (through AND or NAND outputs), letting the audio signal through when the LFO is HIGH and cutting it when LOW.

- For ringmodulator-like sounds, connect one audio rate [[2oscd.md | oscillator]] to 1A and another one to 1B.  Try different wave shapes.  Square and pulse work best but other shapes give interesting glitchy effects.  You can make serious sounds by patching two square waves into the A inputs of the XOR, then two square waves into the B inputs.  Take the outputs of the two XOR and patch them into the A and B input of a third XOR an then listen to the output while slowly adjusting the frequency of the oscillators.

- Patch in square/pulse Waves into the logic module and listen to the XOR out for incredibly rich and morphing Waves. Tuning the squares and changing PWM generates an Endless amount of timbres. The first XOR out can be recombined with one of the square Waves in the other logic input for another XOR out.

- Do the same thing but with a stereo output, e.g. send the XOR to the left ear and OR to the right ear.

- Or send the XOR into a filter and use the AND to modulate the cutoff frequency.

- Basically just use it like a VCO, by processing other VCOs.

- You can create new truth tables (LOGIC gate operators or logic rules) by patching the output of one group to one of the inputs of the other group or to the inverters.  For example, connecting XOR1 to IN3 would result in INV3 outputing HIGH when both signals are HIGH **or** LOW, but not when one of them is HIGH and the other one LOW, resulting in a XNOR gate (Exclusive Not OR gate).  See the truth table and notice that it's the exact opposite of the XOR truth table.

**XNOR**

| Input A | Input B | Output |
| :-: | :-: | :-: |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Combine a number of these modules and you get a crazy GATE / TRIGGER sequencer.

You also may find this link useful. https://doudoroff.com/logic/
