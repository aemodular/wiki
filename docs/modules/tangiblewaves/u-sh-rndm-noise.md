# µSH-RNDM-NOISE
[[img|modules/images/uSH_RANDOM_NOISE.png|100]]

[[https://www.tangiblewaves.com/store/p170/uS%26H_%2F_RANDOM_%2F_NOISE.html  | View Product Page]]

This 1/3 height micro module is jam packed with features such as:
* 2 channel Track or Sample & Hold
* Noise
* Random clock

This module needs to be placed on a carrier for micro modules, like  [[u-base.md | µBASE]],  [[u-base_qs2.md | µBASE QS2]]!

Module power consumption: ? mA

## Inputs

* **IN 1** - the audio to be "sampled" on channel 1.
* **TRG 1** - when activated the module takes a voltage measurement from input 1.
* **IN 2** - the audio to be "sampled" on channel 2.
* **TRG 2/CLK**   - when activated the module takes a voltage measurement from input 2 and can also act as clock for the random CV output.

## Outputs

* **1** - S&H output channel 1
* **2** - S&H output channel 2
* **R** - Noise
* **CLK** - Random Clock

## Controls

* **T&H / S&H** Switch - changes the behaviour of either sampling the input and holding that voltage at the trigger point, or tracking the input when the trigger is positive; these cause very different CVs to be produced by the module from the same input.

* **TAP / MODE** Button - tapping the button a few times sets the speed of the random value changes. 
  * Tapping the button only one time: The random value output is updated when the input TRIG2 gets a trigger signal / it's synced to TRIG2 input.
  * **Mode display and changing:**
    * Holding the button displays the currently set mode:
      * 1x: (audio) noise output 
      * 2x: random CV
      * 3x: random CV, smoothed
      * To change the mode: Hold the button longer until the desired mode (= number of LED flashes) is displayed, then release the button. The mode and selected speed is saved when powered off.


## Patch Suggestions

This module is very similar to the combination of [[noise.md| NOISE]] and [[sample-and-hold.md | SAMPLEHOLD]] and all the patch suggestions for those modules apply here as well.

Track and hold is a very unusual function to be offered even in modular world, it can be a very interesting source of CVs; it can also be used to generate a semi-repetitive CV depending on the input.
