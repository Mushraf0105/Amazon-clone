import React from 'react'
import './footer.css'
import footerLink from '../../footerLink.json'
import { Links } from 'react-router-dom';

const Footer = () => {
  return (

    <div className="footer">
      <div className="footerContent">

        {footerLink.map((section, index) => {
          const words = section.title.split(" ");
          const lastWord = words[words.length - 1];
          const restWords = words.slice(0, -1).join(" ");

          return (
            <div key={index} className="footerCont1">

              <div className="contentFooterTitle">
                {section.breakLastWord ? (
                  <>
                    <div>{restWords}</div>
                    <div>{lastWord}</div>
                  </>
                ) : (
                  section.title
                )}
              </div>

              <div className="contentFooterSubTitleDiv">
                {section.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="contentFooterSubTitleCont"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Footer
