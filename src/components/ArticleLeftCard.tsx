import Image from 'next/image';
import React from 'react';
import image from '../../public/images/left-card.png';

const ArticleLeftCard = () => {
  return (
    <div>
      <Image
        src={image}
        alt='advertisements'
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ArticleLeftCard;
