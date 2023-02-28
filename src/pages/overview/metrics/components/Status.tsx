
import IconFont from '@comps/IconFont'

type StatusType = 'running' | 'stopped'

type StatusMapType = {
  [propName in StatusType]: string;
}

interface PropsType {
  status: StatusType;
}

const STATUS_MAP: StatusMapType = {
  running: '运行中',
  stopped: '已停止'
}

const AppStatus:React.FC<PropsType> = ({status}) => <span>
  <IconFont type='icon-mini-dot' className={`sp-metrics-status sp-metrics-${status}`} />
  { STATUS_MAP[status] }
</span>

export default AppStatus
