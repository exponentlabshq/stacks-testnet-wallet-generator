#!/usr/bin/env node

import { generateWallet, generateSecretKey, getStxAddress } from '@stacks/wallet-sdk';
import { TransactionVersion } from '@stacks/transactions';
import { randomBytes } from 'crypto';

/**
 * Generate a secure Stacks testnet wallet
 * Following official @stacks/wallet-sdk patterns
 */
async function createTestnetWallet() {
  try {
    // Generate cryptographically secure secret key (24-word mnemonic)
    const secretKey = generateSecretKey();
    
    // Generate secure password for wallet encryption
    const password = randomBytes(32).toString('hex');
    
    // Create wallet with first account automatically generated
    const wallet = await generateWallet({ secretKey, password });
    
    // Get first account
    const account = wallet.accounts[0];
    
    // Derive testnet address
    const testnetAddress = getStxAddress({ 
      account, 
      transactionVersion: TransactionVersion.Testnet 
    });

    // Output wallet information
    console.log('🔑 Stacks Testnet Wallet Generated');
    console.log('================================');
    console.log('Secret Key (24-word):', secretKey);
    console.log('Private Key:', account.stxPrivateKey);
    console.log('Public Key:', account.stxPublicKey);
    console.log('Testnet Address:', testnetAddress);
    console.log('');
    console.log('🚰 Get testnet STX tokens:');
    console.log(`https://explorer.stacks.co/sandbox/faucet?chain=testnet&address=${testnetAddress}`);
    console.log('');
    console.log('⚠️  SECURITY: Store secret key securely. Never share private keys.');

  } catch (error) {
    console.error('❌ Error generating wallet:', error.message);
    process.exit(1);
  }
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  createTestnetWallet();
}

export { createTestnetWallet };