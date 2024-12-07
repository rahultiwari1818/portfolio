import React from 'react'

const Academic = React.forwardRef(({aceRef})=>{
  return(
    <section className='p-5 outline outline-blue-400' ref={aceRef}>
        <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>Academic</h2>

    </section>
  )
});

export default Academic;