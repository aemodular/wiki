# AE Modular Technical Guide

#### Table of contents
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=signals-on-the-bus-cable | Signals on the bus cable]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=modules | Module dimensions]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=pcb-control-elements-and-placement | PCB layout and standard component positioning]]
  * [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=module-templates | Templates]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=dual-pcb-modules | Creating modules with two PCB layers]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=frontpanels | Frontpanel design notes]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=cases | Case options and dimensions]]
  * [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=standard-tangible-waves-cases | Standard cases]]
  * [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=quickswap-cases | Quickswap]]
  * [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=3d-printed-cases | 3D printed cases]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=how-to-make-your-own-ribbon-cable | Making your own ribbon cable]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=making-your-own-patch-cables | Making your own patch cables]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=connectivity-and-power | Connectivity and power]]
* [[https://wiki.aemodular.com/#/diy/aemodular-technical-guide?id=considerations-for-diy-modules | General considerations when designing modules]]

## About the AE Modular format

AE Modular is a budget modular format, the lower cost makes it accessible to more users, but without reducing the sound quality, and retaining the flexibility and hands-on nature of more expensive modular formats. To reduce costs its simplifies the requirements for building modules - using breadboard wires, simpler potentiometers, and a simple 5V common voltage.

This “simplification”, also means it is easy for users to build their own modules - there are many other DIY platforms that also use 5V including microcontrollers like Arduino / Atmel, ARM, etc.

If you’ve never played with synth DIY its a perfect place to ‘give it a go’, try building a simple oscillator - see how it goes...

__DISCLAIMER:  This document is created in good faith, but I cannot accept any responsibility for damages caused by inaccurate/incorrect information. If you have questions please ask them on the [[https://forum.aemodular.com/forum | forum]] or contact Tangible Waves directly.__

## Signals on the Bus Cable

All modules are connected with a 10-pin ribbon cable that runs below the modules.* Each module is plugged onto this bus cable with a 10-pin connector.

A MASTER or POWER module is usually the source for this ribbon, supplying both power and control signals (derived from midi).

*Apart from Quickswap cases, which are discussed later, and which don't use a traditional cable.

[[img|diy/images/bus-pinout_orig.png|400]]

The top 4 pins are used for power.  The remaining 6 pins are all derived from MIDI by the master module.

[[img|diy/images/pin-explanation.png|700]]

__NOTE: the control signals should be considered as output only, since they are pushed by the master module.__

__NOTE: All modules use the same 5V / Ground rail so modules need to take care not to induce a ripple voltage which can introduce noise.__


## Signal voltage levels

AE Modular works entirely on +5V. For the several signal types this means the following:

* Both CV and Audio are unipolar 5V, and are so interchangeable.
* CV signals are 0..5V
* Pitch is 1V/octave.  According to the calibration page on Tangible Waves:
  * 1V = C1 = MIDI note 24 = 32.703 Hz * 
  * 3V = C3 = MIDI note 48 = 130.81 Hz
* Gate/triggers are 5V
* Audio signals are  0..5V, centre around +2.5V  typically 3Vpp (so 1..4V), though this varies e.g pulse wave from oscillators are full range 5Vpp
* Output impedance is ~1kOhm, so nothing bad happens if an output is connected to ground or two outputs are directly connected (in fact, they will be summed / mixed).

*(C0 vs C1 : different manufacturers use different conventions for octave number, the MIDI spec simply states MIDI note (e.g 24) and the required frequency)


## Physical characteristics

### Modules

#### Overall module dimensions

A standard 1U module measures 101mm high by 25mm wide (measuring the frontpanel). The underlying PCB should be slightly smaller, at 100mm high by 25mm wide.

__NOTE: Modules larger than 1U are measured as a multiple of 25.4mm (1”), minus approx. 0.5mm for gap tolerance.__

It is preferable to keep the size of the component PCB at multiples of 25mm exactly, to allow a bit of wiggle room when installing it between between two other modules.

__Some tried & tested frontpanel scalings for different module sizes:__

* __1U__ - 101 x 25mm
* __2U__ - 101 x 50.4mm
* __3U__ - 101 x 75.6mm
* __4U__ - 101 x 101.1mm


The standard case allows for a total module depth of 25mm, plus a 1.5 mm faceplate.

A typical module is composed of:

* The front panel (thickness : 1.5mm)
* Hex spacers M3 8mm high (female-male) between the front panel and PCB
* PCB (thickness: 1.6mm)
* Hex spacers M3 15mm high (female-female)

[[img|diy/images/moduledimensions1.png|600]]
[[img|diy/images/moduledimensions2.png|600]]

The modules are mounted in a case/rack with M3 screws from the bottom (through the bottom plate) unless a [[https://www.tangiblewaves.com/store/p202/AE_modular_QUICKSWAP_CASE_1-row.html | Quickswap]] case is used, in which case modules are held securely in place with the bus connector only.

#### PCB - Control Elements and Placement

At the top of the module, there are two female pin headers (usually 1x8 pins); typically left is used for the module inputs, right for the outputs. Pins which are left unused in the module function are commonly tied together and used as passive 'mults' for sending one signal to multiple destinations (similar to how 'stackable' cables are used in Eurorack).

The input and output pin headers used on current modules are custom made for Tangible Waves, and can be purchased directly from the [[https://www.tangiblewaves.com/store/p123/10_x_PATCH_SOCKETS.html | webstore.]] Alternatively you can use regular female receptables such as [[https://uk.farnell.com/multicomp-pro/2212s-08sg-85/conn-rcpt-8pos-1row-2-54mm/dp/1593463 | these]], which have a slightly more snug fit but work fine.

Potentiometers are RK09 type, 20mm high. Typically no additional knobs, only the pot axis. In the UK, Thonk sell short trimmer pots which do a great job such as [[https://www.thonk.co.uk/shop/short-trimmer-pots/ | these from Song Huei]] or [[https://www.thonk.co.uk/shop/alpha-short-trimmers/ | Alpha trimmers.]] In the frontpanel, a hole with a radius of 3.6mm should give a comfortable fit.

For connecting to the bus cable, each module has a 2x5 male pin header at the right bottom end of the module. 
[[https://uk.farnell.com/molex/10-89-7102/conn-pin-hdr-10pos-2row-2-54mm/dp/2293829 | (Example connector)]]

__NOTE: To ensure compatibility with the newer Quickswap cases (see more detail on these in the 'Cases' section below) it is crucial that the bus cable connector is located in a very precise position on the PCB.__

Measured from the centre of the closest mounting hole, the leftmost row of five pins should be centred at a distance of __0.3125in (7.9375mm)__ to the right, and the bottom two pins should be __0.17in (4.318mm)__ higher than the centre of the mounting hole. Using these measurements will ensure a successful & snug connection in the Quickswap case.

[[img|diy/images/quickswap-power-loc.png|400]]

#### Module templates

Forum user kir generated KiCAD templates for various sizes of module, which can be found [[https://github.com/farpoint-space/ae-modular-kicad-templates | here.]]

Wonkystuff also created a [[https://oshwlab.com/wonkystuff/55bd_copy_copy | template for the 1/3 height Micromodule format.]]

#### Dual-PCB modules

For more advanced projects, or if attempting to squeeze more functions into a 1U module, you may wish to maximise the available vertical height by using two control PCBs in following configuration:

Frontpanel ← gap (for components) ←  PCB ← gap (for components) ← second PCB ← bottom of case.

Although space is at a premium in Tangible Waves cases, there is enough room for two PCBs to be used, with the lower PCB connected to the upper one with standard male>female pin headers (see example below)

__NOTE: the bottom of the lower PCB will be almost in contact with the bottom of the case, so all components on this PCB must be top-facing.__

[[img|diy/images/dual_layer_pcb.jpg|400]]

The pin headers 'sandwich' the two boards together and also allow signals to be sent between them. When laying out your connections, don't forget that you will need to supply power and ground from the ribbon cable to both PCBs.

Due to the power header and bus cable, plus additional considerations for the mechanics of Quickswap cases, the second PCB should not be bigger than __65mm__ vertically. Ideally it should be aligned so the 2nd PCB starts 9mm lower than the top of the main PCB (to avoid the upper standoff with a reasonable clearance).


#### Front Panels

* **Material**: 1.5mm MDF board, primed and sprayed with color, acrylic or aluminum could also be used. In recent years Tangible Waves has switched to using frontpanels made from PCB material rather than MDF, in both black and white variants.
* **Marking/printing**: originally made by a rubber stamp and special stamp color; now produced as a silkscreen on PCB.
* **Mounting**: front panels are mounted with M3x4 screws, black, DIN912 cap screw with an inner hex

**Some tricks for designing frontpanels using PCB material:**

* You can create metallic text/designs by placing it on the copper layer, then duplicting the same text or design to the solder mask layer. This will expose the copper layer and produce metallic silver or gold text depending on the manufacturing method (HASL = silver, ENIG = gold)

[[img|diy/images/top_layer.png|350]] [[img|diy/images/top_solder_layer.png|350]]
[[img|diy/images/exposed_copper.jpg|700]]



* To create a translucent 'shine through' area on the panel, place a shape/image/text on both the top and bottom solder mask layers in exactly the same location. After production, the exposed area will allow light to pass through, which can be used with an LED underneath to create glowing areas, as seen in a number of Wonkystuff modules such as the CoreAE:

[[img|diy/images/shinethrough.jpg|700]]

### Cases

#### Standard Tangible Waves cases

The standard case has an internal dimension of 406.4mm  (for 16U).

There are several variants currently available: one- or two-row in various widths (12U, 16U, 20U), plus a four-row "Monstacase" and the Korg Volca-sized V-CASE7.

The two-row has a ‘wall’ between the top and bottom row, this provides extra stability.
This horizontal ‘wall’ has an opening to allow for a vertical wall to pass through which shares the bus cable connections between rows.

To allow for mounting, each row of the case has a series of holes 25.4mm apart for the top and bottom of the module. 
Additionally, at the left-hand side of the case, there are additional holes in the bottom that align with the tuning trimpots of the 2OSC and VCO modules.

Original cases featured a hole situated at the top of the left hand ‘end cheek’ of the case to allow for the DC jack of the master module. More recently the MASTER and POWER modules use a vertical DC jack.

__NOTE:  From the ‘holes’ in the rear of the case, you can see there is a notional position for the master module and some oscillator modules so that their trimpots are easily accessible.__

#### Module Mounting

AE modules are mounted on metal PCB standoffs. Unlike in Eurorack, where modules are secured to a 'rail' using screws through the frontpanel, AE modules are secured from the rear using screws which go through the bottom of the case into the standoffs. The hex screws on the front of the module are only used to hold the frontpanel on, and don't need to be unscrewed in order to remove a module from the case.

__NOTE: because of this rear-mounting format, some of the ‘stability’, especially for 1U modules, is provided by other modules sitting next to them and the case perimeter. (Less so with 2U+ modules, since they use 4 standoffs)__

#### Quickswap cases

The new [[https://www.tangiblewaves.com/store/p202/AE_modular_QUICKSWAP_CASE_1-row.html | Quickswap]] case format was developed by Kyaa and is now produced officially by Tangible Waves! It offers the advantage of quick and easy module changes - instead of a floating ribbon cable, the case uses a PCB-based header strip which holds modules firmly in place using just the power connector; no screws required.

The lack of a ribbon cable does mean that when designing modules, it is crucial that the placement of the power header is in __exactly__ the correct position in order for it to be 'Quickswap compatible', as discussed above.

Official Quickswap template dimensions:

[[img|diy/images/quickswap-dimensions.png|700]]

Because the Quickswap cases feature additional mechanical components to secure modules, you should be cautious when placing components at the extreme upper or lower end of a module. The following image demonstrates the available vertical space in each area:

[[img|diy/images/KeepoutZones.png|500]]

#### 3D printed cases

Forum user georgemuralkh created a series of templates for 3D-printable cases of various sizes, as well as connectors/stands and handles.

You can find all the .STL files on [[https://www.printables.com/model/691273-ae-modular-case-system | Printables]], and see the [[https://forum.aemodular.com/thread/2968/3d-printed-cases-update-1 | forum thread]] with examples of printed cases.

### How to make your own ribbon cable

You can of course make your own, it's really nothing special. Here is a general guide on how to make those: https://startingelectronics.org/articles/IDC-ribbon-cable/

A standard 10 pin ribbon cable is used, and folded, and has 16 connectors on it.

### Making your own patch cables

The patch cables sold by Tangible Waves are specific to the AE format and specially made. It is highly recommended __not__ to use typical cheap 'breadboard' patch wires with AE modules. The sharp edges of the pin can catch on the inside of sockets and damage them.

There is some discussion on the forum [[https://forum.aemodular.com/thread/1487/diy-cables-male-connector | here]] about ways to make suitable DIY cables.

## Connectivity and Power

The MASTER module is an important element in an AEM system, since it interfaces to the outside world, so it is worthy of further discussion.

### Power

The [[#/modules/tangiblewaves/master.md|MASTER]] module supplies the regulated 5V from one of 2 sources:
* DC Jack with 9V DC, positive centre, minimum 1 amp.
* Eurorack via the Eurorack connector (+12V, or 5V?)  

The MASTER module (and the smaller 1U POWER module) can supply up to 800mA without any problems. This is usually more than sufficient for 4 full width rows, unless you have a lot of heavy digital modules.

<!-- (check: max current consider, only PSU, or also regulator ?) -->

### I/O

* **AUD.1|2** - Audio input or output
* **CTRL 1|2**  - CV input or output
* **BUS CV (2)** -  MIDI note on/off pitch (v/oct)
* **BUS GATE** - MIDI on/off 
* **BUS CTRL** - MIDI cc 20 

### Audio Interface

There are two audio I/O 3.5mm sockets, both of which are bi-directional, so can be used either as input or output.

Input signals should be at line level, __do not connect Eurorack signals directly to AE through the MASTER or POWER modules.__

<!-- __(check: DC coupled?)__
__(check: additional filtering?)__
__(check: Vpp , I thought it's not 5Vpp, but much lower 3Vpp?)__ -->

### CV Interface

There are two CV IO 3.5mm sockets used for Eurorack connectivity.
These are both bi-directional, so can be used either as input or output.
The input and output can be up to 5Vpp, outside this it will be clipped.

The primary difference between this and the audio IO is these are DC coupled.
You can use the CV I/O for audio input too.

<!-- __(check: does a bipolar/audio get offset to 2.5V)__ -->

### Midi Interface

Serial MIDI is provided via a 3.5mm jack, with a simple MIDI DIN converter. 
It is input only (unidirectional) and monophonic

The following midi messages are understood:
* Note on/off -> Bus CV & Bus GATE
* MIDI CC 20 -> Bus CTRL 
* MIDI Clock -> Bus CLK
* MIDI Transport start-> Bus START
* MIDI Transport stop-> Bus STOP

All these signals are present on the bus ribbon, even though CV, GATE and CTRL are the only ones present on the master IO header. (CTRL is present on MASTER v2+) 

### Racklink module

If you already have a Master module in one AEM rack, and wish to extend to another rack, then you can use the Racklink module as an alternative to a master module in the second rack.

The Racklink connection is actually 2 Racklink modules, and a ribbon cable (20 pins). One racklink modules goes in the ‘master’ rack (the one with the master module) and the other in the slave rack. So this uses 1 U in each rack. Each Racklink is then connected to the bus cable in the rack (so is the source of the bus for the slave rack)

The ribbon cable links the normal ‘bus’ connections, so power + signals, and also 8 additional signals which you can use as you wish (the connection is bi-directional, and can be used for both CV and Audio) 

Additionally, the Racklink module has a dip switch bank to turn off the connection for some or all of the normal bus signals.

This has 2 use cases:
* If you have a master module in both cases, and want to use Racklink to just send the 8 additional signals and ground(!) 
* If you don't have a master module in the slave case, and would like the Racklink to just supply power, ground and the 8 additional signals, this would mean that in the slave rack you could also use the CV bus as you wish (since there is no master sourcing the signals) 


### Notes on connectivity

#### Audio

* Pro audio line level ~ 3.4Vpp 
* Consumer line level ~ 0.9Vpp

#### Eurorack

Whilst Eurorack modules/racks interact very well, the Eurorack standards are fairly ‘loose’ and open to interpretation - so variations exist.  
Doepfer introduced the Eurorack standard, it's the closest there is to a specification, 
See here for their ‘specification’ - http://www.doepfer.de/a100_man/a100t_e.htm

Audio voltages -  up to +/- 10V, but are more commonly +/-5V, this means you will want to attenuate before bring into AEM to avoid clipping/distortion.

CV general  - theoretically +/-10V, which you need to attenuate, however, often its limited to either unipolar 5V (0..5V) or bipolar (-5V to +5V), outside 0..5V, AEM CV inputs will clip.
LFOs vary, some are bipolar, some are unipolar, some switch, often 5V.
Envelopes usually unipolar 5V, but some may have an inverse env, which could be 0..5V or 0..-5V. 
(check: lfo/env ranges)

CV pitch -  1V/octave, but range varies.
Fairly common is  0V..5V, which allows for 5 octaves, others extend to give a greater range e.g. Mutable use -2V to +5V.

CV gate / trig - voltage above +3V are considered high


__(check: Eurorack connector specifics - pinout?)__

#### Ground

When connecting different systems, be it Eurorack or 5V systems, you need to share a common ground to ensure voltages share a common reference. Since the ‘Sleeve’ of a 3.5mm Jack is ground, this can be done by connecting systems with at least one 3.5mm Jack (doesn’t matter if its audio/cv or from master or 4IO all are the same). If you do not want to do this for some reason, you can take the ground from the bus ribbon.
As most uses 3.5mm patch cables to connect AEM to other systems this is normally not an issue, it only becomes relevant if you start patching patch wires directly which only carry signals not ground.


#### Do I need a master module?

Theoretically no, but see the above information for why you might want to use one.

If you can supply a regulated 5V + GND supply, you could connect these directly to modules. If you don’t have a master module connected, you can then freely use the other bus signals for your own use.

For audio output you would need to convert from unipolar 0..5V to bipolar -2.5V to 2.5V.
You could use a 4IO module for this.

__NOTE: if you already have one master module and this is for a new case, an alternative is the Racklink module.__

## Oscillator calibration

As the oscillators are analog they require some time to warm up and to stabilize pitch tracking. They then provide 1V/oct tracking , to facilitate this there is a trimmer pot on the rear (which can be accessed while in the case) to adjust the scaling. 
This procedure is detailed [[https://www.tangiblewaves.com/oscillator-calibration.html | here]]

## Connecting to Other Systems

(with Patch wires)

You can patch directly from other patch wires systems.
* All inputs must be less than 5V.
* A common ground is required.

If the other system has either a CV in/out or Audio in/out, then connecting a 3.5mm patch cable between the two systems will ensure a common ground.


## Considerations for DIY modules

Here are some considerations for creating DIY modules.

### Power

Power is shared across modules, it’s imperative you keep it ‘clean’ and free of ripples otherwise you will induce noise onto other modules. 

Generally it's a good idea to add a 100nF (approx.) capacitor near digital chips from +5V to ground; this has the effect to smooth the power supply from sudden minor changes caused by momentary higher consumption of ICs, microcontrollers. 

Things with heavier voltage swings you may need an inductor, some discussion of this can be found [[http://forum.aemodular.com/thread/20/belamini-module | here]].

(also for microcontrollers with higher current requirements, keep an eye on total used - bare in mind most AE modules are using very little current) 

### Inlets

In AE, digital inputs are pulled to ground by a 100k resistor; this is enough to tell the chip input "low" and high enough to not affect a "real" input signal.


### Module Depth
 
Since the depth is limited to 25mm, it’s quite limited in space.
Remember you will have to have space for the front panel components (that live beneath the faceplace) and also space underneath for the ribbon connector.

### Faceplate 

The easiest thing to use as a starting point is a blank panel, as it gives you the holes for mounting in the correct place.

The headers and drill points for mounting are very close to the edge on the factory modules. 

Getting the faceplate at the same levels is a challenge.
The general idea, as used by Tangible Waves is a sandwich 

Frontpanel ← gap (for components) ←  pcb ← gap (for ribbon header) ← bottom of case.

Of course you can use variations of this, in particular you may find your PCB or faceplate material is thicker. The factory modules, allows for a 2mm thick pcb/ 1.5mm faceplate, but if you use 3mm then you will need to reduce the size to the lower hex spacer (aka standoff).


