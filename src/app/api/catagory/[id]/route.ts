export const GET = async (req, { params }) => {
    try {
      const productId = params.productId; // Extract dynamic route parameter from `params`
      
      // Now you can fetch product details using `productId`
      return new Response(JSON.stringify({ productId }));
    } catch (error) {
      console.error("Error fetching product:", error);
      return new Response("Failed to fetch product", { status: 500 });
    }
  };
  