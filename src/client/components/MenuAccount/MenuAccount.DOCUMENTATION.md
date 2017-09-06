### Synopsis

MenuAccount is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<MenuAccount 
  firstName="Stephan"
  lastName="Albers"
  userName="st-albers"
  initials="SA"
  avatarSrc="/static/avatar.jpg"
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
```

### Component Name

MenuAccount

### License

Licensed by © 2017 OpusCapita

