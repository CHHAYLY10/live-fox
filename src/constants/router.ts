const HOME = "/";
const PRODUCT = '/product';

// Material
const MATERIAL_LIST = `${HOME}/material`;
const MATERIAL_CREATE = `${MATERIAL_LIST}/create`;
const MATERIAL_EDIT = `${MATERIAL_LIST}/edit/[id]`;

// Menu
const PRODUCT_DETALI = `${PRODUCT}/product/[id]`;

const rootMenuKeys: { [k: string]: string } = {
  "/": HOME,

  // Material
  "/home/material": MATERIAL_LIST,
  "/home/material/create": MATERIAL_LIST,
  "/home/material/edit/[id]": MATERIAL_LIST,
};

const Routes = {
  HOME,
  MATERIAL_LIST,
  MATERIAL_CREATE,
  MATERIAL_EDIT,
  PRODUCT_DETALI,
  rootMenuKeys,
};
