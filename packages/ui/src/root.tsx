import { component$ } from '@builder.io/qwik';

import Classes from '~/components/docs/Classes';
import Anchor from '~/components/docs/Anchor';
import Blobs from '~/components/docs/Blobs';
import Button from '~/components/docs/Button';
import Card from '~/components/docs/Card';
import ColorInput from '~/components/docs/ColorPicker';
import Nav from '~/components/docs/Nav';
import NumberInput from '~/components/docs/NumberInput';
import Dropdown from '~/components/docs/Dropdown';
import TextArea from '~/components/docs/TextArea';
import TextInput from '~/components/docs/TextInput';
import Input from '~/components/docs/Input';
import Toggle from '~/components/docs/Toggle';
import IconsLogos from '~/components/docs/IconsLogos';
import Playground from './components/docs/Playground';

import './global.css';

export default component$(() => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Luminescent UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="bg-gray-950 text-gray-200 max-w-6xl mx-auto py-24 px-4 flex flex-col gap-4">
        <Playground />
        <Classes />
        <Button />
        <Input />

        <Anchor />
        <Blobs />
        <Card />
        <ColorInput />
        <Dropdown />
        <Nav />
        <NumberInput />
        <TextArea />
        <TextInput />
        <Toggle />
        <IconsLogos />
      </body>
    </>
  );
});
