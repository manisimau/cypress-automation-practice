// cypress/support/selectors.js

// Login selectors
export const UsernameInput = '#user-name';
export const PasswordInput = '#password';
export const SubmitButton = '#login-button';
export const ErrorMessage = '[data-test="error"]';

// Inventory selectors
export const ProductTitle = '.inventory_item_name';
export const AddToCartButton = '.btn_inventory';
export const CartIcon = '.shopping_cart_link';
export const SortDropdown = "select[data-test='product_sort_container']";
export const ProductPrice = '.inventory_item_price';
export const MenuButton = 'button#react-burger-menu-btn, .bm-burger-button';
export const LogoutLink = 'a#logout_sidebar_link, .logout_sidebar_link';
// Add more as needed 