import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.accesstrade.vn/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Token SJQSgblT9TCQ-F5BK4P70v7jgjZ52uRE',
  },
})

export default axiosInstance
