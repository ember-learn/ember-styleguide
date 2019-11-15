# Colours

### Usage

#### Legibility

Website elements like text and icons should meet accesibility standards when used against colored backgrounds. The following swatches contain a sample of each of the primary palette colors, along with recommendations for its usage and the acceptable contrast guidelines when coupled with text.

## Primary Colours

The primary palette is applied across every page of the website and contains the brand, accent and neutral colors. The purpose of the primary palette is to keep uniformity across all pages while encouraging accessibility best practices.

<div class="layout">
  <ColorPallet class="lg:col-2" @color="#E04E39" @name="Brand" @variable="--color-brand" @class-name="bg-brand"/>
<ColorPallet class="lg:col-2" @color="#FFFFFF" @name="White" @variable="--color-white" @class-name="bg-dark" />
<ColorPallet class="lg:col-2" @color="#F4F6F8" @name="Gray 100" @variable="--color-gray-100" @class-name="bg-dark" />
<ColorPallet class="lg:col-2" @color="#EBEEF2" @name="Gray 200" @variable="--color-gray-200" @class-name="bg-dark" />
<ColorPallet class="lg:col-2" @color="#DCE0E6" @name="Gray 300" @variable="--color-gray-300" @class-name="bg-dark" />
<ColorPallet class="lg:col-2" @color="#BEC4CC" @name="Gray 400" @variable="--color-gray-400" @class-name="bg-dark" />
<ColorPallet class="lg:col-2" @color="#8F949F" @name="Gray 500" @variable="--color-gray-500" @class-name="bg-dark" />
<ColorPallet class="lg:col-2" @color="#6A707A" @name="Gray 600" @variable="--color-gray-600" @class-name="bg-light" />
<ColorPallet class="lg:col-2" @color="#42474F" @name="Gray 700" @variable="--color-gray-700" @class-name="bg-light" />
<ColorPallet class="lg:col-2" @color="#2B2D34" @name="Gray 800" @variable="--color-gray-800" @class-name="bg-light" />
<ColorPallet class="lg:col-2" @color="#1C1E24" @name="Gray 900" @variable="--color-gray-900" @class-name="bg-light" />
<ColorPallet class="lg:col-2" @color="#000000" @name="Black" @variable="--color-black" @class-name="bg-light" />
</div>

## Secondary Colors

The secondary palette is applied to UI elements and it's not part of the base colors. The purpose of the secondary palette is to ensure the readability, usability, and accessibility of all UI elements and enhance the communication of actions, changes in state, or errors.

<div class="layout">
<ColorPallet class="lg:col-2" @color="#E3EEFC" @name="Color Info" @variable="--color-info" @class-name="bg-info"/>
<ColorPallet class="lg:col-2" @color="#FFD8E1" @name="Color Danger" @variable="--color-danger" @class-name="bg-danger"/>
<ColorPallet class="lg:col-2" @color="#FCFFC9" @name="Color Warning" @variable="--color-warning" @class-name="bg-warning"/>
<ColorPallet class="lg:col-2" @color="#D9F9E3" @name="Color Success" @variable="--color-success" @class-name="bg-success"/>
</div>

### Examples

#### Applying a background color to the card component

<div class="card bg-info">
  <div class="card-content">
  Do you have questions? Run into an issue or a bug? Get support from the community. A list of chat rooms, forums, and more are available here.
  </div>
</div>
