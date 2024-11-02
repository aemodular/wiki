(:mini 100x400 :)

(:table border=0 width=100% :)
(:cell width=80% :) 
!! SAWVOX
[[https://www.tangiblewaves.com/store/p98/SAWVOX.html | View Product Page]]

The SAWVOX module is a “complete” synth voice with two sawtooth oscillators, a filter and a VCA, all realized digitally with a tiny 8-bit microcontroller. The oscillators are detuned by a fixed rate to get a fatter sound, and can be switched to a single oscillator. Of course, due to the limited resources of the processor, the sound has the typical 8-bit lofi char, but the CV tracking is quite fine, and it can find its place in a lot of patches. All parameters can be CV controlled, eg. filter frequency and resonance.

The module is based on a simple 8-bit microcontroller and an adapted design of Jan Ostman.

Module power consumption: 30 mA

!!! Inputs
* '''CV1''' - CV frequency control
* '''CV2''' - additional frequency control which is added to CV1
* '''FLT CV''' - filter cutoff frequency control
* '''RES CV''' - filter resonance control
* '''AMP CV''' - VCA amplitude control

!!! Outputs
* '''OUT''' - audio output signal
* '''MULT''' - multiple disconnected from module circuitry
* '''B.CV''' - CV signal from MIDI bus
* '''B.CTRL''' - MIDI CTRL signal from the bus

!!! Controls
* '''PITCH''' (pot) - select the base frequency of the oscillator
* '''FILTER''' (pot) - select the cutoff frequency of the built-in filter
* '''RESONANCE''' (pot) - select the resonance of the filter
* '''OSCILLATORS''' (switch) - select 1 or 2 oscillators. If 2 is selected the second oscillator is detuned to the first one at a fixed rate.
* '''+2 OCT''' (switch) - if set to the top position the frequency is shifted up 2 octaves 

!!! Patch Suggestions

Though technically a "complete" voice it obviously can be processed further within the AE system. [[PHASER]] and [[https://wiki.aemodular.com/pmwiki.php/AeManual/DELAY| Lofi Delay]] are particularly recommended....

If you haven't got the fine control you desire for a particular patch then, as an example, if you leave the Sawvox filter fully open you can patch the output to another AE filter to have more parameters/adjustments available.

Here is a video by The 5th Volt which features this module.

%embed% https://youtu.be/J5syne2sP6I %%

(:cell:) Mini:SAWVOX.png
(:tableend:)

[[AeManual/Modules | <-- Back to the Module Index]]

This manual is a community work in progress. If you would like to help out with completing this manual please send a PM to @admin at the [[http://forum.aemodular.com | AE Modular Forum]].  The status of each page can be seen on the Trello board at [[https://trello.com/b/HNd0dBt7/ae-manuals]]