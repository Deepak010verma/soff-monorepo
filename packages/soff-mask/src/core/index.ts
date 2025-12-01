export type {
  MaskPattern,
  MaskToken,
  TokenType,
  MaskResult,
  MaskOptions,
  DynamicMaskRule,
} from './types.js';

export {
  mask,
  unmask,
  maskWithResult,
  createDynamicMask,
  parsePattern,
  isComplete,
  getPatternLength,
} from './engine.js';
