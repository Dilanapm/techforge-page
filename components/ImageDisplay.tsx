"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-component";  

interface ImageDisplayProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    animated?: boolean;
}

export function ImageDisplay({ 
    src, 
    alt, 
    width = 500, 
    height = 300, 
    className = "", 
    animated = false 
}: ImageDisplayProps) {
    const imageElement = (
        <Image 
            src={src}  
            alt={alt}  
            width={width}  
            height={height}  
            className={`rounded-lg shadow-lg ${className}`}  
        />
    );

    return (
        <div className="flex justify-center my-6">
            {animated ? (
                <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
                    {imageElement}
                </MotionTransition>
            ) : (
                imageElement
            )}
        </div>
    );
}
