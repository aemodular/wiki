# MIXCONSOLE
[[img|modules/images/mixconsole.png|400]]

[[ https://www.tangiblewaves.com/store/p108/mixconsole.html | View Product Page]]

The MIXCONSOLE is a "proper" mixer with FX sends, and stereo out with AE and 3.5mm jack outputs. It comes with 4 channels but is infinitely expandable with the [[mixconsole-3ch.md | MIXCONSOLE - 3CH]]. Each channel has CV control of it's level available.

Module power consumption: 28mA


## Inputs

* **IN 1** - **IN 4** - the signal in for each of the 4 channels.
* **CV 1** - **CV 4** - the CV input for each channel which works in conjunction with the same numbered level knob in that the knob controls the maximum amplitude of the channel, and when you feed in CV then you can change the amplitude from 0 up to what the knob allows.

**On the right side, (usually outputs on the AE):**

* **FX1  Return L** - the level of this signal is controlled by the FX1 rtn lvl knob
* **FX1  Return R** - the level of this signal is controlled by the FX1 rtn lvl knob
* **FX2  Return L**- the level of this signal is controlled by the FX2 rtn lvl knob
* **FX2  Return R**- the level of this signal is controlled by the FX2 rtn lvl knob

These could be utilised to input more signals into the mix as well, (not just FX)....

## Outputs

* **Main Out L** - Left channel of the stereo mixed output.
* **Main Out R** - Right channel of the stereo mixed output.
* **FX1 Send** - Mono out controlled by the 4 FX1 send knobs. For patching within AE.
* **FX2 Send** - Mono out controlled by the 4 FX2 send knobs. For patching within AE.

**3.5mm sockets:**

* **FX1 Send** - duplicates the above. Mono. Great for patching in external FX.
* **FX2 Send** - duplicates the above. Mono. Great for patching in external FX.
* **FX1  Return** - Stereo, level of this signal controlled by the FX1 rtn lvl knob
* **FX2  Return** - Stereo, level of this signal controlled by the FX2 rtn lvl knob
* **Main L** - Left signal of Stereo mix.
* **Main R** - Right signal of Stereo mix.
* **Main Out Stereo** - Left and right signals of Stereo mix.

3.5mm to 6.35mm leads are readily available to link to most studio gear, but some others also use 3.5mm sockets.  

**Important to note** that the FX Send 3.5mm output is really only MONO. So if you put a stereo plug into it, you will receive the sound only on the left side of the stereo signal! So if you send this to an effects processor which expects a proper stereo input (eg. the Korg NTS-1) you will only get the effect on one channel, which can be frustrating if you don't expect it. 

You can also add these modules for more output options:

* [[mixcon-jackout.md | MIXCON JACK OUT]] 
* [[mixconsole-xlrout.md | MIXCON XLR OUT]] 

## Controls

Each channel has 4 knobs with the same function, (Channel number is by the level knob):-

* **FX 1 Send** - controls the amount of signal sent to FX1 send output.
* **FX 2 Send** - controls the amount of signal sent to FX2 send output.
* **Pan** - set where in the stereo field that channel is played, from fully Left to fully right.
* **Level** - controls the amount of signal in the Mix L/R outputs.

Do bear in mind that the amount of signal sent to the FXs (and their return level) will also affect the apparent loudness of the sound as well as the level control.

* **FX 1 rtn lvl** - controls the amount of signal from the FX 1 return inputs in the Main outputs
* **FX 2 rtn lvl** - controls the amount of signal from the FX 2 return inputs in the Main outputs
* **Main Level** - Sets the volume of the Main outputs

## Display

The LEDs give you an idea of the levels of the mixed signals going to the main output. Green is good, a little bit of yellow is best. Unless you want distortion you generally want to avoid the red LEDs being lit a lot...

## Patch Suggestions

First up, you can now save on VCAs with this module. Whenever you had a VCA as the last piece in the chain before going to the mixer, you can now do the same with directly sending ENV or LFO CV to the CV input of the respective channel. 

Mono FX sends are very common on mixers, so ideally you need an FX unit with mono in/ stereo out (or can be configured that way). Within the AE, the [[multifx.md | MULTIFX]]  is perfect to connect with this module.

Some people like the main sound on 1 side of stereo, and the FX'ed signal on the other - this is easy to do on the Mixconsole but just using 1 of the FX return sockets.

The Stereo 3.5mm FX returns can be rather handy for bringing in external signals, the best example is the Korg Volcas where they have a stereo 3.5mm out.

The Mixconsole is great for doing sub-mixing of oscillator outputs where you want them to vary over time; each oscillator output goes to a different channel and then the levels can be controlled by LFOs, ENVs and even the [[joystick.md | JOYSTICK]]  module.
