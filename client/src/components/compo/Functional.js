import React from 'react'

const code = <div className="block">
    <pre><span className='pink'>import</span> React <span className='pink'>from</span><span className='yellow'> 'react'</span></pre>
    <pre><span className='pink'>export default</span><span className='blue'> function</span>
        <span className='yellow'> componentName()</span> {'{'}</pre>
    <pre><span className='pink'>    return </span><span className='yellow'> (</span></pre>
    <pre>        {'<div>'}</pre>
    <pre></pre>
    <pre>        {'</div>'}</pre>
    <pre>    <span className='yellow'>)</span></pre>
    <pre>}</pre>
</div>;

export default function Functional() {
    return (
        <div>
            <h2 className='blockTitle'>Functional Component</h2>
            {code}
        </div>
    )
}
