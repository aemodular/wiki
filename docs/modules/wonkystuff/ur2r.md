# wonkystuff &mu;r2r — Dual 4 bit counter &mu;Module

[[img|/modules/images/ur2r.png|200]]

* Module format: micro-module
* Power consumption: ??mA

[[https://wonkystuff.co.uk/ur2r.html | View the shop page]]

## Overview

[filename](../../common/micro.md ':include')

Simple &mu;Module comprising a passive 'R2R' DAC, with raw, buffered and inverted outputs.  Inspired by an element of Matt Keubrich’s *Roundabout* [see here](https://github.com/MattKuebrich/roundabout). The [[/modules/wonkystuff/2x4.md|2x4!]] also takes inspiration from this source.


## Controls

None

## Connectivity

### Inputs

* **1-8** — binary-weighted inputs to the resistor-ladder.

***Note*** *The inputs don't have to be digital! &mu;r2r can operate as a weighted voltage mixer too; have an experiment!*

### Outputs

* **u** unbuffered sum of the output from the resistor ladder. Connecting multiple modules to this pin will change the generated voltage due to the effect of different input impedances;
* **b** (x2) buffered version of *u*, capable of driving multiple following modules;
* **i** Inverted/buffered version of *b*
