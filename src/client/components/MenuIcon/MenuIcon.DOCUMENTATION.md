### Synopsis

MenuIcon is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<div 
  style={{
    width: '180px', 
    display: 'flex', 
    justifyContent: 'space-around'
  }}
>
  <MenuIcon 
    onClick={() => console.log('click!')}
    svg={_scope.getIcon('apps')}
  />
  
  <MenuIcon 
    onClick={() => console.log('click!')}
    svg={_scope.getIcon('shopping_cart')}
    supTitle="42"
  />
  
  <MenuIcon 
    onClick={() => console.log('click!')}
    svg={_scope.getIcon('person')}
    label="Admin"
  >
    <div>Hello</div>
  </MenuIcon>
</div>
```

### Component Name

MenuIcon

### License

Licensed by © 2017 OpusCapita

