import * as React from 'react'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { FaWeibo } from '@react-icons/all-files/fa/FaWeibo'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'

import { useDarkMode } from 'lib/use-dark-mode'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Montserrat:700');
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400');
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          margin-top: 30px !important;
          padding: clamp(17px, 5%, 40px) clamp(17px, 7%, 50px) !important;
          max-width: none !important;
          border-radius: 6px !important;
          box-shadow: 0 5px 25px rgba(34, 60, 47, 0.25) !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview,
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview *{
          box-sizing: border-box !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-heading {
          width: 100% !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-heading h5{
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field {
          margin-top: 20px !important;
          width: 100% !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input {
          width: 100% !important;
          height: 40px !important;
          border-radius: 6px !important;
          border: 2px solid #e9e8e8 !important;
          background-color: #fff !important;
          outline: none !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input {
          color: #000000 !important;
          font-family: "Montserrat" !important;
          font-size: 14px !important;
          font-weight: 400 !important;
          line-height: 20px !important;
          text-align: center !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input::placeholder {
          color: #000000 !important;
          opacity: 1 !important;
        }

        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input:-ms-input-placeholder {
          color: #000000 !important;
        }

        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-input-field input::-ms-input-placeholder {
          color: #000000 !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-submit-button {
          margin-top: 10px !important;
          width: 100% !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-submit-button button {
          width: 100% !important;
          height: 40px !important;
          border: 0 !important;
          border-radius: 6px !important;
          line-height: 0px !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .form-preview .preview-submit-button button:hover {
          cursor: pointer !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .powered-by-line {
          color: #231f20 !important;
          font-family: "Montserrat" !important;
          font-size: 13px !important;
          font-weight: 400 !important;
          line-height: 25px !important;
          text-align: center !important;
          text-decoration: none !important;
          display: flex !important;
          width: 100% !important;
          justify-content: center !important;
          align-items: center !important;
          margin-top: 10px !important;
        }
        .followit--follow-form-container[attr-a][attr-b][attr-c][attr-d][attr-e][attr-f] .powered-by-line img {
          margin-left: 10px !important;
          height: 1.13em !important;
          max-height: 1.13em !important;
        }
        </style>
      <div class="followit--follow-form-container" attr-a attr-b attr-c attr-d attr-e attr-f>
      <form data-v-2bdb5506="" action="https://api.follow.it/subscription-form/bmRjdngvNWNyZUw2STZWSm1sQU5XdGFjOTlaMFVvM3RMZ2Y1STVnRW9Ed0JCRGxmd2dDZDZtT3BNbEYxTHp4aTVFYWpHUHpneEtwZCtxQTAzTnY5aGR5ZUgwSVgwZGtvMDRsM2RzWDN0VTZOVnhZS1FHOFgyWklVQm5aNXFVdHV8eUFnaUoxRjRpTmZBY2xjcU5uVTk1K2ZBWmNWUmVOMWFUSjM5T0lDN1BaWT0=/8" method="post">
      <div data-v-2bdb5506="" class="form-preview" style="background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-color: rgb(204, 204, 204); position: relative;"><div data-v-2bdb5506="" class="preview-heading">
        <h5 data-v-2bdb5506="" style="text-transform: none !important; font-family: Montserrat; font-weight: bold; color: rgb(0, 0, 0); font-size: 16px; text-align: center;">
                            Get new posts by email:
        </h5>
      </div> 
      <div data-v-2bdb5506="" class="preview-input-field"><input data-v-2bdb5506="" type="email" name="email" required="required" placeholder="Enter your email" spellcheck="false" style="text-transform: none !important; font-family: Montserrat; font-weight: normal; color: rgb(0, 0, 0); font-size: 14px; text-align: center; background-color: rgb(255, 255, 255);"></div> 
      <div data-v-2bdb5506="" class="preview-submit-button">
        <button data-v-2bdb5506="" type="submit" style="text-transform: none !important; font-family: Montserrat; font-weight: bold; color: rgb(255, 255, 255); font-size: 16px; text-align: center; background-color: rgb(0, 0, 0);">
                          Subscribe
        </button>
      </div>
      </div>
      </form>
      <a href="https://follow.it" class="powered-by-line">Powered by <img src="https://follow.it/static/img/colored-logo.svg" alt="follow.it" height="17px"/></a></div>

      <div className={styles.copyright}>Copyright 2022 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}
        
        {config.weibo && (
          <a
            className={styles.weibo}
            href={`https://weibo.com/u/${config.weibo}`}
            title={`Weibo @${config.weibo}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWeibo />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
