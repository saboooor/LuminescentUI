import { component$ } from '@builder.io/qwik';
import type { PropsOf } from '@builder.io/qwik';

interface loadingIconProps extends Omit<PropsOf<'div'>, 'class'> {
  class?: { [key: string]: boolean };
  width: number;
  speed?: string;
}

export const LoadingIcon = component$<loadingIconProps>(({ width, speed = '0.6s', ...props }) => {
  return (
    <div {...props} style={{
      borderWidth: width / 8,
      width, height: width,
      animation: `spin ${speed} ease-in-out infinite`,
    }} class={{
      'animate-spin rounded-full border-transparent border-l-current border-t-current': true,
      ...props.class,
    }} />
  );
});