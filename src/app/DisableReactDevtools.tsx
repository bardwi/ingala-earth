'use client';
import { useEffect } from 'react';

type ReactDevtoolsHook = {
  isDisabled?: boolean;
  [key: string]: unknown;
};

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: ReactDevtoolsHook;
  }
}

export default function DisableReactDevtools() {
  useEffect(() => {
    const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (hook) hook.isDisabled = true;
  }, []);
  return null;
}
