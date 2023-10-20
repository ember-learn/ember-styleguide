# Header anchor

In our documentation we want to be able to link to specific headers, that's why we introduce this pattern. The `<h>` includes the `<a>` that includes the link `<svg>`. This removes the link underline default styling from all `<a>`s wrapped in `<h>`-elements and rotates all `svg`s by 45 degrees if they are wrapped in both.

```html
<h2 id="toc_multiple-dynamic-segments">
  Multiple Dynamic Segments 
  <a href="#multiple-dynamic-segments">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M326.61 185.4c59.75 59.8 58.93 155.69.36 214.58-.1.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.7 59.26-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.1-37.1c9.85-9.85 26.8-3.3 27.3 10.6a184.27 184.27 0 0 0 9.7 52.72 16.1 16.1 0 0 1-3.8 16.61l-13.08 13.1c-28.02 28.02-28.9 73.65-1.15 101.95 28.02 28.58 74.08 28.75 102.32.51l67.2-67.19a71.98 71.98 0 0 0-10.34-110.4 16.04 16.04 0 0 1-6.95-12.6 39.83 39.83 0 0 1 11.7-29.81l21.06-21.06a16.06 16.06 0 0 1 20.58-1.73 152.48 152.48 0 0 1 20.52 17.2zM467.55 44.44c-59.26-59.26-155.7-59.27-214.96 0l-67.2 67.2-.36.37c-58.57 58.9-59.39 154.78.36 214.59a152.45 152.45 0 0 0 20.52 17.2 16.07 16.07 0 0 0 20.58-1.74l21.06-21.05a39.83 39.83 0 0 0 11.7-29.8 16.04 16.04 0 0 0-6.95-12.61 71.98 71.98 0 0 1-10.34-110.4l67.2-67.2c28.23-28.23 74.3-28.06 102.32.52 27.75 28.3 26.87 73.93-1.15 101.96l-13.1 13.09a16.1 16.1 0 0 0-3.77 16.6c5.86 17.2 9.04 35 9.69 52.73.5 13.9 17.45 20.44 27.29 10.6l37.1-37.1c59.28-59.26 59.28-155.7 0-214.96z"></path>
    </svg>
  </a>
</h2>
```
