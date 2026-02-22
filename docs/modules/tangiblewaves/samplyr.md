# SAMPLYR
[[img|modules/images/SAMPLYR.png|100]]

[[https://www.tangiblewaves.com/store/p192/SAMPLYR.html | View Product Page]]

This module plays back audio files from an SD card.

Module power consumption: 25 mA

## Inputs
* **CV** - Control Voltage for the pitch
* **GATE** - Gate control for the length of the sample playback when in loop mode, trigger when in one-shot mode. In loop mode the sample will only play while the gate is high.
* **START** - Voltage determining at which position the sample will start playing. 0V will play at the start and ~5V will be the end of the sample. If the sample is very long (SAMPLYR can play samples which are hours long) the accuracy of this will degrade.
* **LP STRT** - Voltage determining where the loop will start, independently from any per sample settings. 
* **LP LEN** - Voltage determining the length of the loop, independently from any per sample settings.
* **REVRSE** - Gate control for playing the sample backwards. As long as the gate is high the sample will play in reverse. There is one exception to this rule: Alternating samples do not react to this option. 
* **LP ON** - Gate control for playing the looping part of the sample, independently from any per sample settings. As long as the Gate is high the loop will play.
* **SMP SEL** - Voltage to select a sample from the current folder, eg. if the currently playing sample is in folder D then this voltage will select any of the 10 samples in folder D.
 
## Outputs (on the left)
* **B. CV** - MIDI pitch as transported through the bus. 
* **B. GATE** - MIDI gate as transported through the bus.

## Outputs (on the right)
* **OUT** - The audio of the sample playback
* **LP STRT** - A trigger signal when the loop starts (Please note: this mainly is intended to detect the very first loop-start, for continuous looping it will typically trigger at the same time as LP END) 
* **LP END** - A trigger signal when the loop ends (this repeats for as long as the loop repeats)
* **SMP END** - A trigger when the sample playback ends

## Controls
* **FREQ** Knob - Changes the pitch of the sample playback in addition to the CV control. Pitching of a sample is achieved by changing the sample playback speed, so the higher the pitch, the shorter the playback and vice versa for lower pitch.
* **SELECT/EDIT** Knob/Button - Multi function select knob and push button. When in playback mode, turning the knob will select the next/previous sample. Pushing the button opens a menu on the display (more info below).
* **0** / **START** - When in playback mode this button will select any sample which was assigned to this bank of presets (Within a range of names from '0' to '5'). In edit mode this is a shortcut to change the sample playback starting position.
* **1** / **LP STRT** - In playback as above. In edit mode shortcut to loop starting position.
* **2** / **XFADE** - As above. In edit mode shortcut to the cross fade menu
* **3** / **END** - As above. In edit mode shortcut to change the sample playback end position.
* **4** / **LP LEN** - As above. In edit mode shortcut to change the loop length
* **5** / **LP MODE** - As above. In edit mode shortcut to change the looping mode (loop or one-shot)

## Display

The display shows the folder and file number of the currently selected sample at the top. Below it shows the waveform of the sample (amplitude over time) rotated 90 degrees (clockwise) into vertical and the following markers:
* Sample start - this is marked as the beginning of the filled waveform
* Loop start - this is marked as a horizontal line to the left of the loop range
* Loop end - this is marked by a horizontal line at the end of a dotted vertical line which marks the extent of the loop
* Depending on the loop mode, a triangle at the beginning/end of the loop range indicates the playback direction.
* Sample End - this is the bottom of the file waveform

When in Edit mode, the display can also display information about the currently selected sample, such as filename, size, length and other info. It will also show the parameter which is currently editable, or related functions eg.

*  exit
* sample start
* sample end
* loop start
* loop length
* xfade (cross fade)
* loop mode
* transpose
* hot change
* waveform
* reverse mode
* loop-on mode
* quantize
* wav info
* track calib
* display off
* save 

## Edit Mode

To enter the edit mode, click the encoder; then, the program number is replaced with the menu options. Turning the encoder scrolls through the menu options; a further click selects the editing of the according value, like start/endpoints, loop points etc. Turning the encoder changes the value, another click on the encoder returns to menu selection. The leftmost menu option is "Save"; clicking here stores the defined settings to the SD-Card. To leave Edit Mode without saving use "exit" instead. Please note: if you switch to a different preset, your current edits will be lost unless you stored them before.

XFade (Cross Fade) can be used to eliminate or at least mitigate unwanted clicks or other artifacts when the sample is looping. It works in a way that the sample-volume will be decreased right before the loop-end and increased directly after the loop start. The higher the setting is, the longer the time that crossfading effect takes place will be.

Loopmodes are: One Shot, One Reverse, Forward, Reverse, Alternating, Forward Hold, Reverse Hold, Alternate Hold, Tape Loop and Gated. One Shot, One Reverse and Gated actually switch off looping. Reverse simply means the sample (or loop) is played backwards. Due to the character of the alternating modes, the reverse option will be ignored with those. This can be put to good use, for instance when switching samples in realtime via CV. Very much in contrast to the early days of sampling, when memory was very expensive, using a cheap SD Card can lead to scenario where you won't feel the need to loop a sample at all, even for long notes. Maybe similar to the tapes used in a Mellotron, where effectively analogue samples played from beginning to end or until the corresponding key was released. 

Forward is the most common behaviour for loops: playback will be repeated when the loop end point is reached and start again at loop start.The actual endpoint of the loop can be set relative to the "loop start" via "loop length". In other words, when you move the loop start, the loop end will automatically follow. Please note, that the loop end for obvious reasons can't be situated behind the sample end, thus it may be necessary to shorten the loop-length when moving loop start to a certain location. 
Alternating as a loop-mode sometimes is called "ping-pong": the loop starts in forward direction, plays backwards when the loop end is reached and so on.
Please note, that all these modes are dependent on the Gate-setting for "reverse" - not only the sample will be reversed, but all loop-settings.This is especially useful, when the loop is already active, because you can instantaneously reverse the playback-action. 

You can switch looping on/off via the "Loop on"-signal for the loop modes Forward, Reverse and Alternating. Depending on the global setting for "Loop on" this can be done using a gate or a trigger signal. When the Gate is low, or the trigger toggles the setting to on, the sample still will continue to play until its end is reached as long as the Gate for the current Note/sample is high. 

The menu item "transpose" sets the relative pitch of a specific sample. Effectively it sets the relative "center-point" in terms of pitch for the FREQ-knob. Please be aware that the max. samplerate that can be processed is about 33 khz, so depending on the sample rate of the active sample there may be more or less room available in terms of upward transpositions. Downward transpositions are less affected, but artifacts may become noticeable too much at a certain range as well.

The menu item "hot change" enables you to exchange samples "on the fly" via CV. This may require a bit of experimentation / setting up the samples on the card in a way that you can access them easily via CV. Of course as always, there may be "happy accidents" by random selections (for instance via S&H) as well, of course. In principle the exchanged sample should carry on from the same spot as the sample selected before. But to make this work properly, samples should have similar lengths and loop-modes.
 
The menu item WAVEFRM rebuilds the waveform graphics; this is useful when the actual WAV file on the card has been replaced. (The graphics are only generated once and stored then.)
Waveforms are also generated automatically while scrolling through the list of samples in case a sample is missing its graphical representation. Normally generating the graphics is fast, but it can take a while for longer samples. For instance 4 minutes of audio take about 25 seconds, whereas for a long sample with 26 minutes it will need over 3 and a half minutes for the graphics to be calculated.

The menu item WAV INFO shows the full filename and other file related info.

## Realtime Sample Modifications via CV

The following options to modulate the behaviour of a sample / samples are available: START (Sample Start Point), LP STRT (Loop Start Point), LP LEN (Loop Length, starting at the Loop Start Point) and SMP SEL (Sample Selection).

START, LP STRT and LP LEN all work in addition to the current setting of the sample. Whenever no cable is connected to any of those inputs their value will be 0 and thus only the already saved values of the current preset will be applied. 
Due to this nature, it is even possible to have weird (in common implementations otherwise impossible) combinations of time-locations. Still the Sample-start can't be modified to be behind the sample-end. But for instance it is possible that the sample-start is behind the loop-start, or that the loop-end is behind the sample-end. 
All this is done in a way, to provide maximum flexibility for realtime-modifications but also to prevent completely unexpected outcomes. Anyways, you can use any of those options to come up with creative modifications while playing, for instance using sequencers.

The behaviour of SMP SEL (Sample Selection) is dependent on the Global setting "Hot change mode" for it.
If this mode is activated, the sample will be swapped directly and played on from a similar position, but the display will not be updated. This is done that way in order to avoid possible audio-glitches. If this mode is off, "Sample Selection" will function more in a manner of a 'remote control' for sample-selection and playback will be stopped / restarted with the next Gate/Trigger or 'replay' impulse, depending on the playback-mode of the sample.

Please make sure that you already have saved your sample-settings whenever you use SMP SEL, because otherwise those will be lost.

## Global settings

In the menu, the following items are applied to every sample and thus stored globally:
* Hot change mode - When ON then on a sample change the playback will start roughly where the other sample was when the change was initiated, or if this doesn't work at the loop start. This makes the module behave like a radio when scanning through the stations.
* Reverse mode determines if the reverse-option will be set by a gate or a trigger-signal
* Loop-on mode determines if the loop-on-option will be set by a gate or a trigger-signal 
* Quantize can either be off or set to major or minor - this is applied to the pitch-cv and scale-corrects this input if activated.
* Track calib determines the amount of CV tracking to be applied for the pitch of a sample in relation to higher notes ("keyboard tracking") Normally the default setting should be ok, though.
* Display off provides an option to automatically switch off after a predefined amount of time. It will light up again whenever you use the encoder. This option can be helpful to save power, for instance when your system is running on a battery. In rare cases it also can happen that displays interfere with the audio, so this might help in such situations, too.

## Loop Modes
* One Shot
* One Shot Reversed
* Forward
* Reversed
* Alternate
* Forward Hold
* Reversed Hold
* Alternate Hold
* Tape Loop
* Gated

The one-shot modes obviously plays back from start to end without looping, gate signals or triggers can be applied

Hold and normal loop modes both offer the possibility to apply loops (recurring parts of audio).
The main reason for the different modes is that the normal modes are intended to be used with gates whereas the hold-loop modes are provided for usage with triggers. So the normal mode is very similar to a keyboard-sampler: the loop will end on "key up" or "Gate low" in other words. In hold-loop mode the sample will playback infinitely unless a new playback-trigger (via the GATE input) or the loop is shut off intentionally via a loop-off Gate or trigger (via the LP On input).

Tape Loop can be paused and restarted via the Loop-on input. Again the setting of loop-on decides if this happens when a toggle-trigger or gate are encountered.

Gated playback is a special One-Shot mode, where Gate on/off acts as a kind of pause/play button.  

## Micro SD Slot

You can insert any Micro SD card which is formatted with FAT32. 

In principle the following cards could be supported:
* SD: Up to 2 GB 
* SDHC: over 2 GB to 32 GB 
* SDXC: over 32 GB to 2 TB 

FAT32 only supports a maximum partition size of up to 2TB and individual file size of up to 4GB. 

This gives us the following maximum length of an individual sample (WAV 8bit uncompressed, mu-law or alpha-law):
* 4GB/32khz: **34 Hours** : 43 Minutes : 20 Seconds
* 4GB/16khz: **69 Hours** : 26 Minutes : 40 Seconds

HOWEVER: When loading a sample for the first time its waveform is calculating for the display and then stored along with the sample. As this is a very tiny processor it can take a long time for very long samples ... maybe even hours!

**SD Card file fragmentation** - SAMPLYR plays samples directly from the SD card and expects all files in byte order. If you encounter issues with playback this could be the result of a fragmented file system. It would be best if you copied all files from the SD card to your computer and then format the SD card (**not** quick formatting) and then transfer the files back onto the card. This will ensure that the files are stored in order and can be read from the SAMPLYR software. 

Whenever you experience the error-message FILE NOT CONTG. this means that the blocks of the file are not ordered correctly, or in other words fragmented ("File is not contiguous"). Then it might be needed to go through the procedure described above...


## How to organize Samples on the SD Card

To keep things simple, the files on the SD card are organized in a fixed structure:
* The card can contain in its root a number of folders, named with exactly one letter, from "A" to "Z"
* The files are named beginning with a number from "0" to "9"; the full filename can be longer and be descriptive, but the SAMPLYR only checks for the first letter. Only 10 files per folder are allowed.
* The extension is always ".WAV".

## How to prepare Samples

The samples must be WAV files, with a resolution of 8 bits and mono. The encoding can be either PCM (simple, straight 8bit audio), or being encoded as uLaw or aLaw. These are encodings that allow a little higher bit depth, in case of the SAMPLYR this is 10 bits effectively.

The preparing/converting of samples for he SAMPLYR can be done e.g. with the open-source audio editor software Audacity (see https://www.audacityteam.org/ ). 

The basic steps for converting an existing sample for SAMPLYR are the following:
* Open the audio file in Audacity
* In case it's a stereo sample: Click menu Tracks > Mix > Mix Stereo Down to mono... 
* Amplify the sample to use the full volume resolution (bit-depth): Click Effect > Volume and Compression > Amplify... , then New Peak Amplitude (db) to "0" (Make sure to select the complete sample for this operation, typically by clicking on it and applying CTRL-a / CMD-a)
* First of all make sure to set the "Projectrate (Hz)" at the left bottom corner to your preferred Samplerate, up to 32000. If you don't see the Samplerate there, you may have to reset your Toolbars via View > Toolbars > Reset Toolbars
* In some version of Audacity you have to set  the sample rate for export via the menu Edit > Preferences, Audio settings instead.
* Then via the menu Tracks > Samplerate set the samplerate of your wave to the identical rate as the Project Rate 
* Click File > Export > Export as WAV...  and set encoding to Unsigned 8-bit PCM, or U-Law or A-Law
* ... DONE!


Samplerates of 16000, 22050 or 32000 are recommended (and are usually stored for future sessions). Please note: when 32khz is used you get the best results, but you then can pitch the sample only about one note upwards, so in that case please make sure your material is optimized to be played with lower notes/CVs from 0 to (slightly above) 4V (given that the source-material is tuned/should be set to C). As explained above, the relative adjustment in terms of which note/CV will result in what playback speed/frequency for this can be done with the FREQ Knob.

Especially when using samples with low volumes / higher dynamic-ranges the usage of U-Law (or A-Law) is recommended, U-Law typically also was used with vintage samplers from the early 80s. U-Law has a higher dynamic range (14 bit), but more distortion with low volumes than A-Law (12 bit). Because of the 10bit DAC of SAMPLYR, thus you may find A-Law preferrable. Experimentation may be needed to find the best possible results! Also compression/limiting of the material prior to exporting for a specific format can increase the quality.
Of course, you can apply all the processing methods Audacity offers (which is quite a lot!); check the documentation for this. In any case, it's recommended to do all processing on a file with the highest resolution and sample rate, and reduce it to the 8-bit WAV only as the last step.

## Patch Suggestions

This video shows some demo sounds and rough overview of the module's features: 

%embed% https://youtu.be/35FNO5ygnP4 %%

And here is the first video made by RSKT who had a prototype version of the module

%embed% https://youtu.be/wrISjJ85sPQ %%
