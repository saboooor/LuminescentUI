import { component$, useStore } from '@builder.io/qwik';
import { Button, Card, Header, Nav, SelectInputRaw, TextAreaRaw, Toggle } from '../../index';

interface navOptions {
  fixed?: boolean;
  floating?: boolean;
}

export default component$(() => {
  const store = useStore<navOptions>({});
  return (
    <Card>
      <Header>
        Nav
      </Header>
      <Toggle id="nav-fixed" onChange$={(e, element) => store.fixed = element.checked}
        label="fixed" />
      <Toggle id="nav-floating" onChange$={(e, element) => store.floating = element.checked}
        label="floating" />
      <div class="relative h-40">
        <Nav floating={store.floating} fixed={store.fixed}>

          <Button q:slot="start" color="transparent" class={{ 'hidden sm:flex': true }}>
            Button 1
          </Button>

          <Button q:slot="center" color="transparent" class={{ 'hidden sm:flex': true }}>
            Button 2
          </Button>

          <SelectInputRaw id="nav-dropdown" q:slot="end" color="transparent" class={{ 'hidden sm:flex': true }} values={[
            { name: 'Option 1', value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}>
            Button 3
          </SelectInputRaw>

          <Button q:slot="mobile" color="transparent">
            Button 1
          </Button>
          <Button q:slot="mobile" color="transparent">
            Button 2
          </Button>
          <SelectInputRaw id="nav-mobile-dropdown" q:slot="mobile" color="transparent" values={[
            { name: 'Option 1', value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}>
            Button 3
          </SelectInputRaw>

        </Nav>
      </div>
      <TextAreaRaw output value={`
<Nav${store.floating ? ' floating' : ''}${store.fixed ? ' fixed' : ''}>

  <Button q:slot="start" color="transparent" class={{ 'hidden sm:flex': true }}>
    Button 1
  </Button>

  <Button q:slot="center" color="transparent" class={{ 'hidden sm:flex': true }}>
    Button 2
  </Button>

  <SelectInputRaw id="nav-dropdown" q:slot="end" color="transparent" class={{ 'hidden sm:flex': true }} values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}>
    Button 3
  </SelectInputRaw>

  <Button q:slot="mobile" color="transparent">
    Button 1
  </Button>
  <Button q:slot="mobile" color="transparent">
    Button 2
  </Button>
  <SelectInputRaw id="nav-mobile-dropdown" q:slot="mobile" color="transparent" values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}>
    Button 3
  </SelectInputRaw>

</Nav>`} />
    </Card>
  );
});
