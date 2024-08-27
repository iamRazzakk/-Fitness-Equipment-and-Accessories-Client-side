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
import { IProducts } from "@/types/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductsManagements = () => {
  const { data: Products, isLoading } = useGetProductsQuery([]);
  const [updateSingleProduct, { isLoading: isUpdating }] =
    useUpdateSingleProductsMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [productToUpdate, setProductToUpdate] = useState<IProducts | null>(
    null
  );
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<IProducts | null>(
    null
  );
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
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

  const filteredProducts = Products?.data?.filter((product: IProducts) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const priceMatch =
      (minPrice === null || product.price >= minPrice) &&
      (maxPrice === null || product.price <= maxPrice);
    return categoryMatch && priceMatch;
  });

  const sortedProducts = filteredProducts?.sort(
    (a: IProducts, b: IProducts) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    }
  );

  const handleDeleteProduct = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete._id).unwrap();
        console.log("Product deleted successfully");
        setDeleteDialogOpen(false);
        setProductToDelete(null);
      } catch (error) {
        console.error("Something went wrong. Product not deleted", error);
      }
    }
  };

  const handleUpdateProduct = (product: IProducts) => {
    setProductToUpdate(product);
    setUpdateDialogOpen(true);
  };

  const handleUpData = async (e: React.FormEvent<HTMLFormElement>) => {
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
      } catch (error) {
        console.error("Failed to update product: ", error);
      }
    }
  };

  const handleAddNewProduct = () => {
    setAddDialogOpen(true);
  };

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = Number(form.price.value);
    const stock = Number(form.stock.value);
    const category = form.category.value;
    const images = form.images.value;

    try {
      await addProduct({
        name,
        description,
        price,
        stock,
        category,
        images,
      }).unwrap();

      setAddDialogOpen(false);
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
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

          <div className="flex gap-4">
            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice !== null ? minPrice : ""}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-32"
            />
            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice !== null ? maxPrice : ""}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-32"
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
          <Button onClick={handleAddNewProduct}>Create New Product</Button>
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
          {sortedProducts?.map((product: IProducts) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                {format(new Date(product.createdAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(product.updatedAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUpdateProduct(product)}
                    disabled={isUpdating}
                  >
                    <RxUpdate size={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setProductToDelete(product);
                      setDeleteDialogOpen(true);
                    }}
                    disabled={isDeleting}
                  >
                    <MdDelete size={20} className="text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={updateDialogOpen}
        onOpenChange={() => setUpdateDialogOpen(!updateDialogOpen)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpData}>
            <Input
              type="text"
              name="name"
              placeholder="Product Name"
              defaultValue={productToUpdate?.name}
              required
            />
            <Input
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={productToUpdate?.description}
              required
            />
            <Input
              type="number"
              name="price"
              placeholder="Price"
              defaultValue={productToUpdate?.price}
              required
            />
            <Input
              type="number"
              name="stock"
              placeholder="Stock"
              defaultValue={productToUpdate?.stock}
              required
            />
            <Button type="submit" disabled={isUpdating}>
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={addDialogOpen}
        onOpenChange={() => setAddDialogOpen(!addDialogOpen)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddProduct}>
            <Input
              type="text"
              name="name"
              placeholder="Product Name"
              required
            />
            <Input
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <Input type="number" name="price" placeholder="Price" required />
            <Input type="number" name="stock" placeholder="Stock" required />
            <Input
              type="text"
              name="category"
              placeholder="Category"
              required
            />
            <Input type="text" name="images" placeholder="IMGBB URL" required />
            <Button type="submit" disabled={isAdding}>
              Add Product
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onOpenChange={() => setDeleteDialogOpen(!deleteDialogOpen)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this product?</p>
          <Button
            variant="destructive"
            onClick={handleDeleteProduct}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsManagements;
