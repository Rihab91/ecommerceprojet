const Category=require("../models/categoryModel")

// Récupérer toutes les catégories
const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Créer une nouvelle catégorie
  const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
      const newCategory = new Category({ name });
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Récupérer une catégorie par ID
  const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Mettre à jour une catégorie existante
  const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Supprimer une catégorie existante
  const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCategory = await Category.findByIdAndDelete(id);
      if (!deletedCategory) {
        
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports = {getAllCategories,createCategory,getCategoryById,updateCategory,deleteCategory};