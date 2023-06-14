import { shellExtensionInfo, ShellExtensionWallet } from './extension';

const shellExtension = new ShellExtensionWallet(shellExtensionInfo);

export const wallets = [shellExtension];
