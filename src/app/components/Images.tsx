// src/app/components/Images.tsx

import Image from 'next/image';
import { logoImage, mainImage } from '../images/images-export';

export const images = [
    {
        src: mainImage,
        alt: 'United Elite Main Image',
        width: 1600,
        height: 340,
    },
    {
        src: logoImage,
        alt: 'United Elite Logo',
        width: 108.25,
        height: 75,
    },
];

const Images = () => (
    <div>
        {images.map((image, index) => (
            <div key={index}>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </div>
        ))}
    </div>
);

export default Images;
