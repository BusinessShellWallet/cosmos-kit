import { Wallet } from '@cosmos-kit/core';
import { MainWalletBase } from '@cosmos-kit/core';

import { ChainShellExtension } from './chain-wallet';
import { ShellClient } from './client';
import { getShellFromExtension } from './utils';

export class ShellExtensionWallet extends MainWalletBase {
  constructor(walletInfo: Wallet) {
    super(walletInfo, ChainShellExtension);
  }

  async initClient() {
    this.initingClient();
    try {
      const shell = await getShellFromExtension();
      this.initClientDone(shell ? new ShellClient(shell) : undefined);
    } catch (error) {
      this.logger?.error(error);
      this.initClientError(error);
    }
  }
}
