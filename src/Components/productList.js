import { ProductCard } from "./productCard";
export function ProductList({data}) {
    function render() {
        return data.map(function (item,i) {
            return <ProductCard data={item} key={i}/>
        });
    }
        return (
        <div className="wrapper">
            <h2 className="title">پرفروش‌ترین‌ها</h2>
            <div className="product-list">
                {render()}
            </div>
        </div>
        );
    }