# 2LFO

[[img|modules/images/2LFO.png|100]]

[[ https://www.tangiblewaves.com/store/p89/2LFO.html | View Product Page]]

The 2LFO module has two LFO units with different features and generates modulation voltages mostly below the audio range.

The waveform of the first LFO can be continuously morphed from rising saw to triangle to falling saw by turning a knob. 

The pulse output of the second LFO can be shaped with the pulsewidth knob for different pulse lengths.

Module power consumption: 5 mA

## Inputs
* **SYNC 1** - resets the LFO 1 waveform when a trigger pulse is received
* **SYNC 2** - resets the LFO 2 waveform when a trigger pulse is received
* **PWM 2** - control voltage input for pulse width modulation of PULSE wave output of LFO 2

## Outputs
* **SQUARE 1** - low frequency square wave with fixed width (half cycle)
* **TRIANGLE / SAWTOOTH 1** - low frequency triangle or sawtooth wave
* **SQUARE 2** - low frequency pulse where pulse length is set by the PULSEWIDTH knob
* **TRIANGLE / SAWTOOTH 2** - low frequency triangle or sawtooth wave
* **BUS CV** - control voltage signal from MIDI
* **BUS CTRL** - CTRL signal from MIDI (CH1 - CC20)

## Controls
* **RATE 1 knob** - frequency control for LFO 1
* **SHAPE knob** - controls a smooth transition from rising saw to triangle to falling saw waveforms for LFO 1
* **SLOW / FAST switch 1** - switch between two frequency ranges for LFO 1
* **TRIANGLE LED 1** - visual reference for the TRIANGLE / SAWTOOTH output for LFO 1
* **RATE 2 knob** - frequency control for LFO 2
* **SLOW / FAST switch 2** - switch between two frequency ranges for LFO
* **TRIANGLE / SAWTOOTH switch** - choose the waveform of the TRIANGLE / SAWTOOTH output for LFO 2
* **PULSEWIDTH knob** - set the pulse width of the output for LFO 2
* **PULSE LED** - visual reference for the PULSE output for LFO 2

## Patch Suggestions

LFO can be used for modulating other oscillators (FM), VCAs (AM), filters, etc.  But may also be used as clock or gate.

Patching two unsynched LFOs through a [[logic.md|logic module]] then to a sequencer creates interesting uneven rhythms.  Changing their pulsewidth creates new rhythms.

Combined LFOs connected to [[3vcswitch.md|VC switches]] or a [[trip.md|multiplexer]] results in a simple and versatile trigger sequencer.

When cranked up to audio range (RANGE knob all the way to the right in FAST mode) may be used as audio oscillator.
