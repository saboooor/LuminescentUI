import type { PropsOf, QRL } from '@builder.io/qwik';
import { Slot, component$, useStore } from '@builder.io/qwik';

interface alertsStore {
  alerts: {
    class: string;
    text: string;
  }[];
}

interface OutputFieldRawProps extends Omit<PropsOf<'textarea'>, 'class' | 'onChange$'> {
  class?: { [key: string]: boolean };
  onChange$?: QRL<(event: Event, element: HTMLTextAreaElement, alertsStore: alertsStore ) => any>
}

interface OutputFieldProps extends Omit<OutputFieldRawProps, 'children'> {
  id: string;
}

export const OutputField = component$<OutputFieldProps>((props) => {
  return (
    <div class="flex flex-col">
      <label for={props.id} class="mb-2">
        <Slot />
      </label>
      <OutputFieldRaw {...{ ...props, children: undefined }} />
    </div>
  );
});

export const OutputFieldRaw = component$<OutputFieldRawProps>(({ onChange$, ...props }) => {
  const alertsStore = useStore<alertsStore>({
    alerts: [],
  }, { deep: true });

  return <>
    <textarea {...props} class={{
      'transition ease-in-out cursor-pointer text-lg border border-gray-700 bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 break-words': true,
      ...props.class,
    }}
    onClick$={(event, element) => {
      navigator.clipboard.writeText(element.value);
      const alert = {
        class: 'text-green-500',
        text: 'Copied to clipboard!',
      };
      alertsStore.alerts.push(alert);
      setTimeout(() => {
        alertsStore.alerts.splice(alertsStore.alerts.indexOf(alert), 1);
      }, 1000);
    }}
    onChange$={(event, element) => {
      if (onChange$) onChange$(event, element, alertsStore);
    }}
    />
    {alertsStore.alerts.map((alert, i) => (
      <p key={`output-alert${i}`} class={alert.class} dangerouslySetInnerHTML={alert.text} />
    ))}
  </>;
});