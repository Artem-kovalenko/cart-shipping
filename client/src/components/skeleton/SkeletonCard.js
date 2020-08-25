import React from "react";
import Skeleton from "react-loading-skeleton";
import {
    CardWrapper,
    InfoWrapper,
    Description,
    Line,
    Price,
    Pricing
} from "../productCard/ProductCardStyled";
import {
    SkeletonImage,
    SkeletonButton
} from './SkeletonCardStyled'

function SkeletonCard() {

    const testArr = Array(4).fill();

    return (
        testArr.map((item, index) => {
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
                </CardWrapper>
            )
        })
    )
};

export default SkeletonCard;
