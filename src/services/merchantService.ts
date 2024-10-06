interface Category {
  id: string
  name: string
  icon: string
}
export async function getVouchers(): Promise<Voucher[]> {
  // Implement API call to AccessTrade here
  // Return mock data for now
  return [
    {
      id: '2',
      discount: '40K',
      minPurchase: '200.000đ',
      description: 'Lưu ý: Lưu mã trên banner lúc 12H, 20H hôm...',
      expiryDate: '20/09/10',
    },
    {
      id: '3',
      discount: '40K',
      minPurchase: '200.000đ',
      description: 'Lưu ý: Lưu mã trên banner lúc 12H, 20H hôm...',
      expiryDate: '20/09/10',
    },
    {
      id: '4',
      discount: '40K',
      minPurchase: '200.000đ',
      description: 'Lưu ý: Lưu mã trên banner lúc 12H, 20H hôm...',
      expiryDate: '20/09/10',
    },
    {
      id: '5',
      discount: '40K',
      minPurchase: '200.000đ',
      description: 'Lưu ý: Lưu mã trên banner lúc 12H, 20H hôm...',
      expiryDate: '20/09/10',
    },
    // ... more vouchers
  ]
}

interface Voucher {
  id: string
  discount: string
  minPurchase: string
  description: string
  expiryDate: string
}

export async function getCategories(): Promise<Category[]> {
  // Implement API call to AccessTrade here
  // Return mock data for now
  return [
    { id: '1', name: 'Toàn Sàn', icon: '🛒' },
    { id: '2', name: 'Đời Tác Thanh Toán', icon: '💳' },
    // ... more categories
  ]
}
