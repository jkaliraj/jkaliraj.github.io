
import React, { Component } from 'react'

import style from './style.css'
import grid from '../../assets/css/grid.css'

import { rollText } from '../../utils/transformText'

class Links extends Component {
  renderPageItem(link) {
    const isExternal = link.link.startsWith('http://') || link.link.startsWith('https://')
    const linkProps = {
      href: link.link,
      onMouseOver: this.cycle.bind(this)
    }
    if (isExternal) {
      linkProps.target = '_blank'
      linkProps.rel = 'noopener noreferrer'
    }
    return (
      <li key={link.id}>
        <a {...linkProps}>
          <span className={style.linkText} data-text={link.title}>{link.title}</span>
        </a>
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
