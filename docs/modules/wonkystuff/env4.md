# wonkystuff env/4 — quad envelope generator &mu;Module

[[img|/modules/images/env4.png|200]]

* [[https://wonkystuff.co.uk/env-4.html | Main shop page]]
<!-- * [[https://lectronz.com/products/env4 | EU shop page]]-->

## Overview

* Module format: micro-module
* Power consumption: 8mA

[filename](../../common/micro.md ':include')

**env/4** is a compact, quad 'Attack, Sustain, Release' (ASR) envelope generator where each of the four envelopes have their timing set from common controls. The original use case was as a partner to the [pa/4 poly-assigner](/modules/wonkystuff/pa4.md) — having matched envelopes is important in a polyphonic setup — although it can be used anywhere requiring matched envelopes, for example cloning tom or bongo sounds.

## Controls

* **A** The attack time of the envelope, which can be extended by sending a CV to the *a+* input;
* **R** The release time of the envelope, which can be extended by sending a CV to the *r+* input.

## Connectivity

<desc>

### Inputs

* **t1-t4** Trigger inputs — more accurately *gate* inputs since the attack and sustain phases of the envelope run whilst these inputs are at a high level. Once the gate has been removed, the release phase will be entered.
* **a+** CV control of the Attack phase — actually *adds* to the amount of attack dialed in with the *A* control.
* **r+** CV control of the Release phase — actually *adds* to the amount of attack dialed in with the *A* control.


### Outputs

* **e1-e4** The envelope outputs corresponding to the gate signals present on the *t1-t4* inputs.

## Patch notes

With specific synchronisation of CV and gate signals, it is possible to change the envelope characteristics dynamically - e.g. *e1* starts with a fast attack, and, whilst that is in its sustain phase, *e2* might be started with a slower attack.
