import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Dropdown, TextAreaRaw, Toggle, cardColorClasses } from '@luminescent/ui';

interface cardOptions {
  color?: keyof typeof cardColorClasses;
  hover?: boolean | 'clickable';
  row?: boolean;
  blobs?: boolean;
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
      <Toggle id="card-hoverable" onChange$={(e, element) => store.hover = element.checked}
        checked={store.hover == 'clickable' || store.hover}
        label="hoverable" />
      <Toggle id="card-clickable" onChange$={(e, element) => store.hover = element.checked ? 'clickable' : false}
        checked={store.hover == 'clickable'}
        label="clickable" />
      <Toggle id="card-row" onChange$={(e, element) => store.row = element.checked}
        label="row" />
      <Toggle id="card-blobs" onChange$={(e, element) => store.blobs = element.checked}
        label="blobs" />
      <Toggle id="card-href" onChange$={(e, element) => store.href = element.checked}
        label="href" />
      <Toggle id="header-loading" onChange$={(e, element) => store.loading = element.checked}
        label="loading" />
      <Toggle id="header-anchor" onChange$={(e, element) => store.anchor = element.checked}
        label="anchor" />
      <div>
        <Card
          color={store.color}
          hover={store.hover}
          row={store.row}
          blobs={store.blobs}
          href={store.href ? 'https://luminescent.dev' : undefined}
        >
          <Header id="header" subheader="Subheader" loading={!!store.loading} anchor={store.anchor}>
            Header
          </Header>
          Content
        </Card>
      </div>
      <TextAreaRaw output value={`
<Card${(store.color && ` color="${store.color}"`) ?? ''}${store.hover ? ' hover' : ''}${store.hover == 'clickable' ? '="clickable"' : ''}${store.row ? ' row' : ''}${store.blobs ? ' blobs' : ''}${store.href ? ' href="https://luminescent.dev"' : ''}>
  <Header id="header" subheader="Subheader"${store.loading ? ' loading' : ''}${store.anchor ? ' anchor' : ''}>
    Header
  </Header>
  Content
</Card>`} />
    </Card>
  );
});
