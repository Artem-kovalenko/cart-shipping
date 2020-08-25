import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <section>
            <h1>
                <Skeleton duration={1} height={30} width={70} />
            </h1>
        </section>
    );
};

export default SkeletonCard;