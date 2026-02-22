# TBD
[[img|modules/images/TBD.png|200]]

[[ https://www.tangiblewaves.com/store/p149/TBD.html | View Product Page]]

The TBD module is a multifunctional DSP (digital signal processing) module that includes more than 30 different synthesis and audio processing plugins. It is a collaboration project between CTAG Kiel (an academic working group of Kiel University of Applied Sciences), [[ https://instrumentsofthings.com/ | Instruments of Things ]] (who produce this module for Eurorack) and [[ https://tangiblewaves.com  |tangiblewaves ]].

Module power consumption: 80 mA

## Plugin Documentation
There are over 30 plugins built in, these are effects, simple and complex sound generators. Some of these have over 20 parameters which you can control via the web interface. Here are the two main sources of documentation for these:
* [[https://tinyurl.com/tbd-overview | Quick overview page with links to sections in the full documentation]]
* [[https://tinyurl.com/tbd-full-documentation | Full documentation of all included plugins]]

## Inputs
* **IN1, IN2, IN3** - All three inputs are being mixed together before passed into to the currently active plugin. This is used for audio input for FX plugins.
* **CV IN 0, 1** - first and second CV input. These can be freely assigned to any plugin parameter via the web interface.
* **TRIG IN 0, 1** - first and second trigger inputs. These can also be freely assigned to plugin triggers.

## Outputs
* **OUT** - Audio output of the currently active plugin

## Controls
* **GAIN** - Control the gain that is added to the incoming signal
* **PAR 0, 1** - Potentiometer which can be freely assigned to any parameter of the currently active plugin via the web interface. These are independent from the incoming CV parameters.
* **TRIG 0,1** - Trigger buttons which can be assigned to events of the currently active plugin via the web interface. These are independent from the other trigger inputs.
* **CONFIG** - allows the selection of a stored plugin. These are stored as "favorites" via the web interface and persist in the module even without a connection to a PC.

## The Web Interface
You will need a computer (or Android device) which is connected to the TBD via USB to make the most of this module. The connection is made via a "terminal application"-program which you run on your computer and which opens a web interface on your default web browser. You can then control the TBD via this web interface.

The web interface runs on your PC as a local server and you open a web browser to "localhost:<port>" with port being any number greater than 3000. Commonly used ports are 3030 or 8080. Once you've opened the browser you see the start screen which shows you the currently active plugin(s) on the TBD which is connected to your PC. Downloading samples currently is not supported directly via the Webinterface, please use the "terminal application" for this instead.

**If you run into issues compiling & updating samples, you may find this forum-thread helpful:**

* [[https://forum.aemodular.com/thread/2198/error-erase-failure-trying-audiofile?page=1&scrollTo=18955  | Using the "terminal application" to send samples to the TBD]]

[[img|modules/images/TBD%20Browser%20Start.png|300]]


**You can download the newest version of the "terminal application" here:**

* [[https://wiki.aemodular.com/uploads/Binaries/TBDConnect/ | For Windows]]
* [[https://github.com/aemodular/ctag-tbd/releases/tag/win-tapp-GUI-20211224 | For Windows (Legacy Version) ]]
* [[https://github.com/aemodular/ctag-tbd/releases/tag/macos-tapp-gui-20220125 | For MacOS]]
* [[https://github.com/aemodular/ctag-tbd/releases/tag/linux-tapp-20220119 | For Linux]]

The Official Version for Windows already supports Windows 11 / The Legacy Version for Windows uses the same GUI as the one for MacOS

**NEW: Android version**

User @betaboon has kindly developed an Android application which works mostly like the above terminal application and can be installed on your Android phone or tablet. The connection is the same - just plug in a USB cable between the TBD module and your phone (you may need a USB-A to Micro-USB or USB-C adapter). Enable and serial connection and debugging when this question come up and then start the TBD app. 

You can download the app from Google Play Store here: https://play.google.com/store/apps/details?id=com.aemodular.tbd

## Patch Ideas

The 5th Volt has made this introductory video which will help you to get started with this complex module:
%embed% https://youtu.be/tEKvm1mL8Fc %%
