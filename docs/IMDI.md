# How AE handles MIDI — an overview of *IMDI*

Quick-start: here's a *one-minute-IMDI* video from [wonkystuff&reg;](https://youtube.com/@wonkystuff):

%embed% https://youtu.be/TZ0bdwqXf-g %%

In the world of modular (AE or otherwise), there are generally two types of patchable signals: *Control* (CVs & Gates) and *Audio*. If you’re using an external MIDI keyboard or sequencer, MIDI data typically arrives at the modular and is immediately converted into CV, Gate, clock and control voltages, which are then processed with the same modules as other control sources. Using MIDI signals as a patchable 'thing' adds some real benefits — especially in a compact system like AE Modular.

Where MIDI is used to communicate between separate instruments, the well-known 5-pin DIN or 3.5mm TRS sockets are used (the MIDI specification defines various electronic measures to avoid ground-loops and other sources of noise) however, because, MIDI is 'just' a serial format, it is possible — once the MIDI signal is within the modular — to patch MIDI signals in the same way as any other signal.

As far as we know this is the first time MIDI is available as a 'first class' patchable signal in this way, so a true first for AE Modular!

At Synthfest 2022 wonkystuff&reg; showed a new MIDI module (the [mb/1](/modules/wonkystuff/mb1.md)) which splits an incoming MIDI signal into its component channels as well as extracting clock information. At Superbooth 2023 they showed a number of micro-modules which are able to use these extracted MIDI signals as their inputs (See [The 5th Volt‘s short video here](https://youtu.be/iJV7yAAR_ME)).

## Current IMDI modules:

The current line-up of IMDI modules [can be found here](/modules/cat_IMDI.md)
