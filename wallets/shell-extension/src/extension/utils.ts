import { ClientNotExistError } from '@cosmos-kit/core';

import { Shell } from './types';

interface ShellWindow {
  shell?: Shell;
}

export const getShellFromExtension: () => Promise<
  Shell | undefined
> = async () => {
  if (typeof window === 'undefined') {
    return void 0;
  }

  const shell = (window as ShellWindow).shell;

  if (shell) {
    return shell;
  }

  if (document.readyState === 'complete') {
    if (shell) {
      return shell;
    } else {
      throw ClientNotExistError;
    }
  }

  return new Promise((resolve, reject) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === 'complete'
      ) {
        if (shell) {
          resolve(shell);
        } else {
          reject(ClientNotExistError.message);
        }
        document.removeEventListener('readystatechange', documentStateChange);
      }
    };

    document.addEventListener('readystatechange', documentStateChange);
  });
};
