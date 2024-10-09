interface IMenuItemProps {
  id?: number
  url: string
  title: string
  icon: React.ReactNode
}

interface IActiveNavProps {
  url: string
  children: React.ReactNode
}

interface IBanner {
  id: number
  image: string
  link: string
}

type Coupon = {
  coupon_code: string
  coupon_desc: string
}

type Category = {
  category_name: string
  category_name_show: string
  category_no: string
}

type DataPromotion = {
  count: number
  data: Promotion[]
}

type Promotion = {
  aff_link: string
  aff_link_campaign_tag: string | null
  banner: string[]
  campaign: string
  campaign_id: string
  campaign_name: string
  categories: Category[]
  coin_cap: number
  coin_percentage: number
  content: string
  coupons: Coupon[]
  discount_percentage: number
  discount_value: number
  domain: string
  end_time: string
  id: string
  image: string
  is_hot: 'True' | 'False'
  keyword: string[]
  link: string
  max_value: number
  merchant: string
  min_spend: number
  name: string
  prior_type: number
  remain: number
  remain_true: boolean
  shop_id: number
  start_time: string
  status: number
  time_left: string
}

interface CouponFilter {
  keyword?: string
  url?: string
  merchant?: string
  status?: string
  is_next_day_coupon?: string
  limit?: number
  page?: number
}

interface Merchant {
  display_name: string[]
  id: string
  login_name: string
  logo: string
  total_offer: number
}

interface IKeyWord {
  id: string
  keyword: string
  total_offer: number
}

interface IOptions {
  keyword: string
  merchant: string
  sortBy: string
  url: string
  status: string
  is_next_day_coupon: string
}

interface IActionBarProps {
  merchants?: Merchant[]
  onSelectFilter: (newFilters: IOptions) => void
  filters: IOptions
}

interface Coupon {
  coupon_code: string
  coupon_desc: string
}

interface Category {
  category_name: string
  category_name_show: string
  category_no: string
}

interface Deal {
  aff_link: string
  banners: string[]
  categories: Category[]
  content: string
  coupons: Coupon[]
  domain: string
  end_time: string
  id: string
  image: string
  link: string
  merchant: string
  name: string
  start_time: string
}

interface DealResponse {
  data: Deal[]
}

export {
  IMenuItemProps,
  IActiveNavProps,
  IBanner,
  Coupon,
  Category,
  Promotion,
  ICouponParams,
  DataPromotion,
  Merchant,
  IKeyWord,
  IOptions,
  IActionBarProps,
  CouponFilter,
  Deal,
  DealResponse,
}
