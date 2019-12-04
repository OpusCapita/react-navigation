### Synopsis

MenuIconsBar is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<div
  className="oc-menu--opuscapita-dark-theme"
  style={{
    width: '180px',
    display: 'flex',
    justifyContent: 'space-around'
  }}
>
  <MenuIconsBar>
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
    >
      <div>Hello</div>
    </MenuIcon>
  </MenuIconsBar>
</div>
```

### Component Name

MenuIconsBar

### License

Licensed by © 2017 OpusCapita

