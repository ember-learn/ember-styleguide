# Colors

### Usage

#### Legibility

Website elements like text and icons should meet accesibility standards when used against colored backgrounds. The following swatches contain a sample of each of the primary palette colors, along with recommendations for its usage and the acceptable contrast guidelines when coupled with text.

## Primary Colors

The primary palette is applied across every page of the website and contains the brand, accent and neutral colors. The purpose of the primary palette is to keep uniformity across all pages while encouraging accessibility best practices.

<!-- fix for styleguide selector in the color pallets -->
<style>
  .text-xl + * {
    margin-top: 0;
  }
</style>

<div class="layout mt-3">
  {{#each (array
    (hash color="#E04E39" name="Brand" variable="--color-brand" className="bg-brand")
    (hash color="#FFFFFF" name="White" variable="--color-white")
    (hash color="#F4F6F8" name="Gray 100" variable="--color-gray-100")
    (hash color="#EBEEF2" name="Gray 200" variable="--color-gray-200")
    (hash color="#DCE0E6" name="Gray 300" variable="--color-gray-300")
    (hash color="#BEC4CC" name="Gray 400" variable="--color-gray-400")
    (hash color="#8F949F" name="Gray 500" variable="--color-gray-500")
    (hash color="#6A707A" name="Gray 600" variable="--color-gray-600")
    (hash color="#42474F" name="Gray 700" variable="--color-gray-700")
    (hash color="#2B2D34" name="Gray 800" variable="--color-gray-800")
    (hash color="#1C1E24" name="Gray 900" variable="--color-gray-900")
    (hash color="#000000" name="Black" variable="--color-black")
  ) as |item|}}
    <ColorPallet
      class="lg:col-2"
      @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
      @textColorClasses={{array '' 'text-light'}}
      @color={{item.color}}
      @name={{item.name}}
      @variable={{item.variable}}
      @class-name={{item.className}}
    />
  {{/each}}
</div>

## Illustration Colors

These colors are for charts and diagrams only. The secondary palette is applied to UI elements and is not part of the base colors. The purpose of the secondary palette is to ensure the readability, usability, and accessibility of charts and diagrams and enhance the communication of actions, changes in state, or errors.

<div class="layout">
  <ColorPallet
    class="lg:col-2"
    @color="#0076D6"
    @name="Dark Blue"
    @variable="--color-blue-dark"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
  <ColorPallet
    class="lg:col-2"
    @color="#10AAFF"
    @name="Blue"
    @variable="--color-blue"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
  <ColorPallet
    class="lg:col-2"
    @color="#DFFDFF"
    @name="Light Blue"
    @variable="--color-blue-light"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
</div>

<div class="layout">
  <ColorPallet
    class="lg:col-2"
    @color="#8BE998"
    @name="Green"
    @variable="--color-green"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
  <ColorPallet
    class="lg:col-2"
    @color="#C7F9DE"
    @name="Light Green"
    @variable="--color-green-light"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
</div>

<div class="layout">
  <ColorPallet
    class="lg:col-2"
    @color="#FFEC64"
    @name="Yellow"
    @variable="--color-yellow"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
  <ColorPallet
    class="lg:col-2"
    @color="#FFFAD6"
    @name="Light Yellow"
    @variable="--color-yellow-light"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
</div>

<div class="layout">
  <ColorPallet
    class="lg:col-2"
    @color="#7650F1"
    @name="Lilac"
    @variable="--color-lilac"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
  <ColorPallet
    class="lg:col-2"
    @color="#D5CBFF"
    @name="Light Lilac"
    @variable="--color-lilac-light"
    @textClasses={{array 'text-sm' 'text-base' 'text-md' 'text-lg' 'text-xl'}}
    @textColorClasses={{array '' 'text-light'}}
  />
</div>
