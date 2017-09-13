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
  className="oc-menu--opuscapita-dark-theme"
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
        supTitle="10"
        title="Notifications"
        hideDropdownArrow={true}
      >
        <Notifications>
          <Notification 
            svg={_scope.getIcon('notifications')}
            message="One item in your cart has changed prize."
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('check')}
            message="Your request for approval limit change is now approved."
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('info')}
            message="Your password will expire in 14 days."
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Automatic material fetch failed."
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Operation has failed!"
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Operation has failed!"
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Operation has failed!"
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Operation has failed!"
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Operation has failed!"
            dateTime="20/02/2017"
          />
          <Notification 
            svg={_scope.getIcon('warning')}
            message="Operation has failed!"
            dateTime="20/02/2017"
          />
        </Notifications>
      </MenuIcon>
    ),
    (
      <MenuIcon 
        onClick={() => console.log('click!')}
        title="Account settings"
        label="Alexey"
      >
        <MenuAccount
          firstName="Alexey"
          lastName="Sergeev"
          userName="alexey.sergeev"
          initials="SA"
          avatarSrc="./static/avatar.jpg"
          onClick={() => console.log('click')}
          onLogout={() => console.log('logout')}
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
            },
            {
              label: 'Log out',
              onClick: () => console.log('Log out click')
            }
          ]}
          bottomElement={(
            <div>
              <div className="oc-menu-account__select-item">
                <span className="oc-menu-account__select-item-label">Current assignment</span>
                <span>Masterkunden AG</span>
              </div>
      
              <div className="oc-menu-account__select-item">
                <span className="oc-menu-account__select-item-label">Buying behalf on</span>
      
                <MenuSelect
                  className="oc-menu-account__select-item-select"
                  onChange={e => console.log('change', e)}
                >
                  <option>Cersei Lannister</option>
                  <option>Jaime Lannister</option>
                  <option>Jorah Mormont</option>
                  <option>Iron bank</option>
                  <option>Margaery Tyrell</option>
                  <option>Petyr Baelish</option>
                  <option>Robert Baratheon</option>
                </MenuSelect>
              </div>
      
              <div className="oc-menu-account__select-item">
                <span className="oc-menu-account__select-item-label">Language</span>
      
                <MenuSelect 
                  className="oc-menu-account__select-item-select"
                  onChange={e => console.log('change', e)}
                >
                  <option>English</option>
                  <option>Finnish</option>
                  <option>German</option>
                  <option>Norwegian</option>
                  <option>Russian</option>
                  <option>Swedish</option>
                </MenuSelect>
              </div>
            </div>
          )}
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

