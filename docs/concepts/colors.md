# Colors

### Here we talk about the color scheme

## Primary Colors
The primary palette is applied across every page of the website and contains the brand, accent and neutral colors. The purpose of the primary palette is to keep uniformity across all pages while encouraging accessibility best practices.

The following swatches contain a sample of each of the primary palette colors, along with recommendations for its usage and the acceptable contrast guidelines when coupled with text.

<div class="row">
  <div class="col-one-third">
    <ColorPallet @color="#1A1A1A" @name="Dark Gray" @variable="--color-dark" @class-name="bg-dark"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#E04E39" @name="Orange" @variable="--color-orange" @class-name="bg-orange"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#F4F6F8" @name="Muted Gray" @variable="--color-muted" @class-name="bg-muted"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#FFFFFF" @name="Light" @variable="--color-light" @class-name="bg-light"/>
  </div>
</div>



## Secondary colors
The secondary palette is applied to UI elements and it's not part of the base colors. The purpose of the secondary palette is to ensure the readability, usability, and accessibility of all UI elements and enhance the communication of actions, changes in state, or errors.

<div class="row">
  <div class="col-one-third">
    <ColorPallet @color="#A2A3A8" @name="Light" @variable="--color-gray" @class-name="bg-gray"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#E3EEFC" @name="Color Info" @variable="--color-info" @class-name="bg-info"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#FFD8E1" @name="Color Danger" @variable="--color-danger" @class-name="bg-danger"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#FCFFC9" @name="Color Warning" @variable="--color-warning" @class-name="bg-warning"/>
  </div>
  <div class="col-one-third">
    <ColorPallet @color="#D9F9E3" @name="Color Success" @variable="--color-success" @class-name="bg-success"/>
  </div>
</div>

### Examples

#### Applying a background color to the card component

<div class="card bg-info">
  <div class="card-content">
  Do you have questions? Run into an issue or a bug? Get support from the community. A list of chat rooms, forums, and more are available here.
  </div>
</div>
