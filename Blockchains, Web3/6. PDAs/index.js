const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const userAddress = new PublicKey('5gjLjKtBhDxWL4nwGKprThQwyzzNZ7XNAVFcEtw3rD4i');
const tokenMintAddress = new PublicKey('6NeR2StEEb6CP75Gsd7ydbiAkabdriMdixPmC2U9hcJs');

// 1. findProgramAddressSync (calculates the valid bump)
const getAssociatedTokenAddress = (mintAddress, ownerAddress) => {
    return PublicKey.findProgramAddressSync(
        [
            ownerAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    );
};

console.log("-- Finding Address --");
const [associatedTokenAddress, bump] = getAssociatedTokenAddress(tokenMintAddress, userAddress);
console.log(`Associated Token Address: ${associatedTokenAddress.toBase58()}`);
console.log(`Bump: ${bump}`);

// 2. createProgramAddressSync (requires the specific Bump)
console.log("\n-- Creating Address with Bump --");
try {
    const PDA = PublicKey.createProgramAddressSync(
        [
            userAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            tokenMintAddress.toBuffer(),
            Buffer.from([bump]) 
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID,
    );
    console.log(`PDA created successfully: ${PDA.toBase58()}`);
} catch (e) {
    console.error("Failed to create PDA:", e.message);
}
