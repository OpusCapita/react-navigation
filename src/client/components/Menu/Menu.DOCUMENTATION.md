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
      <MenuSearch
        placeholder="Type here to search"
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
          theme={_scope.state.themes.opuscapitaDark}
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
              label: 'Invoice', 
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
        label="Admin"
        hideDropdownArrow={true}
      >
        <MenuDropdownList
          items={[
          <div className="oc-menu-dropdown-list__header">Operations</div>,
            <div className="oc-menu-dropdown-list__common-item">
              Requistion defaults
            </div>,
        
        
            <div className="oc-menu-dropdown-list__common-item">
              Buying on behalf of
            </div>,
        
        
            <div className="oc-menu-dropdown-list__common-item">
              Delegation
            </div>,
        
        
            <div className="oc-menu-dropdown-list__header">Current assignment</div>,
            <div className="oc-menu-dropdown-list__common-item">
              Musterkunden AG (OC001)
            </div>,
                
            <div className="oc-menu-dropdown-list__divider"></div>,
            <div className="oc-menu-dropdown-list__common-item">
              Change language
            </div>,
            <div className="oc-menu-dropdown-list__common-item">
              Change password
            </div>,
            <div className="oc-menu-dropdown-list__common-item">
              <span>Sign out</span>
            </div>
          ]}
        />
      </MenuIcon>
    ),
    (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('help')}
        title="Need help ?"
        hideDropdownArrow={true}
      >
        <MenuDropdownList
          items={[
            <div className="oc-menu-dropdown-list__common-item">
              User manual
            </div>,
            <div className="oc-menu-dropdown-list__common-item">
              Contact support
            </div>,
            <div className="oc-menu-dropdown-list__common-item">
              Technical user details
            </div>,
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

