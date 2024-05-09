import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Dropdown, TextAreaRaw, Toggle, cardColorClasses } from '@luminescent/ui';

interface cardOptions {
  color?: keyof typeof cardColorClasses;
  blobs?: false | keyof typeof cardColorClasses;
  hover?: boolean | 'clickable' | 'blur';
  row?: boolean;
  href?: boolean;
  loading?: boolean;
  anchor?: boolean;
}

export default component$(() => {
  const store = useStore<cardOptions>({});
  return (
    <Card>
      <Header id="card" anchor>
        Card (and Header)
      </Header>
      <div class="flex">
        <Dropdown id="card-color"
          onChange$={(e, element) => store.color = element.value as keyof typeof cardColorClasses}
          values={Object.keys(cardColorClasses).map((color) => ({ name: color, value: color }))}
          value="darkgray"
        >
          color
        </Dropdown>
      </div>
      <div class="flex">
        <Dropdown id="card-blobs"
          onChange$={(e, element) => {
            if (element.value === 'false') return store.blobs = false;
            store.blobs = element.value as keyof typeof cardColorClasses
          }}
          values={[
            { name: 'false', value: 'false' },
            ...Object.keys(cardColorClasses).map((color) => ({ name: color, value: color }))
          ]}
          value="false"
        >
          blobs
        </Dropdown>
      </div>
      <div class="flex">
        <Dropdown id="card-hover"
          onChange$={(e, element) => {
            if (element.value === 'false') return store.hover = false;
            else if (element.value === 'true') return store.hover = true;
            store.hover = element.value as 'clickable' | 'blur';
          }}
          values={[
            { name: 'false', value: 'false' },
            { name: 'true', value: 'true' },
            { name: 'clickable', value: 'clickable' },
            { name: 'blur', value: 'blur' },
          ]}
          value="false"
        >
          hover
        </Dropdown>
      </div>
      <Toggle id="card-row" onChange$={(e, element) => store.row = element.checked}
        label="row" />
      <Toggle id="card-href" onChange$={(e, element) => store.href = element.checked}
        label="href" />
      <Toggle id="header-loading" onChange$={(e, element) => store.loading = element.checked}
        label="loading" />
      <Toggle id="header-anchor" onChange$={(e, element) => store.anchor = element.checked}
        label="anchor" />
      <div>
        <Card
          color={store.color}
          blobs={store.blobs}
          hover={store.hover}
          row={store.row}
          href={store.href ? 'https://luminescent.dev' : undefined}
        >
          <Header id="header" subheader="Subheader" loading={!!store.loading} anchor={store.anchor}>
            Header
          </Header>
          Content
          <div q:slot='blur'>
            Blur content
          </div>
        </Card>
      </div>
      <TextAreaRaw output value={`
<Card${(store.color && ` color="${store.color}"`) ?? ''}${(store.blobs && ` blobs="${store.blobs}"`) ?? ''}${store.hover ? ` hover${store.hover != true ? `="${store.hover}"` : ''}` : ''}${store.row ? ' row' : ''}${store.href ? ' href="https://luminescent.dev"' : ''}>
  <Header id="header" subheader="Subheader"${store.loading ? ' loading' : ''}${store.anchor ? ' anchor' : ''}>
    Header
  </Header>
  Content
  ${store.hover == 'blur' ? `<div q:slot='blur'>
    Blur content
  </div>` : ''}
</Card>`} />
    </Card>
  );
});
