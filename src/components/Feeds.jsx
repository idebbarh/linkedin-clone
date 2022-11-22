import { Avatar } from '@mui/material'
import './Feeds.css'
import FeedsOption from './FeedsOption'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DvrIcon from '@mui/icons-material/Dvr';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import React,{ useEffect, useState } from 'react';
import { collection, addDoc,onSnapshot,serverTimestamp,orderBy,query} from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import FlipMove from 'react-flip-move';
function Feeds() {
    const [posts,setPosts] = useState([]);
    const [postInput,setPostInput] = useState('');
    useEffect(() => {
        const q = query(collection(db,'postes'),orderBy("timestamp",'desc'));
        onSnapshot(q,querySnapshot=>{
            setPosts(querySnapshot.docs.map(doc=>{
                return {...doc.data(),id:doc.id}
            }));
        })
    },[]);
    const addNewPost = async (event)=>{
        event.preventDefault();
        if(postInput.length > 0){
            try{
                const docRef = await addDoc(collection(db,'postes'),{
                    name:'leo messi',
                    description:'argentine football player',
                    content:postInput,
                    photoUrl:'',
                    timestamp:serverTimestamp(),
                })
                console.log("Document written with ID: ", docRef.id);
            }catch(e){
                console.log("Error adding document: ",e)
            }
        }
        setPostInput('')
    }

    const postsElem = posts.map((post)=>{ 
        return <Post key={post.id} name={post.name} description={post.description} content={post.content} />
    })
  return (
    <div className='feeds'>
        <div className="feeds--create-post">
            <div className="feeds--top">
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg' sx={{ width: 45, height: 45 }}>I</Avatar>
                <div className="feeds--post-input-container">
                    <form onSubmit={(event)=>addNewPost(event)}>
                        <input type="text" className='feeds--post-input' placeholder='Start a post' value={postInput} onChange={(event=>setPostInput(event.target.value))}/>
                    </form>
                </div>
            </div>
            <div className="feeds--bottom">
                <FeedsOption title='photo' Icon={InsertPhotoIcon} curColor='#378fe9'/>
                <FeedsOption title='video' Icon={VideoCameraBackIcon} curColor='#5f9b41'/>
                <FeedsOption title='audio event' Icon={DvrIcon} curColor='#c37d16'/>
                <FeedsOption title='write article' Icon={ArticleIcon} curColor='#e16745'/>
            </div>
        </div>
        <div className="feeds--postes">
            <FlipMove>
                {postsElem}
            </FlipMove>
        </div>
    </div>
  )
}

export default Feeds