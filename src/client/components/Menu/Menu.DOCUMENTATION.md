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
  showSearch={true}
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
          theme={_scope.state.themes.opuscapitaDark}
          activeItem={0}
          items={[
            { 
              label: 'Online Product Catalog', 
              svg: _scope.getIcon('local_mall') 
            },
            { 
              label: 'Request for Quote', 
              svg: _scope.getIcon('monetization_on') 
            },
            {
              label: 'Request', 
              svg: _scope.getIcon('room_service') 
            },
            {
              label: 'Order manager', 
              svg: _scope.getIcon('insert_drive_file') 
            },
            {
              label: 'Invoices manager', 
              svg: _scope.getIcon('receipt') 
            },
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
        title="Account settings"
        label="Alexey"
        hideDropdownArrow={true}
      >
        <MenuAccount
          firstName="Alexey"
          lastName="Sergeev"
          userName="alexey.sergeev"
          initials="SA"
          avatarSrc="./static/avatar.jpg"
          onClick={() => console.log('click')}
          actions={[
            {
              label: 'My services',
              onClick: () => console.log('My services click')
            },
            {
              label: 'Settings', 
              onClick: () => console.log('Settings click')
            },
            {
              label: 'Help', 
              onClick: () => console.log('Help click')
            }
          ]}
        />
      </MenuIcon>
    )
  ]}
/>
```

### Component Name

Menu

### License

Licensed by © 2017 OpusCapita

