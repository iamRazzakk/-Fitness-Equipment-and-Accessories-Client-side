import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateSingleProductsMutation,
  useAddProductMutation,
} from "@/redux/api/baseApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductsManagements = () => {
  const { data: Products, isLoading } = useGetProductsQuery([] as any);
  const [updateSingleProduct, { isLoading: isUpdating }] =
    useUpdateSingleProductsMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [minPrice, setMinPrice] = useState<any>(null);
  const [maxPrice, setMaxPrice] = useState<any>(null);
  const [sortOrder, setSortOrder] = useState<any>(null);
  const [productToUpdate, setProductToUpdate] = useState<any>(null);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories: any) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat: any) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setMinPrice(null);
    setMaxPrice(null);
    setSortOrder(null);
  };

  const filteredProducts = Products?.data?.filter((product: any) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const priceMatch =
      (minPrice === null || product.price >= minPrice) &&
      (maxPrice === null || product.price <= maxPrice);
    return categoryMatch && priceMatch;
  });

  const sortedProducts = filteredProducts?.sort((a: any, b: any) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const handleDeleteProduct = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete._id).unwrap();
        console.log("Product deleted successfully");
        setDeleteDialogOpen(false);
        setProductToDelete(null);
      } catch (error: any) {
        console.error("Something went wrong. Product not deleted", error);
      }
    }
  };

  const handleUpdateProduct = (product: any) => {
    setProductToUpdate(product);
    setUpdateDialogOpen(true);
  };

  const handleUpData = async (e: any) => {
    e.preventDefault();
    if (productToUpdate) {
      const form = e.target;
      const name = form.name.value;
      const description = form.description.value;
      const price = Number(form.price.value);
      const stock = Number(form.stock.value);

      try {
        await updateSingleProduct({
          id: productToUpdate._id,
          data: { name, description, price, stock },
        }).unwrap();
        setUpdateDialogOpen(false);
        setProductToUpdate(null);
      } catch (error: any) {
        console.error("Failed to update product: ", error);
      }
    }
  };

  const handleAddNewProduct = () => {
    setAddDialogOpen(true);
  };

  const handleAddProduct = async (e: any) => {
    e.preventDefault();

    // Extracting form data
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = Number(form.price.value);
    const stock = Number(form.stock.value);
    const category = form.category.value;
    const images = form.images.value;

    // Creating an object to hold the data
    const productData = {
      name,
      description,
      price,
      stock,
      category,
      images,
    };

    // Logging the full product data to the console
    console.log("Product Data:", productData);

    try {
      // Sending the product data to the addProduct function
      await addProduct(productData).unwrap();

      // Closing the dialog on successful addition
      setAddDialogOpen(false);
    } catch (error: any) {
      console.error("Failed to add product: ", error);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md lg:mt-12 md:mt-8 mt-4">
      <h1 className="text-3xl font-bold mb-4">
        Product List ({Products?.data.length})
      </h1>
      <div className="mb-4">
        <div className="flex flex-col lg:flex-row items-start gap-4 mb-4">
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Barbell"
                onChange={() => handleCategoryChange("Barbell")}
                checked={selectedCategories.includes("Barbell")}
                className="mr-2"
              />
              Barbell
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Treadmill"
                onChange={() => handleCategoryChange("Treadmill")}
                checked={selectedCategories.includes("Treadmill")}
                className="mr-2"
              />
              Treadmill
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Benches"
                onChange={() => handleCategoryChange("Benches")}
                checked={selectedCategories.includes("Benches")}
                className="mr-2"
              />
              Benches
            </label>
          </div>

          <div className="lg:flex gap-4">
            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice !== null ? minPrice : ""}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="lg:w-32 w-full lg:mb-0 mb-4"
            />
            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice !== null ? maxPrice : ""}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="lg:w-32 w-full lg:mb-0 mb-4"
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="border px-4 py-2 rounded-md">
                Sort by Price
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setSortOrder("asc")}>
                  Price (Ascending)
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setSortOrder("desc")}>
                  Price (Descending)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button onClick={handleClearFilters} variant="secondary">
            Clear Filters
          </Button>
          <Button className="bg-white text-black" onClick={handleAddNewProduct}>
            Create New Product
          </Button>
        </div>
      </div>

      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-xl">Product Name</TableHead>
            <TableHead className="font-bold text-xl">Price</TableHead>
            <TableHead className="font-bold text-xl">Category</TableHead>
            <TableHead className="font-bold text-xl">Created At</TableHead>
            <TableHead className="font-bold text-xl">Updated At</TableHead>
            <TableHead className="font-bold text-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts?.map((product: any) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                {format(new Date(product?.createdAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(product?.updatedAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell>
                <div className="flex gap-4">
                  <RxUpdate
                    onClick={() => handleUpdateProduct(product)}
                    className="text-xl cursor-pointer"
                  />
                  <MdDelete
                    onClick={() => {
                      setProductToDelete(product);
                      setDeleteDialogOpen(true);
                    }}
                    className="text-xl cursor-pointer"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Update Dialog */}
      <Dialog open={updateDialogOpen} onOpenChange={setUpdateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpData}>
            <Input
              name="name"
              defaultValue={productToUpdate?.name}
              placeholder="Product Name"
              className="mb-4"
            />
            <Input
              name="description"
              defaultValue={productToUpdate?.description}
              placeholder="Product Description"
              className="mb-4"
            />
            <Input
              name="price"
              type="number"
              defaultValue={productToUpdate?.price}
              placeholder="Product Price"
              className="mb-4"
            />
            <Input
              name="stock"
              type="number"
              defaultValue={productToUpdate?.stock}
              placeholder="Stock"
              className="mb-4"
            />
            <Button
              type="submit"
              className="bg-black text-white"
              disabled={isUpdating}
            >
              Update Product
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Product Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddProduct}>
            <Input name="name" placeholder="Product Name" className="mb-4" />
            <Input
              name="description"
              placeholder="Product Description"
              className="mb-4"
            />
            <Input
              name="price"
              type="number"
              placeholder="Product Price"
              className="mb-4"
            />
            <Input
              name="stock"
              type="number"
              placeholder="Stock"
              className="mb-4"
            />
            <Select
              name="category"
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Barbell">Barbell</SelectItem>
                  <SelectItem value="Treadmill">Treadmill</SelectItem>
                  <SelectItem value="Benches">Benches</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              name="images"
              placeholder="Product Image URL"
              className="mb-4 mt-4"
            />
            <Button
              className="bg-black text-white"
              type="submit"
              disabled={isAdding}
            >
              Add Product
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this product?</p>
          <div className="flex justify-end gap-4 mt-4">
            <Button
              onClick={() => setDeleteDialogOpen(false)}
              variant="secondary"
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteProduct} variant="destructive">
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsManagements;
