import React,{useEffect} from 'react'

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Couny ${count}`
  }, [count])
}

export default useDocumentTitle
