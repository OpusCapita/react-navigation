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
            { label: 'Analytics', svg: _scope.getIcon('app_analytics') },
            { label: 'Business Network Portal', svg: _scope.getIcon('app_business_network_portal') },
            null,
            { label: 'Catalog Portal', svg: _scope.getIcon('app_catalog_portal') },
            { label: 'Contracts', svg: _scope.getIcon('app_contracts') },
            { label: 'Document Portal', svg: _scope.getIcon('app_document_portal') },
            { label: 'Inventory', svg: _scope.getIcon('app_inventory') },
            { label: 'Invoice', svg: _scope.getIcon('app_invoice') },
            { label: 'Liquidity', svg: _scope.getIcon('app_liquidity') },
            { label: 'Order', svg: _scope.getIcon('app_order') },
            null,
            { label: 'Payments', svg: _scope.getIcon('app_payments') },
            { label: 'Product Information', svg: _scope.getIcon('app_product_information') },
            { label: 'Receivables Collection', svg: _scope.getIcon('app_receivables_collection') },
            { label: 'RFQ', svg: _scope.getIcon('app_rfq') },
            { label: 'Shop', svg: _scope.getIcon('app_shop') },
            { label: 'Supplier Information', svg: _scope.getIcon('app_supplier_information') }
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
          <div className="oc-notifications__header">New notifications</div>
          <Notification
            svg={_scope.getIcon('info')}
            svgClassName="fill-info"
            message={<span>Your password will expire in 14 days. <a href="#">Change it now</a></span>}
            dateTime="20/02/2017"
          />
          <Notification
            svg={_scope.getIcon('warning')}
            svgClassName="fill-error"
            message={<span>Automatic currnency rate update failed. <a href="#">Try manual update</a></span>}
            dateTime="20/02/2017"
          />
          <hr className="oc-notifications__divider" />
          <div className="oc-notifications__header">Recent notifications</div>
          <Notification
            svg={_scope.getIcon('check')}
            svgClassName="fill-success"
            message={<span>Full report for Neon Lights Oy you requester is ready. <a href="#">See full results</a></span>}
            dateTime="20/02/2017"
          />
          <Notification
            svg={_scope.getIcon('info')}
            svgClassName="fill-info"
            message="You are substituting Steven Brice for invoice reviewing between 18.9.2017 - 29.9.2017"
            dateTime="20/02/2017"
          />
          <Notification
            svg={_scope.getIcon('notifications_active')}
            svgClassName="fill-warning"
            message={<span>Your 5 invoices are highlighted as urgent for approval <a href="#">Show me those</a></span>}
            dateTime="20/02/2017"
          />
          <div className="oc-notifications__more-container">
            <a href="#" className="oc-notifications__more">
              View more
            </a>
          </div>
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
            },
            (<button className="btn btn-primary">Custom Button</button>)
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
