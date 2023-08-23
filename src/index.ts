#!/usr/bin/env node
import { Command } from 'commander';

//* Declare the program
const program = new Command();

//* Add actions onto that CLI

program
    .name('newcli')
    .description('A comprehensive toolkit for Solana blockchain development from the command line.')
    .version('1.1.0')
    
    .action(() => {
        console.log(`
        Thank you for Using solanakit. \n
        \n
        You can Type solanakit --help to list down all of the available commands.
        `);
        
    });

program
    .command('learn')
    .description('To get the all the resources for learning Solana Development')
    .action(() => {
        console.log(`
            (1) buildspace : https://buildspace.so/solana-core \n
            (2) SolDev : https://www.soldev.app/course \n
        `);
        
    });

program
    .command('faucet')
    .description('To get the all the resources for getting SOL on devnet')
    .action(() => {
        console.log(`
            (1) solana-cli : solana airdrop 2 \n
            (2) stakely : https://solfaucet.com/   \n
            (3) solfaucet : https://stakely.io/en/faucet/solana-sol   \n
            (4) quicknode : https://faucet.quicknode.com/solana/devnet   \n

        `);
        
    });

program
    .command('cnft')
    .description('To get the all the resources for learning about Compressed NFTs')
    .action(() => {
        console.log(`
            (1) minting cnft : https://youtu.be/83nIhnxtlW8 \n
            (2) merkle tree : https://youtu.be/6BpArf2-R68   \n
            (3) transfer cnft : https://youtu.be/qzr-q_E7H0M  \n
        `);
        
    });

program
    .command('config')
    .description('To get the commands to config the solana rpc url')
    .action(() => {
        console.log(`
            (1) to set to devnet : solana config set --url devnet \n
            (2) to set to localhost : solana config set --url localhost   \n
            (3) to set to mainnet : solana config set --url mainnet-beta  \n
        `);
        
    });

program
    .command('useful')
    .description('To get the list of frequently used useful commands')
    .action(() => {
        console.log(`
            (1) for creating new keypair : solana-keygen new -o ~/FILE_PATH \n
            (2) for setting default keypair : solana config set -k ~/FILE_PATH  \n
            (3) for checking the wallet address : solana address  \n
            (4) for checking the balance : solana balance  \n

        `);
        
    });
//* Execute the CLI with given arguments
program.parse(process.argv);

