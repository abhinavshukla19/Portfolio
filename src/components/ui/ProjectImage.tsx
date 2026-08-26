type ProjectImageProps = {
  /** Base path with no extension, e.g. "/images/vinevista". */
  base: string
  alt: string
  className?: string
}

/**
 * Serves AVIF, then WebP, then a JPEG fallback, at two widths.
 * Sources are produced by scripts/optimize-images.mjs.
 */
export function ProjectImage({ base, alt, className }: ProjectImageProps) {
  return (
    <picture>
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
        width={1280}
        height={800}
        className={className}
      />
    </picture>
  )
}
