export const API_URL = 'http://localhost:5030/api'; // Use HTTPS

export const fetchTestMessage = async () => {
    try {
        const response = await fetch(`${API_URL}/test`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching test message:', error);
        throw error;
    }
};

export const fetchIngredients = async () => {
    try {
        const response = await fetch(`${API_URL}/ingredientapi/ingredientslist`);
        if (!response.ok) {
            throw new Error("Failed to fetch ingredients");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching ingredients:", error);
        throw error;
    }
};

export const createIngredient = async (ingredient) => {
    try {
        const response = await fetch(`${API_URL}/ingredientapi/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredient),
        });
        if (!response.ok) {
            throw new Error("Failed to create ingredient");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating ingredient:", error);
        throw error;
    }
};

export const updateIngredient = async (ingredient) => {
    try {
        const response = await fetch(`${API_URL}/ingredientapi/update/${ingredient.ingredientId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredient),
        });
        if (!response.ok) {
            throw new Error("Failed to update ingredient");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating ingredient:", error);
        throw error;
    }
};

export const deleteIngredient = async (ingredientId) => {
    try {
        const response = await fetch(`${API_URL}/ingredientapi/delete/${ingredientId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Failed to delete ingredient");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting ingredient:", error);
        throw error;
    }
};

export const fetchMenuItems = async (category) => {
    try {
        const response = await fetch(`${API_URL}/menuitemapi/menuitemslist?category=${category}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch menu items");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching menu items:", error);
        throw error;
    }
};

export const createMenuItem = async (menuItem) => {
    try {
        const response = await fetch(`${API_URL}/menuitemapi/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(menuItem),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create menu item");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating menu item:", error);
        throw error;
    }
};

export const updateMenuItem = async (menuItem) => {
    try {
        const response = await fetch(`${API_URL}/menuitemapi/update/${menuItem.menuItemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(menuItem),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to update menu item");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating menu item:", error);
        throw error;
    }
};

export const deleteMenuItem = async (menuItemId) => {
    try {
        const response = await fetch(`${API_URL}/menuitemapi/delete/${menuItemId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to delete menu item");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting menu item:", error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categoryapi/categorieslist`);
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

export const createCategory = async (category) => {
    try {
        const response = await fetch(`${API_URL}/categoryapi/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        });
        if (!response.ok) {
            throw new Error('Failed to create category');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

export const updateCategory = async (category) => {
    try {
        const response = await fetch(`${API_URL}/categoryapi/update/${category.categoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        });
        if (!response.ok) {
            throw new Error('Failed to update category');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const response = await fetch(`${API_URL}/categoryapi/delete/${categoryId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete category');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};

export const fetchDrinks = async () => {
    try {
        const response = await fetch(`${API_URL}/drinkapi/drinkslist`);
        if (!response.ok) {
            throw new Error('Failed to fetch drinks');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching drinks:", error);
        throw error;
    }
};

export default API_URL;