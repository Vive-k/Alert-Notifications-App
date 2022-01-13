// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-card">
      <div className="icon-container">{children[0]}</div>
      <div className="hed-desp-container">{children.slice(1, 3)}</div>
      <div className="close-container">
        <GrFormClose className="close-icon" />
      </div>
    </div>
  )
}

export default Notification
