---
title: Profile Guardian
description: Introduce a safety layer to Lens Protocol profiles
author: Lens Protocol Core Team
status: Draft
type: Protocol
created: 2023-07-01
---

## Motivation

Due to recent increase of phishing activity targeting Lens profiles, we have decided to introduce a safety layer to provide additional security to Lens Protocol profiles.

## Specification

### 1. Disable asset meta-tx functions

Disable the following functions in the Lens Profiles collection (i.e. LensHub smart contract):

- burnWithSig
- permit
- permitForAll

**Why?**

- Users are used to gasless experience on Lens, so they tend to pay less attention when signing transactions.
- If a user signed a meta-tx message, it will be valid until its expiration date or nonce usage.
- You can check the on-chain state, but you cannot check if somebody possesses a meta-tx signed by you awaiting for future usage.
- Even if a signed meta-tx is not valid right now with guardian enabled, it can become valid when the guardian is disabled in the future.

Signature methods are disabled by reverting when being called.

### 2. Introduce a 7-day Security Cooldown Period for EOA wallets

This safety mechanism is address-based, meaning that it applies to a given address, and it is inherited by all the Lens profiles owned by it.

Every EOA wallet will have the Profile Guardian enabled by default. Meaning that the following functions will revert as specified:

- **approve(address to, uint256 profileId)**
  - Reverts if `msg.sender` has Profile Guardian enabled, except for revoking approvals (with `to` == `address(0)`)
- **setApproveForAll(address operator, bool approved)**
  - Reverts if `msg.sender` has Profile Guardian enabled, except for revoking approval (with `approved` == `false`)
- **transferFrom(address from, address to, uint256 profileId)**
  - Reverts if `from` (i.e. owner of `profileId`) has Profile Guardian enabled
- **safeTransferFrom(address from, address to, uint256 profileId)**
  - Reverts if `from` (i.e. owner of `profileId`) has Profile Guardian enabled
- **burn(uint256 profileId)**
  - Reverts if owner of `profileId` has Profile Guardian enabled

To use any of the functions mentioned above, the user must explicitly trigger the safety layer disabling by executing the `DANGER__disableTokenGuardian` transaction, and wait for a 7-day Security Cooldown Period until the Profile Guardian becomes effectively disabled.

We specifically chose the `DANGER` prefix to draw users' attention and lower the risk of executing this transaction unintentionally.

After the Profile Guardian is effectively disabled, the user can use all the functions mentioned above without the listed restrictions.

The user can enable the Profile Guardian back by executing `enableTokenGuardian` transaction, it will become effective immediately after the transaction is confirmed.

### 3. Profile Guardian does not apply to non-EOA addresses

Non-EOA addresses are not affected by this safety layer in order to avoid issues with smart contracts (e.g. NFT protocols or smart wallets) that expect the default plain ERC-721 behaviour. Non-EOA addresses have a higher safety assumption as significant amount of the non-EOAs are multisigs, DAOs or protocols that have a higher threshold of observation from the users and are assumed to remain less affected.

### 4. Lens ecosystem support

Ecosystem services (including Lens API and others) should track the Profile Guardian status, so Lens applications can warn users about their protection state changes, providing a seamless experience to enable it back if desired. We encourage all Lens applications to do so.

The Cooldown Period is a key piece here, as it gives users a whole week to take measures on their address before any profile can get stolen by a potential attacker.

## Copyright

Copyright and related rights waived via CC0.
