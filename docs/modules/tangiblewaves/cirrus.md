# CIRRUS

[[img|modules/images/CIRRUS.png|300]]

[[https://www.tangiblewaves.com/store/p142/CIRRUS.html | Product Page]]

CIRRUS is a real-time granular processor for audio signals. This module is an adaption of Mutable Instruments' Clouds module, a well known module in the Eurorack world.

This module uses the extended firmware of the Eurorack Supercell module; meaning it offers four additional algorithms on top of the four original ones.

**This module has been discontinued due to the Chip Shortage**

## Pitch Tracking Modes
The CIRRUS was sold with the original Superparasites firmware installed which was programmed for Eurorack hardware. There seemed to be some issue with pitch tracking with this version in conjunction with the AE Modular hardware and the adaption of the module/Firmware for this format. This lead to random pitch modulation of the grains which some people found undesirable.

Through extensive research and testing Mathias (aka @visuellemusik) has found the source of this behaviour and created 3 additional modes where this behaviour can be either switched off or controlled in creative ways. This new firmware also eliminates the need for calibration as described in the documentation for the original Superparasites firmware.

The new firmware is available as an audio file and can be easily uploaded to the CIRRUS via the audio IN port on the CIRRUS module. 

You can find detailed instructions and the newest firmware file on the AE Modular Github here:

https://github.com/aemodular/superparasites/releases

The5thVolt has also created a video showing how to install the firmware and some sound tests for each of the modes. (There are now two additional sub modes which are not presented in this video, please refer to the instructions on Github how to access these)

%embed% https://youtu.be/gqtdyhIsb8A %%

## Saving audio and presets

You can save up to 4 presets using the BANK button. These presets will persist even after the module has been powered down. The length of the saved audio depends on the current position of the TIME parameter (see below).

* To save the current audio buffer, press BANK for one second to begin the save process. 
* Save into the current bank by pressing BANK again for one second.
* You can select a different bank to save into by tapping BANK briefly before saving. 
* The save process will exit after saving is complete. 
* The save process will be cancelled if nothing is saved within five seconds. 
* The LED of the last-selected bank will blink ten times before saving is cancelled.

To load a saved preset:

* Tap the BANK switch to step through the four memory banks. Note that a brand new module (or a module that has just received a firmware upgrade) will have four empty banks.
* To reload the current preset bank without cycling through the other three banks first, press BANK while pressing TRIG at the same time.

## Selecting the Audio quality

Pressing the TIME button quickly lets you cycle through the following modes for the length of the recorded samples. A longer sample time leads to reduced quality:

1. 32khz, 16bit, stereo, 1 second (of audio buffer)
2. 32khz, 16bit, mono, 2 seconds
3. 16khz, 8bit µ-law, stereo, 4 seconds
4. 16khz, 8bit µ-law, mono, 8 seconds

Note that Clouds’ 8-bit is a lovely flavour of 8-bit: µ-law compounding. It sounds like a
Cassette, or a Fairlight - less hiss, more distortion.

## Reverb

The post-processing reverb COMES after dry/wet MIX, so that it also affects
the dry signal (so you can use Clouds as a simple reverb plus its main function)

# Operating Modes

This module is very complex and each of the 8 algorithms changes how each knob and CV input behaves. Below is a comprehensive guide compiled by Matt Wand which explains all of this.

## Downloads

You can also **download** the below guide as a PDF for printing and offline reading:
[CIRRUS-manualBYmattwand.pdf](/download/CIRRUS-manualBYmattwand.pdf ':ignore')

Another user of the forum (@sleeptotem) has created this cool **cheat sheet**:
[CIRRUS-CHEATSHEET.pdf](/download/CIRRUS-CHEATSHEET.pdf ':ignore')

**Clouds, Parasites, Super Parasites, SuperCell, Microcell.... and now... CIRRUS**

ALL THE MODES: A COMPILATION & REWRITE/REEDIT OF ALL THE INFO OUT THERE FOR THE FIRMWARE CURRENTLY IN TANGIBLE WAVES ‘CIRRUS’ MODULE. 

Word wrangled by Matt Wand (Rocky Smalls), all due credit to Emilie & all the additional firmware coders and documenters contributions sorted and compiled here.

In its tumultuous teenage years, Clouds tried to be everything, including a
delay/pitch-shifter, a spectral processor, a projectionist and a cab driver in Rouen.
as an adult cloud CIRRUS not only holds down those jobs but also indulges in Clairvoyance,
Zeppelin Hangar management and Carbon neutral Rain Dancing!

## HOW TO CHANGE THE MODE 

Hold down TIME button for over 1 second the LEDs will flash, short press TIME
button whilst flashing will move between modes thus:

* Mode 1 [●○○○]: Granular Clouds
* Mode 2 [○●○○]: Pitch Shift / Time Stretch
* Mode 3 [○○●○]: Looping Delay
* Mode 4 [○○○●]: Spectral Processor
* Mode 5 [○●●●]: Oliverb
* Mode 6 [●○●●]: Resonestor
* Mode 7 [●●○●]: Beat Repeat
* Mode 8 [●●●○]: Spectral Clouds

leave on desired mode for a second and it will settle in.

## Mode 1: GRANULAR CLOUDS [●○○○] 

Home sweet home. The Cumulous Nimbus original mode.
Clouds continuously records the incoming audio into a short amount of sample memory. While
recording time can reach up to 8s by reducing the audio quality setting, you ought to feel
very guilty every time you think of this as “tape” - think of it as a space, a room. Using
this recorded audio data, the module synthesizes a sonic texture by playing back short
(overlapping) segments of audio (also known as “grains”) extracted from it.

Clouds allows you to control: 

* From which part of the buffer the grains are taken.
* How long the grains are. At which speed/pitch the grains are replayed.
* How much overlap there is between the grains (density).
* Whether the distribution of grains in time is constant or random.
* Which envelope curve is applied to the grains - giving the impression of a “rough” or “smooth” texture. In addition, to create textures with a “blurry” feel, a diffuser (network of all-pass filters - like a reverb without tail) can be applied.

The module plays grains continuously, at a rate determined by the DENSITY and SIZE settings. A
trigger input is also present, to explicitly instruct the module to start the playback of a
new grain. The maximum number of concurrent grains is quite large - between 40 and 60. This
specificity brings Clouds closer to the roots of granular synthesis, and allows the synthesis
of varied textures even from basic waveforms - there’s indeed many more dimensions to granular
synthesis than keeping a playback pointer moving through a SD-card sample!

It is possible, at any time, to HOLD (ie: Freeze) the audio buffer from which the grains are
taken - In this case, the incoming audio is no longer recorded. Somehow, Clouds is the exact
opposite of a sampler: by default, the module always samples the audio it receives, except
when it is in the frozen state.

### Front Panel Controls

* **INPUT** - gain from -18dB to +6dB. applies for ALL modes.
* **HOLD** - This latching button stops the recording of incoming audio. Granularization is now performed on the last few seconds of audio kept in memory in the module. long press HOLD will reverse playback of the buffer.
* **POSITION** - Selects from which part of the recording buffer the audio grains are played. Turn the knob clockwise to travel back(?)forward in time.
* **SIZE** -  controls size of grains, Left = smallest, Right = largest
* **PITCH** -  (transposition). At 12 o’clock, the buffer is played at its original frequency.
* **DENSITY** - generation rate & style of the grains. At 12 o’clock, no grains are generated. Turn clockwise and grains will be sown randomly, counter-clockwise and they will be played at a constant rate. The further you turn, the higher the overlap between grains. BEWARE THE DEADZONE! in this mode between aprox 10 o’clock & 2 o’clock no grains seem to be sown, possibly a Cirrus iteration problem, ie: that 12 o’clock area is TOO LARGE or TOO EXPONENTIAL maybe? but grains can be triggered via cv into the Trig input in this zone, so it has its uses.
* **SHAPE** - Morphs through various shapes of grain envelopes: square (boxcar), triangle, and then Hann window. Past 2 o’clock it activates a diffuser which smears transients.
* **FEEDBACK** - amount of signal sent back into pitch processing CAREFUL :), adds decay to the buffer clearing when not HELD. at full can take nearly a minute to fade out if PITCH is near 12 o’clock.
* '''MIX dry/wet balance.
* **PAN** - Stereo spread of grains.
* **REVERB** - Amount and size of reverb applied to outgoing signal. 

### Inputs and Outputs

All CV inputs are calibrated for a range of +/- 5V (?? check with Robert) Voltages outside of this range are tolerated, but will be clamped.
* **HOLD' gate input** - When the input gate signal is high, stops the recording of incoming audio, just as latching the HOLD button would do.
* **TRIGGER input** - Generates a single grain. By moving the grain DENSITY to the 12 o’clock deadzone and sending a trigger to this input, Clouds can be controlled like a micro-sample player. An LFO or clock divider (or even a pressure plate) can thus be used to sow grains at the rate of your choice.
* **Grain POSITION and SIZE CV inputs**
* **Grain transposition (PITCH) CV input** with V/Oct response.
* **MIX CV input** - This CV input can control dry/wet balance,
* **Stereo audio input** - When no patch cable is inserted in the right channel input, this input will receive the signal from the left channel. ( check? )
* **Grain DENSITY and SHAPE CV inputs**
* **Stereo audio output**

**There are a few things worth knowing about the settings**

All settings are automatically saved, and will be restored the next time the module is powered
on. Strange things happen when HOLD is enabled. Because feedback/layering can no longer occur
in the recording buffer (hey, it’s frozen…), we route the output signal through delays and
all-pass filters, and let the feedback build-up occur in this extra recording space - giving
the sound a very reverb-like nature.

**NOTE:** the PAN knob, in most modes PAN is actually stereo “spread” you won’t hear any panning
moving it left to right, counter clock wise: it will ‘mono-ize’ the output, turning clock wise: it will open up the
stereo for the grains to appear randomly across the stereo field.

In the Mono quality modes in eg: Oliverb which is mono in only , PAN crossfades between the
left and the right input. Remember that the left input is normalized into the right input, so
with nothing patched in In L, this will have no effect. (check?)

## Mode 2: PITCH-SHIFTER/TIME-STRETCHER [○●○○]

This mode is quite similar to the granular mode, except that it uses two overlapping grains
synchronized with the most salient period of the sound. The grains are carefully spliced so
that they mesh well with each other (a technique similar to the “deglitching” of early
pitch-shifters). 

Modulating POSITION when recording is HELD will “scrub” through the audio
buffer. Clouds’ uses classic time-domain methods which are not suitable for polyphonic or
percussive material (unless this percussive material is breakbeats and you liked Akai
samplers. 

### Front Panel Controls

* **HOLD** - Loops the buffer, long press should reverse the audio held in the buffer?
* **DENSITY** - creates a granular diffusion effect based on all-pass filters.
* **SHAPE** - acts as a low-pass/high-pass filter.
* **SIZE** - controls the size of the overlapping windows used for pitch-shifting and time-stretching – from an extremely grainy “drilling” sound to smooth bits of loops.
* **FEEDBACK** - seems to be decay of the buffer ie: if not on HOLD CCW means when input muted buffer clears immediately, CW buffer runs out gradually ( 8 secs? )
* **MIX** - dry/wet balance.
* **PAN** - Stereo spread.
* **REVERB** - Amount and size of reverb applied to outgoing signal.

### Inputs and Outputs

These work exactly like Mode 1: Granular Clouds.

## Mode 3: LOOPING DELAY [○○●○]

The looping delay mode continuously plays back audio from the buffer without any kind of
granularization.

### Front Panel Controls

* **HOLD** - When HOLD is activated, the content of the audio buffer is looped (stutter effect).
* **POSITION** - controls the distance between the playback head and the recording head (in other words, the delay time). Modulating POSITION will create effects similar to vinyl scratching or manual manipulation of tape.
* **POSITION** - controls the loop start
* **SIZE**  controls the loop duration.
* **DENSITY** - creates a granular diffusion effect based on all-pass filters.
* **SHAPE** - from 12 o’clock leftwards: low-pass filter, from 12 to the right: high-pass filter.
* **FEEDBACK** - adds decay to the buffer when not HELD. single bursts of input audio will decay like an echo/release envelope.
* **MIX** - dry/wet balance.
* **PAN** - Stereo spread of grains.
* **REVERB** - Amount and size of reverb applied to outgoing signal

### Inputs and Outputs

Mostly like the modes before but:

* **TRIG input/cv** - When HOLD is enabled, sending a trigger on the TRIG input creates a clock-synchronized stuttering loop. Otherwise, the period of the trigger pulses sets the delay time – provided this delay is shorter than the recording buffer size.

## Mode 4: SPECTRAL PROCESSOR[○○○●]

In this mode, the incoming signal is converted into “frames” of spectral data, that are
stored, transformed, recombined, and resynthesized as a time-domain signal.

### Front Panel Controls

* **HOLD** - freezes the audio buffer. see POSITION -
* **POSITION** - selects into which buffer the audio is poured (when HOLD is not active), or from which buffer the audio is synthesised (when HOLD is active). For example, set POSITION to its minimum value. Press HOLD. You get a first texture. Set POSITION to its maximum value. Release HOLD. Wait for something else to happen in the incoming audio. Press HOLD again. By moving POSITION you interpolate between the two textures which had been captured at the press of HOLD. Depending on the quality settings there are 2 to 7 buffers laid out over the course of the POSITION knob. What the module does is crossfade between a “wavetable” of FFT slices.
* **SIZE** - changes the coefficients of a polynomial that determines how frequencies are mapped between the analysis and synthesis buffers. It’s like a 1-knob GRM Warp. Over the course of the knob it’ll do spectral shifting, but also spectral reversal.
* **PITCH** - controls the transposition (pitch-shifting).
* **DENSITY** - determines how results from the analyzer are passed to the resynthesizer. Below 12 o’clock, there’s some increasing probability that a given FFT bin won’t get updated, causing a kind of partial freeze. After 12 o’clock, adjacent analysis frames are increasingly merged together (like a low-pass filter in the amplitude each frequency bin). At extreme settings, random phase modulation is applied to smooth things - giving you different flavours of spectral muddling/reverb.
* **SHAPE** - does two things: below 12 o’clock, it increasingly quantizes the amplitudes of the spectral components, like a very low-bitrate audio file. After 12 o’clock, it increasingly weakens the strongest partials and amplifies the weakest ones. This has the effect of making the spectrum more noise-like.
* **FEEDBACK** - sends signal back round through the pitch processor? (check?)
* **MIX** - dry/wet balance.
* **PAN** - Stereo spread of grains.
* **REVERB** - Amount and size of reverb applied to outgoing signal. Sending a trigger to the TRIG input creates various frequency-domain glitches typical of corrupted (encoded) audio files. It works as a kind of build-up/feedback effect - the shorter the pulse, the smaller the effect. With a continuous gate, it’ll really start to rot…

## Mode 5: OLIVERB [○●●●]

This mode is mono-in, stereo-out.

* **HOLD** - (Freeze) The hold button sets reverb to (near) infinite decay, and mutes the input. This works best with no pitch shifting and a large size.
* **POSITION** - (Pre-delay) The Position knob controls the time it take for the reverb to kick in after a sound has gone in (from 0 to about half a second). When a clock is fed to the Trig input, this knob becomes a clock divider/multiplier for the pre-delay: at 12 o'clock, the pre-delay takes the value of the clock length; clockwise, this clock is divided, and counter-clockwise it is multiplied following the rates: 1/16, 3/32, 1/8, 3/16, 1/4, 3/8, 1/2, 3/4, 1, 3/2, 2/1, 3/1, 4/1, 6/1, 8/1, 12/1 (borrowed from the Echophon). Note that the clock division is limited to the largest division not exceeding the maximum delay; beyond this point, the Position knob will have no effect. Changing predelay in real time is smooth and does not affect pitch (it uses the internal time stretcher).
* **SIZE** - (Reverb Size) The Size knob controls the lengths of all the delays internal to the reverb, i.e. the size of the emulated room. It varies from a small resonator to a huge hall.
* **DENSITY** - (Decay) The Density knob controls the amount of sound fed back into the reverb loop, i.e. the decay time of the reverb tail. Beyond 3 o'clock, this signal is actually amplified and the reverb enters self-oscillation.
* **SHAPE** - LP/HP filter
* **PITCH** - (Pitch shift) Each time the sound is fed back into the reverb, it can be pitch shifted. The Pitch knob controls, from -1 to +1 octaves how it is pitch shifted. At 12 o'clock, no pitch shifting is applied; fully clockwise, we get the classic shimmer effect; lots of oddities can be found in between. To hear the effect of the pitch shifter, some sound has to fed back by increasing Decay. Note that Size has an impact on how well the sound is pitch-shifted: the larger the room size, the more accurate the pitch shift. Dampening The Texture knob controls the dampening of the reverb. From fully CCW to 12 o'clock, a low-pass filter is applied, simultaing the absorption of the room. From 12 o'clock to fully CW, a high-pass filter is applied for unusual, crystalline effects.
* **MIX** - (Dry/Wet) The first function of the Mix knob is dry/wet crossfading, as in the other modes.
* **PAN** - (Diffusion) The second Blend mode (called "stereo spread") controls how much the sound is "smoothed" by the diffusers each time it goes through the loop. Fully clockwise, you get the more dense, continuous sound; fully counter-clockwise, you clearly hear the sound being repeated like in a multi-tap delay.
* **REVERB** - ( modulation amount ) Each delay in the reverb can be individually modulated by 9 smoothed random LFOs. The Reverb knob controls the amount of modulation applied by the LFOs to the delay time. Small modulations result in subtle chorus and ghost tones, large modulations in random pitch shifts.
* **FEEDBACK** - (Modulation speed) The feedback knob controls the speed of the 9 random LFOs. It ranges from ~1/100Hz to ~100Hz. It has no effect if modulation amount is null.

### Inputs and Outputs

These work just like in the other modes, but:

* **TRIG input/cv** - syncs the pre-delay

## Mode 6: RESONESTOR [●○●●]

It is a dual-voice, four-parts resonator (or comb filter) effect with built-in capability for polyphonic Karplus-Strong plucked string synthesis, and more. Each input feeds one of the two voices/resonators, which decay is controlled by the Density knob. Remember that In L is normalized to In R, so with nothing patched in In R, the In L signal is fed to both voices. The pitch of the resonator is controlled by the Pitch knob and the V/Oct input, so you can "play" the resonator like an oscillator. In fact, each voice consists of four "parts" (four resonators), which can be set to different pitches to form chords. The Size knob sets the chord, borrowed from Braids: unison, detuned, fifth etc. The resonators can sound very metallic; the SHAPE knob helps attenuating the high/low frequencies each time sound passes through the resonator. At 12 o'clock, no filtering is applied; CCW is a low-pass filter; CW is a band-pass filter. This way, a short sound impulse passing through the resonator will have a long decay with less and less high (and possibly low) frequency.

This technique, sending a short noise burst to "excite" a resonator, is the so-called Karplus-Strong algorithm to synthesize the sound of plucked strings instruments like guitars. Here, no need for additional modules: sending a trigger to the Trig input will send a short burst of noise to one of the voices. The Position knob controls the timbre and duration of this burst, roughly modelling the position on which the string is struck. Up to now, we only discussed one voice. Actually, each time a Trig is received, the module switches the active voice; therefore, you can get duophony. At any time, the knobs (pitch, chord, feedback, damping) control only the parameters of the resonators of the active voice; the other voice keeps the last parameters it was on. If you are satisfied with the sound of the current voice and want to keep it running (maybe as a drone, using the other voice for melody), press Freeze: it will instantly switch voice, and prevent Trig from automatically switching voice.

### Front Panel Controls

* **DENSITY** - (Decay) Decay time of the current voice. Beyond approx. 3 o'clock, decay is infinite and the sound sustains forever (you can use it as a traditional 
oscillator).
* **PITCH** - Base pitch of the current voice. At 12 o'clock, the pitch is A3 (220Hz).
* **SIZE** - (Chord) Chord selection for the current voice. Morphs gradually between Unison, Fat, Superfat, Fat power, Fat octave, Octaves, Power, Major, Major7, Minor7, Minor, Sus2, Sus4, Minor9, Major9, Minor11, Major11, and Major11.
* **SHAPE** - (Dampening) Controls filtering in the feedback loop of the resonator. At 12 o'clock, no filtering is applied; CCW, a low-pass filter is applied with a increasingly low cutoff frequency; CW, a band-pass filter at the frequency of the resonator is applied with an increasingly high resonance.
* **POSITION** - Controls the timbre and duration of the noise burst. CCW, it will be longer and more dampened; CW, it will be shorter and more high pitched. At both ends of the knob, the burst will be inaudible (too damped or too short), which you can use to "mute" a voice.
* **HOLD** - Switch the current voice, and inhibits further voice switch by the Trig CV.
* **MIX** - (controls Distortion) Randomly distorts the timbre of the voices by modulating each comb filter by low pass-filtered noise. Fully CCW, the modulation amount is maximum but the noise is filtered out entirely, so there is no effect. Fully CW, the noise is unfiltered, but the modulation amount is null, so there is no effect. In between, you get interesting effects, from subtle swaying to harsh distortion.
* **PAN** - (Stereo output) Assigns each part and voice to an output (Out L or Out R). Fully CCW, each voice goes to a different output. At 12 o'clock, both voices are equally mixed in both output. Fully CW, parts of both voices are distributed on both output for a wide stereo effect.
* **FEEDBACK** - (Harmonics)Simulates striking the harmonics on a string. Fully CCW, it has no effect. Fully CW, the second harmonic will ring; at 12 o'clock, the third, at 10 the fourth etc. Scatter (fourth function of Blend knob and CV) Controls the random delay times before the sound (input or burst) hits each resonator of the current voice. Used for K-S synthesis with a chord, this will give the impression that strings are struck sloppily. The delay times are randomized at each voice switch.
* **REVERB** - SCATTER

### Inputs and Outputs

The are like the other modes except:

* **TRIG** - (Burst) Trig button OR CV input will switch the current voice (if Freeze is not active) and send a short burst of noise in its resonator.

## Mode 7: BEAT REPEAT [●●○●]

Note: This mode requires a clock signal plugged into the Trigger input. Without a clock signal, it holds the most recent slice (or outputs silence if no clock signal has been
previously provided)

The Kammerl Beat-Repeat mode analyzes the incoming clock signal to enable real-time slicing of the audio input. It manages multiple slices in real-time which can be individually selected. Each slice can be played back with different loop, pitch and distortion settings.

### Front Panel Controls

* **HOLD** - Enables slice processing / beat-repeating. If not enabled, slice processing is randomly enabled based on the Mix knob setting for Slice Probability.
* **POSITION** - (Loop Start)Defines the beginning of the loop interval relative to the total slice duration. To support in-sync beat repetitions, it is quantized as follows: [0-1/64] free/unquantized, 1/64, 1/32, 1/16, 1/8, 1/4, 1/3, 1/2, 1.
* **SIZE** - (Loop Size)Defines the size of the loop interval relative to the total slice duration as well as the loop mode (regular/alternating). To support in-sync beat repetitions, it is quantized as follows: Regular from the left to 12 o'clock: [0-1/64] free/unquantized, 1/64, 1/32, 1/16, 1/8, 1/4, 1/3, 1/2 Alternating from 12 o'clock to the right: 1/2, 1/3, 1/4, 1/8, 1/16, 1/32, 1/64, [1/64-0] free/unquantized
* **PITCH** - (playback speed) The Kammerl Beat-Repeat mode does not time-correct the pitch changes (so somewhat like a tape or record running at different speeds). This allows for interesting groove effects, since audio is delayed towards the end of the slice but reset at the slice beginning. To the very left, the knob defines a zero pitch, to the very right, the original playback speed. ( check these params ) The pitch modulation is determined by the
* **FEEDBACK** - knob.
* **DENSITY** - (Loop Size Modulation) Enables a decreasing loop size towards the slice end. This enables a ping-pong bouncing ball effect: Tak tak tak taktak tatatatatttttttt
* **SHAPE** - (slice mode) this parameter selects individual iteration patterns to jump between slices during playback, it incorporates the Shape CV slice selection by using it as an offset. the patterns are as follows Clockwise from 
** 0 - Disabled - Only Texture CV selects slices. 
** 1 - Repeats current slice due to synced playback index. 
** 2 - Skips every second slice. 
** 3 - Skips two slices. 
** 4 - Skips three slices. 
** 5 - Skips four slices. 
** 6 - Skips five slices. 
** 7 - Random - Randomly selects slices
* **MIX** - (Slice Probability) Defines the probability of disabling bypass and processing an incoming slice. Note that activating the HOLD button overwrites this setting.
* **PAN** - (Clock Divider)Selects a clock divider: 1, 1/2, 1/4, 1/8 which changes the slice lengths accordingly.
* **FEEDBACK** - (Pitch Mode) Selects one of four pitch modulation modes (from left to right):
** (left position) Fixed pitch - no modulation. 
** (9 o’clock) Fixed pitch - reverse playback. 
** (12 o’clock) Linearly decreasing pitch starting from the original pitch to the selected target pitch (Pitch Knob). 
** (3 o’clock) Linearly increasing pitch starting from the the selected target pitch (Pitch Knob) to the original pitch. 
** (full right position) Simulated vinyl scratching - sinusoidal pitch modulation - the Pitch Knob defines the intensity.
* **REVERB** - (Feedback, counterintuitively! :]) Controls the contribution to Cloud's feedback path. Combined with lower pitch playback, this leads to “trevor horn” style laser gun effects on drums :)

### Inputs and Outputs

* **Shape CV** - Selects one of the eight most recently recorded slices. 0V corresponds to
the most recent slice (real-time / no delay!). Note that slices are continuously created from
audio input, independent from HOLD or slice probability mode.

## Mode 8: SPECTRAL CLOUDS [●●●○]

The Spectral Clouds mode creates cloud-like frequency spectra. It is a high-resolution multiband filter with randomly modulated frequency bands. The logarithmic divisions of the frequency spectrum result in a continuously morphing but musical sounding filter. This mode is inspired by this FFT Randomizer project.

### Front Panel Controls

* **HOLD** - freezes the buffer.
* **PITCH** - Frequency(?) amount(?) of Pitch shifting applied to the Spectral Clouds output.
* **POSITION** - (Frequency band probability) Defines the probability of a frequency band to become enabled. To the left all frequency bands are disabled. Check out the sweet spot (?) where only a few frequency bands are active.
* **SIZE** - (Frequency band division)Controls the number of filter bands and their corresponding frequency width. To the left, the frequency spectrum is split into 4 filter
bands and to the right into 128 filter bands. All frequency band divisions are applied in logarithmic scale to sound musical.
* **DENSITY** - (Filter Smoothing) Defines the smoothing intensity on the frequency band division as well as the filter band attenuation changes during "trigger input" events. To the left, filter changes are applied immediately; to the right, the current filter configurations is held.
* **SHAPE** - (Filter texture) Defines the degree of phase randomization in the frequency domain. This affects mostly waveforms with transients.
* **MIX** - (Dry/wet balance) Balance between input signal and Spectral Clouds output. Note that a warm distortion effect as well as Cloud's reverb is applied post dry / wet.
* **PAN** - (random filter change probability) Defines the chance of simulated "Trigger input" events. To the left, simulated trigger events are disabled and random filter
reconfigurations only happen during high trigger input gates.
* **FEEDBACK** - (warm distortion) Adds a warm sounding distortion effect (applied post dry/wet).
* **REVERB** - (exactly what it says) Controls the contribution to Cloud's reverb (applied post dry/wet).

### Inputs and Outputs

Are mostly like the other modes, except:

* **TRIG input/cv** - Randomizes the set of active frequency bands and defines their random attenuation intensity. Note that these trigger events can also be simulated with the POSITION knob (Frequency band probability).

