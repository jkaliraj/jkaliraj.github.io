import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";

import markdown from "../../utils/markdown";
import style from "./style.css";
import grid from "../../assets/css/grid.css";

import { rollText } from "../../utils/transformText";

class Text extends Component {
  componentDidMount() {
    if (this.refs.node) {
      let tmp = this.refs.node.querySelectorAll("a");

      for (let i = 0, _len = tmp.length; i < _len; i++) {
        if (tmp[i].querySelector("img")) continue;
        tmp[i].addEventListener("mouseover", this.handleMouseOver);
        if (
          tmp[i].href.startsWith("http://") ||
          tmp[i].href.startsWith("https://")
        ) {
          tmp[i].target = "_blank";
          tmp[i].rel = "noopener noreferrer";
        }
      }
    }
  }

  handleMouseOver(event) {
    rollText(event.target);
  }

  renderLink(key, url) {
    const iconUrl =
      key === "github"
        ? "https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
        : "https://img.icons8.com/material-outlined/64/FFFFFF/external-link.png";
    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", margin: "0 0.5em 0.5em 0" }}
      >
        <img
          src={iconUrl}
          alt={key}
          width="64"
          height="64"
          style={{ verticalAlign: "middle" }}
        />
      </a>
    );
  }

  render() {
    const { data } = this.props;

    this.path = data.path || this.props.path;

    if (data.content && data.content.replace(/\s/g, "").length > 0) {
      const links = data.config && data.config.links ? data.config.links : {};
      return (
        <section
          ref="node"
          className={classnames(grid.container, grid.shortContainer)}
        >
          <ReactMarkdown
            className={style.text}
            source={data.content}
            walker={markdown.handle.bind(this)}
          />
          {Object.keys(links).length > 0 && (
            <div style={{ marginTop: "1.25rem" }}>
              {Object.keys(links).map((key) =>
                this.renderLink(key, links[key])
              )}
            </div>
          )}
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Text;
