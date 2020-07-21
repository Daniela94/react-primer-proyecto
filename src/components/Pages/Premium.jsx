import React from 'react'
import withLogin from '../HOC/withLogin'

const Premium = (props) => (
  <div>
    <h1>
      {
        props.loggued
        ? 'Eres usuario premium'
        : 'Necesitas registrarte'
      }
    </h1>
  </div>
)

export default withLogin(Premium)