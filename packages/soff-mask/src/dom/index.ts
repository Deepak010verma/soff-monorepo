import { mask, unmask } from '../core/engine.js';

/**
 * Options for maskInput
 */
export interface MaskInputOptions {
  /** Whether to update on input (true) or change (false) event */
  onInput?: boolean;
  /** Callback when value changes */
  onChange?: (value: string, raw: string) => void;
}

/**
 * Apply a mask to an input element
 * @param input - The input element to mask
 * @param pattern - The mask pattern
 * @param options - Options for the mask behavior
 * @returns Cleanup function to remove the event listener
 */
export function maskInput(
  input: HTMLInputElement,
  pattern: string,
  options: MaskInputOptions = {}
): () => void {
  const { onInput = true, onChange } = options;
  const eventType = onInput ? 'input' : 'change';

  const handler = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const masked = mask(value, pattern);
    const raw = unmask(masked, pattern);

    // Only update if different to avoid cursor issues
    if (target.value !== masked) {
      const cursorPos = target.selectionStart || 0;
      target.value = masked;

      // Try to restore cursor position intelligently
      const newPos = Math.min(cursorPos, masked.length);
      target.setSelectionRange(newPos, newPos);
    }

    if (onChange) {
      onChange(masked, raw);
    }
  };

  input.addEventListener(eventType, handler);

  // Apply initial mask if value exists
  if (input.value) {
    input.value = mask(input.value, pattern);
  }

  // Return cleanup function
  return () => {
    input.removeEventListener(eventType, handler);
  };
}

/**
 * Create a mask controller for more fine-grained control
 */
export function createMaskController(pattern: string) {
  let currentValue = '';
  let currentRaw = '';

  return {
    /** Apply mask to a value */
    apply(value: string): string {
      currentValue = mask(value, pattern);
      currentRaw = unmask(currentValue, pattern);
      return currentValue;
    },

    /** Get the current masked value */
    get value(): string {
      return currentValue;
    },

    /** Get the current raw value */
    get raw(): string {
      return currentRaw;
    },

    /** Bind to an input element */
    bind(input: HTMLInputElement, options?: MaskInputOptions): () => void {
      return maskInput(input, pattern, {
        ...options,
        onChange: (value, raw) => {
          currentValue = value;
          currentRaw = raw;
          options?.onChange?.(value, raw);
        },
      });
    },
  };
}
