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
  logoSrc="http://pngimg.com/uploads/sony_logo/sony_logo_PNG7.png"
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
      />
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('shopping_cart')}
        supTitle="42"
      />
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('list')}
      />
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('apps')}
      />
    ), (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('notifications')}
        supTitle="7"
      />
    ),
    (
      <MenuIcon 
        onClick={() => console.log('click!')}
        svg={_scope.getIcon('person')}
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

