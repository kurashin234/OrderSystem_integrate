// pages/api/getSTORES_DATA.js
import connectToDatabase from '../../lib/mongoose';
import StoreData from '../../models/StoreData';

export default async function handler(req, res) {
  await connectToDatabase();
  try {
    const Store = await StoreData.find({});
    res.status(200).json(Store);
  } catch {
    // エラーメッセージは必要ない場合は削除
    res.status(400).json({ success: false });
  }
}
