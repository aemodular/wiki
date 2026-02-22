# µ4BUFFER
[[img|modules/images/u4BUFFER.png|100]]

[[https://www.tangiblewaves.com/store/p175/u4BUFFER.html  | View Product Page]]

This 1/3 height micro module provides a buffered 4 channel multiple. This can be used for multiplying cv, trigger and gate signals without voltage loss. One input signal will be routed to two duplicate outputs.

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: ? mA

## Inputs

* **IN 1, 2, 3, 4** - Inputs for each of the 4 buffer channels

## Outputs

* **OUT 1, 2, 3, 4** - Two outputs for each of the 4 channels.

## Patch Suggestions

While this module seems to provide similar functionality as the [[4buffer.md | 4BUFFER]] module, it is missing the linking feature. So if you want to multiply one input signal to many outputs, then you need to patch it internally, eg.:

* Patch an input signal to IN1
* Patch OUT1a to IN2
* Patch OUT1b to IN3

Now you have 4 outgoing copies of the incoming signal from OUT2 and OUT3.
