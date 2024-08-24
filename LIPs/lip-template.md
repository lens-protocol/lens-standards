---
title: <LIP-29: The Lens Algorithm Ecosystem>
description: <A Cumulative Framework of LIPs 26, 27, and 28>
author: <(@zkjew)>
discussions-to: <URL>
status: Draft
type: <Protocol, Lens Metadata Standard, and Lens Open Algorithm Standard>
category: <Contracts, API>
created: <(2024-07-04)>
requires: <LIP number(26,27, and 28)>
---

## Abstract

<
LIPs-26, 27, and 28 propose a plethora of new ways a user can retain ownership over their algorithm and feed. They propose a standard of User Owned Feeds (UOFs) that can be created by agents, imported to apps, and exported on-chain by apps. They also recommend a Lens Algorithm Marketplace, which fosters the buying, renting, and selling of curated content; on top of that, it also creates the auctioning of “feed space” or a part of a user’s feed in their UOF’s metadata. To carry these ideas out LIP-29 lays out a framework detailing roles of entities in this ecosystem, which consist of users, agents, apps, and 3rd party algorithm generators.
>

## Motivation

<
This LIP aims to create a marketplace for User-Owned Feed Tokens (UOFs) in order to expand their capabilities. In this marketplace, users' agents can purchase or rent curated content for UOFs, earn from their own content, or utilize curation by third parties. By introducing a free-market approach to content curation, users can potentially benefit from algorithms that currently exploit them in today's social media landscape.
>

## Specification/Rationale

<
The main promise of this LIP and its components is to provide the proper incentives for the cheapest and best feeds for users, as well as decreasing the switching costs between apps. This is done by the separation of power in the insertion of the metadata to the users’ feed. In the system, the user provides basic data and preferences to an agent. The agent is paid in some form (ex. Collect fee or time spent on app from apps, or payment from third parties) to fill the user’s feed with desirable content. The agent then brokers feed space in the UOF on the user’s behalf to provide the best content from 3rd parties and maximize revenue for the user. In one scenario, the agent might sell a user’s premium content to 3rd parties. In another, it might hold a bidding contest between two competing 3rd parties. There are a lot of plausible applications of this framework creating a whole economy, as well as more avenues of ownership for users and creators. It allows creators to target likely new followers by allowing agents to purchase feed space precisely. And, it reduces the overall opportunity cost that every web2 user has of being monetized by an entity other than themselves.
>

## Security Considerations

<
Needs Discussion
>

## Copyright

Copyright and related rights waived via CC0.
