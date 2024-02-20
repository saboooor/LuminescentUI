import type { PropsOf } from '@builder.io/qwik';
import { $, Slot, component$ } from '@builder.io/qwik';
import { InputClasses } from './TextInput';

export interface TextAreaRawProps extends Omit<PropsOf<'textarea'>, 'class' | 'onChange$' | 'onClick$'> {
  class?: { [key: string]: boolean };
  output?: boolean;
}

interface TextAreaProps extends Omit<TextAreaRawProps, 'children'> {
  id: string;
}

interface alertsStore {
  alerts: {
    class: string;
    text: string;
  }[];
}


export const TextArea = component$<TextAreaProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="pb-2">
        <Slot/>
      </label>
      <TextAreaRaw {...props} />
    </div>
  );
});

export const TextAreaRaw = component$<TextAreaRawProps>(({ output, ...props }) => {
  return <>
    <textarea {...props} class={{
      [InputClasses]: true,
      'h-32': true,
      'cursor-pointer active:bg-gray-600': output,
      ...props.class,
    }} onClick$={output ? $((event, element) => {
      navigator.clipboard.writeText(element.value);
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-0 right-0 px-6 py-4 m-6 bg-green-600/50 border border-green-500 text-gray-50 rounded-md shadow-lg whitespace-nowrap backdrop-blur-xl';
      notification.innerText = `Copied to clipboard!`;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 1000);
    }) : undefined} readOnly={output}
    />
  </>;
});