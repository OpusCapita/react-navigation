### Synopsis

NavigationBar is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<div style={{ position: 'relative' }}>
<NavigationBar
  activeItem={0}
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
/>
</div>
```

### Component Name

NavigationBar

### License

Licensed by © 2017 OpusCapita

