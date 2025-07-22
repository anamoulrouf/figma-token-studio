import tokens from '../../tokens/design-tokens.json';

const radiusTokens = tokens.tokens.borderRadius as Record<string, { value: string }>;

export const BORDER_RADIUS: Record<string, string> = Object.fromEntries(
  Object.entries(radiusTokens).map(([key, val]) => [key, val.value])
);