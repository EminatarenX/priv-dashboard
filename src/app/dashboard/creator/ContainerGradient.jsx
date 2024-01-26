import React from 'react'

export default function ContainerGradient({clase, children}) {
  return (
    <article className={`bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl ${clase}`}>
        {children}
    </article>
  )
}
