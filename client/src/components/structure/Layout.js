import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import LoadingOverlay from '../presentation/LoadingOverlay'
import Main from './Main'
import Header from './header/Header'
import Footer from './Footer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) =>
  props.domainData.isLoaded
    ? (
      <div id='layout'>
        <Header />
        <Main domainData={props.domainData} />
        <Footer />
      </div>
    ) : (
      <LoadingOverlay />
    )

Layout.propTypes = propTypes

export default Layout
