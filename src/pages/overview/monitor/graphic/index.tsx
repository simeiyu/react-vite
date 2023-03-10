import { Link } from 'react-router-dom'
import { Card } from 'antd/lib'
import Item from './Item'
import './index.less'

export default () => {
  return <Card title='资源监控' bordered={false} extra={<Link to='list'>查看详情</Link>}>
    <Card.Grid key='cpu' className='sp-graphic-grid' hoverable={false}>
      <Item label='CPU占用率' used={92} total={100} unit='核' />
    </Card.Grid>
    <Card.Grid key='mem' className='sp-graphic-grid' hoverable={false}>
      <Item label='内存占用率' used={80} total={100} unit='G' />
    </Card.Grid>
    <Card.Grid key='storage' className='sp-graphic-grid' hoverable={false}>
      <Item label='存储资源占用率' used={34} total={100} unit='G' />
    </Card.Grid>
  </Card>
}
