/**
 * Simple simulation of a Constant Product Market Maker (CPMM)
 * Formula: x * y = k
 */

class LiquidityPool {
    constructor(reserveA, reserveB) {
        this.reserveA = reserveA; // e.g., SOL
        this.reserveB = reserveB; // e.g., USDC
        this.k = this.reserveA * this.reserveB; // Constant product
    }

    // Calculate how much Token B you get for Token A
    getSwapAmount(inputAmountA) {
        // (reserveA + inputAmountA) * (reserveB - outputAmountB) = k
        // outputAmountB = reserveB - (k / (reserveA + inputAmountA))
        
        const newReserveA = this.reserveA + inputAmountA;
        const newReserveB = this.k / newReserveA;
        
        const amountOut = this.reserveB - newReserveB;
        return amountOut;
    }

    swapAforB(inputAmountA) {
        const amountOut = this.getSwapAmount(inputAmountA);
        
        this.reserveA += inputAmountA;
        this.reserveB -= amountOut;
        
        console.log(`Swapped ${inputAmountA} Token A for ${amountOut.toFixed(2)} Token B`);
        console.log(`New Reserves -> A: ${this.reserveA.toFixed(2)}, B: ${this.reserveB.toFixed(2)}\n`);
    }
}

// Initialize Pool with 100 SOL and 10,000 USDC (Price: $100 per SOL)
const pool = new LiquidityPool(100, 10000);

console.log("Initial Pool: 100 SOL, 10,000 USDC\n");

// User buys USDC with 1 SOL
pool.swapAforB(1);

// User buys USDC with 10 SOL (High slippage example)
pool.swapAforB(10);