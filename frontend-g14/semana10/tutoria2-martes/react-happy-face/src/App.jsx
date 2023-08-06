import React, { useEffect, useState } from 'react'

const App = () => {
  const [emojiValue, setEmojiValue] = useState("");
  const [emojiList, setEmojiList] = useState([]);
  const [url, setUrl] = useState("https://emoji-api.com/emojis?access_key=0cd11e3139d7e5414e2d20bed3ed25915f1528c5");

  useEffect(() => {

    fetchEmojis();
  }, [])

  useEffect(() => {

    fetchEmojis();
  }, [url])

  const fetchEmojis = async () => {

    const data = await fetch(url);
    const json = await data.json();
    setEmojiList(json);
  }

  const handleChange = (event) => {

    const inputEmoji = event.target.input.value;
    setEmojiValue(inputEmoji);
    
    const emojisFiltered = emojiList.filter(emoji => {
      
      const filterByName = emoji.unicodeName.includes(emojiValue);
      const filterByGroup = emoji.group.includes(emojiValue);
      return filterByName || filterByGroup;
    })

    setEmojiList(emojisFiltered);
  }

  return (
    <div className="w-3/5 mx-auto my-4">

      <div className='w-full p-2 flex gap-2 rounded-lg bg-yellow-200'>

        <h3 className='w-1/3 text-lg text-bold'> <strong>Busca tu emoji:</strong> </h3>

        <form onSubmit={handleChange}
              className="w-2/3 flex flex-col"
              >
          <input
            id="input__emoji"
            type="text"
            className="w-2/3 p-2 border rounded-lg"
            />

          <span className='text-slate-400'>Presione enter para buscar...</span>
        </form>

      </div>

      <div className='w-full flex flex-wrap justify-between'>
        {emojiList.map(emoji => {

            return(
              <article
                className='w-36 h-36 p-2 m-2 bg-gradient-to-t from-sky-400 via-pink-200 to-purple-400 rounded-lg text-center text-lg'
                key={emoji.slug}>
                {emoji.character}
                <div className="flex flex-col gap-2 p-2">
                  <span className='text-xs text-left'>Name: <strong>{emoji.unicodeName}</strong></span>
                  <span className='text-xs text-left'>Group: <strong>{emoji.group}</strong></span>
                </div>
              </article>
            )
          })}
      </div>

    </div>
  )
}

export default App
