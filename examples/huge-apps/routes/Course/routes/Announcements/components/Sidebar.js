/*globals COURSES:true */
import React, { Component } from 'react'
import { Link } from 'rrtr'

class AnnouncementsSidebar extends Component {
  render() {
    let { announcements } = COURSES[this.props.params.courseId]

    return (
      <div>
        <h3>Sidebar Assignments</h3>
        <ul>
          {announcements.map(announcement => (
            <li key={announcement.id}>
              <Link to={`/course/${this.props.params.courseId}/announcements/${announcement.id}`}>
                {announcement.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = AnnouncementsSidebar
