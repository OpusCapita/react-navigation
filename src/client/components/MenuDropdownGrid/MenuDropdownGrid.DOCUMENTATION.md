### Synopsis

MenuDropdownGrid is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<MenuDropdownGrid 
  items={[
    { 
      label: 'Shop', 
      svg: _scope.getIcon('local_mall'),
      active: true,
      onClick: function() {}
    },
    { 
      label: 'Quote', 
      svg: _scope.getIcon('monetization_on'),
      disabled: true,
      onClick: function() {}
    },
    {
      label: 'Request', 
      svg: _scope.getIcon('room_service'),
      onClick: function() {}
    },
    {
      label: 'Order', 
      svg: _scope.getIcon('insert_drive_file'),
      onClick: function() {}
    },
    {
      label: 'Invoices', 
      svg: _scope.getIcon('receipt'),
      onClick: function() {}
    },
    { 
      label: 'Analyze', 
      svg: _scope.getIcon('trending_up'),
      onClick: function() {}
    }
  ]}
/>
```

### Component Name

MenuDropdownGrid

### License

Licensed by © 2017 OpusCapita

