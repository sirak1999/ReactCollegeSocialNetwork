import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faEnvelope,faLock,faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faUser,faEnvelope,faLock,faEye,faEyeSlash)

const usePersonalToggle=()=>{
    const[visible,setvisible]=useState(false)
    const Icon=(<FontAwesomeIcon icon={visible ? "eye-slash":"eye"}
    onClick={()=>setvisible(visible=>!visible)}
    />
    );
    const InputType=visible?"text":"password"

    return [InputType,Icon]
}
export default usePersonalToggle;