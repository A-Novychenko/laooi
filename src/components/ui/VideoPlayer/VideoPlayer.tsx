'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { VideoPlayerProps } from './types';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  poster,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[16px] pt-[56.25%] shadow-mobMenuHeader md:rounded-[20px] xl:h-[355px] xl:w-[632px] xl:rounded-[24px] xl:p-0"
      onClick={handlePlay}
    >
      <ReactPlayer
        playing={isPlaying}
        onPlay={handlePlay}
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        light={!isPlaying ? poster : false}
        poster={poster}
        config={{
          youtube: {
            playerVars: {
              origin: process.env.NEXT_PUBLIC_BASE_URL,
              modestbranding: 1,
              controls: 1,
              showinfo: 0,
              rel: 0,
              disablekb: 1,
            },
          },
        }}
        className="absolute left-0 top-0"
      />
    </div>
  );
};
