import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";

function App() {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [Essentials, Paragraph, Bold, Italic, Heading],
          toolbar: ["heading", "|", "bold", "italic", "|", "undo", "redo"],
        }}
        data="<p>Hello from CKEditor 5!</p>"
      />
    </div>
  );
}

export default App;
