# JOYSTICK
[[img|modules/images/JOYSTICK.png|100]]

[[https://www.tangiblewaves.com/store/p130/joystick.html | View Product Page]]

The JOYSTICK module can mix up to 4 CVs, these are provided at its inputs. It can also generate its own CVs so can easily provide basic mod wheel type control of pitch (vibrato) through to complex, live mixing of audio (with other modules).

## Inputs

* **CV1** - input for Q1 of the joystick.
* **CV2** - input for Q2 of the joystick.
* **CV3** - input for Q3 of the joystick.
* **CV4** - input for Q4 of the joystick.
* **MULT** - a passive mixer/splitter. This is very useful on this module if you are wanting the same signal in more than one input; put the signal in here, then then (short) leads to the inputs you want to feed.

## Outputs

* **Q1** - Either the output from input 1, or CV voltage,  controlled by how close the joystick is to Q1 on the front panel.
* **Q2** - Either the output from input 2, or CV voltage,  controlled by how close the joystick is to Q2 on the front panel.
* **Q3** - Either the output from input 3, or CV voltage,  controlled by how close the joystick is to Q3 on the front panel.
* **Q4** - Either the output from input 4, or CV voltage,  controlled by how close the joystick is to Q4 on the front panel.
* **CV X** - A voltage dependent on the side to side position of the joystick
* **CV Y** - A voltage dependent on the up/down position of the joystick
* **CV MIX** - the 4 inputs combined into one CV signal, controllable with the joystick.
* **Gate**  - A gate signal is proved when the joystick is pushed

## Controls

* **Overlap** switch - If overlap is selected, the relevant CV is controlled over the whole movement of the joystick from its side (quadrant)  to the other. If overlap is off, then zero/no volume is when the joystick is in the centre position.
* **Input Mix/CV Source** switch - Input mix means the joystick controls whatever is being fed into the 4 inputs. CV source means the joystick produces voltages dependent on its position, each one of the 4 outputs being different most of the time!
* The **Joystick** itself! 

It is important to remember it remains in each position - there is no automatic "return to centre". Also it can generate a gate signal (own output) by being pressed.

## Patch Suggestions

For audio mixing with the joystick, select CV source, then patch the 4 outputs to separate VCAs (e.g. [[4vca.md | 4VCA]]), you have 4 individual controllable signals which you can mix together with any of the mixer modules (e.g. [[4attmix.md | 4ATTMIX]]). The [[mixconsole.md | MIXCONSOLE]] module can have the signal straight from the Joystick module to control channel levels.

The joystick can be just like a normal mod or pitch wheel; by taking the Y output to what you want to control by the up/down movement. If this goes to the CV in of a VCA, then the signal level of what is input to the VCA will be controlled - e.g. input a LFO with the output going to a VCO the joystick will control vibrato.

You can do this with the side to side movement (x axis) as well, controlling 2 parameters at once - this could be filter cutoff, an oscillator level,  LFO speed etc etc etc... 

The trigger can be used for a modulation envelope (e.g. pressing the button triggers a slow ENV which varies the filter cutoff), can be good for the [[algodrone.md | Algodrone]] module and for manual triggering of percussion sounds.
