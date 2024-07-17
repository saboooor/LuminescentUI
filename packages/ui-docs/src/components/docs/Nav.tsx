import { component$, useStore } from '@builder.io/qwik';
import { Card, Header, Nav, Dropdown, DropdownRaw, Toggle, navColorClasses } from '@luminescent/ui-qwik';

interface navOptions {
  fixed?: boolean;
  floating?: boolean;
  color?: keyof typeof navColorClasses;
}

export default component$(() => {
  const store = useStore<navOptions>({});
  return (
    <Card>
      <Header id="nav" anchor>
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

          <button class={'lum-btn'} q:slot="start" >
            Brand
          </button>

          <button class={'lum-btn hidden sm:flex'} q:slot="center">
            Center Button
          </button>

          <DropdownRaw id="nav-dropdown" hover q:slot="end" class={{ 'hidden sm:flex': true }} display="Dropdown">
            <button class={'lum-btn'} q:slot="extra-buttons">
              Option 1
            </button>
            <button class={'lum-btn'} q:slot="extra-buttons">
              Option 2
            </button>
            <button class={'lum-btn'} q:slot="extra-buttons">
              Option 3
            </button>
          </DropdownRaw>

          <button q:slot="mobile" class={'lum-btn'}>
            button 1
          </button>
          <button q:slot="mobile" class={'lum-btn'}>
            button 2
          </button>
          <h3 q:slot="mobile" class="mx-4 py-2 text-gray-400 border-b border-gray-700">
            Dropdown
          </h3>
          <button q:slot="mobile" class={'lum-btn'}>
            Option 1
          </button>
          <button q:slot="mobile" class={'lum-btn'}>
            Option 2
          </button>
          <button q:slot="mobile" class={'lum-btn'}>
            Option 3
          </button>

        </Nav>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<Nav${store.floating ? ' floating' : ''}${store.fixed ? ' fixed' : ''}${store.color ? ` color="${store.color}"` : ''}>

  <button q:slot="start">
    Brand
  </button>

  <button q:slot="center" class={'lum-btn hidden sm:flex'}>
    Center button
  </button>

  <DropdownRaw id="nav-dropdown" q:slot="end" hover class={{ 'hidden sm:flex': true }} display="Dropdown">
    <button class={'lum-btn'} q:slot="extra-buttons">
      Option 1
    </button>
    <button class={'lum-btn'} q:slot="extra-buttons">
      Option 2
    </button>
    <button class={'lum-btn'} q:slot="extra-buttons">
      Option 3
    </button>
  </DropdownRaw>

  <button class={'lum-btn'} q:slot="mobile">
    button 1
  </button>
  <button class={'lum-btn'} q:slot="mobile">
    button 2
  </button>
  <h3 q:slot="mobile" class="mx-4 py-2 text-gray-400 border-b border-gray-700">
    Dropdown
  </h3>
  <button class={'lum-btn'} q:slot="mobile">
    Option 1
  </button>
  <button class={'lum-btn'} q:slot="mobile">
    Option 2
  </button>
  <button class={'lum-btn'} q:slot="mobile">
    Option 3
  </button>

</Nav>`} />
    </Card>
  );
});
