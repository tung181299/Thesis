const Carts = require("../models/carts");

const getProductsByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const filter = {
      $and: [
        {
          userId: {
            $regex: userId,
            $options: "$i",
          },
        },
      ],
    };
    const products = await Carts.find(filter);
    if (products.length > 0) {
      res.status(200).json({
        total: products.length,
        products: products.reverse(),
      });
    } else {
      res.status(200).json({
        message: "No results",
        products,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error Occurred!",
    });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const {
      userId,
      productId,
      productName,
      productBrand,
      image,
      price,
      quantity,
    } = req.body;
    const filter = {
      $and: [
        {
          userId: {
            $regex: userId,
            $options: "$i",
          },
        },
        {
          productId: {
            $regex: productId,
            $options: "$i",
          },
        },
      ],
    };
    const products = await Carts.find(filter);
    if(products.length === 0) {
      let product = new Carts({
        userId,
        productId,
        productName,
        productBrand,
        image,
        quantity,
        price,
      });
      product.save();
      res.status(200).json({
        message: "Add product to cart successfully!",
      });
    } else {
      const cartId = products[0]._id;
      const quantity = products[0].quantity + 1;
      updateSameProduct(cartId, quantity, res);
    }
  } catch (error) {
    res.status(500).json({
      message: "An error Occurred!",
    });
  }
};

const removeProductByUserId = (req, res) => {
  try {
    let productID = req.params.productId;
    Carts.findByIdAndRemove(productID).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
        });
      } else {
        getProductsByUserId(req, res);
      }
    });
    // .then(() => {
    //   getProductsByUserId(res, res)
    //   res.json({
    //     message: "Deleted product from cart successfully!",
    //   });
    // });
  } catch (error) {
    res.json({
      message: "Deleted product from cart unsuccessfully!",
    });
  }
};

const updateSameProduct = (cartId, quantity, res) => {
  try {
    const req = {"quantity": quantity}
    Carts.findByIdAndUpdate(cartId, req, {
      useFindAndModify: false,
    }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
        });
      } else {
        res.send({ message: "Updated product successfully." });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "An error Occurred!",
    });
  }
}

const editProductIdInCart = (req, res, next) => {
  try {
    let productID = req.params.productId;
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    Carts.findByIdAndUpdate(productID, req.body, {
      useFindAndModify: false,
    }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
        });
      } else {
        getProductsByUserId(req, res);
      }
      //res.send({ message: "Updated product successfully." });
    });
  } catch (error) {
    res.status(500).json({
      message: "An error Occurred!",
    });
  }
};

module.exports = {
  getProductsByUserId,
  addProductToCart,
  removeProductByUserId,
  editProductIdInCart,
};
