### Synopsis

TopMenu is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<Menu
  appName="Supplier Information Manager"
  activeItem={0}
  alwaysAtTop={true}
  theme={_scope.state.themes.opuscapitaDark}
  logoSrc={_scope.state.logos.dark}
  logoTitle="OpusCapita"
  logoHref="http://opuscapita.com"
  labelText="powered by "
  labelLinkText="OpusCapita"
  labelLinkHref="http://opuscapita.com"
  navigationItems={[
    { children: 'Dashboard', href: 'http://opuscapita.com' },
    { children: 'Supplier Application', href: 'http://opuscapita.com' },
    {
      children: 'Responsibilities',
      subItems: [
        { 
          children: 'Supplier Responsibility Editor', 
          href: 'http://opuscapita.com'
        },
        { 
          children: 'Classification Group Responsibility Editor',
          href: 'http://opuscapita.com'
        }
      ]
    },
    {
      children: 'Reports',
      subItems: [
        { 
          children: 'Supplier Status Report', 
          href: 'http://opuscapita.com'
        },
        { 
          children: 'Supplier Feedback',
          href: 'http://opuscapita.com'
        },
        { 
          children: 'Supplier Rating', 
          href: 'http://opuscapita.com'
        },
        { 
          children: (<strong>Custom Child</strong>), 
          href: 'http://opuscapita.com'
        }
      ]
    }
  ]}
  iconsBarItems={[
    (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('search')}
        title="Search"
      />
    ), (
      <MenuIcon
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('shopping_cart')}
        supTitle="42"
        title="My cart"
      />
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('list')}
        title="My lists"
      />
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('apps')}
        title="Applications"
        hideDropdownArrow={true}
      >
        <MenuDropdownGrid 
          activeItem={0}
          items={[
            { 
              label: 'Shop', 
              svg: _scope.getIcon('local_mall') 
            },
            { 
              label: 'Quote', 
              svg: _scope.getIcon('monetization_on') 
            },
            {
              label: 'Request', 
              svg: _scope.getIcon('room_service') 
            },
            {
              label: 'Order', 
              svg: _scope.getIcon('insert_drive_file') 
            },
            {
              label: 'Invoices', 
              svg: _scope.getIcon('receipt') },
            { 
              label: 'Analyze', 
              svg: _scope.getIcon('trending_up') 
            }
          ]}
        />
      </MenuIcon>
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('notifications')}
        supTitle="7"
        title="Notifications"
      />
    ),
    (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('person')}
        title="Account settings"
      >
        <div
          style={{
            padding: '6px 12px',
            whiteSpace: 'nowrap'
          }}
        >
          <h5>Menu Icon Dropdown</h5>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            textAlign: 'center'
          }}>
            <li>Dropdown Item 0</li>
            <li>Dropdown Item 1</li>
            <li>Dropdown Item 2</li>
            <li>Dropdown Item 3</li>
            <li>Dropdown Item 4</li>
            <li>Dropdown Item 5</li>
            <li>Dropdown Item 6</li>
          </ul>
        </div>
      </MenuIcon>
    )
  ]}
/>
```

### Component Name

Menu

### License

Licensed by © 2017 OpusCapita

