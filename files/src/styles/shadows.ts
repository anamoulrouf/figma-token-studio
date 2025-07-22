import tokens from '../../tokens/design-tokens.json';

const shadowTokens = tokens.tokens.shadows as Record<string, { value: string }>;

export const SHADOWS: Record<string, string> = Object.fromEntries(
  Object.entries(shadowTokens).map(([key, val]) => [key, val.value])
);