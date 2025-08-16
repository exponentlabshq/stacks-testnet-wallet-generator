#!/usr/bin/env node

import { createTestnetWallet } from './wallet.js';
import { generateSecretKey } from '@stacks/wallet-sdk';

/**
 * Test suite for Stacks testnet wallet generator
 */
async function runTests() {
  console.log('🧪 Running Stacks Wallet Tests...\n');
  
  let passed = 0;
  let failed = 0;

  // Test 1: Secret key generation
  try {
    const secretKey = generateSecretKey();
    if (secretKey && secretKey.length > 0) {
      console.log('✅ Test 1: Secret key generation - PASSED');
      passed++;
    } else {
      throw new Error('Invalid secret key generated');
    }
  } catch (error) {
    console.log('❌ Test 1: Secret key generation - FAILED:', error.message);
    failed++;
  }

  // Test 2: Wallet creation function exists
  try {
    if (typeof createTestnetWallet === 'function') {
      console.log('✅ Test 2: Wallet function exported - PASSED');
      passed++;
    } else {
      throw new Error('createTestnetWallet function not exported');
    }
  } catch (error) {
    console.log('❌ Test 2: Wallet function export - FAILED:', error.message);
    failed++;
  }

  // Test 3: Dependencies are accessible
  try {
    const { generateWallet, getStxAddress } = await import('@stacks/wallet-sdk');
    const { TransactionVersion } = await import('@stacks/transactions');
    
    if (generateWallet && getStxAddress && TransactionVersion) {
      console.log('✅ Test 3: Dependencies accessible - PASSED');
      passed++;
    } else {
      throw new Error('Required dependencies not accessible');
    }
  } catch (error) {
    console.log('❌ Test 3: Dependencies - FAILED:', error.message);
    failed++;
  }

  // Summary
  console.log('\n📊 Test Results:');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);

  if (failed > 0) {
    console.log('\n⚠️  Some tests failed. Review before deployment.');
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed! Ready for deployment.');
  }
}

runTests();