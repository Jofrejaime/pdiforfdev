import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'
import React from 'react'

function formatDate(date) {
  return format(parseISO(date), "dd 'de' MMM 'de' yyyy",{
    locale: pt,
  }) 

}

export default formatDate