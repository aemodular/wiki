# IMDI HEART
[[img|modules/images/imdiheart.png|100]]

[[https://www.tangiblewaves.com/store/p15/IMDI%2FHEART_.html | View Product Page]]

IMDI HEART is the, umm, heart for the usage of IMDI within AE modular. It is derived from wonkystuff's mb/1, extended by some additional functionality.
It's purpose is to receive MIDI signals (either by TRS socket or USB-MIDI via an USB-C socket) and distribute the MIDI messages to a number of outputs for the IMDI messages, to control IMDI-able AE modules.

Module power consumption: 12 mA

## Inputs
* **IMDI** - accepts IMDI data
* **IMDI THRU** - sends out the data from the above socket (buffered)

## Outputs
* **1...16** - IMDI outputs
* **RN** - Gate signal indicating "Run" status (MIDI start sets he output high, MIDI stop sets the output low)
* **CLK** - MIDI Clock
* **STRT** - trigger when MIDI start is received
* **IMDI**- all received MIDI data 1:1 as IMDI messages

## Controls
* **MENU/ENTER** - selects the highlighted menu item and confirms value entry
* **- / UP** - moves the menu selection up / decrements the selected value
* **+ / DOWN** - moves the menu selection down / increments the selected value

## Configuring the module

The display shows a list of menu items, beginning with the selection of the output to be configured. Further down, there are some other general settings of the module.

## Configuring an output:
* With the up/down buttons, select the desired output that should be configured
* press MENU/ENTER. The display shows the list of settings for the chosen output then, these are:
** HSP: activates highspeed mode for the output. Toggle by pressing MENU/ENTER.
** CHL:Lowest MIDI channel this output responds to (**CH**annel **L**ow)
** CHH: Highest MIDI Channel this output responds to. (**CH**annel **H**igh)
** LOW: Lowest MIDI note that is sent to this output
** HGH: Highest MIDI note that is sent to this output
** OCT: Octave transposition for MIDI notes, -7 to +7 octaves
** SAVE Saves changed settings and returns to the top menu
For changing a value, press MENU/ENTER, then set the desired value by the up/down buttons; when ready, press MENU/ENTER again to confirm the value.

## General settings
Below the OUT 1 ... OUT 16 menu items, there are some further menu items that determine settings that are not related to a specific output; these are:
* ICN: Sets the input for MIDI channel messages (like notes, controllers, pitch bend). Usually, this is set to MIDI; although it can be changed to IMDI; in this case the IMDI input of the module is the source for channel messages. The third option is "NONE", maning channel messages are completely ignored by the module.
* IRT: Sets the input for MIDI realtime messages (start/stop, clock, continue....). Same as ICN, usually, this is set to MIDI; although it can be changed to IMDI or NONE.
* ISY: Sets the input for MIDI system messages (primarily system exclusive messages). Same as before, usually, this is set to MIDI; although it can be changed to IMDI or NONE.
* ORT: Sets the output for realtime messages (default: 16). For performance reasons, realtime data cannot be sent to all 16 outputs simultaneously, therefore, a single output has to be selected. If more than one mix of realtime data and channel messages is needed, this chan easily accomplished by the uRTMERGE module.
* OSY: Sets the output for system messages (default: 15). Currently, System exclusive messages are not used in AE, but might find a practical use in the future).
* IIH: IMDI IN Highspeed; selects the highspeed data rate for the IMDI input.
* I2U: IMDI to USB; if activated, messages received at IMDI IN are sent out via the USB socket as MIDI-USB messages. This becomes relevant, when notes, controllers and other messages are created within AE modular and should be used for controlling e.g. a DAW (imagine controlling a VST plugin by AE modules!)
* CTB: Clock to Bus; when activated, incoming MIDI start/stop/clock are routed to the AE modular bus. In this case, the according switches on the MASTER module must be set to the OFF position to avoid collisions. Nothing bad can happen, but the Bus signals will not work as expected.
* DIV: Divider for MIDI clock, from 1/96th to 1/8th
* OFS: Clock offset, 1...12
* BOC: **B**ase **OC**tave; determines how note names are shown in the output settings by setting the number of the lowest octave (-2, -1, 0). Note names are shown differently, the lowest MIDI note is sometimes C-2, sometimes C-1, sometimes C 0, With this setting, you can choose your preferred display.
SST: Determines if the START output sends a trigger also when a stop was received.
RNS: Enables Running status for the outputs. MIDI running status skips sending repeated status bytes when not necessary, which can improve timing a little bit.
RST CTRL: Sends a "reset all controllers" message to all outputs immediately. Useful when certain module settings are unknown and have to be reset to their initial state. 
NOTE OFF: Send an "all notes off" message to all outputs. Helpful when "note hangers" have ocurred.

<!--
This video describes how to use the [[https://wiki.aemodular.com/pmwiki.php/AeManual/IMDI HEART|IMDI HEART]] module: 

(to be added)
-->
