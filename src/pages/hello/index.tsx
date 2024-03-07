import { useEffect, useState } from 'react';

const Hello = () => {
  const [name, setName] = useState<{name: String}>({name: ''});
  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(res => setName(res))
        .catch((err) => console.log(err))
  }, [])
  return (
    <div className="w-screen h-screen flex items-center justify-center text-2xl font-semibold">
        <div className="flex flex-col gap-4 items-center">
            <p className="">{name && name.name}</p>
        </div>
    </div>
  )
}

export default Hello
