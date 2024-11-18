import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, otp }: { email: string; otp: string } = req.body;

    // Define a correct OTP (you may replace it with actual OTP verification logic)
    const correctOtp = '123456'; 

    if (otp === correctOtp) {
      return res.status(200).json({ success: true, message: 'OTP verified successfully!' });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
