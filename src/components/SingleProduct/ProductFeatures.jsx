import "./ProductFeatures.css";

function ProductFeaturesList(props) {
  const features = props.features;
  const featuresItems = features.map((feature) => (
    <li className="product-features__list__item">{feature}</li>
  ));
  return <ul className="product-features__list">{featuresItems}</ul>;
}

const ProductFeatures = (props) => {
  return (
    <div className="product-features">
      <h3 className="product-features__title">ویژگی های محصول :</h3>
      <ul className="product-features__list">
        {/* <ProductFeaturesList features={props.features} /> */}
        <li className="product-features__list__item">لورم ایپسوم متن ساختگی</li>
        <li className="product-features__list__item">لورم ایپسوم متن ساختگی</li>
        <li className="product-features__list__item">لورم ایپسوم متن ساختگی</li>
        <li className="product-features__list__item">لورم ایپسوم متن ساختگی</li>
        <li className="product-features__list__item">لورم ایپسوم متن ساختگی</li>
      </ul>
    </div>
  );
};

export default ProductFeatures;
