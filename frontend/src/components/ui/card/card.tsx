import React, { FC, useRef } from 'react';

import cn from 'classnames';

import CardRating from './card-rating';

import { EasyButton, Image, TooltipWrapper } from '@/components/ui';
import { Product } from '@/types/product.type';

type CardProps = {
  product: Product;
};
const Card: FC<CardProps> = (props) => {
  const {
    product: { image, title, id, bodyHtml },
  } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative shadow-sm w-full bg-white hover:shadow-lg transition p-[10px]">
      <div ref={cardRef} className="w-full h-[440px] rounded-[14px] overflow-hidden group">
        {image?.slice(0, 1).map((imageItem, index) => (
          <div
            key={index}
            className={cn(
              image.length > 1 &&
                (index % 2 ? 'group-hover:block hidden' : 'group-hover:hidden block'),
            )}
          >
            <Image src={imageItem} />
          </div>
        ))}
      </div>
      <TooltipWrapper
        content={
          <div
            dangerouslySetInnerHTML={{
              __html: bodyHtml,
            }}
          />
        }
        id={`product_${id}`}
      >
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900 w-full truncate">{title}</h5>

          <div className="w-full inline-flex justify-between">
            <div className=" text-[25px] font-[800] right-[0px] p-[10px]">₽ 1000</div>
            <CardRating />
          </div>
          <EasyButton label="В корзину" icon={'CardIcon'} />
        </div>
      </TooltipWrapper>
    </div>
  );
};

export default Card;
