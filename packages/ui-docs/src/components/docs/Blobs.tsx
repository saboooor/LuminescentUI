import { component$, useStore } from '@builder.io/qwik';
import { Blobs, Card, Header, Dropdown, blobColorClasses, sizeClasses } from '@luminescent/ui';

interface blobsOptions {
  color?: keyof typeof blobColorClasses;
  blur?: keyof typeof sizeClasses;
}

export default component$(() => {
  const store = useStore<blobsOptions>({});
  return (
    <Card>
      <Header id="blobs" anchor>
        Blobs
      </Header>
      <Dropdown id="blobs-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof blobColorClasses}
        values={Object.keys(blobColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Dropdown id="blobs-blur"
        onChange$={(e, element) => store.blur = element.value as keyof typeof sizeClasses}
        values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
        value="xl"
      >
        blur
      </Dropdown>
      <div class="relative h-96 w-96 border border-gray-800 rounded-md">
        <Blobs
          color={store.color}
          blur={store.blur}
        />
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<div class="relative h-96 w-96 border border-gray-800 rounded-md">
  <Blobs${(store.color && ` color="${store.color}"`) ?? ''}${(store.blur && ` blur="${store.blur}"`) ?? ''}/>
</div>`} />
    </Card>
  );
});
