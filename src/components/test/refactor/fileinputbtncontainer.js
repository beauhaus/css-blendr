import React, {  useEffect, useContext, useRef } from 'react'
import { shortRand,db } from './hooks/app-utils'
import { AppContext } from '../../../pages/page-b'
import UsrImgBtn from './usrimgbtn'

const FileInputBtnContainer = () => {
    const {
        setUsrImgArray,
        usrImageArray,
        newImageURL,
        setNewImageURL,
        selectedFileName,
        setSelectedFileName
    } = useContext(AppContext);

    //get all usrImages from db
    useEffect(() => {
        console.log("get all")
        const getStoredImageFiles = async () => {
            let usrImages = await db.usrImages.toArray();
            if (usrImages) {
                setUsrImgArray(usrImages)
            }
        }
        getStoredImageFiles();
        // line below ought to be this, but dependency may interfere with uploads (??)
        // }, [db.usrImages])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) //used to be []

    /***************************************************/
    const fileInput = useRef(null)

    const fileSelectedHandler = e => {
        if (e.target.files[0]) {            
            setSelectedFileName(e.target.files[0].name)
            let reader = new FileReader();
            reader.onload = (e) => {
                setNewImageURL(reader.result);
            }
            reader.readAsDataURL(e.target.files[0])
        }
        // setSelectedFileName('')
    }

    useEffect(() => {
        const fileUploadHandler = (url) => {
            // event.preventDefault(); //TODO: delete?
            console.log("YES!");

            if (url !== '') {
                let imageFile = {
                    id: shortRand(),
                    name: selectedFileName,
                    url,
                    tag: "usr-image"
                }
                console.log("ImgFile: ", imageFile)

                db.usrImages.add(imageFile).then(async () => {
                    //retrieve all usrImages inside the db
                    let allUsrImages = await db.usrImages.toArray();
                    // set the usrImages
                    setUsrImgArray(allUsrImages);
                });
            }
        }
        fileUploadHandler(newImageURL)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newImageURL])

    return (
        <form className="img-file-form" >
            <input
                type="file"
                required
                onChange={fileSelectedHandler}
                ref={fileInput}
            />
            <UsrImgBtn fileInput={fileInput}  />
        </form>
    )
}

export default FileInputBtnContainer;
