import React, { FC, useEffect, useRef } from 'react';

type ImageProps = {
  src: string;
  width?: number;
  height?: number;
};

const DEFAULT_SIZE = { width: 500, height: 500 };

const Image: FC<ImageProps> = (props) => {
  const { src, height = DEFAULT_SIZE.height, width = DEFAULT_SIZE.width } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvasBuild = canvasRef?.current;
    if (canvasBuild) {
      const context = canvasRef.current.getContext('2d');
      const image = new window.Image();
      image.src = src;
      image.onload = () => {
        const ratioParams = [
          (canvasRef.current?.width || width) / image.width,
          (canvasRef.current?.height || height) / image.height,
        ];
        const isPortrait = image.width - image.height < 0;
        const actualImageSize = {
          width: image.width * ratioParams[Number(isPortrait)],
          height: image.height * ratioParams[Number(isPortrait)],
        };
        if (canvasBuild) {
          context?.drawImage(
            image,
            canvasRef.current.width > actualImageSize.width
              ? (canvasRef.current.width - actualImageSize.width) / 2
              : 0,
            canvasRef.current.height > actualImageSize.height
              ? (canvasRef.current.height - actualImageSize.height) / 2
              : 0,
            actualImageSize.width,
            actualImageSize.height,
          );
        }
      };
    }
  }, [height, src, width]);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} width={width} className="w-full h-full" height={height} />
    </div>
  );
};

export default Image;
