import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
    CardWrapper,
    InfoWrapper,
    Description,
    Line,
    Price,
    Pricing,
    Amount,
    AmountPrice
} from '../productCard/ProductCardStyled';
import {
    SkeletonImage,
    SkeletonButton
} from './SkeletonCardStyled'

function SkeletonCard({mainPage}) {

    const skeletonAmount = Array(8).fill();

    return (
        skeletonAmount.map((item, index) => {
            return (
                <CardWrapper skeleton={true} key={index}>
                    <InfoWrapper>
                        <SkeletonImage
                            duration={1}
                            height={100}
                            width={100}
                        />
                        <Description>
                            <h2>
                                <Skeleton
                                    duration={1}
                                    height={30}
                                    width={120}
                                />
                            </h2>
                            <p>
                                <Skeleton
                                    duration={1}
                                    height={40}
                                />
                            </p>
                        </Description>
                    </InfoWrapper>

                    <Line/>
                    {
                        mainPage ?
                            <Pricing>
                                <Price>
                                    <Skeleton
                                        duration={1}
                                        height={30}
                                        width={30}
                                    />
                                </Price>
                                <div>
                                    <SkeletonButton
                                        duration={1}
                                        height={30}
                                        width={90}
                                    />
                                </div>
                            </Pricing>
                            :
                            <AmountPrice>
                                <Amount>
                                    <Skeleton
                                        duration={1}
                                        height={30}
                                        width={30}
                                    />
                                </Amount>
                                <Price>
                                    <Skeleton
                                    duration={1}
                                    height={30}
                                    width={30}
                                     />
                                </Price>

                            </AmountPrice>
                    }
                </CardWrapper>
            )
        })
    )
}

export default SkeletonCard;
