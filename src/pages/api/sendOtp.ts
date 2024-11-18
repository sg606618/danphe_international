import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email }: { email: string } = req.body;
    
    // Simulate OTP generation (you can replace this with actual logic)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(`Sending OTP to ${email}: ${otp}`);
    
    // Simulate sending OTP (replace with actual OTP service logic)
    return res.status(200).json({ success: true, otp });
  } else {
    // Return 405 for methods other than POST
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
