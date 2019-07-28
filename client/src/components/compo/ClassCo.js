import React from 'react';

const code = <div className="block">
    <pre><span className='pink'>import</span> React, {'{'} Component {'}'} <span className='pink'>from</span>
        <span className='yellow'> 'react'</span>
    </pre>
    <pre><span className='pink'>export default</span> <span className='blue'>class</span>
        <span className='turq'> componentName</span><span className='blue'> extends</span>
        <span className='turq'> Component</span> {'{'}</pre>
    <pre><span className='yellow'>    render() </span><span className='yellow'> {'{'}</span></pre>
    <pre>        <span className='pink'>return</span><span className='yellow'>  (</span></pre>
    <pre>        {'<div>'}</pre>
    <pre></pre>
    <pre>        {'</div>'}</pre>
    <pre>    <span className='yellow'>    )</span></pre>
    <pre>    <span className='yellow'>}</span></pre>
    <pre>}</pre>
</div>;

export default function Class() {
    return (
        <div>
            <h2 className='blockTitle'>Class Component</h2>
            {code}
        </div>
    )
}
