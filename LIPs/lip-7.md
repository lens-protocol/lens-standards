---
title: Allow metadata to be changed in a publication
description:
author: Léo Pradel (@pradel)
status: Draft
type: Protocol
category: Contracts
created: 2023-11-19
---

## Abstract

Allow publication metadata to be changed while keeping a revision history of the changes by using ERC-7160 and ERC-4906.

## Motivation

Currently, to be able to change the metadata of a publication one needs to store the content on a static URL where he can change the content returned, he then needs to call the `refreshPublicationMetadata` mutation to get the content re-indexed by the Lens indexer. This proposal aims to provide an improvement solution while having the following goals:

- Allow the metadata of a publication to be changed on an immutable storage and allow a revision history of the changes.
- Native support for Lens profile managers to change the metadata of a publication.
- Users collecting the publication should not be "rugged" by the metadata changing.

Current options to store the metadata:

- [Irys mutable references](https://docs.irys.xyz/developer-docs/mutable-references) (Arweave): One can use Irys mutable references to publish the content using their current wallet. Irys will then allow the content to be updated by the same wallet and get the content stored on the same URL while being stored on Arweave. This could be a good solution but it as a few drawbacks. First, it does not support Lens profile managers, as the content can only be updated by the same wallet. Second, if the user wallet is compromised, the content could be changed at a later time by the attacker. The only possible "fix" would be for the user to hide the posts on his profile which is far from ideal as one could lose all the posts he has created since starting to use Lens.
- Centralised storage: A centralised storage like S3 or Postgres could be used to store the metadata. As a centralised server with custom logic can be built to allow the metadata to be updated, one could only allow the Lens profile manager to update the metadata by calling the Lens API or smart contracts. But this is far from ideal as it forces the content to be stored on a centralised storage and puts creators' content at risk.

## Specification

ERC-7160 can be used to store multiple metadata URIs per token and pin any revision of the metadata for a token ID. The contracts should also use ERC-4906 and emit an event when the metadata is updated. The Lens indexer should then listen to this event and update the metadata of the publication. The Lens indexer could keep a revision history of the metadata changes and the metadata could be stored on a decentralised storage (IPFS, Arweave etc..). Other platforms like OpenSea also listen to the `PublicationMetadataUpdated` event so the update would be automatic there.

Leveraging ERC-7160, the Lens smart contract could be changed in the following way: a publication contract stores the revision changes on a string array instead of just a string. When an update is made to the publication, the new metadata uri is pushed to that string array. By default calling `tokenURI` would always return the latest metadata uri. The collector can decide at any time to "pin" the metadata uri for the token he minted to any revision made by calling the `pinTokenURI` function. This would protect the collector from the metadata changing in the future and allow him to "freeze" the metadata to a specific revision.

For the logic you can see the pseudo solidity code below:

```solidity
contract MultiMetadata is ERC721, Ownable, IERC7160, IERC4906 {
  string[] private _tokenURIs;
  mapping(uint256 => uint256) private _pinnedURIIndices;
  mapping(uint256 => bool) private _hasPinnedTokenURI;

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) Ownable() {
    _mint(msg.sender, 1);
  }

  // @notice Returns the pinned URI index or the last token URI index (length - 1).
  function _getTokenURIIndex(uint256 tokenId) internal view returns (uint256) {
    return _hasPinnedTokenURI[tokenId] ? _pinnedURIIndices[tokenId] : _tokenURIs.length - 1;
  }

  // @notice Implementation of ERC721.tokenURI for backwards compatibility.
  // @inheritdoc ERC721.tokenURI
  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    _requireMinted(tokenId);

    uint256 index = _getTokenURIIndex(tokenId);
    string memory uri = _tokenURIs[index];

    // Revert if no URI is found for the token.
    require(bytes(uri).length > 0, "ERC721: not URI found");
    return uri;
  }

  /// @inheritdoc IERC721MultiMetadata.tokenURIs
  function tokenURIs(uint256 tokenId) external view returns (uint256 index, string[] memory uris, bool pinned) {
    _requireMinted(tokenId);
    return (_getTokenURIIndex(tokenId), _tokenURIs, _hasPinnedTokenURI[tokenId]);
  }

  /// @inheritdoc IERC721MultiMetadata.pinTokenURI
  function pinTokenURI(uint256 tokenId, uint256 index) external {
    require(msg.sender == ownerOf(tokenId), "Unauthorized");
    _pinnedURIIndices[tokenId] = index;
    _hasPinnedTokenURI[tokenId] = true;
    emit TokenUriPinned(tokenId, index);
    emit MetadataUpdate(tokenId);
  }

  /// @inheritdoc IERC721MultiMetadata.unpinTokenURI
  function unpinTokenURI(uint256 tokenId) external {
    require(msg.sender == ownerOf(tokenId), "Unauthorized");
    _pinnedURIIndices[tokenId] = 0;
    _hasPinnedTokenURI[tokenId] = false;
    emit TokenUriUnpinned(tokenId);
  }

  /// @inheritdoc IERC721MultiMetadata.hasPinnedTokenURI
  function hasPinnedTokenURI(uint256 tokenId) external view returns (bool pinned) {
    return _hasPinnedTokenURI[tokenId];
  }

  /// @notice Add a new token URI to the token.
  function setTokenURI(string calldata uri) external onlyOwner {
    _tokenURIs.push(uri);
  }
}
```

## Rationale

The current solution was motivated by having a solution that allows the content to be stored on a decentralised immutable storage while still being able to change the metadata of the publication and see the old versions.

## Backwards Compatibility

No backward compatibility issues found.

## Security Considerations

TBD.

## Copyright

Copyright and related rights waived via CC0.
