import { UploadButton } from "react-uploader";
import { Button } from "reactstrap";
import { Uploader } from "uploader";


const uploader = Uploader({
    apiKey: "public_FW25bg4GdxacoZp8UgRusZsbsMnu",

});

export const Upload = ({onUploadComplete}) => (
    <UploadButton 
    uploader={uploader}
    options={{multi:true}}
    onComplete={(files) => {
       files.length !== 0 && onUploadComplete(files[0].fileUrl)
    }}
    >
     {({onClick}) =>   <i class="fa fa-upload" aria-hidden="true" onClick={onClick}></i> }

    </UploadButton>
)