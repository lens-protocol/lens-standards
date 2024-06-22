---
title: <Introducing User Ownership Over Algorithms>
description: <Giving users the ability to own their own algorithm>
author: <zkjew.lens @zkjew>
discussions-to: <N/A>
status: Draft
type: <Protocol/Lens Open Algorithm Standard>
category: <Contracts/API>.
created: <(2024-06-13)>
requires: <N/A> 
---

## Abstract

<!--
The purpose of this LIP is to introduce the concept of user ownership over their feed algorithm through a User Owned Algorithm Token. This token, attached to a user's profile, would be used to generate the user's preferred algorithm.
-->

## Motivation

<!--
The motivation for this LIP is to give users greater ownership over their social media experience. Currently, users own their profiles, collections, content, and followings. It is clear that users should also own their algorithms, especially given the widespread issues with lack of control over algorithms in traditional social media. Both users and apps face problems with the current methods of feed algorithms, which are either limited by following degree of separation logic or rely on generalized algorithms that are poorly tailored to individual users. A User Owned Algorithm Token would empower users to switch apps and view the content they desire while alleviating the burden of algorithm generation from app developers.
-->

## Specification

<!--
There are several ways to manage ownership over a user's desired feed algorithm, but it should serve two primary functions.

First, it should allow a user to design and calibrate their own algorithm and import it into a Lens-compatible app. Practically, this could be as simple as a user interacting with content displayed on an algorithm generation front end or within an app itself.

Second, it should enable a user to export an algorithm from an app to an on-chain token, which can then be read by other Lens-compatible apps. This means a user should be able to mint their algorithm or authorize an app to export it on their behalf.

These two functions form the core purpose of owning a user's feed algorithm. The token could either contain metadata with a list of desired and undesired profiles to be served, potentially requiring another token standard to mark unwanted profiles, and should be able to aggregate lists in a degrees-of-separation manner. Alternatively, it could simply include the basic functions a user has calibrated to generate their feed. The latter approach may be more effective initially, especially if scaling poses a challenge.

(Note: I lack expertise in updating metadata cost-efficiently, which is relevant for this last part.)
-->

## Rationale

<!--
The main rationale behind this design is to give users more options in how they interact with social media and more power in app selection, preventing them from being restricted to a closed-off algorithm generation. Additionally, it should allow users to utilize an app even if there is a high propensity for bots. A user-focused approach might also prove to curate algorithms more effectively than a generalized algorithm approach.
-->

TBD

## Backwards Compatibility

<!--
  Since this is an addition to the protocol - I assume there would be no backwards compatibility issues at the protocol levels. But, this may not be true for apps with ingrained algorithm generation systems.
-->



## Copyright

Copyright and related rights waived via CC0.
