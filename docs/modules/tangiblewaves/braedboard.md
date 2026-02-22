# BRAEDBOARD

[[img|modules/images/BRAEDBOARD.png|200]]

[[https://www.tangiblewaves.com/store/p92/BRAEDBOARD.html | View Product Page]]

The BRAEDBOARD module contains a breadboard area for solderless electronics prototyping so you can experiment with any kind of analog or digital electronics and make your first steps into electronics, starting with simple circuits for beginners to developing your own module.

It is supplied complete with some electronic components to get you started, these are listed on the Tangible Waves product page.

## Inputs

There are no dedicated inputs at the top of the module. If your circuit needs input either from one or more of the onboard bus signals or from another module, you should patch it straight into the breadboard area.

## Outputs (on the left hand side)
The left hand side offers convenient outputs to get access to the bus signals.

* **Bus CV** - a CV derived from the midi note number from attached device.
* **Bus GATE** - +5 volts when a key is pressed/held on attached midi device.
* **Bus CTRL** - a CV controlled by Midi CC20
* **BUS CLK** - the midi clock (if provided by attached device)
* **BUS START** - +5V pulse when start button is pressed on attached Midi device.
* **BUS STOP** - +5V pulse when stop button is pressed on attached Midi device.
* **GND (2)** - what it says!

## Outputs (on the right hand side)
The outputs on the right hand side are "protected" by a 1k resistor so you can patch the output from your circuit into the resistor symbol and then take the "protected" signal from OUT1 or OUT2.

* **OUT1 (2)** – this is the one output picked up from the breadboard[s]
* **Resistor-Symbol1** – connect the breadboard's output for OUT1 to the usual 1k output resistor here
* **OUT2 (2)** – this is another output picked up from the breadboard[s]
* **Resistor-Symbol2** – connect the breadboard's output for OUT2 to the usual 1k output resistor here
* **+5V (2)** - what it says!

## Upper / Red breadboard

The leftmost row of the breadboard is connected to +5V.

## Lower / Black breadboard

The leftmost row of the breadboard is connected to ground.

## Controls
There are no controls per default on this module, but it comes with a pre-soldered PCB with two potentiometers which you can incorporate into your circuit.

## Patch Suggestions

Please see a (growing) number of projects in the [[/diy/easy-projects.md | DIY section of the Wiki]].
