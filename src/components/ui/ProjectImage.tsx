import { imageSizes } from '@/data/images'

type ProjectImageProps = {
  /** Base path with no extension, e.g. "/images/vinevista". */
  base: string
  alt: string
  className?: string
  /** Layout width hint for srcset selection. */
  sizes?: string
}

/**
 * Serves AVIF, then WebP, then a JPEG fallback.
 * Sources and the dimension manifest come from scripts/optimize-images.mjs:
 * the srcset descriptors are the widths that genuinely exist on disk (a
 * narrow source like the portrait never gets a 1280px variant), and the real
 * width/height go on the <img> so the browser reserves the right box.
 */
export function ProjectImage({ base, alt, className, sizes }: ProjectImageProps) {
  const key = base.split('/').pop() ?? ''
  const meta = imageSizes[key]
  const variants = meta?.variants ?? [1280]
  const largest = Math.max(...variants)

  const srcSet = (ext: string) =>
    variants
      .map((w) => `${base}${w === largest ? '' : `-${w}`}.${ext} ${w}w`)
      .join(', ')

  return (
    // <picture> is inline by default, which leaves a stray baseline gap under
    // the image and lets it size off its intrinsic width.
    <picture className="block">
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={`${base}.jpg`}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={meta?.width}
        height={meta?.height}
        className={className}
      />
    </picture>
  )
}
