# µPROBAGATE
[[img|modules/images/uPROBAGATE.png|100]]

[[https://www.tangiblewaves.com/store/p181/uPROBAGATE.html  | View Product Page]]

This 1/3 height  micro module routes an incoming gate signal to one of 3 outputs based on chance via a probability function. This is very similar to the Bernoulli Gate from Mutable Instruments.

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: ? mA

## Inputs

* **GT IN** - this is the incoming gate signal
* **PRB CV** - controls the probability of the signal being routed one way or another

## Outputs

* **OUT 1, 2, 3** - either one or more will output the incoming gate signal based on the probability function.

## Controls

* **PROBABILITY** Pot - changes the probability of the gate being routed one way or another.
* **SINGLE / PAR** Switch - In single mode, only one output will be triggered at a time. In Parallel mode,  2 or more outputs can be triggered at once, which can be really interesting with pitched sounds on each trigger.

## Patch Suggestions

This module is perfect for generative patches where events are driven by chance. For instance it can be used to kick off one of 3 different Envelopes which could introduce variation in sound events.

The gate can also be used as a clock for 3 different sequencers which move forward based on the probability function and create not completely random melodies, but at least random sequences in which the programmed melody is played.
