import { Input } from 'antd/lib'
import AppTable from './components/AppTable'
import { useEffect, useState } from 'react'
import IconFont from '@comps/IconFont'

export default () => {
  const [searchKey, setSearchKey] = useState<string>('')

  useEffect(() => {
    // 过滤表格数据
  }, [searchKey])

  return <div className="sp-metrics">
    <Input
      className='sp-metrics-search'
      suffix={<IconFont className='sp-metrics-search-icon' type='icon-sousuo2' />}
      value={searchKey}
      allowClear
      onPressEnter={(e) => setSearchKey(e.target.value)}
    />
    <AppTable />
  </div>
}