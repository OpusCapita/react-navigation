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
  theme={_scope.state.themes.dark}
  logoSrc={_scope.state.logos.dark}
  logoTitle="OpusCapita"
  logoHref="http://sony.com"
  labelText="powered by "
  labelLinkText="OpusCapita"
  labelLinkHref="http://opuscapita.com"
  navigationItems={[
    { label: 'Dashboard', href: 'http://google.com' },
    { label: 'Supplier Application', href: 'http://google.com' },
    {
      label: 'Responsibilities',
      subItems: [
        { 
          label: 'Supplier Responsibility Editor', 
          href: 'http://google.com'
        },
        { 
          label: 'Classification Group Responsibility Editor', 
          href: 'http://google.com'
        }
      ]
    },
    {
      label: 'Reports',
      subItems: [
        { 
          label: 'Supplier Status Report', 
          href: 'http://google.com'
        },
        { 
          label: 'Supplier Feedback',
          href: 'http://google.com'
        },
        { 
          label: 'Supplier Rating', 
          href: 'http://google.com'
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
      />
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
        <div>Hello</div>
      </MenuIcon>
    )
  ]}
/>
```

### Component Name

Menu

### License

Licensed by © 2017 OpusCapita

