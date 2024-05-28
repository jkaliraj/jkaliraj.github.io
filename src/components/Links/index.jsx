
import React, { Component } from 'react'
import { Link } from 'react-router'

import style from './style.module.css'
import grid from '../../assets/css/grid.module.css'

import { rollText } from '../../utils/transformText'

class Links extends Component {
  renderPageItem(link) {
    return (
      <li key={link.id}>
        <Link to={link.link} target="_blank" onMouseOver={this.cycle.bind(this)}>
          <span className={style.linkText} data-text={link.title}>{link.title}</span>
        </Link>
      </li>
    )
  }

  cycle(event) {
    rollText(event.currentTarget.querySelector('[data-text]'))
  }

  render() {
    let links = []

    for (let k in this.props.links) {
      if (! this.props.links[k].title) continue
      if (! this.props.links[k].link) continue

      this.props.links[k].id = links.length
      links.push(this.props.links[k])
    }


    return (
      <nav className={style.links}>
        <ul>
          {links.map(this.renderPageItem.bind(this))}
        </ul>
      </nav>
    )
  }
}

export default Links
