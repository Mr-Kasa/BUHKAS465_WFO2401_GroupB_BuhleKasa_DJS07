import React from "react"
import memesData from "../memes-data"


export default function Form() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {

            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            setMemeImage(memesArray[randomNumber].url)
            
        }
        
        return (
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="memeDiv">
                <img src={memeImage} className="meme--image" />
                </div>
            </main>
        )
    }
