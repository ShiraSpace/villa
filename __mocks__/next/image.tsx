import React, { JSX } from 'react';

const NEXT_IMAGE_PROPS = [
  'fill',
  'sizes',
  'priority',
  'quality',
  'loader',
  'placeholder',
  'blurDataURL',
];

const MockImage = (props: Record<string, unknown>): JSX.Element => {
  const filteredProps: Record<string, unknown> = {};
  Object.keys(props).forEach((key) => {
    if (!NEXT_IMAGE_PROPS.includes(key)) {
      filteredProps[key] = props[key];
    }
  });

  return React.createElement('img', filteredProps);
};

export default MockImage;
