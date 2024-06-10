import { $, Fragment, component$, h, useStore } from "@builder.io/qwik";

export const Greet = component$((props: any) => {
  const state = useStore<any>({ name: "" });

  return (
    <div>
      <input
        placeholder="Your name"
        value={state.name}
        onChange$={$((event) => (state.name = event.target.value))}
      />
      <div>Hello, {state.name}!</div>
    </div>
  );
});

export default Greet;
