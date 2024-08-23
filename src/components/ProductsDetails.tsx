// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   console.log(id);

//   useEffect(() => {
//     fetch(`/api/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);
//   console.log(product);
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!product) return <div>No product found</div>;
//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <div className="flex flex-col lg:flex-row">
//         <div className="lg:w-1/2">
//           <img
//             className="w-full h-96 object-cover"
//             src={product.images}
//             alt={product.name}
//           />
//         </div>
//         <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="mt-4 text-gray-600">{product.description}</p>
//           <div className="mt-6 flex items-center">
//             <span className="text-xl font-bold text-gray-900">
//               ${product.price}
//             </span>
//           </div>
//           <div className="mt-6">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
