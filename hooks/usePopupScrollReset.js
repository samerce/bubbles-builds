import { useEffect } from "react"
import usePopup from "../model/usePopup"

export default function usePopupScrollReset(scrollerId, popupId) {
  const {popupId: activePopupId} = usePopup()

  useEffect(() => {
    if (popupId === activePopupId) {
      document.getElementById(scrollerId).scrollTop = 0
    }
  }, [activePopupId])
}