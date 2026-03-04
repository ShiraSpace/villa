import React from 'react';

const FRAMER_PROPS = new Set([
  'variants',
  'initial',
  'animate',
  'exit',
  'whileInView',
  'viewport',
  'transition',
]);

type MotionProps = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

function createMotionComponent(tag: string): React.FC<MotionProps> {
  const MotionComponent = ({ children, ...props }: MotionProps) => {
    const filtered = Object.fromEntries(
      Object.entries(props).filter(([key]) => !FRAMER_PROPS.has(key))
    );
    return React.createElement(tag, filtered, children);
  };
  MotionComponent.displayName = `Motion.${tag}`;
  return MotionComponent;
}

export const motion = {
  div: createMotionComponent('div'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
};
