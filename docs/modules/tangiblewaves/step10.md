# STEP10
[[img|modules/images/step10.png|100]]

[[ https://www.tangiblewaves.com/store/p14/STEP10_.html | View Product Page]]

This is a discontinued module and is no longer in production. It was replaced with the TRIQ164 Trigger Sequencer module.

## Inputs

* **Clock** - trigger in to move the Step 10 to the next step. This can be from the Midi Clock, an LFO or any other +5V pulse (e.g. external sequencer)
* **Reset** - This puts the step count back to the first one regardless of previous position. Use for sequences  other than 8 or 10 steps.
* **B Gate** - Midi Key on/off (external device via Master module)
* **B CLK**  - Midi Clock (96 pulses per quarter note via Master module)
* **B STRT** - +5V pulse when Midi start is pressed (external device via Master module).* 
* **B STP** - +5V pulse when Midi Stop is pressed (external device via Master module)

## Outputs

* **Trig** (2) - +5V pulse with each switch that is on below.  
* **T. INV** - +5V  pulse with each switch that is off below.
* **Thru** (4) - Marked **Mult** on the original modules, passive signal splitter/mixer

## Controls

* **(10) 8** Switch - 8 or 10 steps in the sequence.
* **1-4** Switches - Steps 1 to 4 of sequence, trigger or rest depending on position and which output used.
* **(5)** Switch - Step 5 of a 10 step sequence
* **5 (6)** Switch - Step 5 of an 8 step, Step 6 of a 10 step sequence.
* **6 (7)** Switch - Step 6 of an 8 step, Step 7 of a 10 step sequence
* **7 (8)** Switch - Step 7 of an 8 step, Step 8 of a 10 step sequence
* **8 (9)** Switch - Step 8 of an 8 step sequence
* **10** - Step 10 of a 10 step sequence

This seems untidy on paper, but works well as bottom 2 switches are ignored in an 8 step sequence, rather than last 2 switches in right hand column if numbering was the same.



## Patch Suggestions

As a 10 step sequence it is useful to provide variation to the usual 8 or 16 step sequences, whether triggering percussion, providing volume or filter modulation (direct or by triggering an envelope module), or even another sound/pitch. Its set output can be varied via attenuation  in the 4ATT/Mix, 2ATT/CV modules etc.
