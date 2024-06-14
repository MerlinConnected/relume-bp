'use client'

import React, { createContext, useContext, useState } from 'react'
import PropType from 'prop-types'

const AppContext = createContext()

function AppWrapper({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>{children}</AppContext.Provider>
}

AppWrapper.propTypes = {
    children: PropType.node.isRequired,
}

function useAppContext() {
    return useContext(AppContext)
}

export { AppWrapper, useAppContext }
