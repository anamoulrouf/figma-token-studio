import tokens from '../../tokens/design-tokens.json';

const gradientTokens = tokens.tokens.gradients as Record<string, { value: string }>;

export const GRADIENTS: Record<string, string> = Object.fromEntries(
  Object.entries(gradientTokens).map(([key, val]) => [key, val.value])
);