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
    The purpose of this LIP is to introduce the concept of a user's ownership over their feed algorithm through what I call a User Owned Algorithm Token. This would be carried out by some expressive token that is attached to a user's profile, which can be read to generate the user's preferred algorithm.
-->

## Motivation

<!--
  	The motivation for this LIP is to give the user even more ownership over their social media experience. Right now, users own their profile, collections, content, and followings. It is quite clear that the user’s algorithm should be owned by the user - especially when the lack of control over algorithms is such a problem for users in traditional social media.
-->

## Specification

<!--
  There are a couple ways that ownership over a user’s desired feed algorithm could go - however it should serve a couple functions. One, allow a user to design and calibrate their own algorithm and import it into a Lens compatible app. Second, it should allow a user to export an algorithm from an app to an on-chain token, which can be read by other lens compatible apps. These two functions are the main purpose behind ownership of a user's feed algorithm. The token itself could either contain metadata with a list of wanted and unwanted profiles to be served, which may require another lip/token standard to mark unwanted profiles - and it should be able to carry out aggregation of lists in a degree of separations manner. Or, it could just include the basic functions a user has calibrated to generate their feed. The ladder may be the more effective to start with - especially if scale could pose an issue.
-->

## Rationale

<!--
The main rationale behind the design is to give the user more optionality in how they interact with social media and giving them more power in app selection, where they are not siloed to a closed off algorithm generation. Additionally, it should allow a user to use an app even if there is a high propensity for bots on the app. The user focused approach might also show to do a better job of curated algorithms then a generalized algorithm approach.
-->

TBD

## Backwards Compatibility

<!--
  Since this is an addition to the protocol - I assume there would be no backwards compatibility issues at the protocol levels. But, this may not be true for apps with ingrained algorithm generation systems.
-->



## Copyright

Copyright and related rights waived via CC0.
