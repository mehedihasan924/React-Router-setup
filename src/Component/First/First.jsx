import React, { useState } from "react";
import { Editor } from "primereact/editor";

const First = () => {
    const [text, setText] = useState('');
    return (
        <div>
             <h1> This is Home page</h1>
             <h1> My Name  is mehedi hasan</h1>
             <h1> This is routing Project</h1>
             <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
        </div>
    );
};

export default First;
