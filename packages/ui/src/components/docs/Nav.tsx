import { component$, useStore } from '@builder.io/qwik';
import { Button, Card, Header, Nav, Dropdown, DropdownRaw, TextAreaRaw, Toggle, navColorClasses } from '../../index';

interface navOptions {
  fixed?: boolean;
  floating?: boolean;
  color?: keyof typeof navColorClasses;
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
      <Dropdown id="nav-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof navColorClasses}
        values={Object.keys(navColorClasses).map((color) => ({ name: color, value: color }))}
        value="gray"
      >
        color
      </Dropdown>
      <div class="relative h-40">
        <Nav floating={store.floating} fixed={store.fixed} color={store.color}>

          <Button q:slot="start" color="transparent" class={{ 'hidden sm:flex': true }}>
            Button 1
          </Button>

          <Button q:slot="center" color="transparent" class={{ 'hidden sm:flex': true }}>
            Button 2
          </Button>

          <DropdownRaw id="nav-dropdown" q:slot="end" color="transparent" class={{ 'hidden sm:flex': true }} values={[
            { name: 'Option 1', value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}>
            Button 3
          </DropdownRaw>

          <Button q:slot="mobile" color="transparent">
            Button 1
          </Button>
          <Button q:slot="mobile" color="transparent">
            Button 2
          </Button>
          <DropdownRaw id="nav-mobile-dropdown" q:slot="mobile" color="transparent" values={[
            { name: 'Option 1', value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' },
          ]}>
            Button 3
          </DropdownRaw>

        </Nav>
      </div>
      <TextAreaRaw output value={`
<Nav${store.floating ? ' floating' : ''}${store.fixed ? ' fixed' : ''}${store.color ? ` color="${store.color}"` : ''}>

  <Button q:slot="start" color="transparent" class={{ 'hidden sm:flex': true }}>
    Button 1
  </Button>

  <Button q:slot="center" color="transparent" class={{ 'hidden sm:flex': true }}>
    Button 2
  </Button>

  <DropdownRaw id="nav-dropdown" q:slot="end" color="transparent" class={{ 'hidden sm:flex': true }} values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}>
    Button 3
  </DropdownRaw>

  <Button q:slot="mobile" color="transparent">
    Button 1
  </Button>
  <Button q:slot="mobile" color="transparent">
    Button 2
  </Button>
  <DropdownRaw id="nav-mobile-dropdown" q:slot="mobile" color="transparent" values={[
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ]}>
    Button 3
  </DropdownRaw>

</Nav>`} />
    </Card>
  );
});
