import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export interface TextInputRawProps extends Omit<(PropsOf<'input'> & { type: 'text' }), 'class' | 'type'> {
  class?: { [key: string]: boolean };
  color?: keyof typeof InputColorClasses;
}

interface TextInputProps extends Omit<TextInputRawProps, 'children'> {
  id: string;
}

export const InputColorClasses = {
  slate: 'bg-slate-700/90 border-slate-600 hover:bg-slate-600 active:bg-slate-500 focus:border-slate-300',
  gray: 'bg-gray-700/90 border-gray-600 hover:bg-gray-600 active:bg-gray-500 focus:border-gray-300',
  darkgray: 'bg-gray-800/90 border-gray-700 hover:bg-gray-700 active:bg-gray-600 focus:border-gray-400',
  darkergray: 'bg-gray-900/90 border-gray-800 hover:bg-gray-800 active:bg-gray-700 focus:border-gray-500',
  zinc: 'bg-zinc-700/90 border-zinc-600 hover:bg-zinc-600 active:bg-zinc-500 focus:border-zinc-300',
  neutral: 'bg-neutral-700/90 border-neutral-600 hover:bg-neutral-600 active:bg-neutral-500 focus:border-neutral-300',
  stone: 'bg-stone-700/90 border-stone-600 hover:bg-stone-600 active:bg-stone-500 focus:border-stone-300',
  red: 'bg-red-700/90 border-red-600 hover:bg-red-600 active:bg-red-500 focus:border-red-300',
  orange: 'bg-orange-700/90 border-orange-600 hover:bg-orange-600 active:bg-orange-500 focus:border-orange-300',
  amber: 'bg-amber-700/90 border-amber-600 hover:bg-amber-600 active:bg-amber-500 focus:border-amber-300',
  yellow: 'bg-yellow-700/90 border-yellow-600 hover:bg-yellow-600 active:bg-yellow-500 focus:border-yellow-300',
  lime: 'bg-lime-700/90 border-lime-600 hover:bg-lime-600 active:bg-lime-500 focus:border-lime-300',
  green: 'bg-green-700/90 border-green-600 hover:bg-green-600 active:bg-green-500 focus:border-green-300',
  emerald: 'bg-emerald-700/90 border-emerald-600 hover:bg-emerald-600 active:bg-emerald-500 focus:border-emerald-300',
  teal: 'bg-teal-700/90 border-teal-600 hover:bg-teal-600 active:bg-teal-500 focus:border-teal-300',
  cyan: 'bg-cyan-700/90 border-cyan-600 hover:bg-cyan-600 active:bg-cyan-500 focus:border-cyan-300',
  sky: 'bg-sky-700/90 border-sky-600 hover:bg-sky-600 active:bg-sky-500 focus:border-sky-300',
  blue: 'bg-blue-700/90 border-blue-600 hover:bg-blue-600 active:bg-blue-500 focus:border-blue-300',
  indigo: 'bg-indigo-700/90 border-indigo-600 hover:bg-indigo-600 active:bg-indigo-500 focus:border-indigo-300',
  violet: 'bg-violet-700/90 border-violet-600 hover:bg-violet-600 active:bg-violet-500 focus:border-violet-300',
  purple: 'bg-purple-700/90 border-purple-600 hover:bg-purple-600 active:bg-purple-500 focus:border-purple-300',
  fuchsia: 'bg-fuchsia-700/90 border-fuchsia-600 hover:bg-fuchsia-600 active:bg-fuchsia-500 focus:border-fuchsia-300',
  pink: 'bg-pink-700/90 border-pink-600 hover:bg-pink-600 active:bg-pink-500 focus:border-pink-300',
  rose: 'bg-rose-700/90 border-rose-600 hover:bg-rose-600 active:bg-rose-500 focus:border-rose-300',
  transparent: 'bg-transparent border-transparent hover:bg-gray-600/50 active:bg-gray-600/60 focus:border-gray-300/60',
};

export const InputClasses = 'motion-safe:transition ease-in-out border text-gray-50 hover:shadow-lg focus:outline-none rounded-md px-2.5 py-1.5 touch-manipulation';

export const TextInput = component$<TextInputProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="text-gray-300 pb-1 select-none">
        <Slot />
      </label>
      <TextInputRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const TextInputRaw = component$<TextInputRawProps>(({ color = 'darkgray', ...props }) => {
  return (
    <input {...props} class={{
      [InputClasses]: true,
      [InputColorClasses[color]]: true,
      ...props.class,
    }}/>
  );
});