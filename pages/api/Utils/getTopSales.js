import connectToDatabase from '../../../lib/mongoose';
import ProductData from '../../../models/ProductData';
import StoreData from '../../../models/StoreData';

export default async function handler(req, res) {
  await connectToDatabase();

  try {
    const productData = await ProductData.find({}, "storeId productName soldCount productImageUrl")
    .populate([
        {path: 'storeId', select:"storeName"}
    ]);
    if (!productData) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    const formatData = productData.map(data => ({
        storeName: data.storeId.storeName,
        productName: data.productName,
        productImageUrl: data.productImageUrl,
        soldCount: data.soldCount
    }));

    const sortFormatData = formatData.sort((a, b) => b.soldCount - a.soldCount);
    res.status(200).json(sortFormatData.slice(0, 3));
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}