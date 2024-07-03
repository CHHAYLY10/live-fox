import classNames from 'classnames';
import { isEmpty } from 'lodash';
import Image, { ImageLoaderProps } from 'next/image';
import { CSSProperties, useEffect, useState } from 'react';

export type MyImageProps = {
  src?: string;
  className?: string;
  width?: number;
  style?: CSSProperties;
  height?: number;
  onClick?: () => void;
  priority?: boolean;
  fallBackImage?: string;
};

function MyImage(props: MyImageProps) {
  const { src, width = 500, height = 500, className: classNameProps = '', style = {}, fallBackImage } = props;
  const defaultImage = '/assets/artwork/dummy-image.jpg';

  const [srcImage, setSrcImage] = useState('');

  useEffect(() => {
    if (src) {
      setSrcImage(src);
    }
  }, [src]);

  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  function onClickOnImage() {
    const { onClick } = props;
    if (onClick) {
      onClick();
    }
  }

  function onErrorLoadImage() {
    if (fallBackImage) {
      setSrcImage(fallBackImage);
    } else {
      setSrcImage(defaultImage);
    }
  }

  const classNameBind = classNames(classNameProps);

  return (
    <>
      {!isEmpty(srcImage) && (
        <Image
          src={srcImage}
          alt={srcImage}
          style={style}
          width={width}
          height={height}
          className={classNameBind}
          onClick={onClickOnImage}
          loader={myLoader}
          onError={onErrorLoadImage}
          priority={props.priority}
        />
      )}
    </>
  );
}

export default MyImage;
