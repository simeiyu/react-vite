import { Outlet } from "react-router-dom"
import Graphic from "./graphic"
import List from './list'
import './index.less'

const Monitor = () => <div className="sp-monitor"><Outlet /></div>

export { Graphic, List }

export default Monitor
