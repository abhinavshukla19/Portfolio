export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/** Splits a string into words, each wrapped for per-word mask reveals. */
export function toWords(text: string): string[] {
  return text.split(' ').filter(Boolean)
}
