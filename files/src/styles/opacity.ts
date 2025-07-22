import tokens from '../../tokens/design-tokens.json';

const opacityTokens = tokens.tokens.opacity as Record<string, { value: string }>;

export const OPACITY: Record<string, string> = Object.fromEntries(
  Object.entries(opacityTokens).map(([key, val]) => [key, val.value])
);