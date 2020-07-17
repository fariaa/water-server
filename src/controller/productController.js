const Product = require('@model/ProductModel');


const productController = {

    get(req, res) {
        Product.find((error, data) => {
            if (error) {
                res.sendStatus(500).json({
                    message: "Internal error"
                });
            }

            res.json(
                { data }
            )
        })
    },
    save(req, res) {
        const { name, description, value, img } = req.body;
        const product = new Product({ name, description, value, img });

        product.save((error, product) => {
            if (error) {
                return res.status(500).send({ message: 'erro' });
            }
            res.send({ product });
        });
    }
}

module.exports = productController;