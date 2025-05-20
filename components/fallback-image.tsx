"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  className?: string
}

export function FallbackImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=400&width=600&text=Image+Not+Found",
  className,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      className={cn("transition-opacity", className)}
      onError={handleError}
    />
  )
}
