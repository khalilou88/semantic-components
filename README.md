# Semantic Components

# Use variable tailwind css

https://tailwindcss.com/docs/customizing-colors#using-css-variables

First define foreground variable in index.css:

```css
@layer base {
  :root {
    --color-primary: 255 115 179;
    --color-secondary: 111 114 185;
    --color-success: TBD;
    --color-danger: TBD;
    --color-warning: TBD;
    --color-info: TBD;
    --color-foreground: 202 60% 24%;
    --color-background: TBD;

    .dark {
      --color-primary: 255 115 179;
      --color-secondary: 111 114 185;
      --color-success: TBD;
      --color-danger: TBD;
      --color-warning: TBD;
      --color-info: TBD;
      --color-foreground: 202 60% 24%;
      --color-background: TBD;
    }
  }
}
```

Then add foreground color to tailwind colors in tailwind.config.js:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--color-foreground))',
      },
    },
  },
};
```

https://tailcolor.com/
