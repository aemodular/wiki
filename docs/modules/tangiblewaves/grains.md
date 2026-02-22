# GRAINS
[[img|modules/images/GRAINS.png|100]]

[[https://www.tangiblewaves.com/store/p86/GRAINS.html | View Product Page]]

GRAINS is a programmable multipurpose module originally developed developed by [[https://www.ginkosynthese.com/ | Ginkosynthese]] for Eurorack.  The AE Modular version is 100% compatible with various firmware programs written for the original Eurorack version, but it also has some added features.

GRAINS is based on the ATmega 328P micro controller, well known as the core of the Arduino Uno, Nano and other boards.  Depending on the firmware installed, GRAINS can input and generate audio, input and generate Gate, CV and Trigger signals, and even input and output IMDI.  It is programmed by attaching its USB socket to a computer.  (In fact, GRAINS can even use this USB socket to send and receive serial data with certain firmware software).

GRAINS has had two versions.  The original version was primarily programmed using Ginkosynthese's original software library.  The new version can also be programmed using the [[https://sensorium.github.io/Mozzi/ | Mozzi Library]].  These libraries use different pins on the ATmega 328P chip to output sound: so the new GRAINS includes a switch ("M/G") to select which pin to use.

GRAINS comes with the WAVEGRAINS firmware pre-installed which is a wavetable oscillator that is immediately useful. You can install other firmware quite easily as described below.

Module power consumption: 12 mA

## Inputs

The use of inputs varies depending on the firmware installed.

* **IN1** - accepts a CV signal
* **2** - accepts a CV signal
* **3** - accepts a CV signal.  Some firmware may instead configure this to output a CV signal.
* **A** - accepts an audio or CV signal.  Some firmware may instead configure this to output a CV signal.

## Outputs

The use of outputs varies depending on the firmware installed.

* **OUT** - Outputs an 8- to 9-bit audio signal at 16384 Hz sampling rate generated using a technique called filtered PWM.  Some firmware may use this to output a CV signal instead of audio.
* **D** - Outputs a digital signal that can be used for triggers, etc.  Some firmware may instead configure this to input a digital signal.
* **MULT** - unbuffered multiple, unconnected from the module's circuitry

Bus outputs on the left hand bank of sockets.

* **Bus CV** - CV signal from MIDI
* **Bus CTRL** - Gate signal from MIDI
* **Bus Gate** - Gate signal from MIDI


## Controls
The use of controls varies depending on the firmware installed.

* **Pot Level 1** - depending on switch 1, attenuate signal from IN1 or select CV level between 0-5V
* **IN1/MAN Switch** - switch between attenuating signal from IN1 or issue CV between 0-5V (the original Eurorack module does not have this switch)
* **Pot Level 2** - depending on switch 2, attenuate signal from IN2 or select CV level between 0-5V
* **IN2/MAN Switch** - switch between attenuating signal from IN2 or issue CV between 0-5V (the original Eurorack module does not have this switch)
* **Pot Level 3** - select CV level between 0-5V.  Note that IN 3 and Pot 3 are not related to each other.  They are completely independent.
* **M/G Switch** - GRAINS has two common software libraries used by firmware: Ginkosynthese's Grains Library and Mozzi.  These libraries use different internal Arduino chip pins for their output.  This switch allows you to select which pin is attached to the output ('M' for Mozzi, 'G' for Grains).  If you are getting silence at the output, see if you have set this switch to the right value. changing this switch.  Note that early versions of GRAINS do not have this switch: these can only be used in 'G' mode.



## Finding and Installing GRAINS Firmware Packages


### Finding Firmware
You can easily install different firmwares on to the GRAINS module or even develop your own programs!  A number of software developers have constructed repositories of their open source firmware for GRAINS module.  Note that much of this firmware requires Mozzi, and won't work on the older GRAINS without the M/G switch (though all [the original Ginkosynthese code](https://www.ginkosynthese.com/grains-codes) and AE Modular's [GRAINS repository](https://github.com/aemodular/GRAINS) will run on them).

- AE Modular's [GRAINS repository](https://github.com/aemodular/GRAINS) and [GRAINS Mozzi repository](https://github.com/aemodular/MOZZI-GRAINS)
- NurdSpace's [collection of GRAINS firmware](https://nurdspace.nl/Grains#Collection_of_firmwares)
- Duddex's [GRAINS adaptations](https://github.com/duddex/)
- Keurslager Kurt's [GRAINS LFO](https://github.com/ZVanMoerkerke/GrainsAE_VC_LFO_Sine)
- WonkyStuff's [GRAINS projects](https://github.com/wonkystuff/)
- Sean Luke's [GRAINS repository](https://github.com/eclab/grains)
- Ginkosynthese's original [GRAINS examples](https://www.ginkosynthese.com/grains-codes)


### Preparing for Installation

Download the latest copy of the [Arduino IDE](https://www.arduino.cc/en/software) program.  This program runs on MacOS, Windows, and Linux.  You'll need it to install firmware onto the GRAINS module.

Next, connect a USB cable which goes from your laptop to the GRAINS module.  At present the GRAINS module accepts a **USB Mini B** plug.

### Installing Firmware

Each firmware example comes in its own directory: you'll need the entire directory.  In the directory you'll find a file ending in ".ino", with the same name as the directory (that's important).  So for example, you might find a directory called **foo** which contains in it, among other stuff, a file called **foo.ino**. 

[[img|modules/images/ide-board.png|500]]

Under the Arduino IDE's **Tools** menu, you'll need to set three things:

* **Board** Set this to "Arduino Nano"
* **Processor** Set this to "ATmega 328P"
* **Port** When you connect the GRAINS module to your laptop over USB, it will show a serial port here (on Windows it uses an existing one).  Set the serial port for the GRAINS module.  Note that on the Mac or Linux, if you disconnect and reconnect, it may create a *new* serial port, and you'll need to set to that.

Now open the ".ino" file in the Arduino IDE.

At the top left of the Arduino IDE's window for the ".ino" file, there is a **Right Arrow Button**.  This is the **upload button**.  Click on it to upload the firmware to the GRAINS module.

If something went wrong, error messages will be displayed in the IDE window. 

Once the IDE shows that upload is complete and successful, you can disconnect the USB cable and use the GRAINS module with the new firmware.

### Video Tutorials

This video explains the module in more detail and has some patch examples for various firmware.  Note that the module shown is the "old" GRAINS without the M/G switch.
%embed% https://youtu.be/qpniMuq--M8 %%

This video explains how the [[https://github.com/aemodular/GRAINS/tree/master/ByteBeat-Xfade | ByteBeat-Xfade]] firmware works followed by a little improvised jam.
%embed% https://youtu.be/Wokre1i8Trg %%

And this video explains the workings of the SpellOrSpeak firmware, also developed by Mathias.
%embed% https://youtu.be/a1aS6E0b0Fk %%

## Developing your own Firmware

You can either make changes to preexisting firmware or develop your own firmware from scratch. The following diagram shows how you can access the various inputs, outputs and controls from within your code:

[[img|modules/images/grains_schematics_v2.png|500]]

There is a section on the forum dedicated to discussing programming this module:-

https://forum.aemodular.com/board/24/programming-grains

Sean Luke has developed a collection of [programming hints](https://github.com/eclab/grains/blob/main/info/DevelopingForGrains.md) for developing on GRAINS.

If you are interested in developing for IMDI on GRAINS, you may also wish to examine [Modular MIDI Conventions for Developers](https://github.com/eclab/grains/blob/main/info/ModularMIDIConventionsForDevelopers.md).  Sean Luke has also developed a [lightweight IMDI library](https://github.com/eclab/grains/tree/main/midi) for GRAINS.

### Unbricking your Grains
It is possible to "brick" your GRAINS with certain operations when you develop and test your own firmware programs! This has happened once or twice and you can find how that happened and how it was resolved in this [[ https://forum.aemodular.com/thread/1858/serialport-show-anymore-brick-grains | thread on the forum]].