import { useState } from "react";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<IProducts | null>(
    null
  );

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
    // Category filtering
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    // Price filtering
    const priceMatch =
      (minPrice === null || product.price >= minPrice) &&
      (maxPrice === null || product.price <= maxPrice);

    return categoryMatch && priceMatch;
  });

  // Sorting products
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

  // Handle delete action
  const handleDeleteProduct = (product: IProducts) => {
    setProductToDelete(product);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    // Handle the deletion of the product here
    // Example: dispatch(deleteProduct(productToDelete._id));
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      {/* Filters */}
      <h1 className="text-3xl font-bold mb-4">
        Product List ({Products?.data.length})
      </h1>
      <div className="mb-4">
        <div className="flex flex-col lg:flex-row items-start gap-4 mb-4">
          {/* Category Filters */}
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

          {/* Price Filters */}
          <div className="flex gap-4">
            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice !== null ? minPrice : ""}
              onChange={(e) => setMinPrice(Number(e.target.value) || null)}
              className="w-32"
            />
            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice !== null ? maxPrice : ""}
              onChange={(e) => setMaxPrice(Number(e.target.value) || null)}
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
              <TableCell className="font-medium">
                <MdDelete
                  onClick={() => handleDeleteProduct(product)}
                  className="mb-2 text-2xl cursor-pointer"
                />
                <RxUpdate className="text-2xl" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Alert Dialog for Confirming Delete */}
      {isModalOpen && (
        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={cancelDelete}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={confirmDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default ProductsManagements;
