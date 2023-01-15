import { Fragment } from "react";
export function ProductCard(props) {
    const {data} = props;
    const{image,imageHover,offPercent,isOff,imageHover1,imageHover2,imageHover3,imageHover4,
    imageHover5,isExtraOff,extraOff,productBrand,offPrice,productName,mainPrice,
    size1,size2,size3} = data;
    return (
        <div className="product-card">
            <div className="hover-box">
                <div>
                    <img className="product-image img" src={imageHover}/>
                    {isOff === true ? <span className="off-percent vazir-fa">{`${offPercent}%`}</span> : <Fragment/>}
                </div>
                <div className="hover-gallery">
                    <img src={imageHover1}/>
                    <img src={imageHover2}/>
                    <img src={imageHover3}/>
                    <img src={imageHover4}/>
                    <img src={imageHover5}/>
                </div>
            </div>
            <div className="product-image">
                <img src={image}/>
                {isOff === true ? <span className="off-percent vazir-fa">{`${offPercent}%`}</span> : <Fragment/>}
                {isExtraOff === true ? <div className="extra-off-parent"><span className="extra-off vazir-fa">{extraOff}</span></div> : <Fragment/>}
            </div>
            <div className="brand-price">
                <p className="brand">{productBrand}</p>
                {isOff === true ? <p className="vazir-fa off-price">{`${offPrice}تومان`}</p> : <Fragment/>}
            </div>
            <div className="product-name-price">
                <p>{productName}</p>
            <p className="vazir-fa main-price">{`${mainPrice}تومان`}</p>
            </div>
            <div className="size-parent">
                <span>{size1}</span>
                <span>{size2}</span>
                <span>{size3}</span>
            </div>
        </div>
    )
}