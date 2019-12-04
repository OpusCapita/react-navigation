### Synopsis

Notifications is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<Notifications>
  <div className="oc-notifications__header">New notifications</div>
  <Notification
    svg={_scope.getIcon('info')}
    svgClassName="fill-info"
    message={<span>Your password will expire in 14 days. <br /><a href="#">Change it now</a></span>}
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
```

### Component Name

Notifications

### License

Licensed by © 2017 OpusCapita

