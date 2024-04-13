import { component$, useStore } from '@builder.io/qwik';
import { Button, Card, Header, Nav, Dropdown, DropdownRaw, TextAreaRaw, Toggle, navColorClasses } from '@luminescent/ui';
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

          <Button q:slot="start" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent>
            Brand
          </Button>

          <Button q:slot="center" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent class={{ 'hidden sm:flex': true }}>
            Center Button
          </Button>

          <DropdownRaw id="nav-dropdown" hover q:slot="end" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent class={{ 'hidden sm:flex': true }} display="Dropdown">
            <Button color={store.color == 'transparent' ? 'darkgray' : store.color} transparent q:slot="extra-buttons">
              Option 1
            </Button>
            <Button color={store.color == 'transparent' ? 'darkgray' : store.color} transparent q:slot="extra-buttons">
              Option 2
            </Button>
            <Button color={store.color == 'transparent' ? 'darkgray' : store.color} transparent q:slot="extra-buttons">
              Option 3
            </Button>
          </DropdownRaw>

          <Button q:slot="mobile" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent>
            Button 1
          </Button>
          <Button q:slot="mobile" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent>
            Button 2
          </Button>
          <h3 q:slot="mobile" class="mx-4 py-2 text-gray-400 border-b border-gray-700">
            Dropdown
          </h3>
          <Button q:slot="mobile" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent>
            Option 1
          </Button>
          <Button q:slot="mobile" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent>
            Option 2
          </Button>
          <Button q:slot="mobile" color={store.color == 'transparent' ? 'darkgray' : store.color} transparent>
            Option 3
          </Button>

        </Nav>
      </div>
      <TextAreaRaw output value={`
<Nav${store.floating ? ' floating' : ''}${store.fixed ? ' fixed' : ''}${store.color ? ` color="${store.color}"` : ''}>

  <Button q:slot="start"${store.color ? ` color="${store.color}"` : ''} transparent>
    Brand
  </Button>

  <Button q:slot="center"${store.color ? ` color="${store.color}"` : ''} transparent class={{ 'hidden sm:flex': true }}>
    Center Button
  </Button>

  <DropdownRaw id="nav-dropdown" q:slot="end" hover${store.color ? ` color="${store.color}"` : ''} transparent class={{ 'hidden sm:flex': true }} display="Dropdown">
    <Button color={store.color == 'transparent' ? 'darkgray' : store.color} transparent q:slot="extra-buttons">
      Option 1
    </Button>
    <Button color={store.color == 'transparent' ? 'darkgray' : store.color} transparent q:slot="extra-buttons">
      Option 2
    </Button>
    <Button color={store.color == 'transparent' ? 'darkgray' : store.color} transparent q:slot="extra-buttons">
      Option 3
    </Button>
  </DropdownRaw>

  <Button q:slot="mobile"${store.color ? ` color="${store.color}"` : ''} transparent>
    Button 1
  </Button>
  <Button q:slot="mobile"${store.color ? ` color="${store.color}"` : ''} transparent>
    Button 2
  </Button>
  <h3 q:slot="mobile" class="mx-4 py-2 text-gray-400 border-b border-gray-700">
    Dropdown
  </h3>
  <Button q:slot="mobile"${store.color ? ` color="${store.color}"` : ''} transparent>
    Option 1
  </Button>
  <Button q:slot="mobile"${store.color ? ` color="${store.color}"` : ''} transparent>
    Option 2
  </Button>
  <Button q:slot="mobile"${store.color ? ` color="${store.color}"` : ''} transparent>
    Option 3
  </Button>

</Nav>`} />
    </Card>
  );
});
