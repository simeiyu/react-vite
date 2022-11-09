import { ArrowRightOutlined } from '@ant-design/icons'
import './index.less'

export default () => {
  return <div className='sp-logo-wrapper'>
    <img className='sp-logo' src='/logo.svg' alt='雪浪算盘' />
    <ArrowRightOutlined className='sp-toggle' />
  </div>
}