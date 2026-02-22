# TRIQ164
[[img|modules/images/triq164.png|200]]

[[ https://www.tangiblewaves.com/store/p52/TRIQ164.html | View Product Page]]

TRIQ164 is designed as improved replacement for the STEP10.

TRIQ164 is a 4-track trigger sequencer. It can have a maximum of 16 steps and all tracks have to be the same length.  All 4 run in sync but a single track is on the front panel at any one time, switched by the Track buttons. A trigger sequence means it cannot generate CVs for, e.g., pitch but does a +5V pulse when a step is selected to be active. Excellent for controlling percussion sounds, e.g. Drumkit 010 module.



Width: 2U

Module power consumption: 6 mA

## Inputs
* **CLK** - accepts trigger to advance one step
* **RESET** - go back to step 1
* **MUTE1** - accept gate to mute OUT 1.  Mutes signal when input is HIGH.
* **MUTE2** - accept gate to mute OUT 2.  Mutes signal when input is HIGH.
* **REPEAT CV** - control voltage for adding repeated triggers within one step, please see **repeat** knob below.

## Outputs
* **OUT [1-4]** - outputs for each track.  The value is given by the current step of the corresponding track.
* **[1-16]** - trigger output for each step of  the **currently selected track only**.  __NOTE: Repeats are not available through these outputs__
* **B. CLK** - MIDI clock via the Master module
* **B. START** - +5V trigger pulse when MIDI START is sent from external equipment, via the Master module. 
* **B. STOP** - +5V trigger pulse when MIDI STOP is sent from external equipment, via the Master module. 

## Controls
* **TRACK Buttons [1-4]** - select the current track to be edited. The current track's steps are then displayed, and can be edited with the step buttons, and the 16 trigger outputs are those of the current track only. The track buttons are also used in combination with the STEP buttons to edit which steps in a track may have repeated triggers. To do this, first hold down the track button for the desired track.  While the button is held down, the step LEDs will instead display those steps in the desired track that presently have repeated triggers. While holding down the track button, you can now press STEP buttons to toggle repeated triggers for each step. When you release the track button, the LEDs return to displaying the active steps of the current track.

* **STEP Buttons [1-16]** - activate/deactivate steps in the **current track only**.  The LED by each step button indicates if the step is active (ON) or inactive (OFF) in the **current track only**.  __NOTICE: The same step my have different values in different tracks__
* **RESET Button** - resets the sequences (jump to step 1)
* **REPEAT Knob** - select the number of repeats within one step, i.e. ratcheting, for those steps set to do repeated triggers. From no repeated triggers (turned all the way to the left) to 8 repeated triggers (turned all the way to the right). You can also change the number of repeated triggers via the REPEAT CV input.

## Saving sequences
The programmed sequences will be automatically saved after 30 seconds are then recalled even after the unit has been turned off from power. If you turn off the power before the 30 second period then your last changes will be lost.

## Patch Suggestions

For sequences shorter than 16 steps, connect a step output to RESET.  For example, if you want a 4-step sequence, connect STEP OUTPUT PIN 5 to RESET.

You can use a TRIQ164 channel to trigger the clock on the [[seq16.md | SEQ16]] or [[seq8.md | SEQ8]] modules so you can do different rhythms/ time signatures with them around your master tempo clock going into the TRIQ164.

As with all AE modules, it can be "abused" - (AE does stand for Abused electronics!), with a high clock rate it can become an audio FX generator or processor. please see the thread on the forum

https://forum.aemodular.com/thread/1595/triq164-module?page=1&scrollTo=13144

Here is a video by [[/artists/the5thvolt | The 5th Volt]] which explains how to use the TRIQ164:
%embed% https://youtu.be/HrwxXI29Ack %%
