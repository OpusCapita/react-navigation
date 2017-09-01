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

