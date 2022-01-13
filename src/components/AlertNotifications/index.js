// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification">
    <h1>Alert Notifications</h1>
    <Notification className="notification">
      <AiFillCheckCircle className="succes-icon" />
      <h1 className="note-hed-success">Success</h1>
      <p className="note-desp">You can access all the files in the folder</p>
    </Notification>
    <Notification className="notification">
      <RiErrorWarningFill className="error-icon" />
      <h1 className="note-hed-error">Error</h1>
      <p className="note-desp">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>
    <Notification className="notification">
      <MdWarning className="warning-icon" />
      <h1 className="note-hed-warning">Warning</h1>
      <p className="note-desp">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>
    <Notification className="notification">
      <MdInfo className="info-icon" />
      <h1 className="note-hed-info">Info</h1>
      <p className="note-desp">Anyone on the internet can view these files</p>
    </Notification>
  </div>
)

export default AlertNotifications
