import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to BlueskyVideo.web.ts
// and on native platforms to BlueskyVideo.ts
import BlueskyVideoModule from './BlueskyVideoModule';
import BlueskyVideoView from './BlueskyVideoView';
import { ChangeEventPayload, BlueskyVideoViewProps } from './BlueskyVideo.types';

// Get the native constant value.
export const PI = BlueskyVideoModule.PI;

export function hello(): string {
  return BlueskyVideoModule.hello();
}

export async function setValueAsync(value: string) {
  return await BlueskyVideoModule.setValueAsync(value);
}

const emitter = new EventEmitter(BlueskyVideoModule ?? NativeModulesProxy.BlueskyVideo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { BlueskyVideoView, BlueskyVideoViewProps, ChangeEventPayload };
