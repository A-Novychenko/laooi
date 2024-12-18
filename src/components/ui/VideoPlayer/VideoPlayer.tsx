'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { cn } from '@/utils/cn';

import PlayIcon from '~/icons/player-youtube-btn.svg';

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
      {!isPlaying && (
        <div className="absolute left-1/2 top-1/2 z-40 size-full -translate-x-1/2 -translate-y-1/2 bg-black/10">
          <button
            type="button"
            aria-label="play video button"
            className={cn(
              'absolute left-1/2 top-1/2 z-50 flex h-[64px] w-[91px] -translate-x-1/2 -translate-y-1/2 items-center justify-center',
              'cursor-pointer text-textRed transition-colors hover:text-textRedAccent focus:text-textRedAccent',
            )}
            onClick={handlePlay}
          >
            <PlayIcon />
          </button>
        </div>
      )}

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
