'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const ScriptLoader = () => {
  const pathname = usePathname()
  const loadedRef = useRef(false)
  const prevPathRef = useRef(pathname)

  useEffect(() => {
    // Check if navigating to home page
    if (pathname === '/' && prevPathRef.current !== '/') {
      window.location.reload()
    }
    prevPathRef.current = pathname

    if (loadedRef.current) return

    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    const loadScripts = async () => {
      try {
        await loadScript(
          'https://static.accesstrade.vn/coupon/v2/js/jquery-1.11.1.min.js',
        )
        await loadScript(
          'https://static.accesstrade.vn/coupon/v2/js/popper.min.js',
        )
        await loadScript(
          'https://static.accesstrade.vn/coupon/v2/js/bootstrap.min.js',
        )

        const mainScript = document.createElement('script')
        mainScript.id = 'atScript6626'
        mainScript.src =
          'https://static.accesstrade.vn/coupon/v2/js/main_at_v3.js'
        mainScript.setAttribute('data-sub1', '')
        mainScript.setAttribute('data-sub2', '')
        mainScript.setAttribute('data-sub3', '')
        mainScript.setAttribute('data-sub4', '')
        mainScript.setAttribute('data-sub5', '')
        mainScript.setAttribute('data-utm-source', '')
        mainScript.setAttribute('data-utm-medium', '')
        mainScript.setAttribute('data-utm-campaign', '')
        mainScript.setAttribute('data-utm-content', '')
        mainScript.setAttribute('data-style-color', '#FF6500')
        mainScript.setAttribute('data-limit', '12')
        mainScript.setAttribute('data-row', '3')
        mainScript.setAttribute(
          'data-filters',
          '{"merchant":"4742147753565840242,4348611690224153209,5674438638315131740,","category":"E-COMMERCE,","campaign":"4751584435713464237,4348614231480407268,5674442441319636962,"}',
        )
        mainScript.setAttribute('data-accesskey', '6491842306737350432')
        document.body.appendChild(mainScript)
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()
    loadedRef.current = true

    // Cleanup function
    return () => {
      document
        .querySelectorAll(
          'script[src^="https://static.accesstrade.vn/coupon/v2/js/"]',
        )
        .forEach(script => script.remove())
      document.getElementById('atScript6626')?.remove()
    }
  }, [pathname])

  return null
}

export default ScriptLoader
