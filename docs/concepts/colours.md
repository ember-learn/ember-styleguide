# Colours

### Usage

#### Legibility

Website elements like text and icons should meet accesibility standards when used against colored backgrounds. The following swatches contain a sample of each of the primary palette colors, along with recommendations for its usage and the acceptable contrast guidelines when coupled with text.

## Primary Colours

The primary palette is applied across every page of the website and contains the brand, accent and neutral colors. The purpose of the primary palette is to keep uniformity across all pages while encouraging accessibility best practices.

<div class="layout-grid">
  <ColorPallet class="col-2-large" @color="#1A1A1A" @name="Dark Gray" @variable="--color-dark" @class-name="bg-dark" />

<ColorPallet class="col-2-large" @color="#E04E39" @name="Brand" @variable="--color-brand" @class-name="bg-brand"/>

<ColorPallet class="col-2-large" @color="#F4F6F8" @name="Muted Gray" @variable="--color-muted" @class-name="bg-muted"/>

<ColorPallet class="col-2-large" @color="#FFFFFF" @name="Light" @variable="--color-light" @class-name="bg-light"/>

</div>

## Secondary Colors

The secondary palette is applied to UI elements and it's not part of the base colors. The purpose of the secondary palette is to ensure the readability, usability, and accessibility of all UI elements and enhance the communication of actions, changes in state, or errors.

<div class="layout-grid">
  <ColorPallet class="col-2-large" @color="#A2A3A8" @name="Light" @variable="--color-gray" @class-name="bg-gray"/>

<ColorPallet class="col-2-large" @color="#E3EEFC" @name="Color Info" @variable="--color-info" @class-name="bg-info"/>

<ColorPallet class="col-2-large" @color="#FFD8E1" @name="Color Danger" @variable="--color-danger" @class-name="bg-danger"/>

<ColorPallet class="col-2-large" @color="#FCFFC9" @name="Color Warning" @variable="--color-warning" @class-name="bg-warning"/>

<ColorPallet class="col-2-large" @color="#D9F9E3" @name="Color Success" @variable="--color-success" @class-name="bg-success"/>

</div>

### Examples

#### Applying a background color to the card component

<div class="card bg-info">
  <div class="card-content">
  Do you have questions? Run into an issue or a bug? Get support from the community. A list of chat rooms, forums, and more are available here.
  </div>
</div>
