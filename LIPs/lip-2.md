---
title: Metadata Standards for Lens
description: Improve the Metadata standards allowing standards to grow on their own
author: Josh Stevens (joshstevens19)
status: Draft
type: Lens Metadata Standard
created: 2023-05-26
---

## Abstract

Metadata was growing and growing, and with that, we had a flat structure which worked, but it was not the best to grow on. We have different communities who want to grow their metadata standards over others, and at the current time, our standard was a single entity that had to grow by itself. This proposal splits out the standards so they can all grow by themselves.

## Motivation

We want Lens to be a community ran project with standards shaped by everyone, with the way metadata was set out before this was hard to co-write and also with no JSON schema very hard to validate. It should be easy to know the standards but also grow them without affecting other standards.

## Specification

The PR shows the full spec which will take place with these metadata standards.

## Backwards Compatibility

Metadata v1 and v2 will work and be supported. This metadata standard will now be called metadata v3 and be the new lens metadata standard and the one we suggest everyone use.

## Security Considerations

Everything has json schemas so it should be easy to validate and make sure it is correct.

## Copyright

Copyright and related rights waived via CC0.
