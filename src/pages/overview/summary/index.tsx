import { Link } from 'react-router-dom'
import { Card } from 'antd/lib'
import classnames from 'classnames'
import './index.less'
import algoIcon from '@assets/images/overview-algo.svg'
import predictIcon from '@assets/images/overview-predict.svg'
import componentsIcon from '@assets/images/overview-components.svg'

interface SummaryProps {
  appList?: any[];
  components?: any[];
}

interface ItemProps {
  type: string;
  title: string;
  count: number;
  icon: any;
}

const SummaryItem:React.FC<ItemProps> = ({type, title, count, icon}) => 
  <Link to={`/${type}`}>
    <div className={classnames('sp-summary', `sp-summary-${type}`)}>
      <h4 className='sp-summary-content'>{count}<small className='sp-summary-title'>{title}</small></h4>
      <img className='sp-summary-icon' src={icon} />
    </div>
  </Link>

const Summary:React.FC<SummaryProps> = (props) => <Card title="资源中心" bordered={false} bodyStyle={{padding: '1.6rem'}}>
    <Card.Grid key='predict' className='sp-summary-grid' hoverable={false}>
      <SummaryItem type='predict' title='应用开发' count={82} icon={predictIcon} />
    </Card.Grid>
    <Card.Grid key='algo' className='sp-summary-grid' hoverable={false}>
      <SummaryItem type='algo' title='机器学习' count={16} icon={algoIcon} />
    </Card.Grid>
    <Card.Grid key='components' className='sp-summary-grid' hoverable={false}>
      <SummaryItem type='components' title='我的组件' count={23} icon={componentsIcon} />
    </Card.Grid>
  </Card>

export default Summary
