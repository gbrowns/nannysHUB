import React from 'react'

function NotificationDash() {
  return (
    <div className="notifications">
      <h1>Notifications</h1>

      <div className="notifications_content">

        <div className="note">
          <div>
            <span>Request</span> 
            <span>Date stated</span>
          </div>
          <h2>Some Request title Here</h2>
          <p>Request message and content</p>
          <div>
            <button>
              Mark as Read
            </button>
            <em>Delete</em>
          </div>

        </div>

        <div className="note">
          <div>
            <span>Request</span> 
            <span>Date stated</span>
          </div>
          <h2>Some Request title Here</h2>
          <p>Request message and content</p>
          <div>
            <button>
              Mark as Read
            </button>
            <em>Delete</em>
          </div>

        </div>
        <div className="note">
          <div>
            <span>Request</span> 
            <span>Date stated</span>
          </div>
          <h2>Some Request title Here</h2>
          <p>Request message and content</p>
          <div>
            <button>
              Mark as Read
            </button>
            <em>Delete</em>
          </div>

        </div>

      </div>

      <div className='paginate'>
        <button>
          {1}
        </button>
        <button>
          Next
        </button>
      </div>

    </div>
  )
}

export default NotificationDash