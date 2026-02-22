# MASTER
[[img|modules/images/master.png|200]]

[[https://www.tangiblewaves.com/store/p4/MASTER.html | View Product Page (old module)]]
[[https://www.tangiblewaves.com/store/p207/MASTER_R5.html | Product Page (new R5 version)]]

This Master module description is for the one supplied until December 2019, the replacement is the same, except for having an extra switch to change the midi channel from 1 or Omni to  some of the others available. 

The Master module has 2 jobs, bringing power to the AE Modular, and being a Midi/CV converter.  It is possible to have an AE modular without a Master, you just need a suitable 5V supply (the Master module converts the 9V supplied to 5V for internal use). There is a 1 unit module in the Tangible Waves shop for precisely this purpose.

https://www.tangiblewaves.com/store/p85/POWER.html

There are various synths and keyboards/ sequencers available with Gate/CV outs but you will need to keep an eye on the maximum voltage they send; the AE modular will be damaged if provided with more than 5 volts, (or negative voltage). This problem can be avoided by use of the 4 I/O module, or a Midi synth/keyboard/ sequencer and the Master module.

**NOTE:** When connecting MIDI to the Master module, be sure to use the adapter from tangible waves or a different type 'B' plug ([[https://minimidi.world/#types | more info on the different types of MIDI-TRS converters here]]).

The Master module also supplies the various bus CVs available on many modules, all are derived from the Midi information received. These bus CVs mean a lot less patch cables are needed in many cases.

The descriptions here are for the current Master module, the original Kickstarter systems had a more primitive Master module which ideally needs to be replaced by this one.

Module power consumption: 30 mA

**Note:** There is a **new version R5** of this module which has been changed physically so that it fits into the Quick Swap (QS) case and also has the following new features:
* The bus signals CV, gate, ctrl CV, MIDI start/stop/clock can be connected with / removed from the bus individually with the microswitches
* The TRS MIDI input now accepts both types of TRS-MIDI adapters

## Inputs

Anything marked I/O can be an input or output.

9V input for PSU, (provided with starter systems, or available in the Tangible Waves shop). 

3.5mm Minijacks.

* **Midi** - Needs a Midi breakout cable  (provided with starter systems, or available in the Tangible Waves shop). The TRS MIDI is of type B.
* **Audio 1 I/O** - This socket connects with the AE patchbay sockets labelled A1 listed below. 
* **Audio 2 I/O** - This socket connects with the AE patchbay socket labelled A2 listed below.
* **CTRL 1 I/O** - This socket connects with the AE patchbay sockets labelled 1 listed below.
* **CRTL 2 I/O** - This socket connects with the AE patchbay socket labelled 2 listed below

The difference between the audio and Ctrl inputs are the latter is meant for CVs, the former is the usual connection for your AE Modular to the external mixer/sound system etc.

AE Patchbay

* **A1/ CTRL 1 I/O** - the left socket is connect to the audio 1 I/O listed above. The right socket is connected to the Crtl 1 socket listed above.
***A2/ CTRL 2 I/O** - the left socket is connect to the audio 2 I/O listed above. The right socket is connected to the Crtl 2 socket listed above.

## Outputs

* **Bus CV** (2) - a CV derived from the midi note number from attached device.
* **Bus Gate** (2)  - +5 volts when a key is pressed/held on attached midi device.
* **Bus CTRL** (2) - a CV controlled by Midi CC20
* **+5V** (2) - what it says!
* **B. Clock** - the midi clock (if provided by attached device)
* **B. Start** - +5V pulse when start button is pressed on attached Midi device.
* **GND** - zero volts, can be useful to control hum in certain circumstances.
* **B. Stop** - +5V pulse when stop button is pressed on attached Midi device.

Also see items marked I/O above, as can be inputs or outputs.

Although you can use the above Bus outputs to feed a signal **into** the relevant buss, it may not be 100% reliable, and definitely will not be if you mix it with incoming midi - but you won't break anything and it could be interesting!

## Controls

None.

## Eurorack Power Supply

The Master module also can be used to supply AE modules and interface to eurorack modules when used with an AE Modular eurorack adapter frame. Eurorack adapter frames are available with 8, 12 or 16 units.

[[https://www.tangiblewaves.com/store/p48/AE_modular_Eurorack_adapter_frame_8U.html | AE Modular Eurorack Adapterframe 8U]]

An eight units eurorack adapter with a Master module about to be put in:

[[img|modules/images/8-units-adapter-frame.png|300]]

With the adapterframe comes an eurorack power-cable for the Master module:

[[img|modules/images/master-eurorack-power.png|400]]

The 10-pin connector plugs to the Master module, red cable facing downwards,
the other connector plugs into one of your Eurorack bus sockets.

## Patch Suggestions

The most obvious use of the Master module is the midi (bus) CV being used to control the pitch of the [[2oscd.md|oscillators]].  The Bus CV needs to go to the CV in on your VCO, this can be done on the Oscillator module itself rather than a patch lead trailing across from the Master module.

For the starter systems, the Master module will be your audio out, feeding the output from the  last module in your patch to the AE patchbay A1 or A2, then the equivalent mini jack socket having the lead going to your external equipment. the 4 I/O module can do the same job which can make patching tidier.

The Bus clock, start and stop can be used to control the AE Modular's sequencer modules but, again, this can often be patched on the sequencer modules themselves rather than from the Master module.   If using the Midi clock to control tempo you will need a divider module to reduce the number of pulses per quarter note.

The use of a Midi controller such as the Arturia Keystep, Beatstep (pro) or synth with sequencer built in is highly recommended to control the AE Modular as the Master module provides a lot of options and the system is geared to work this really well with, for instance, the bus CVs.

## Connecting MIDI from a computer

You can also connect MIDI from a PC/Mac so that you can sequence the AE Modular from a DAW (Digital Audio Workstation) like Ableton or Reaper. For this to work you need to purchase a converter cable that converts USB to MIDI Din. Here is an example:

[[img|modules/images/usbmidicable.jpg|500]]

https://hosatech.com/products/data/midi-interfaces/usm-422/

There are many variations of these cables, some are much cheaper than the one above. But buyer beware, cheap cables can sometimes cause "jitter" which may lead to note skipping and stuck notes.

RSKT is working on a complete set of fantastic video tutorials for all AE modules and this is his take on the Master module:
%embed% https://www.youtube.com/watch?v=Ydsskg38Q6M %%

This video shows a very basic patch that makes use of the MIDI connectivity of the Master module:
%embed% https://youtu.be/Z1zWIMh0a_s %%

This very short video shows how you can sync and connect a Korg Volca with the AE Modular via the Audio and CTRL inputs on the MASTER module:
%embed% https://youtu.be/VB3sRZlU1wE %%
