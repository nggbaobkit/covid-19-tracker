import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import styles from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.content}>
            <Fade left>
              <h4>
                Copyright <i className='fa fa-copyright' /> 2020. All rights
                reserved.
              </h4>
            </Fade>
            <Fade right>
              <div>
                <span>
                  Made with{' '}
                  <span>
                    <i className='fa fa-heart' style={{ color: 'red' }} />
                  </span>{' '}
                  by{' '}
                  <a
                    href='https://github.com/nggbaobkit/covid-19-tracker'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                  >
                    nggbao <i className='fa fa-external-link' />
                  </a>
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
