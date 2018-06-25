### Synopsis

NavigationBar is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<div
  style={{ 
    position: 'relative', 
    display: 'flex', 
    backgroundColor: '#3b4a56',
    boxShadow: '0 0 0 8px #0f0'
  }}
  className="oc-menu--opuscapita-dark-theme"
>
<NavigationBar
  vertical={true}
  navigationItems={[
    { children: 'Dashboard', href: 'http://google.com' },
    { children: 'Supplier Application', href: 'http://google.com' },
    {
      children: 'Responsibilities',
      subItems: [
        { 
          children: 'Supplier Responsibility Editor', 
          href: 'http://google.com'
        },
        { 
          children: 'Classification Group Responsibility Editor', 
          href: 'http://google.com'
        }
      ]
    },
    {
      children: 'Reports',
      subItems: [
        { 
          children: 'Supplier Status Report', 
          href: 'http://google.com'
        },
        { 
          children: 'Supplier Feedback',
          href: 'http://google.com'
        },
        { 
          children: 'Supplier Rating', 
          href: 'http://google.com'
        }
      ]
    }
  ]}
/>
</div>
```

### Component Name

NavigationBar

### License

Licensed by © 2017 OpusCapita

