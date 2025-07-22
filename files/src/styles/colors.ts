import tokens from '../../tokens/design-tokens.json';

type ColorToken = {
  value: string;
  light?: string;
  dark?: string;
  category?: string;
  description?: string;
};

const colorTokens = tokens.tokens.colors as Record<string, ColorToken>;

export const COLORS: Record<string, string> = Object.fromEntries(
  Object.entries(colorTokens).map(([key, val]) => [key, val.value])
);

export const COLOR_META: typeof colorTokens = colorTokens;