import { UserOutlined, DownloadOutlined, SnippetsOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd/lib'
import type { MenuProps } from 'antd'
import userProfile from '@assets/images/user.png'

export default ({userId='', username=''}) => {
  const items: MenuProps['items'] = [
    { key: 'username', label: `${username}(${userId})`, icon: <UserOutlined /> },
    { key: 'downloadRPA', label: '下载客户端', icon: <DownloadOutlined /> },
    { key: 'userGuide', label: '帮助文档', icon: <SnippetsOutlined /> },
  ]

  return <Dropdown
    placement='bottomRight'
    overlayClassName='sp-header-menu'
    // getPopupContainer={triggerNode => triggerNode.parentElement}
    menu={{ items }}
  >
    <a className='sp-header-profile'><img src={userProfile} alt={username} /></a>
  </Dropdown>
}