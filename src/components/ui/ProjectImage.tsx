import { imageSizes } from '@/data/images'

type ProjectImageProps = {
  /** Base path with no extension, e.g. "/images/vinevista". */
  base: string
  alt: string
  className?: string
}

/**
 * Serves AVIF, then WebP, then a JPEG fallback, at two widths.
 * Sources and the dimension manifest are produced by
 * scripts/optimize-images.mjs — the real width/height go on the <img> so the
 * browser reserves the right box and the panel does not jump as it loads.
 * Screenshot aspect ratios here run from 1.6 to 2.2, so a hardcoded box
 * would crop most of them.
 */
export function ProjectImage({ base, alt, className }: ProjectImageProps) {
  const key = base.split('/').pop() ?? ''
  const size = imageSizes[key]

  return (
    // <picture> is inline by default, which leaves a stray baseline gap under
    // the image and lets it size off its intrinsic width.
    <picture className="block">
      <source
        type="image/avif"
        srcSet={`${base}-640.avif 640w, ${base}.avif 1280w`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <source
        type="image/webp"
        srcSet={`${base}-640.webp 640w, ${base}.webp 1280w`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <img
        src={`${base}.jpg`}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={size?.width}
        height={size?.height}
        className={className}
      />
    </picture>
  )
}
