import * as React from 'react';

import { BlueskyVideoViewProps } from './BlueskyVideo.types';

export default function BlueskyVideoView(props: BlueskyVideoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
