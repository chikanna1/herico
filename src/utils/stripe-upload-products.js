import SHOP_DATA from "../assets/shop_data.js";
import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(
  "sk_test_51LZGVBFBFgFoBCrCugIV3ixmwLYAm94XlbmHObdLyxXV1vqqYl8jdZ05hh5VoU0eFffDa4EJnqOD4ClgpZ6TxcIh00YeDC5JTb",
  {
    apiVersion: "2020-08-27",
  }
);

const shopDataProducts = SHOP_DATA;
let stripeProducts = [];

shopDataProducts.map(({ category, products }) => {
  products.map((product) => {
    let decimalPrice = product.productPrice * 100;
    const stripeProduct = {
      name: product.productName,
      description: product.description,
      default_price_data: {
        currency: "usd",
        unit_amount_decimal: decimalPrice,
      },
      images: [
        product.coverImage1Url,
        product.displayImage,
        product.secondaryImageUrl,
      ],
      metadata: {
        category: category,
        collection: "Menala",
        metals: "Yellow Gold",
      },
    };
    stripeProducts.push(stripeProduct);
  });
});

const uploadShopDataToStripe = () => {
  const promises = stripeProducts.map(async (product) => {
    return {
      id: await stripe.products.create(product),
    };
  });
  return Promise.all(promises);
};

// uploadShopDataToStripe();

const getStripeProducts = async () => {
  const products = await stripe.products.list();
  return products;
};

const archiveProducts = async () => {
  let products = getStripeProducts();

  products.then((productsData) => {
    productsData.data.map((product) => {
      stripe.products.update(product.id, { active: false });
    });
  });
};

const createShopData = () => {
  const file_path = path.join(process.cwd(), "src/assets/shop_data.js");
  console.log(file_path);

  // try {
  //   fs.unlinkSync(file_path);
  //   //file removed
  // } catch (err) {
  //   console.error(err);
  // }

  let products = getStripeProducts();
  products.then((data) => {
    fs.writeFile(file_path, data.data.toString(), { flag: "w+" }, (err) => {});
  });
  // fs.writeFile(file_path, products, { flag: "w+" }, (err) => {});
};

// await uploadShopDataToStripe();
// await archiveProducts();
createShopData();
