import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-section'>
            <div className='blogs-inner'>
                <div>
                    <h2>1. What is Context API?</h2>
                    <p>The React Context API is a way for a React app to effectively produce global variables. This is the alternative to "prop drilling". "Prop drilling" means moving props from grandparent to child to parent, and so on. Context API makes it more easier.</p>
                    <p>Usually Context API returns a consumer and a provider. Provider is a component that provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div>
                    <h2>2. What are semantic tags?</h2>
                    <p>Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.</p>
                    <p>For example, header,  footer  ,  article   are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.</p>
                    <p>New HTML5 semantic tags are:
                        <ul>
                            <li>header</li>
                            <li>nav</li>
                            <li>article</li>
                            <li>section</li>
                            <li>aside</li>
                            <li>footer</li>
                        </ul>
                    </p>
                    <p>Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.</p>
                </div>
                <div>
                    <h2>3. What's the difference between Inline, Block & Inline block elements?
                    </h2>
                    <p><h4>Inline:</h4>
                        <ul>
                            <li>It never starts a new line for the HTML.</li>
                            <li>Inline elements can break among the lines.</li>
                            <li>The width is defined only till the tags of inline extends.</li>
                            <li>Inline elements create small structures and support mostly the files with small structures.</li>
                            <li>Inline elements have only data and other inline elements. It does not have any block elements.</li>
                            <li>Inline elements are stored inside block elements.</li>
                        </ul>
                    </p>
                    <p><h4>Block:</h4>
                        <ul>
                            <li>It always starts a new line for the HTML.</li>
                            <li>Block elements cannot break among the lines.</li>
                            <li>The width is more than inline and is extended till the parent element extends.</li>
                            <li>Block elements create large structures and support mostly the files with large structures.</li>
                            <li>Block elements contain block elements and other inline elements.</li>
                            <li>Block elements use all the space in the parent or container.</li>
                        </ul>
                    </p>
                    <p><h4>Inline-Block:</h4>
                        It's formatted just like the inline element, where it doesn't start on a new line. But, it can be set width and height values.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;