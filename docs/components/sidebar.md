# Sidebar

## Usage

The sidebar component can be used together with the sidebar-container class to add a responsive sidebar to the page. If the sidebar is the first element in the sidebar-container it will display as a left sidebar. Otherwise it will display as a right sidebar.

The sidebar component will automatically switch to the mobile mode once your browser window is smaller than or equal to 844px.

<style>
  .sidebar-container {
    transform: translateZ(0);
    min-height: 300px;
  }

  .sidebar-container > .example-content {
    background: #EEE;
  }

  .sidebar-container .es-sidebar {
    background: #FFF;
  }

  @media (max-width: 844px) {
    .sidebar-container .es-sidebar {
      width: calc(100% - var(--es-sidebar-padding) * 2);
    }
  }
</style>

### Left Sidebar Example
```handlebars
<div class="sidebar-container">
  <EsSidebar>
    My Left Sidebar Content
  </EsSidebar>
  <div class="example-content">
    My Content
  </div>
</div>
```

### Right Sidebar Example
```handlebars
<div class="sidebar-container">
  <div class="example-content">
    My Content
  </div>
  <EsSidebar>
    My Right Sidebar Content
  </EsSidebar>
</div>
```


### Full Width Left Sidebar Example
```handlebars
<div class="sidebar-container sidebar-container--full-width">
  <EsSidebar>
    My Left Sidebar Content
  </EsSidebar>
  <div class="example-content">
    My Content
  </div>
</div>
```

### Full Width Right Sidebar Example
```handlebars
<div class="sidebar-container sidebar-container--full-width">
  <div class="example-content">
    My Content
  </div>
  <EsSidebar>
    My Right Sidebar Content
  </EsSidebar>
</div>
```

### Sidebar Right Border
There is a class, `es-sidebar--border-right`, that you can add to your sidebar to give it a right border. This will not show up in mobile.
```handlebars
<div class="sidebar-container">
  <EsSidebar class="es-sidebar--border-right">
    My Left Sidebar Content
  </EsSidebar>
  <div class="example-content">
    My Content
  </div>
</div>
```

