import React from 'react'

const Academic = React.forwardRef(({aceRef})=>{
  return(
    <section className='p-5 outline outline-blue-400' ref={aceRef}>

    </section>
  )
});

export default Academic;