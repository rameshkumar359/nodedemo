const connect = require("./../database/db");
const { ObjectId } = require("mongodb");
const Book = require("./../models/books");

exports.index = async (req, res) => {
  const book = await Book.find();
  res.json(book);
};

exports.store = async (req, res) => {
  try {
    await Book.create(req.body);
    res.json({ data: "the book is posted" });
    res.json(req.body);
  } catch (err) {
    res.json(err.errors);
  }
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const book = await Book.findById(_id);
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, { $set: req.body });
  res.json({ data: "book is updated" });
};

exports.destroy = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  res.status(204).json({ data: "deleted" });
};
