import Image from "next/image";

import styles from "../styles/CoffeeStoreDynamic.module.css";

const Pricing = ({ value }) => {
  return (
    <div className={styles.pricingContainer}>
      {[...Array(value)].map((_, index) => (
        <div className={styles.priceIco} key={index}>
          <Image src="/static/icons/price.svg" alt="price" layout="fill" />
        </div>
      ))}
    </div>
  );
};

export default Pricing;
