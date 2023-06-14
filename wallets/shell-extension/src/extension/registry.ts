import logo from './logo.svg';
import { Wallet } from '@cosmos-kit/core';

export const shellExtensionInfo: Wallet = {
  name: 'shell-extension',
  prettyName: 'Shell',
  logo: logo,
  mode: 'extension',
  mobileDisabled: true,
  rejectMessage: {
    source: 'Request rejected',
  },
  connectEventNamesOnWindow: ['shell_keystorechange'],
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link:
        'https://chrome.google.com/webstore/detail/shell-wallet/kbdcddcmgoplfockflacnnefaehaiocb',
    },
    {
      link:
        'https://chrome.google.com/webstore/detail/shell-wallet/kbdcddcmgoplfockflacnnefaehaiocb',
    },
  ],
};
