import Image from "next/image";

type OptimizedImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    blurDataURL?: string;
    className?: string; // ✅ allow custom classes
};

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    blurDataURL,
    className,
}: OptimizedImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={90}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL={blurDataURL || "/placeholder-blur.jpg"}
            className={className} // ✅ now you can style it
        />
    );
}
