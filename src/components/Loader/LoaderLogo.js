import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        className="raw_logo"
        viewBox="0 0 900 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Welcome animation for ${greeting.title}`}
      >
        <defs>
          <linearGradient id="nameGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={theme.body} />
            <stop offset="100%" stopColor={theme.text} />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="loader-name loader-name-stroke"
          stroke={theme.body}
        >
          {greeting.title}
        </text>

        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="loader-name loader-name-fill"
          fill="url(#nameGradient)"
        >
          {greeting.title}
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
