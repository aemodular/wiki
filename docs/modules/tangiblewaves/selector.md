# SELECTOR

[[img|modules/images/SELECTOR.png|100]]

[[ https://www.tangiblewaves.com/store/p191/SELECTOR.html | View Product Page]]

The SELECTOR module is an electronic switch for any kind of signals to select one of up to eight sources or sending a signal to a specific destination (it's biderectional). It is also known as “Sequential switch” in former modular synths. The SELECTOR has 8 inputs for any kind of signals, no matter if audio CV or gate, and one of them can be routed to an output in different ways: Either by a knob, or by a CV, or by clock pulses to advance by 1 plus a reset trigger input. By a switch it can be set to operate as a dual unit with 4 inputs each.

Module power consumption: ? mA

Module width: 1 unit

## Inputs
* **IO1** - Input or Output 1, routed to first group of 4 when in 2x4 mode
* **IO2** - Input or Output 2, routed to second group of 4 when in 2x4 mode
* **CV** - CV control of target or source with 0V routing to OI1 and 5V routing to OI8
* **CLK** - Clock input, each clock signal sends the input signal to the next output, or the other way.
* **RST** - Reset trigger, resets the "counter" back to 1

## Outputs
* **OI1-8** - These outputs can also be used as inputs (module is bidirectional)

## Controls
* **2x4/1x8** (switch) - When in 2x4 position the first input is routed to the top 4 outputs and the second input routed to the bottom 4 outputs. When in 1x8 position the second input is unused and only the first input is routed to all 8 outputs. (Note that the the signal flow can also be reversed!)
* **SELECT** (knob) - Manually selects which output the signal is routed to, when turned all the way to the left then output 1 (OI1) is selected, all the way to the right OI8 is selected.

## User Interface
One of the 8 LEDs will light up when an output is active.

## Patch Suggestions
It's a quite useful tool for more complex patches,e.g. for selecting between different sequencers, or sending a modulation source to varying "receivers".