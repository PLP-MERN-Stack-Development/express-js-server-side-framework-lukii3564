import products from '../data/products.js';

// @desc Get all products
export const getProducts = (req, res) => {
  res.status(200).json(products);
};

// @desc Get single product
export const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

// @desc Create new product
export const createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ message: 'Please provide name and price' });

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// @desc Update product
export const updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.status(200).json(product);
};

// @desc Delete product
export const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products.splice(index, 1);
  res.status(200).json({ message: 'Product deleted successfully' });
};
