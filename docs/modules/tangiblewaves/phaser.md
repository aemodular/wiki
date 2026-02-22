# PHASER
[[img|modules/images/PHASER.png|200]]

[[https://www.tangiblewaves.com/store/p111/PHASER.html | View Product Page]]

The PHASER module runs the signal through a chain of all pass filters, which brings a very distinctive sound when the filter stages are modulated. Well known is this sound by many pieces of electronic music in the 70's and 80's; especially with the SOLINA as audio source you get this unique spacey sound known from these days. With a switch you can select 4 or 8 stages; more stages make the modulation more deep and intense.


Module power consumption: 4 mA

## Inputs
* **IN** - incoming audio signal
* **CV1** - external modulation CV source input
* **CV2** - additional external modulation CV source input

 
## Outputs
* **Out** - output of the phaser sound with dry/wet mix
* **WET** - only the wet output
* **STAGE 1-7** - outputs of the individual phaser stages
 
## Controls
* **LFO RATE** - speed of the internal triangle LFO
* **LFO DEPTH** - amount of internal LFO phase shif modulation
* **CV 1** - amount of external CV phase shift modulation (CV 1 input)
* **SHIFT** - manual phase shift control
* **FEEDBACK** - audio feedback amount
* **DRY/WET** - mix between the original audio signal and the processed one
* **NEG/POS** Switch - positive or negative feedback mode produce different sounds
* **8/4 STAGES** Switch - choose wether 4 or 8 phaser stages are used. 4 are more subtle, 8 produce a stronger effect.
 
## Demo

Thanks to Felix from The Tuesday Night Machines for this excellent demo video:

%embed% https://youtu.be/x18TLKruUM0 %%

## Patch Suggestions

If you want to voltage control the dry/wet mix; set the mix to dry and use the main out and the wet out to two separate channels of a VC mixer - e.g. [[4vca.md | 4VCA]] or [[mixconsole.md | Mixconsole]].  The main out need not be completely "dry" just set a minimum level with the dry/wet knob, then the CV adds more wet signal.

The Phaser works superbly with the Solina module, but any sounds can be put through it, percussion can be really interesting, as shown to some degree in Felix's video above.

The separate stage outputs can be used to give you separately triggerable sounds via VCAs, again can be really good for percussion. Feeding these outs into different inputs of a mixer, (e.g. [[dronx.md|Dronx]], [[4attmix.md|4ATTMix]]) give you more control over the sound, excellent for live use/jams.

The internal LFO is perfect for livening up the sound but CV1 with its accompanying knob to set the level is great for adding other modulation, an envelope is highly recommended, especially on string type sounds, lovely. Can be filter sweep like with varying degrees of subtlety. CV2 can be used as you can set the FX level via the envelope settings.

CV2 has no level control but, of course, this can be done outside this module by the CV going through an attenuator before the input - this could be a VCA with a knob or CV controlling the level.  If you just want a knob to control the level the [[2attcv.md|2ATTCV]] module can do this perfectly. 
