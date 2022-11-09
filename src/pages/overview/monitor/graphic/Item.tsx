import Graphic from './Graphic'

interface ItemProps {
  label: string;
  used: number;
  total: number;
  unit: string;
}

const Item:React.FC<ItemProps> = ({label='', used, total, unit}) => {
  const percent = Math.round(used / total * 100)
  return <div className='sp-graphic'>
    <div className='sp-graphic-info'>
      <label className='sp-graphic-label'>{label}</label>
      <div className='sp-graphic-value'>
        <span className='sp-graphic-used'>{used}</span>
        <span className='sp-graphic-total'>{total}</span>
        <span className='sp-graphic-unit'>{unit}</span>
      </div>
    </div>
    <Graphic percent={percent} />
  </div>
}

export default Item
