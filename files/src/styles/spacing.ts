import tokens from '../../tokens/design-tokens.json';

const spacingTokens = tokens.tokens.spacing as Record<string, { value: string }>;

export const SPACING: Record<string, string> = Object.fromEntries(
  Object.entries(spacingTokens).map(([key, val]) => [key, val.value])
);