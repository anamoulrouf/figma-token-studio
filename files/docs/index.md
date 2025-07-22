# Design System

This design system is built using a token-first approach. All styling primitives are sourced from `design-tokens.json` and exposed as TypeScript variables for easy use in your components.

## Token Categories

- **Colors**: Brand, semantic, and component colors
- **Spacing**: Consistent spacing scale
- **Typography**: Font sizes, weights, and families
- **Shadows**: Predefined elevation styles
- **Border Radius**: Standardized rounding
- **Opacity**: Transparency levels
- **Gradients**: Brand and accent backgrounds
- **Grids**: Responsive layout system
- **Motion**: Animation durations and easings
- **Blur**: Filter and backdrop blur effects
- **Transform**: Scale and rotation transforms
- **Breakpoints**: Responsive sizes
- **Z-index**: Layering for overlays and UI

## Usage

Import tokens in your components:

```js
import { COLORS, SPACING, TYPOGRAPHY } from '../styles';
```

Example:

```js
const cardStyle = {
  background: COLORS['card-bg'],
  padding: SPACING['spacing-6'],
  borderRadius: BORDER_RADIUS['radius-large'],
  boxShadow: SHADOWS['shadow-large'],
};
```

## Updating Tokens

Update `tokens/design-tokens.json` and all tokens will update automatically. 

For advanced usage, consider integrating [Style Dictionary](https://amzn.github.io/style-dictionary/) for multi-platform builds.